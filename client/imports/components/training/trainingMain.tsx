import React from 'react';
import { Button, Segment } from 'semantic-ui-react';

import Timer from './timer';
import { AlgorithmWithResults } from '../../../../lib/types';
import { randomizedAlgorithm } from './training';

type Props = {
  onChangeAlgorithm: () => void;
  currentAlgorithm?: AlgorithmWithResults | randomizedAlgorithm;
  isSolutionVisible: boolean;
  timerCurrentValue: number;
};

const TrainingMain = ({
  onChangeAlgorithm,
  // @ts-ignore
  currentAlgorithm: { image, scramble, solution } = {
    // @ts-ignore
    image: undefined,
    // @ts-ignore
    scramble: undefined,
    // @ts-ignore
    solution: undefined
  },
  isSolutionVisible,
  timerCurrentValue
}: Props) => (
  <section className="training-main">
    {scramble && <Segment className="scramble-segment">{scramble}</Segment>}
    {image && (
      <Segment className="image-segment">
        <img src={`/images/${image}`} />
      </Segment>
    )}
    <Segment className="timer-segment">
      <Timer
        isSolutionVisible={isSolutionVisible}
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
