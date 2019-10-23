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

const getRandomEntry = (array, excludeId) => {
  const index = Math.floor(Math.random() * array.length);
  const entry = array[index];

  if (array.length !== 1 && excludeId && entry._id === excludeId) {
    return getRandomEntry(array, excludeId);
  }

  return entry;
};

const categories = [
  {
    label: 'OLL',
    value: 'OLL',
    randomizableAlgorithm: true
  },
  {
    label: 'PLL',
    value: 'PLL',
    randomizableAlgorithm: true
  },
  {
    label: '3x3x3',
    value: '3x3x3',
    randomizableScramble: true
  },
  {
    label: 'OLL Attack',
    value: 'OLL-attack',
    algorithmsCategory: 'OLL',
    settingsDisabled: true
  },
  {
    label: 'PLL Attack',
    value: 'PLL-attack',
    algorithmsCategory: 'PLL',
    settingsDisabled: true
  }
];

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
        scramble: '',
        solution: '',
        type: ''
      },
      currentAlgorithmAvg: 0,
      currentAlgorithmId: 0,
      currentCategory: categories[0],
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
        Meteor.subscribe('results', {
          onError: () => {
            console.error('Error occured:', arguments);
          },
          onReady: () => {
            this.setState(
              state => {
                const algorithms = Algorithms.find({
                  category: state.currentCategory.value
                }).fetch();

                const results = Results.find({
                  category: state.currentCategory.value,
                  real: { $in: this.props.debugging ? [null, false] : [true] }
                }).fetch();

                return { algorithms, results };
              },
              () => {
                this.onChangeAlgorithm();
                this.props.onToggleLoader(false);
              }
            );
          }
        });
      }
    });

    document.body.addEventListener('keydown', this.onKeyDown);
    document.body.addEventListener('keyup', this.onKeyUp);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.debugging !== newProps.debugging) {
      this.setState(state => {
        const results = Results.find({
          category: state.currentCategory.value,
          real: { $in: newProps.debugging ? [null, false] : [true] }
        }).fetch();

        return { results };
      }, this.countAverages);
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.onKeyDown);
    document.body.removeEventListener('keyup', this.onKeyUp);
  }

  countAverages = () => {
    const { results, currentAlgorithmId } = this.state;
    const currentAlg = results.filter(
      result => result.algorithmId === currentAlgorithmId
    );
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
  };

  onChangeAlgorithm = () => {
    const { algorithms, currentAlgorithmId, currentCategory } = this.state;
    this.onReset();

    let newAlgorithm;
    if (currentCategory.randomizableAlgorithm) {
      const activeAlgorithms = algorithms.filter(
        algorithm => !!algorithm.active
      );

      if (!activeAlgorithms.length) {
        return;
      }

      newAlgorithm = getRandomEntry(activeAlgorithms, currentAlgorithmId);
    } else if (currentCategory.randomizableScramble) {
      const scramble = getRandomScramble(12);
      newAlgorithm = { category: currentCategory.value, scramble };
    }

    this.setState(
      {
        currentAlgorithm: newAlgorithm,
        currentAlgorithmId: newAlgorithm && newAlgorithm._id // alg may be undefined, e.g. for {OLL,PLL}-Attack
      },
      this.countAverages
    );
  };

  onChangeCategory = category => {
    const { value, algorithmsCategory } = category;
    this.props.onToggleLoader(true);

    const results = Results.find({ category: value }).fetch();
    const algorithms = Algorithms.find({
      category: algorithmsCategory || value
    }).fetch();

    this.setState({ algorithms, currentCategory: category, results }, () => {
      this.onChangeAlgorithm();
      this.props.onToggleLoader(false);
    });
  };

  onToggleActive = algorithm => {
    // TODO rework server calls
    Meteor.call('algorithms.toggleActive', algorithm._id, !algorithm.active);

    this.setState(state => ({
      algorithms: state.algorithms.map(alg =>
        alg._id === algorithm._id
          ? {
              ...alg,
              active: !alg.active
            }
          : alg
      )
    }));
  };

  onActivateAll = () => {
    const { currentCategory } = this.state;
    Meteor.call('algorithms.activateAll', currentCategory.value);

    this.setState(state => ({
      algorithms: state.algorithms.map(alg => ({
        ...alg,
        active: true
      }))
    }));
  };

  onDeactivateAll = () => {
    Meteor.call('algorithms.deactivateAll');

    this.setState(state => ({
      algorithms: state.algorithms.map(alg => ({
        ...alg,
        active: false
      }))
    }));
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
    const {
      blocked,
      currentAlgorithm,
      currentCategory,
      timerCurrentValue,
      timerStatus
    } = this.state;

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
      const result = {
        ...(currentAlgorithm && {
          algorithmId: currentAlgorithm._id,
          scramble: currentAlgorithm.scramble
        }),
        category: currentCategory.value,
        real: !this.props.debugging,
        time: timerCurrentValue
      };

      Meteor.call('results.insert', result);
      this.setState(
        ({ results }) => ({
          timerStatus: 'resetted',
          timerCurrentValue: 0,
          results: results.concat(result)
        }),
        this.onChangeAlgorithm
      );
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
      onToggleActive,
      onChangeAlgorithm,
      onChangeCategory,
      onDeactivateAll
    } = this;

    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              {categories.map(category => (
                <Menu.Item
                  key={category.value}
                  name={category.label}
                  active={currentCategory.value === category.value}
                  onClick={() => onChangeCategory(category)}
                />
              ))}
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
            currentCategory={currentCategory}
            onActivateAll={onActivateAll}
            onToggleActive={onToggleActive}
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
