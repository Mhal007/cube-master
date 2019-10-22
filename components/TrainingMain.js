import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import Timer from './Timer.js';

const TrainingMain = ({
  onChangeAlgorithm,
  currentAlgorithm: { image, scramble, solution } = {},
  isVisibleSolution,
  timerCurrentValue
}) => (
  <section>
    {scramble && <Segment className="scramble-container">{scramble}</Segment>}
    {image && (
      <Segment className="image-container">
        <img src={`/images/${image}`} />
      </Segment>
    )}
    <Segment className="timer-container">
      <Timer
        isVisibleSolution={isVisibleSolution}
        solution={solution}
        timerCurrentValue={timerCurrentValue}
      />
    </Segment>
    {(image || solution) && (
      <Segment>
        <button onClick={() => onChangeAlgorithm()}>Random new alg</button>
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

// TODO divide OLL/PLL algs into groups, refactor settings (modals?)
// TODO refactor UI
// TODO refactor timer & nr of renders
// TODO add account support
// TODO isTraining refactor (the 'real' flag)
// TODO refactoring of isAlgorithmActive (DB -> local storage)
// TODO sets of algs kept in DB to load selection?
// TODO results result format (ms / s / m / h)

// TODO Blindfolded + 1/2 + scrambler
// TODO DNF option
// TODO 3x3x3 working + scrambler
// TODO mobile view
// TODO new averages
// TODO +x/-x to average (green/red)
// TODO responsive view (UWHD)
// TODO menu with buttons for: accept, +2, random new, delete
