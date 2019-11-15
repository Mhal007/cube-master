import React, { Component } from 'react';
import moment from 'moment';
import { Grid, Menu } from 'semantic-ui-react';
import { SemanticToastContainer } from 'react-semantic-toasts';

import AlgSettings from '../algSettings';
import Averages from '../averages';
import TipsAndTricks from '../tipsAndTricks';
import TrainingMain from '../trainingMain';

import { getRandomEntry, getRandomScramble } from '../../../../lib/utils';
import { toastNoActiveAlgorithms } from '../../lib/toasts';
import {
  algorithmWithResults,
  categoryWithResults
} from '../../../../lib/types';

type Props = {
  algorithms: algorithmWithResults[];
  categories: categoryWithResults[];
};

type State = {
  blocked: {
    control: boolean;
    delete: boolean;
    shift: boolean;
    space: boolean;
  };
  currentAlgorithm?: algorithmWithResults;
  currentCategory: categoryWithResults;
  isVisibleSolution: boolean;
  settingsOpened: boolean;
  timerCurrentValue: number;
  timerStartValue: number;
  timerStatus: 'timer-off' | 'timer-on' | 'resetted' | 'pre-inspection';
};

class Training extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      blocked: {
        control: false,
        delete: false,
        shift: false,
        space: false
      },
      currentAlgorithm: undefined,
      currentCategory: this.props.categories[0],
      isVisibleSolution: false,
      settingsOpened: true,
      timerCurrentValue: 0,
      timerStartValue: 0,
      timerStatus: 'resetted'
    };
  }

  componentDidMount(): void {
    this.onChangeAlgorithm();

    document.body.addEventListener('keydown', this.onKeyDown);
    document.body.addEventListener('keypress', this.onKeyPress);
    document.body.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount(): void {
    document.body.removeEventListener('keydown', this.onKeyDown);
    document.body.removeEventListener('keypress', this.onKeyPress);
    document.body.removeEventListener('keyup', this.onKeyUp);
  }

  onChangeAlgorithm = (): void => {
    const { algorithms } = this.props;
    const { currentAlgorithm, currentCategory } = this.state;

    this.onReset();

    let newAlgorithm;
    if (currentCategory.randomizableAlgorithm) {
      const activeAlgorithms = algorithms.filter(
        algorithm =>
          algorithm.active && algorithm.category === currentCategory.value
      );

      if (!activeAlgorithms.length) {
        toastNoActiveAlgorithms();
      }

      newAlgorithm = getRandomEntry(
        activeAlgorithms,
        currentAlgorithm && currentAlgorithm._id
      );
    } else if (currentCategory.randomizableScramble) {
      const scramble = getRandomScramble(25);
      newAlgorithm = { category: currentCategory.value, scramble };
    }

    this.setState({ currentAlgorithm: newAlgorithm });
  };

  onChangeCategory = (category: categoryWithResults): void => {
    this.setState({ currentCategory: category }, (): void => {
      this.onChangeAlgorithm();
    });
  };

  onToggleActive = (algorithm: algorithmWithResults): void => {
    Meteor.call('algorithms.toggleActive', algorithm._id, !algorithm.active);
  };

  onActivateAll = (): void => {
    const { currentCategory } = this.state;
    Meteor.call('algorithms.activateAll', currentCategory.value);
  };

  onDeactivateAll = (): void => {
    Meteor.call('algorithms.deactivateAll');
    toastNoActiveAlgorithms();
  };

  onKeyDown = (event: KeyboardEvent) => {
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

  onKeyPress = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      event.preventDefault();
    }
  };

  onKeyUp = (event: KeyboardEvent) => {
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

  onGoToNextStatus = (upOrDown: 'down' | 'up') => {
    const {
      blocked,
      currentAlgorithm,
      currentCategory,
      timerCurrentValue,
      timerStatus
    } = this.state;

    if (!currentAlgorithm) {
      return;
    }

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
      /* Save the time */
      const result = {
        ...(currentAlgorithm && {
          algorithmId: currentAlgorithm._id,
          scramble: currentAlgorithm.scramble
        }),
        category: currentCategory.value,
        time: timerCurrentValue
      };

      Meteor.call('results.insert', result, () => this.onChangeAlgorithm());
    }
  };

  onReset = (): void => {
    clearInterval(this.timer);
    this.setState({ timerStatus: 'resetted', timerCurrentValue: 0 });
  };

  updateTimerTime = (): void => {
    this.setState(state => ({
      timerCurrentValue: moment().valueOf() - state.timerStartValue
    }));
  };

  render() {
    const {
      state: {
        currentAlgorithm,
        currentCategory,
        isVisibleSolution,
        timerCurrentValue
      },
      props: { algorithms, categories },
      onActivateAll,
      onToggleActive,
      onChangeAlgorithm,
      onChangeCategory,
      onDeactivateAll
    } = this;

    const currentAlgorithms = algorithms.filter(
      algorithm => algorithm.category === currentCategory.value
    );

    return (
      <>
        <SemanticToastContainer />
        <Grid>
          <Grid.Column width={4}>
            <Menu className="left-menu" inverted tabular vertical>
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
              currentAlgorithm={currentAlgorithm}
              currentCategory={currentCategory}
            />
            <TipsAndTricks />
          </Grid.Column>
        </Grid>
        {this.state.settingsOpened && (
          <AlgSettings
            algorithms={currentAlgorithms}
            currentCategory={currentCategory}
            onActivateAll={onActivateAll}
            onToggleActive={onToggleActive}
            onDeactivateAll={onDeactivateAll}
          />
        )}
      </>
    );
  }
}

export default Training;
