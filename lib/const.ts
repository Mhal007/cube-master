import { category } from './types';

export const categories: category[] = [
  {
    label: 'OLL',
    value: 'OLL',
    randomizableAlgorithm: true
  },
  {
    label: 'PLL',
    value: 'PLL',
    randomizableAlgorithm: true
  },
  {
    label: '3x3x3',
    value: '3x3x3',
    randomizableScramble: true
  },
  {
    label: 'OLL Attack',
    value: 'OLL-attack',
    algorithmsCategory: 'OLL',
    settingsDisabled: true
  },
  {
    label: 'PLL Attack',
    value: 'PLL-attack',
    algorithmsCategory: 'PLL',
    settingsDisabled: true
  }
];
