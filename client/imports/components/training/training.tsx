import React, { Component } from 'react';
import moment from 'moment';
import { Grid, Menu } from 'semantic-ui-react';
import { SemanticToastContainer } from 'react-semantic-toasts';
import random from 'lodash/random';
import uniq from 'lodash/uniq';

import AlgSettings from '../algSettings';
import Averages from '../averages';
import TipsAndTricks from '../tipsAndTricks';
import TrainingMain from '../trainingMain';

import { getRandomScramble } from '../../../../lib/utils';
import { toastNoActiveAlgorithms } from '../../lib/toasts';
import { store } from '../../lib/store';
import {
  algorithmWithResults,
  categoryName,
  categoryWithResults
} from '../../../../lib/types';

export type randomizedAlgorithm = {
  category: categoryName;
  scramble: string;
};

type Props = {
  algorithms: algorithmWithResults[];
  categories: categoryWithResults[];
  demo?: boolean;
};

type State = {
  activeAlgorithmIds: string[];
  blocked: {
    control: boolean;
    delete: boolean;
    shift: boolean;
    space: boolean;
  };
  currentAlgorithm?: algorithmWithResults | randomizedAlgorithm;
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
      activeAlgorithmIds: store.get(store.vars.activeAlgorithmIds) || [],
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

    window.addEventListener('beforeunload', this.onExit);
    document.body.addEventListener('keydown', this.onKeyDown);
    document.body.addEventListener('keypress', this.onKeyPress);
    document.body.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount(): void {
    window.removeEventListener('beforeunload', this.onExit);
    document.body.removeEventListener('keydown', this.onKeyDown);
    document.body.removeEventListener('keypress', this.onKeyPress);
    document.body.removeEventListener('keyup', this.onKeyUp);
  }

  timer: any;

  onChangeAlgorithm = (): void => {
    const { algorithms } = this.props;
    const {
      activeAlgorithmIds,
      currentAlgorithm,
      currentCategory
    } = this.state;

    this.onReset();

    let newAlgorithm;
    if (currentCategory.randomizableAlgorithm) {
      const searchSpace = algorithms.filter(
        algorithm =>
          algorithm.category === currentCategory.value &&
          activeAlgorithmIds.includes(algorithm._id)
      );

      if (!searchSpace.length) {
        toastNoActiveAlgorithms();
      }

      const currentIndex = searchSpace.findIndex(
        algorithm =>
          // @ts-ignore
          algorithm._id === (currentAlgorithm && currentAlgorithm._id)
      );
      let newIndex = currentIndex;
      while (newIndex === currentIndex && searchSpace.length > 1) {
        newIndex = random(0, searchSpace.length - 1);
      }

      newAlgorithm = searchSpace[newIndex];
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

  onToggleActive = (toggleAlgorithmId: string): void => {
    const { activeAlgorithmIds, currentCategory } = this.state;

    if (currentCategory && currentCategory.value) {
      this.setState({
        activeAlgorithmIds: activeAlgorithmIds.includes(toggleAlgorithmId)
          ? activeAlgorithmIds.filter(
              algorithmId => algorithmId !== toggleAlgorithmId
            )
          : activeAlgorithmIds.concat(toggleAlgorithmId)
      });
    }
  };

  onActivateAll = (): void => {
    const { algorithms } = this.props;
    const { activeAlgorithmIds, currentCategory } = this.state;

    const currentAlgorithmIds = algorithms
      .filter(algorithm => algorithm.category === currentCategory.value)
      .map(algorithm => algorithm._id);

    this.setState({
      activeAlgorithmIds: uniq(activeAlgorithmIds.concat(currentAlgorithmIds))
    });
  };

  onDeactivateAll = (): void => {
    const { algorithms } = this.props;
    const { activeAlgorithmIds, currentCategory } = this.state;

    const currentAlgorithmIds = algorithms
      .filter(algorithm => algorithm.category === currentCategory.value)
      .map(algorithm => algorithm._id);

    this.setState(
      {
        activeAlgorithmIds: activeAlgorithmIds.filter(
          algorithmId => !currentAlgorithmIds.includes(algorithmId)
        )
      },
      toastNoActiveAlgorithms
    );
  };

  onExit = (): void => {
    const { activeAlgorithmIds } = this.state;
    store.set(store.vars.activeAlgorithmIds, activeAlgorithmIds);
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
          // @ts-ignore
          ...(currentAlgorithm._id && { algorithmId: currentAlgorithm._id }),
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
        activeAlgorithmIds,
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
      algorithm => algorithm.category === currentCategory.type
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
            activeAlgorithmIds={activeAlgorithmIds}
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
