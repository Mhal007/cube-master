import React from 'react';
import PropTypes from 'prop-types';
import { Button, Segment } from 'semantic-ui-react';

import Timer from './timer.js';

const TrainingMain = ({
  onChangeAlgorithm,
  currentAlgorithm: { image, scramble, solution } = {},
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

TrainingMain.propTypes = {
  currentAlgorithm: PropTypes.object,
  isVisibleSolution: PropTypes.bool.isRequired,
  onChangeAlgorithm: PropTypes.func.isRequired,
  timerCurrentValue: PropTypes.number.isRequired
};

export default TrainingMain;
