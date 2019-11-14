import moment from 'moment';
import React, { FunctionComponent } from 'react';

type Props = {
  isVisibleSolution: boolean;
  solution?: string;
  timerCurrentValue: number;
};

const Timer: FunctionComponent<Props> = ({
  isVisibleSolution,
  solution,
  timerCurrentValue
}) => (
  <div className="timer">
    <p>{moment(timerCurrentValue).format('mm:ss:SSS')}</p>
    {isVisibleSolution && solution && <p>{solution}</p>}
  </div>
);

export default Timer;
