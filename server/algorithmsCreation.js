import { Algorithms } from '../collections/algorithms.js';

import { OLL, PLL } from './const';

export const createAlgorithms = () => {
  const isOLL = !!Algorithms.findOne({ category: 'OLL' });
  const isPLL = !!Algorithms.findOne({ category: 'PLL' });

  !isOLL &&
    OLL.forEach(algorithm => Meteor.call('algorithms.insert', algorithm));
  !isPLL &&
    PLL.forEach(algorithm => Meteor.call('algorithms.insert', algorithm));
};
