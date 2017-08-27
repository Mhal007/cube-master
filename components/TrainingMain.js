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
        {scramble && (
            <Segment className="scramble-container">
                {scramble}
            </Segment>
        )}
        {image && (
            <Segment className="image-container">
                <img src={`/images/${image}`} />
            </Segment>
        )}
        <Segment className="timer-container">
            <Timer
                isVisibleSolution = {isVisibleSolution}
                solution          = {solution}
                timerCurrentValue = {timerCurrentValue}
            />
        </Segment>
        {(image || solution) && (
            <Segment>
                <button onClick={() => onChangeAlgorithm()}>
                    Random new alg
                </button>
            </Segment>
        )}
    </section>
;

TrainingMain.propTypes = {
    currentAlgorithm:  PropTypes .object .isRequired,
    isVisibleSolution: PropTypes .bool   .isRequired,
    onChangeAlgorithm: PropTypes .func   .isRequired,
    timerCurrentValue: PropTypes .number .isRequired
};

export default TrainingMain;


// TODO Blindfolded + 1/2 + scrambler
// TODO DNF option
// TODO 3x3x3 working + scrambler
// TODO mobile view
// TODO new averages
// TODO +x/-x to average (green/red)
// TODO responsive view (UWHD)
// TODO menu with buttons for: accept, +2, random new, delete


// TODO DONE
// TODO list of activated OLLs/PLLs
// TODO Averages fix
// TODO Averages display form change
// TODO 0s => No records
// TODO Random first alg
// TODO button for random fix
// TODO prepare PLL algs + oncategorychange fixes + onalgorithmchange fix