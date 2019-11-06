import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

const Timer = ({ isVisibleSolution, solution, timerCurrentValue }) => (
  <div className="timer">
    <p>{moment(timerCurrentValue).format('mm:ss:SSS')}</p>
    {isVisibleSolution && solution && <p>{solution}</p>}
  </div>
);

Timer.propTypes = {
  isVisibleSolution: PropTypes.bool.isRequired,
  solution: PropTypes.string,
  timerCurrentValue: PropTypes.number.isRequired
};

export default Timer;
