let moment;module.link('moment',{default(v){moment=v}},0);let PropTypes;module.link('prop-types',{default(v){PropTypes=v}},1);let React;module.link('react',{default(v){React=v}},2);



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

module.exportDefault(Timer);
