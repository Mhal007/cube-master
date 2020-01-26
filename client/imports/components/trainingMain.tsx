import React, { FunctionComponent } from 'react';
import { Button, Segment } from 'semantic-ui-react';

import Timer from './timer';
import { AlgorithmWithResults } from '../../../lib/types';
import { randomizedAlgorithm } from './training/training';

type Props = {
  onChangeAlgorithm: () => void;
  currentAlgorithm?: AlgorithmWithResults | randomizedAlgorithm;
  isVisibleSolution: boolean;
  timerCurrentValue: number;
};

const TrainingMain: FunctionComponent<Props> = ({
  onChangeAlgorithm,
  // @ts-ignore
  currentAlgorithm: { image, scramble, solution } = {
    image: undefined,
    scramble: undefined,
    solution: undefined
  },
  isVisibleSolution,
  timerCurrentValue
}) => (
  <section className="training-main">
    {scramble && <Segment className="scramble-segment">{scramble}</Segment>}
    {image && (
      <Segment className="image-segment">
        <img src={`/images/${image}`} />
      </Segment>
    )}
    <Segment className="timer-segment">
      <Timer
        isVisibleSolution={isVisibleSolution}
        solution={solution}
        timerCurrentValue={timerCurrentValue}
      />
    </Segment>
    {(image || solution) && (
      <Segment>
        <Button primary onClick={(): void => onChangeAlgorithm()}>
          Randomize new
        </Button>
      </Segment>
    )}
  </section>
);

export default TrainingMain;
