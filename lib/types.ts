export type Algorithm = AlgorithmSketch & {
  _id: string;
};

export type AlgorithmSketch = {
  category: CategoryType;
  name: string;
  image: string;
  scramble: string;
  solution: string;
  type: string;
  subtype: string;
  squares: SquaresType;
  strikes: StrikesType;
  lines?: Line[];
};

export type AlgorithmWithResults = Algorithm & {
  active: boolean;
  results: number[];
};

export type Category = {
  label: string;
  value: CategoryName;
  type?: CategoryType;
  randomizableAlgorithm?: boolean;
  randomizableScramble?: boolean;
  settingsDisabled?: boolean;
};

export type CategoryName =
  | 'OLL'
  | 'PLL'
  | '3x3x3'
  | 'OLL-attack'
  | 'PLL-attack';
export type CategoryType = 'OLL' | 'PLL';

export type CategoryWithResults = Category & {
  results: number[];
};

export type Line = Point[];
export type Point = { x: number; y: number };

export type Result = {
  _id?: string;
  algorithmId: string;
  category: CategoryName;
  createdAt: Date;
  foul?: boolean;
  scramble: string;
  time: number;
  userId: string;
};

export type SquaresType = [
  [0 | 1, 0 | 1, 0 | 1], // top row, left to right
  [0 | 1, 0 | 1, 0 | 1], // middle row, left to right
  [0 | 1, 0 | 1, 0 | 1] // bottom row, left to right
];

export type StrikesType =
  | [
      [0 | 1, 0 | 1, 0 | 1], // top group, left to right
      [0 | 1, 0 | 1, 0 | 1], // right group, top to bottom
      [0 | 1, 0 | 1, 0 | 1], // bottom group, left to right
      [0 | 1, 0 | 1, 0 | 1] // left group, top to bottom
    ]
  | [];
