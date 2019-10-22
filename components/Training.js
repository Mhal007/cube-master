import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Grid, Menu } from 'semantic-ui-react';

import TrainingMain from './TrainingMain.js';
import AlgSettings from './AlgSettings.js';
import Averages from './Averages.js';

import { Algorithms } from '../collections/algorithms.js';
import { Results } from '../collections/results.js';

import { getRandomScramble } from '../lib/global-helpers.js';

class Training extends Component {
  constructor(props) {
    super(props);

    this.state = {
      algorithms: [],
      blocked: {
        control: false,
        delete: false,
        shift: false,
        space: false
      },
      currentAlgorithm: {
        category: '',
        image: '',
        ref: '',
        scramble: '',
        solution: '',
        type: ''
      },
      currentAlgorithmAvg: 0,
      currentAlgorithmId: 0,
      currentCategory: 'OLL',
      currentCategoryAvg: 0,
      isVisibleSolution: false,
      results: [],
      settingsOpened: true,
      timerCurrentValue: 0,
      timerStartValue: 0,
      timerStatus: 'resetted'
    };
  }

  componentDidMount() {
    Meteor.subscribe('algorithms', {
      onError: () => {
        console.error('Error occured:', arguments);
      },
      onReady: () => {
        const algorithms = Algorithms.find(state => ({
          category: state.currentCategory
        })).fetch();
        this.setState({ algorithms });

        Meteor.subscribe('results', {
          onError: () => {
            console.error('Error occured:', arguments);
          },
          onReady: () => {
            const results = Results.find(state => ({
              category: state.currentCategory,
              real: { $in: this.props.debugging ? [null, false] : [true] }
            })).fetch();
            this.setState({ results });

            this.onChangeAlgorithm({ algorithms, results });
            this.props.onToggleLoader(false);
          }
        });
      }
    });

    document.body.addEventListener('keydown', this.onKeyDown);
    document.body.addEventListener('keyup', this.onKeyUp);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.debugging !== newProps.debugging) {
      const results = Results.find(state => ({
        category: state.currentCategory,
        real: { $in: newProps.debugging ? [null, false] : [true] }
      })).fetch();
      this.setState({ results });
      this.countAverages({ results });
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.onKeyDown);
    document.body.removeEventListener('keyup', this.onKeyUp);
  }

  countAverages({
    currentCategory,
    results = Results.find({
      category: currentCategory || this.state.currentCategory,
      real: { $in: this.props.debugging ? [null, false] : [true] }
    }).fetch() || [],
    algRef = 1
  }) {
    const currentAlg = results.filter(alg => alg.ref === algRef);
    const currentCat = results;

    let sumAlg = 0;
    let sumCat = 0;

    currentAlg.forEach(alg => (sumAlg += alg.time));
    currentCat.forEach(alg => (sumCat += alg.time));

    this.setState({
      results,
      currentAlgorithmAvg: sumAlg / currentAlg.length || 0,
      currentCategoryAvg: sumCat / currentCat.length || 0
    });
  }

  onChangeAlgorithm(
    { algorithms, currentAlgorithmId, currentCategory, results } = this.state
  ) {
    this.onReset();

    let newAlgorithm = { category: currentCategory };

    if (['OLL', 'PLL'].indexOf(currentCategory) > -1) {
      const active = algorithms.filter(alg => alg.active);

      let newId = Math.floor(Math.random() * active.length);
      while (newId === currentAlgorithmId) {
        newId = Math.floor(Math.random() * active.length);
      }

      newAlgorithm = Object.assign(newAlgorithm, active[newId]);
    } else if (currentCategory === '3x3x3') {
      const scramble = getRandomScramble(12);
      newAlgorithm = Object.assign(newAlgorithm, { scramble });
    }

    this.setState({
      currentAlgorithm: newAlgorithm,
      currentAlgorithmId: newAlgorithm._id
    });
    this.countAverages({ algRef: newAlgorithm.ref, currentCategory, results });
  }

  onChangeCategory = category => {
    this.props.onToggleLoader(true);

    let algsCategory = category;
    if (category === 'OLL-attack') algsCategory = 'OLL';
    if (category === 'PLL-attack') algsCategory = 'PLL';

    const results = Results.find({ category }).fetch();
    const algorithms = Algorithms.find({ category: algsCategory }).fetch();

    this.setState({ algorithms, currentCategory: category, results });
    this.onChangeAlgorithm({ algorithms, currentCategory: category, results });

    this.props.onToggleLoader(false);
  };

  onActiveToggle = algorithm => {
    // TODO rework server calls
    Meteor.call('algorithms.toggleActive', algorithm._id, !algorithm.active);
    const currentAlgs = this.state.algorithms;

    currentAlgs.map(alg => {
      if (alg._id === algorithm._id) {
        alg.active = !alg.active;
      }
    });
    this.setState(state => ({ algorithms: currentAlgs }));
  };

  onActivateAll = () => {
    Meteor.call('algorithms.activateAll');
    const currentAlgs = this.state.algorithms;
    currentAlgs.map(alg => {
      alg.active = true;
    });
    this.setState({ algorithms: currentAlgs });
  };

  onDeactivateAll = () => {
    Meteor.call('algorithms.deactivateAll');
    const currentAlgs = this.state.algorithms;
    currentAlgs.map(alg => {
      alg.active = false;
    });
    this.setState({ algorithms: currentAlgs });
  };

  onKeyDown = event => {
    const blocked = this.state.blocked;

    if ((event.key === 'Enter' || event.key === ' ') && !blocked.space) {
      event.preventDefault();
      this.onGoToNextStatus('down');
      this.setState({ blocked: { ...blocked, space: true } });
    } else if (event.key === 'r') {
      event.preventDefault();
      this.onChangeAlgorithm();
    } else if (event.key === 'Shift' && !blocked.shift) {
      event.preventDefault();
      this.setState({
        blocked: { ...blocked, shift: true },
        isVisibleSolution: true
      });
    } else if (event.key === 'Control' && !blocked.control) {
      event.preventDefault();
      this.setState({ blocked: { ...blocked, control: true } });
    } else if (
      (event.key === 'Backspace' ||
        event.key === 'Delete' ||
        event.key === 'Escape') &&
      !blocked.delete
    ) {
      event.preventDefault();
      this.setState({ blocked: { ...blocked, delete: true } });
    }
  };

  onKeyUp = event => {
    const { blocked, isVisibleSolution } = this.state;

    if (event.key === 'Enter' || event.key === ' ') {
      this.onGoToNextStatus('up');
      this.setState({ blocked: { ...blocked, space: false } });
    } else if (event.key === 'Shift') {
      this.setState({
        blocked: { ...blocked, shift: false },
        isVisibleSolution: false
      });
    } else if (event.key === 'Control') {
      this.setState({
        blocked: { ...blocked, control: false },
        isVisibleSolution: !isVisibleSolution
      });
    } else if (
      event.key === 'Backspace' ||
      event.key === 'Delete' ||
      event.key === 'Escape'
    ) {
      this.onChangeAlgorithm();
      this.setState({ blocked: { ...blocked, delete: false } });
    }
  };

  onGoToNextStatus = upOrDown => {
    const { timerStatus, blocked } = this.state;

    if (timerStatus === 'resetted' && upOrDown === 'down' && !blocked.space) {
      this.setState({ timerStatus: 'pre-inspection' });
    } else if (timerStatus === 'pre-inspection' && upOrDown === 'up') {
      this.setState({
        timerStatus: 'timer-on',
        timerStartValue: moment().valueOf()
      });
      this.timer = setInterval(this.updateTimerTime, 1);
    } else if (
      timerStatus === 'timer-on' &&
      upOrDown === 'down' &&
      !blocked.space
    ) {
      clearInterval(this.timer);
      this.setState({ timerStatus: 'timer-off' });
    } else if (
      timerStatus === 'timer-off' &&
      upOrDown === 'down' &&
      !blocked.space
    ) {
      /* Save time */
      Meteor.call(
        'results.insert',
        Object.assign(this.state.currentAlgorithm, {
          time: this.state.timerCurrentValue,
          real: !this.props.debugging
        })
      );
      this.onChangeAlgorithm();
      this.setState({ timerStatus: 'resetted', timerCurrentValue: 0 });
    }
  };

  onReset = () => {
    clearInterval(this.timer);
    this.setState({ timerStatus: 'resetted', timerCurrentValue: 0 });
  };

  updateTimerTime = () => {
    this.setState(state => ({
      timerCurrentValue: moment().valueOf() - state.timerStartValue
    }));
  };

  render() {
    const {
      state: {
        algorithms,
        currentAlgorithm,
        currentAlgorithmAvg,
        currentCategory,
        currentCategoryAvg,
        isVisibleSolution,
        timerCurrentValue
      },
      onActivateAll,
      onActiveToggle,
      onChangeAlgorithm,
      onChangeCategory,
      onDeactivateAll
    } = this;

    const settingsDisabled = ['OLL', 'PLL'].indexOf(currentCategory) === -1;

    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name="OLL"
                active={currentCategory === 'OLL'}
                onClick={() => onChangeCategory('OLL')}
              />
              <Menu.Item
                name="PLL"
                active={currentCategory === 'PLL'}
                onClick={() => onChangeCategory('PLL')}
              />
              <Menu.Item
                name="3x3x3"
                active={currentCategory === '3x3x3'}
                onClick={() => onChangeCategory('3x3x3')}
              />
              <Menu.Item
                name="OLL Attack"
                active={currentCategory === 'OLL-attack'}
                onClick={() => onChangeCategory('OLL-attack')}
              />
              <Menu.Item
                name="PLL Attack"
                active={currentCategory === 'PLL-attack'}
                onClick={() => onChangeCategory('PLL-attack')}
              />
            </Menu>
          </Grid.Column>
          <Grid.Column width={8} textAlign="center">
            <TrainingMain
              currentAlgorithm={currentAlgorithm}
              isVisibleSolution={isVisibleSolution}
              onChangeAlgorithm={onChangeAlgorithm}
              timerCurrentValue={timerCurrentValue}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Averages
              currentAlgorithmAvg={currentAlgorithmAvg}
              currentCategory={currentCategory}
              currentCategoryAvg={currentCategoryAvg}
            />
          </Grid.Column>
        </Grid>

        {this.state.settingsOpened && (
          <AlgSettings
            algorithms={algorithms}
            disabled={settingsDisabled}
            onActivateAll={onActivateAll}
            onActiveToggle={onActiveToggle}
            onDeactivateAll={onDeactivateAll}
          />
        )}
      </div>
    );
  }
}

Training.propTypes = {
  onToggleLoader: PropTypes.func.isRequired,
  debugging: PropTypes.bool.isRequired
};

export default Training;
