import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

const Timer = ({ isVisibleSolution, solution, timerCurrentValue }) => (
  <section className="timer">
    {moment(timerCurrentValue).format('mm:ss:SSS')}
    {isVisibleSolution && solution && <div>{solution}</div>}
  </section>
);
Timer.propTypes = {
  isVisibleSolution: PropTypes.bool.isRequired,
  solution: PropTypes.string,
  timerCurrentValue: PropTypes.number.isRequired
};

export default Timer;
