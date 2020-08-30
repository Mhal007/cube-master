import { Category } from './types';

export const categories: Category[] = [
  {
    label: '3x3x3',
    value: '3x3x3',
    randomizableScramble: true,
    settingsDisabled: true,
  },
  {
    label: 'OLL training',
    value: 'OLL',
    type: 'OLL',
    randomizableAlgorithm: true,
  },
  {
    label: 'PLL training',
    value: 'PLL',
    type: 'PLL',
    randomizableAlgorithm: true,
  },
  {
    label: 'OLL Attack',
    value: 'OLL-attack',
    type: 'OLL',
    settingsDisabled: true,
  },
  {
    label: 'PLL Attack',
    value: 'PLL-attack',
    type: 'PLL',
    settingsDisabled: true,
  },
];
