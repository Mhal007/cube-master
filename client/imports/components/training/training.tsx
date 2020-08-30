import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import { SemanticToastContainer } from 'react-semantic-toasts';
import random from 'lodash/random';
import uniq from 'lodash/uniq';

import AlgSettings from './algSettings';
import Averages from './averages';
import TipsAndTricks from './tipsAndTricks';
import TrainingMain from './trainingMain';

import { getRandomScramble } from '../../../../lib/utils';
import { toastNoActiveAlgorithms } from '../../lib/toasts';
import { store } from '../../lib/store';
import {
  AlgorithmWithResults,
  CategoryName,
  CategoryWithResults,
  isPredefinedAlgorithm
} from '../../../../lib/types';
import Timeout = NodeJS.Timeout;

type blockedKeys = {
  control: boolean;
  delete: boolean;
  shift: boolean;
  space: boolean;
};

type timerStatus = 'resetted' | 'pre-inspection' | 'timer-off' | 'timer-on';
const TIMER_STATUSES: Record<string, timerStatus> = {
  RESETTED: 'resetted',
  PRE_INSPECTION: 'pre-inspection',
  TIMER_OFF: 'timer-off',
  TIMER_ON: 'timer-on'
};

export type randomizedAlgorithm = {
  category: CategoryName;
  scramble: string;
};

type Props = {
  algorithms: AlgorithmWithResults[];
  categories: CategoryWithResults[];
  demo?: boolean;
};

const Training = ({ algorithms, categories }: Props) => {
  const timer = useRef<Timeout>();

  const [activeAlgorithmIds, setActiveAlgorithmIds] = useState<string[]>(
    store.get(store.vars.activeAlgorithmIds) || []
  );
  const [blockedKeys, setBlockedKeys] = useState<blockedKeys>({
    control: false,
    delete: false,
    shift: false,
    space: false
  });
  const [currentAlgorithm, setCurrentAlgorithm] = useState<
    AlgorithmWithResults | randomizedAlgorithm
  >();
  const [currentCategory, setCurrentCategory] = useState<CategoryWithResults>(
    categories[0]
  );
  const [isSolutionVisible, setSolutionVisibility] = useState<boolean>(
    !!store.get(store.vars.isSolutionVisible)
  );
  const [areSettingsOpened, setSettingsOpenness] = useState<boolean>(true);
  const [timerCurrentValue, setTimerCurrentValue] = useState<number>(0);
  const [timerStatus, setTimerStatus] = useState<timerStatus>(
    TIMER_STATUSES.RESETTED
  );

  // const onReset = () => {};

  const onActivateAll = () => {
    const currentAlgorithmIds = algorithms
      .filter(algorithm => algorithm.category === currentCategory.value)
      .map(algorithm => algorithm._id);

    setActiveAlgorithmIds(uniq(activeAlgorithmIds.concat(currentAlgorithmIds)));
  };

  const onDeactivateAll = () => {
    const currentAlgorithmIds = algorithms
      .filter(algorithm => algorithm.category === currentCategory.value)
      .map(algorithm => algorithm._id);

    setActiveAlgorithmIds(
      activeAlgorithmIds.filter(
        (algorithmId: string) => !currentAlgorithmIds.includes(algorithmId)
      )
    );
  };

  const onChangeAlgorithm = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    setTimerStatus(TIMER_STATUSES.RESETTED);
    setTimerCurrentValue(0);

    setCurrentAlgorithm(currentAlgorithm => {
      let newAlgorithm: AlgorithmWithResults | randomizedAlgorithm | undefined;

      if (currentCategory.randomizableAlgorithm) {
        const searchSpace = algorithms.filter(
          algorithm =>
            algorithm.category === currentCategory.value &&
            activeAlgorithmIds.includes(algorithm._id)
        );

        const currentIndex = isPredefinedAlgorithm(currentAlgorithm)
          ? searchSpace.findIndex(
              algorithm => algorithm._id === currentAlgorithm._id
            )
          : -1;

        let newIndex = currentIndex;
        while (
          newIndex === -1 ||
          (newIndex === currentIndex && searchSpace.length > 1)
        ) {
          newIndex = random(0, searchSpace.length - 1);
        }

        newAlgorithm = searchSpace[newIndex];
      } else if (currentCategory.randomizableScramble) {
        const scramble = getRandomScramble(20);
        newAlgorithm = { category: currentCategory.value, scramble };
      }

      return newAlgorithm;
    });
  }, [activeAlgorithmIds, algorithms, currentCategory]);

  const onToggleActive = (toggleAlgorithmId: string) => {
    if (currentCategory && currentCategory.value) {
      const newAlgorithmIds = activeAlgorithmIds.includes(toggleAlgorithmId)
        ? activeAlgorithmIds.filter(
            (algorithmId: string) => algorithmId !== toggleAlgorithmId
          )
        : activeAlgorithmIds.concat(toggleAlgorithmId);

      setActiveAlgorithmIds(newAlgorithmIds);
    }
  };

  const onGoToNextStatus = useCallback(
    (upOrDown: 'down' | 'up') => {
      const onUpdateTimerTime = (startTime: number): void => {
        setTimerCurrentValue(Date.now() - startTime);
      };

      if (!currentAlgorithm) {
        return;
      }

      if (
        timerStatus === TIMER_STATUSES.RESETTED &&
        upOrDown === 'down' &&
        !blockedKeys.space
      ) {
        setTimerStatus(TIMER_STATUSES.PRE_INSPECTION);
      } else if (
        timerStatus === TIMER_STATUSES.PRE_INSPECTION &&
        upOrDown === 'up'
      ) {
        setTimerStatus(TIMER_STATUSES.TIMER_ON);
        const startTime = Date.now();
        timer.current = setInterval(() => onUpdateTimerTime(startTime), 1);
      } else if (
        timerStatus === TIMER_STATUSES.TIMER_ON &&
        upOrDown === 'down' &&
        !blockedKeys.space
      ) {
        if (timer.current) {
          clearInterval(timer.current);
        }

        setTimerStatus(TIMER_STATUSES.TIMER_OFF);
      } else if (
        timerStatus === TIMER_STATUSES.TIMER_OFF &&
        upOrDown === 'down' &&
        !blockedKeys.space
      ) {
        /* Save the time */
        const result = {
          ...((currentAlgorithm && {
            // @ts-ignore
            ...(currentAlgorithm._id && { algorithmId: currentAlgorithm._id }),
            // @ts-ignore
            scramble: currentAlgorithm.scramble
          }) ||
            {}),
          category: currentCategory.value,
          time: timerCurrentValue
        };

        Meteor.call('results.insert', result, () => onChangeAlgorithm());
      }
    },
    [
      blockedKeys,
      currentAlgorithm,
      currentCategory.value,
      onChangeAlgorithm,
      timer,
      timerCurrentValue,
      timerStatus
    ]
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.key === 'Enter' || event.key === ' ') && !blockedKeys.space) {
        event.preventDefault();
        onGoToNextStatus('down');
        setBlockedKeys({ ...blockedKeys, space: true });
      } else if (event.key === 'r') {
        event.preventDefault();
        onChangeAlgorithm();
      } else if (event.key === 'Shift' && !blockedKeys.shift) {
        event.preventDefault();
        setBlockedKeys({ ...blockedKeys, shift: true });
        setSolutionVisibility(true);
      } else if (event.key === 'Control' && !blockedKeys.control) {
        event.preventDefault();
        setBlockedKeys({ ...blockedKeys, control: true });
      } else if (
        (event.key === 'Backspace' ||
          event.key === 'Delete' ||
          event.key === 'Escape') &&
        !blockedKeys.delete
      ) {
        event.preventDefault();
        setBlockedKeys({ ...blockedKeys, delete: true });
      }
    };

    const onKeyPress = (event: KeyboardEvent) => {
      if (event.key === ' ') {
        event.preventDefault();
      }
    };

    const onKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        onGoToNextStatus('up');
        setBlockedKeys({ ...blockedKeys, space: false });
      } else if (event.key === 'Shift') {
        setBlockedKeys({ ...blockedKeys, shift: false });
        setSolutionVisibility(false);
      } else if (event.key === 'Control') {
        setBlockedKeys({ ...blockedKeys, control: false });
        setSolutionVisibility(!isSolutionVisible);
      } else if (
        event.key === 'Backspace' ||
        event.key === 'Delete' ||
        event.key === 'Escape'
      ) {
        onChangeAlgorithm();
        setBlockedKeys({ ...blockedKeys, delete: false });
      }
    };

    document.body.addEventListener('keydown', onKeyDown);
    document.body.addEventListener('keypress', onKeyPress);
    document.body.addEventListener('keyup', onKeyUp);

    return () => {
      document.body.removeEventListener('keydown', onKeyDown);
      document.body.removeEventListener('keypress', onKeyPress);
      document.body.removeEventListener('keyup', onKeyUp);
    };
  }, [blockedKeys, isSolutionVisible, onChangeAlgorithm, onGoToNextStatus]);

  useEffect(() => {
    onChangeAlgorithm();
  }, [onChangeAlgorithm]);

  useEffect(() => {
    setCurrentCategory(
      currentCategory =>
        categories.find(category => category.value === currentCategory.value) ||
        currentCategory
    );
  }, [categories]);

  useEffect(() => {
    store.set(store.vars.activeAlgorithmIds, activeAlgorithmIds);

    if (!currentCategory.randomizableAlgorithm) {
      return;
    }

    const anyAlgorithmActive = algorithms.some(
      algorithm =>
        activeAlgorithmIds.includes(algorithm._id) &&
        algorithm.category === currentCategory.value
    );

    if (!anyAlgorithmActive) {
      toastNoActiveAlgorithms();
    }
  }, [activeAlgorithmIds, algorithms, currentCategory]);

  useEffect(() => {
    store.set(store.vars.isSolutionVisible, isSolutionVisible);
  }, [isSolutionVisible]);

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
                onClick={() => setCurrentCategory(category)}
              />
            ))}
          </Menu>
        </Grid.Column>
        <Grid.Column width={8} textAlign="center">
          <TrainingMain
            currentAlgorithm={currentAlgorithm}
            isSolutionVisible={isSolutionVisible}
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
      {areSettingsOpened && (
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
};

export default Training;
