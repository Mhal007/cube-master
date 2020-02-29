import moment from 'moment';
import React, { FC } from 'react';

type Props = {
  isSolutionVisible: boolean;
  solution?: string;
  timerCurrentValue: number;
};

const Timer: FC<Readonly<Props>> = ({
  isSolutionVisible,
  solution,
  timerCurrentValue
}) => (
  <div className="timer">
    <p>{moment(timerCurrentValue).format('mm:ss:SSS')}</p>
    {isSolutionVisible && solution && <p>{solution}</p>}
  </div>
);

export default Timer;
