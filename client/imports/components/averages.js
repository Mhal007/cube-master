import React from 'react';
import PropTypes from 'prop-types';
import { List, Segment } from 'semantic-ui-react';
import moment from 'moment';
import { getAverage } from '../../utils';

const Averages = ({ currentAlgorithm, currentCategory }) => {
  const currentAlgorithmAvg = getAverage(
    currentAlgorithm && currentAlgorithm.results
  );
  const currentCategoryAvg = getAverage(
    currentCategory && currentCategory.results
  );

  const averages = ['OLL', 'PLL'].includes(currentCategory.value)
    ? [
        {
          header: 'Average for this algorithm',
          description: currentAlgorithmAvg
            ? moment(currentAlgorithmAvg).format('ss:SSS')
            : 'No records'
        },
        {
          header: `Average for all ${currentCategory.value} algorithms`,
          description: currentCategoryAvg
            ? moment(currentCategoryAvg).format('ss:SSS')
            : 'No records'
        }
      ]
    : [
        {
          header: `Average for all in ${currentCategory.value}`,
          description: currentCategoryAvg
            ? moment(currentCategoryAvg).format('mm:ss:SSS')
            : 'No records'
        }
      ];

  return (
    <Segment className="averages">
      <List inverted items={averages} />
    </Segment>
  );
};

Averages.propTypes = {
  currentAlgorithmAvg: PropTypes.number,
  currentCategory: PropTypes.object,
  currentCategoryAvg: PropTypes.number
};

export default Averages;
