import React from 'react';
import { Button, Segment } from 'semantic-ui-react';

import { AlgorithmWithResults } from '../../../../lib/types';
import Timer from './timer';
import { randomizedAlgorithm } from './training';

type Props = {
  onChangeAlgorithm: () => void;
  currentAlgorithm?: AlgorithmWithResults | randomizedAlgorithm;
  isSolutionVisible: boolean;
  timerCurrentValue: number;
};

const TrainingMain = ({
  onChangeAlgorithm,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  currentAlgorithm: { image, scramble, solution } = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    image: undefined,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    scramble: undefined,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    solution: undefined,
  },
  isSolutionVisible,
  timerCurrentValue,
}: Props): JSX.Element => (
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
