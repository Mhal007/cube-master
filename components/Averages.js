import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import moment from 'moment';

const Averages = ({
  currentAlgorithmAvg,
  currentCategory,
  currentCategoryAvg
}) => (
  <Segment>
    {['OLL', 'PLL'].indexOf(currentCategory.value) > -1 ? (
      <div>
        Average for this algorithm:
        <br />
        {currentAlgorithmAvg
          ? moment(currentAlgorithmAvg).format('ss:SSS')
          : 'No records'}
        <br />
        <br />
        Average for all {currentCategory.value} algorithms:
        <br />
        {currentCategoryAvg
          ? moment(currentCategoryAvg).format('ss:SSS')
          : 'No records'}
      </div>
    ) : (
      <div>
        Average for all in {currentCategory.value}:
        <br />
        {currentCategoryAvg
          ? moment(currentCategoryAvg).format('mm:ss:SSS')
          : 'No records'}
      </div>
    )}
  </Segment>
);

Averages.propTypes = {
  currentAlgorithmAvg: PropTypes.number,
  currentCategory: PropTypes.object,
  currentCategoryAvg: PropTypes.number
};

export default Averages;
