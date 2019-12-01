import { Algorithms } from '../../collections/algorithms';
import { OLLs, PLLs } from './const';

export const createAlgorithms = (): void => {
  const isOLL = !!Algorithms.findOne({ category: 'OLL' });
  const isPLL = !!Algorithms.findOne({ category: 'PLL' });

  !isOLL && OLLs.forEach(algorithm => Algorithms.insert(algorithm));
  !isPLL && PLLs.forEach(algorithm => Algorithms.insert(algorithm));
};
