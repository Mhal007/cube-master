import { Algorithms } from '../../collections/algorithms';
import { OLLs, PLLs } from './const';

export const createAlgorithms = (): void => {
  const existingOLLs = Algorithms.find({ category: 'OLL' }).count();
  const existingPLLs = Algorithms.find({ category: 'PLL' }).count();

  if (!existingOLLs) {
    OLLs.forEach(algorithm => Algorithms.insert(algorithm));
  }
  if (!existingPLLs) {
    PLLs.forEach(algorithm => Algorithms.insert(algorithm));
  }
};
