import { Meteor } from 'meteor/meteor';
import { Algorithms } from '../../collections/algorithms';

import { OLLs, PLLs } from './const';

export const createAlgorithms = () => {
  const isOLL = !!Algorithms.findOne({ category: 'OLL' });
  const isPLL = !!Algorithms.findOne({ category: 'PLL' });

  !isOLL &&
    OLLs.forEach(algorithm => Meteor.call('algorithms.insert', algorithm));
  !isPLL &&
    PLLs.forEach(algorithm => Meteor.call('algorithms.insert', algorithm));
};
