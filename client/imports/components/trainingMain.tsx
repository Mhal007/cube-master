import React, { FunctionComponent } from 'react';
import { Button, Segment } from 'semantic-ui-react';

import Timer from './timer';
import { algorithm } from '../../../server/imports/const';

type Props = {
  onChangeAlgorithm: () => void;
  currentAlgorithm?: algorithm;
  isVisibleSolution: boolean;
  timerCurrentValue: number;
};

const TrainingMain: FunctionComponent<Props> = ({
  onChangeAlgorithm,
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
        <Button primary onClick={() => onChangeAlgorithm()}>
          Randomize new
        </Button>
      </Segment>
    )}
  </section>
);

export default TrainingMain;
