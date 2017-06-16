import React     from 'react';
import PropTypes from 'prop-types';
import {Segment} from 'semantic-ui-react'

import Timer from './Timer.js';

const TrainingMain = ({
    onChangeAlgorithm,
    currentAlgorithm: {
        image,
        scramble,
        solution
    },
    isVisibleSolution,
    timerCurrentValue
}) =>
    <section>
        <Segment className="scramble-container">
            {scramble}
        </Segment>
        <Segment className="image-container">
            <img src={`/images/${image}`} />
        </Segment>
        <Segment className="timer-container">
            <Timer
                isVisibleSolution = {isVisibleSolution}
                solution          = {solution}
                timerCurrentValue = {timerCurrentValue}
            />
        </Segment>
        <Segment>
            <button
                onClick={onChangeAlgorithm}
            >
                Random new alg
            </button>
        </Segment>
    </section>
;

TrainingMain.propTypes = {
    currentAlgorithm:  PropTypes .object .isRequired,
    isVisibleSolution: PropTypes .bool   .isRequired,
    onChangeAlgorithm: PropTypes .func   .isRequired,
    timerCurrentValue: PropTypes .number .isRequired
};

export default TrainingMain;