import moment from 'moment';
import React from 'react';

type Props = {
  isSolutionVisible: boolean;
  solution?: string;
  timerCurrentValue: number;
};

const Timer = ({
  isSolutionVisible,
  solution,
  timerCurrentValue,
}: Props): JSX.Element => (
  <div className="timer">
    <p>{moment(timerCurrentValue).format('mm:ss:SSS')}</p>
    {isSolutionVisible && solution && <p>{solution}</p>}
  </div>
);

export default Timer;
