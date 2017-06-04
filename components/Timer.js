import moment    from 'moment';
import PropTypes from 'prop-types';
import React     from 'react';

const Timer = ({
    isVisibleSolution,
    timerCurrentValue,
    solution
}) =>
    <section className="timer">
        {moment(timerCurrentValue).format('mm:ss:SSS')}

        {isVisibleSolution && (
            <div>
                {solution}
            </div>
        )}
    </section>
;

Timer.propTypes = {
    isVisibleSolution: PropTypes .bool   .isRequired,
    solution:          PropTypes .string .isRequired,
    timerCurrentValue: PropTypes .number .isRequired
};

export default Timer;