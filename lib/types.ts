type squaresType = [
  [0 | 1, 0 | 1, 0 | 1], // top row, left to right
  [0 | 1, 0 | 1, 0 | 1], // middle row, left to right
  [0 | 1, 0 | 1, 0 | 1] // bottom row, left to right
];

type strikesType =
  | [
      [0 | 1, 0 | 1, 0 | 1], // top group, left to right
      [0 | 1, 0 | 1, 0 | 1], // right group, top to bottom
      [0 | 1, 0 | 1, 0 | 1], // bottom group, left to right
      [0 | 1, 0 | 1, 0 | 1] // left group, top to bottom
    ]
  | [];

type categoryName = 'OLL' | 'PLL';

export type line = point[];
export type point = { x: number; y: number };

export type algorithm = {
  _id?: string;
  active: boolean;
  category: categoryName;
  name: string;
  image: string;
  scramble: string;
  solution: string;
  type: string;
  subtype: string;
  squares: squaresType;
  strikes: strikesType;
  lines?: line[];
};

export type algorithmWithResults = algorithm & {
  results: number[];
};

export type categoryWithResults = category & {
  results: number[];
};

export type category = {
  label: string;
  value: string;
  algorithmsCategory?: categoryName;
  randomizableAlgorithm?: boolean;
  randomizableScramble?: boolean;
  settingsDisabled?: boolean;
};

export type result = {
  _id?: string;
  algorithmId: string;
  category: categoryName;
  createdAt: Date;
  scramble: string;
  time: number;
};
