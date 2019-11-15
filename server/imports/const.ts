import { algorithm, squaresType, strikesType } from '../../lib/types';

const squresFull: squaresType = [/* eslint-disable-line */
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
];

const srikesNone: strikesType = [];

export const OLLs: algorithm[] = [
  {
    active: true,
    category: 'OLL',
    image: 'oll_1.svg',
    name: 'oll_1',
    scramble: "RU2 R' U' RUR' U' RU' R' U'",
    solution: "RU2 R' U' RUR' U' RU' R'",
    type: 'Cross',
    subtype: 'Cross',
    squares: [/* eslint-disable-line */
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0]
    ],
    strikes: [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
      [0, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_2.svg',
    name: 'oll_2',
    scramble: "RU2 R2 U' R2U' R2U2R",
    solution: "(RU2 R2 U') (R2U') (R2U2R)",
    type: 'Cross',
    subtype: 'Cross',
    squares: [/* eslint-disable-line */
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0]
    ],
    strikes: [
      [0, 0, 1],
      [0, 0, 0],
      [0, 0, 1],
      [1, 0, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_3.svg',
    name: 'oll_3',
    scramble: "x' (RUR' DRU' R' D' F)",
    solution: "x' (RU' R' DRUR' D')",
    type: 'Cross',
    subtype: 'Cross',
    squares: [/* eslint-disable-line */
      [0, 1, 1],
      [1, 1, 1],
      [1, 1, 0]
    ],
    strikes: [
      [1, 0, 0],
      [0, 0, 1],
      [0, 0, 0],
      [0, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_4.svg',
    name: 'oll_4',
    scramble: "RU2RDR' U2RD' R2 U2",
    solution: "R2D' RU2R'DRU2R",
    type: 'Cross',
    subtype: 'Cross',
    squares: [/* eslint-disable-line */
      [0, 1, 0],
      [1, 1, 1],
      [1, 1, 1]
    ],
    strikes: [
      [1, 0, 1],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_5.svg',
    name: 'oll_5',
    scramble: "x' (RU' R' DRUR' D')",
    solution: "x' (RUR' DRU' R' D')",
    type: 'Cross',
    subtype: 'Cross',
    squares: [/* eslint-disable-line */
      [1, 1, 1],
      [1, 1, 1],
      [0, 1, 0]
    ],
    strikes: [
      [0, 0, 0],
      [0, 0, 1],
      [0, 0, 0],
      [0, 0, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_6.svg',
    name: 'oll_6',
    scramble: "RUR' URU2R' U",
    solution: "L' U' LU' L' U2L",
    type: 'Cross',
    subtype: 'Cross',
    squares: [/* eslint-disable-line */
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 1]
    ],
    strikes: [
      [0, 0, 1],
      [0, 0, 0],
      [1, 0, 0],
      [1, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_7.svg',
    name: 'oll_7',
    scramble: "L' U' LU' L' U2LU'",
    solution: "RUR' URU2R'",
    type: 'Cross',
    subtype: 'Cross',
    squares: [/* eslint-disable-line */
      [0, 1, 0],
      [1, 1, 1],
      [1, 1, 0]
    ],
    strikes: [
      [1, 0, 0],
      [1, 0, 0],
      [0, 0, 1],
      [0, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_8.svg',
    name: 'oll_8',
    scramble: "FR' F' RUR2B' R' BU' R'",
    solution: "(RU2R2FR) (F' U2R' FRF')",
    type: 'Dot',
    subtype: 'Dot',
    squares: [/* eslint-disable-line */
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ],
    strikes: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
      [1, 1, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_9.svg',
    name: 'oll_9',
    scramble: "FR' F' RU2FR' F' RU' RU' R' U2",
    solution: "LF' L' FU2FU' RU' R' F'",
    type: 'Dot',
    subtype: 'Dot',
    squares: [/* eslint-disable-line */
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ],
    strikes: [
      [0, 1, 0],
      [1, 1, 0],
      [1, 1, 0],
      [0, 1, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_10.svg',
    name: 'oll_10',
    scramble: "FR' F' RU2R d' RU' R' F' U'",
    solution: "(RU2R2FRF' U2) M' URU' L'",
    type: 'Dot',
    subtype: 'Dot',
    squares: [/* eslint-disable-line */
      [0, 0, 1],
      [0, 1, 0],
      [0, 0, 1]
    ],
    strikes: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_11.svg',
    name: 'oll_11',
    scramble: "RU2R2FRF' U2R' FRF' U2",
    solution: "(FRUR' U' F') (fRUR' U' f')",
    type: 'Dot',
    subtype: 'Dot',
    squares: [/* eslint-disable-line */
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ],
    strikes: [
      [0, 1, 1],
      [0, 1, 0],
      [0, 1, 1],
      [1, 1, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_12.svg',
    name: 'oll_12',
    scramble: "R' F' U2F2URU' R' F' U2R",
    solution: "R' U2FRUR' U' F2U2FR",
    type: 'Dot',
    subtype: 'Dot',
    squares: [/* eslint-disable-line */
      [1, 0, 1],
      [0, 1, 0],
      [0, 0, 0]
    ],
    strikes: [
      [0, 1, 0],
      [0, 1, 1],
      [0, 1, 0],
      [0, 1, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_13.svg',
    name: 'oll_13',
    scramble: "MU' LF2L' U' RU' R2 r",
    solution: "MUR' F2RUL' U L2 l'",
    type: 'Dot',
    subtype: 'Dot',
    squares: [/* eslint-disable-line */
      [0, 0, 0],
      [0, 1, 0],
      [1, 0, 0]
    ],
    strikes: [
      [1, 1, 0],
      [1, 1, 0],
      [0, 1, 1],
      [0, 1, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_14.svg',
    name: 'oll_14',
    scramble: "MUR' F2RUL' U L2 l'",
    solution: "MU' LF2L' U' RU' R2 r",
    type: 'Dot',
    subtype: 'Dot',
    squares: [/* eslint-disable-line */
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ],
    strikes: [
      [0, 1, 1],
      [0, 1, 0],
      [1, 1, 0],
      [1, 1, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_15.svg',
    name: 'oll_15',
    scramble: "(MUMUMUMU) (M' UM' UM' UM' U)",
    solution: "M (URUR' U') M2 (U RU' r')",
    type: 'Dot',
    subtype: 'Letter X',
    squares: [/* eslint-disable-line */
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1]
    ],
    strikes: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_16.svg',
    name: 'oll_16',
    scramble: "(R' FRUR' U') (F' UR)",
    solution: "R' U' FURU' R' F' R",
    type: 'Dash',
    subtype: 'Letter P',
    squares: [/* eslint-disable-line */
      [0, 1, 1],
      [0, 1, 1],
      [0, 0, 1]
    ],
    strikes: [
      [1, 0, 0],
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_17.svg',
    name: 'oll_17',
    scramble: "(L F' L' U' L U) (F U' L')",
    solution: "LUF' U' L' ULFL'",
    type: 'Dash',
    subtype: 'Letter P',
    squares: [/* eslint-disable-line */
      [1, 1, 0],
      [1, 1, 0],
      [1, 0, 0]
    ],
    strikes: [
      [0, 0, 1],
      [0, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_18.svg',
    name: 'oll_18',
    scramble: "F (RUR' U') F'",
    solution: "FURU' R' F'",
    type: 'Dash',
    subtype: 'Letter P',
    squares: [/* eslint-disable-line */
      [1, 1, 0],
      [1, 1, 0],
      [1, 0, 0]
    ],
    strikes: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_19.svg',
    name: 'oll_19',
    scramble: "F' (L' U' LU) F",
    solution: "F' U' L' ULF",
    type: 'Dash',
    subtype: 'Letter P',
    squares: [/* eslint-disable-line */
      [0, 1, 1],
      [0, 1, 1],
      [0, 0, 1]
    ],
    strikes: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_20.svg',
    name: 'oll_20',
    scramble: "B' RBR' U' R' U' RUR' URU2",
    solution: "(L' U' LU' L' U) (LULF' L' F)",
    type: 'Dash',
    subtype: 'Letter W',
    squares: [/* eslint-disable-line */
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 1]
    ],
    strikes: [
      [0, 0, 1],
      [0, 0, 0],
      [0, 1, 0],
      [0, 1, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_21.svg',
    name: 'oll_21',
    scramble: "FR' F' RURUR' U' RU' R'",
    solution: "(RUR' URU') (R' U' R' FRF')",
    type: 'Dash',
    subtype: 'Letter W',
    squares: [/* eslint-disable-line */
      [0, 1, 1],
      [1, 1, 0],
      [1, 0, 0]
    ],
    strikes: [
      [1, 0, 0],
      [0, 1, 1],
      [0, 1, 0],
      [0, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_22.svg',
    name: 'oll_22',
    scramble: "R' F' LF' L' FLF' L' F2RU'",
    solution: "(R' F' LF') ( L' FLF' L' F2R)",
    type: 'Dash',
    subtype: 'Dash',
    squares: [/* eslint-disable-line */
      [0, 1, 0],
      [1, 1, 0],
      [0, 0, 0]
    ],
    strikes: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
      [1, 0, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_23.svg',
    name: 'oll_23',
    scramble: "LFR' FRF' R' FRF2L' U",
    solution: "LFR' FRF' R' FRF2L'",
    type: 'Dash',
    subtype: 'Dash',
    squares: [/* eslint-disable-line */
      [0, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    strikes: [
      [0, 0, 0],
      [1, 0, 1],
      [0, 1, 0],
      [1, 1, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_24.svg',
    name: 'oll_24',
    scramble: "F' U' L' ULU' L' ULF",
    solution: "F' (L' U' LU) (L' U' LU) F",
    type: 'Dash',
    subtype: 'Dash',
    squares: [/* eslint-disable-line */
      [0, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    strikes: [
      [1, 0, 0],
      [1, 0, 1],
      [1, 1, 0],
      [0, 1, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_25.svg',
    name: 'oll_25',
    scramble: "F URU' R' URU' R' F'",
    solution: "F (RUR' U') (RUR' U') F'",
    type: 'Dash',
    subtype: 'Dash',
    squares: [/* eslint-disable-line */
      [0, 1, 0],
      [1, 1, 0],
      [0, 0, 0]
    ],
    strikes: [
      [0, 0, 1],
      [0, 1, 0],
      [0, 1, 1],
      [1, 0, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_26.svg',
    name: 'oll_26',
    scramble: "(r U') (r2 U) (r2 U r2 U' r)",
    solution: "(r' U) (r2U') (r2U') (r2Ur')",
    type: 'Dash',
    subtype: 'Dash',
    squares: [/* eslint-disable-line */
      [0, 0, 0],
      [0, 1, 1],
      [0, 1, 0]
    ],
    strikes: [
      [0, 1, 1],
      [0, 0, 0],
      [0, 0, 1],
      [1, 1, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_27.svg',
    name: 'oll_27',
    scramble: "(r' U) (r2U') (r2U') (r2Ur')U2",
    solution: "(lU') (l2U) (l2U) (l2U' l)",
    type: 'Dash',
    subtype: 'Dash',
    squares: [/* eslint-disable-line */
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 0]
    ],
    strikes: [
      [1, 1, 0],
      [1, 1, 1],
      [1, 0, 0],
      [0, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_28.svg',
    name: 'oll_28',
    scramble: "L F' L' U' L F L' y L' U L",
    solution: "L' U' L y' LF' L' ULFL'",
    type: 'Dash',
    subtype: 'Dash',
    squares: [/* eslint-disable-line */
      [1, 0, 0],
      [0, 1, 1],
      [0, 1, 0]
    ],
    strikes: [
      [0, 1, 1],
      [0, 0, 1],
      [1, 0, 0],
      [0, 1, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_29.svg',
    name: 'oll_29',
    scramble: "R' F R U R' F' R y' R U' R'",
    solution: "RUR' y R' FRU' R' F' R",
    type: 'Dash',
    subtype: 'Dash',
    squares: [/* eslint-disable-line */
      [0, 0, 1],
      [1, 1, 0],
      [0, 1, 0]
    ],
    strikes: [
      [1, 1, 0],
      [0, 1, 0],
      [0, 0, 1],
      [0, 0, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_30.svg',
    name: 'oll_30',
    scramble: "B' FR' F' RBURU' R' U2",
    solution: "(R' U' RU F) x' (R U' R' UD')",
    type: 'Line',
    subtype: 'Letter C',
    squares: [/* eslint-disable-line */
      [1, 0, 1],
      [1, 1, 1],
      [0, 0, 0]
    ],
    strikes: [
      [0, 1, 0],
      [0, 0, 1],
      [0, 1, 0],
      [0, 0, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_31.svg',
    name: 'oll_31',
    scramble: "RUB' RBR' U' R'",
    solution: "(R' U' R' F) (RF' U) R",
    type: 'Line',
    subtype: 'Letter C',
    squares: [/* eslint-disable-line */
      [1, 1, 0],
      [0, 1, 0],
      [1, 1, 0]
    ],
    strikes: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
      [0, 1, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_32.svg',
    name: 'oll_32',
    scramble: "FR' F' RURU' R'",
    solution: "(RUR' U') (R' FRF')",
    type: 'Line',
    subtype: 'Letter T',
    squares: [/* eslint-disable-line */
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 1]
    ],
    strikes: [
      [1, 1, 0],
      [0, 0, 0],
      [1, 1, 0],
      [0, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_33.svg',
    name: 'oll_33',
    scramble: "FURU' R' F'",
    solution: "F (RUR' U') F'",
    type: 'Line',
    subtype: 'Letter T',
    squares: [/* eslint-disable-line */
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 1]
    ],
    strikes: [
      [0, 1, 0],
      [0, 0, 0],
      [0, 1, 0],
      [1, 0, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_34.svg',
    name: 'oll_34',
    scramble: "B' RBU2R' U' RU' R2U2R",
    solution: "(RU2R2U' RU' R' U2) (F R F')",
    type: 'Line',
    subtype: 'Letter I',
    squares: [/* eslint-disable-line */
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ],
    strikes: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
      [1, 1, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_35.svg',
    name: 'oll_35',
    scramble: "F (RUR' U') (RUR' U') F'",
    solution: "F (URU' R' URU' R') F'",
    type: 'Line',
    subtype: 'Letter I',
    squares: [/* eslint-disable-line */
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ],
    strikes: [
      [1, 1, 0],
      [1, 0, 1],
      [1, 1, 0],
      [0, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_36.svg',
    name: 'oll_36',
    scramble: "L' B' LR' U' RUR' U' RUL' BL",
    solution: "(L' B' LU') (R' URU' R' URL' BL)",
    type: 'Line',
    subtype: 'Letter I',
    squares: [/* eslint-disable-line */
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ],
    strikes: [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_37.svg',
    name: 'oll_37',
    scramble: "(R' U' RU' R' U) y' (R' URB)U'",
    solution: "(R' U' RU' R' U) y' (R' URB)",
    type: 'Line',
    subtype: 'Letter I',
    squares: [/* eslint-disable-line */
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ],
    strikes: [
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
      [0, 1, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_38.svg',
    name: 'oll_38',
    scramble: "R' F' LF' L' F2R U2",
    solution: "r' U2RUR'U r",
    type: 'Dash',
    subtype: 'Square',
    squares: [/* eslint-disable-line */
      [0, 0, 0],
      [0, 1, 1],
      [0, 1, 1]
    ],
    strikes: [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
      [0, 1, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_39.svg',
    name: 'oll_39',
    scramble: "LFR' FRF2L' U2",
    solution: "l U2L'U'LU' l'",
    type: 'Dash',
    subtype: 'Square',
    squares: [/* eslint-disable-line */
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0]
    ],
    strikes: [
      [0, 1, 1],
      [0, 1, 1],
      [0, 0, 0],
      [1, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_40.svg',
    name: 'oll_40',
    scramble: "R' U2 l U' RUR' l' U2R",
    solution: "x' (R' F2R2U' R' UR' F2R)",
    type: 'Dash',
    subtype: 'Square',
    squares: [/* eslint-disable-line */
      [0, 1, 1],
      [0, 1, 1],
      [1, 0, 0]
    ],
    strikes: [
      [1, 0, 0],
      [0, 0, 1],
      [0, 1, 0],
      [0, 1, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_41.svg',
    name: 'oll_41',
    scramble: "(RUR' U') (R' FRF')",
    solution: "FR' F' RURU' R'",
    type: 'Dash',
    subtype: 'Square',
    squares: [/* eslint-disable-line */
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1]
    ],
    strikes: [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_42.svg',
    name: 'oll_42',
    scramble: "L F2 R' F' R F' L' U2",
    solution: "l UL'ULU2 l'",
    type: 'Dash',
    subtype: 'Letter S',
    squares: [/* eslint-disable-line */
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 0]
    ],
    strikes: [
      [1, 1, 0],
      [0, 0, 0],
      [0, 0, 1],
      [0, 1, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_43.svg',
    name: 'oll_43',
    scramble: "R' F2LFL' FR U2",
    solution: "r' U'RU'R'U2 r",
    type: 'Dash',
    subtype: 'Letter S',
    squares: [/* eslint-disable-line */
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0]
    ],
    strikes: [
      [0, 1, 1],
      [0, 1, 1],
      [1, 0, 0],
      [0, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_44.svg',
    name: 'oll_44',
    scramble: "MU' RU2R' U' RU' R2rU",
    solution: "F'L'U'LUF U FRUR'U'F'",
    type: 'Dash',
    subtype: 'Letter S',
    squares: [/* eslint-disable-line */
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0]
    ],
    strikes: [
      [0, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
      [0, 0, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_45.svg',
    name: 'oll_45',
    scramble: "M' UR' U2RUR' UR2 r' U",
    solution: "FRUR'U'F' U FRUR'U'F'",
    type: 'Dash',
    subtype: 'Letter S',
    squares: [/* eslint-disable-line */
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 0]
    ],
    strikes: [
      [0, 1, 0],
      [0, 0, 1],
      [1, 0, 0],
      [1, 1, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_46.svg',
    name: 'oll_46',
    scramble: "B2R' URU' R' U' R2BR' BU2",
    solution: "F' LF' L2ULUL' U' LF2",
    type: 'Dash',
    subtype: 'Letter S',
    squares: [/* eslint-disable-line */
      [0, 1, 0],
      [0, 1, 1],
      [1, 0, 1]
    ],
    strikes: [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 0],
      [1, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_47.svg',
    name: 'oll_47',
    scramble: "l U' l' U' R2UR' BRU' R2U2",
    solution: "FR' FR2U' R' U' RUR' F2",
    type: 'Dash',
    subtype: 'Letter S',
    squares: [/* eslint-disable-line */
      [0, 1, 0],
      [1, 1, 0],
      [1, 0, 1]
    ],
    strikes: [
      [0, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
      [1, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_48.svg',
    name: 'oll_48',
    scramble: "B' U' R' U' R y URU2R' U' RU'",
    solution: "(R' FRF' R' FRF') (RU R' U' RUR')",
    type: 'Dash',
    subtype: 'Letter S',
    squares: [/* eslint-disable-line */
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 1]
    ],
    strikes: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 1, 0],
      [1, 0, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_49.svg',
    name: 'oll_49',
    scramble: "FURUR' y' U' R' U2RUR' U'",
    solution: "(LF' L' FLF' L' F) (L' U' L UL' U' L)",
    type: 'Dash',
    subtype: 'Letter S',
    squares: [/* eslint-disable-line */
      [1, 1, 0],
      [0, 1, 1],
      [1, 0, 0]
    ],
    strikes: [
      [0, 0, 0],
      [1, 0, 1],
      [0, 1, 0],
      [0, 1, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_50.svg',
    name: 'oll_50',
    scramble: "LUF' U' L' ULFL'",
    solution: "(L F' L' U' L U) (F U' L')",
    type: 'Line',
    subtype: 'Lightning',
    squares: [/* eslint-disable-line */
      [0, 0, 1],
      [1, 1, 1],
      [1, 0, 0]
    ],
    strikes: [
      [1, 1, 0],
      [0, 0, 1],
      [0, 1, 0],
      [0, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_51.svg',
    name: 'oll_51',
    scramble: "R' U' FURU' R' F' R",
    solution: "(R' FRUR' U') (F' UR)",
    type: 'Line',
    subtype: 'Lightning',
    squares: [/* eslint-disable-line */
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 1]
    ],
    strikes: [
      [0, 1, 1],
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_52.svg',
    name: 'oll_52',
    scramble: "L' U' L y' LF' L' ULFL'",
    solution: "(LF' L' U' LFL') y' (R' UR)",
    type: 'Line',
    subtype: 'Letter L',
    squares: [/* eslint-disable-line */
      [0, 0, 0],
      [1, 1, 1],
      [1, 0, 0]
    ],
    strikes: [
      [1, 1, 0],
      [1, 0, 0],
      [0, 1, 1],
      [0, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_53.svg',
    name: 'oll_53',
    scramble: "RUR' y R' FRU' R' F' R",
    solution: "(R' FRUR' F' R) y (LU' L')",
    type: 'Line',
    subtype: 'Letter L',
    squares: [/* eslint-disable-line */
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 1]
    ],
    strikes: [
      [0, 1, 1],
      [0, 0, 0],
      [1, 1, 0],
      [1, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_54.svg',
    name: 'oll_54',
    scramble: "L' B' L U' R' U R L' B L",
    solution: "(L' B' L) (R' U' RU) (L' BL)",
    type: 'Line',
    subtype: 'Letter L',
    squares: [/* eslint-disable-line */
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 1]
    ],
    strikes: [
      [1, 1, 0],
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_55.svg',
    name: 'oll_55',
    scramble: "L F L' U R U' R' LF' L' U2",
    solution: "(RBR') (LUL' U') (RB' R')",
    type: 'Line',
    subtype: 'Letter L',
    squares: [/* eslint-disable-line */
      [0, 0, 0],
      [1, 1, 1],
      [1, 0, 0]
    ],
    strikes: [
      [0, 1, 1],
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_56.svg',
    name: 'oll_56',
    scramble: "(RL' BLR') U2 (RL' BLR')U'",
    solution: "(RL' BLR') U2 (RL' BLR')",
    type: 'Dash',
    subtype: 'Letter F',
    squares: [/* eslint-disable-line */
      [1, 0, 1],
      [0, 1, 1],
      [1, 1, 1]
    ],
    strikes: [
      [0, 1, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 1, 0]
    ]
  },
  {
    active: true,
    category: 'OLL',
    image: 'oll_57.svg',
    name: 'oll_57',
    scramble: "F R' F' R L' U R U' R' L",
    solution: "(RUR' U') r (R' URU' r')",
    type: 'Line',
    subtype: 'Letter H',
    squares: [/* eslint-disable-line */
      [1, 0, 1],
      [1, 1, 1],
      [1, 0, 1]
    ],
    strikes: [
      [0, 1, 0],
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ]
  }
];

export const PLLs: algorithm[] = [
  {
    active: true,
    category: 'PLL',
    image: 'pll_1.svg',
    name: 'pll_1',
    scramble: "x' (U L' U R2 U') (L U R2 U2)",
    solution: "x' (R' D R') U2 (R D' R' U2 R2)",
    type: 'A',
    subtype: 'A',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 0, y: 0 },
        { x: 2, y: 0 },
        { x: 2, y: 2 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_2.svg',
    name: 'pll_2',
    scramble: "x' (U' R U' L2U) (R' U' L2 U2)",
    solution: "x' (L D' L) U2 (L' D L) U2 L2",
    type: 'A',
    subtype: 'A',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 0, y: 0 },
        { x: 0, y: 2 },
        { x: 2, y: 0 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_3.svg',
    name: 'pll_3',
    scramble: "x' (R U' R' D R U R' D') (R U R' D R U' R' D')",
    solution: "x' (R U' R' D R U R' D') (R U R' D R U' R' D')",
    type: 'E',
    subtype: 'E',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 0, y: 0 },
        { x: 0, y: 2 }
      ],
      [
        { x: 2, y: 0 },
        { x: 2, y: 2 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_4.svg',
    name: 'pll_4',
    scramble: "(R' URU' R2) y' (R' U' RU) (BRB' R' B2U')",
    solution: "(R' URU' R2) y' (R' U' RU) (BRB' R' B2U')",
    type: 'E',
    subtype: 'E',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 0, y: 0 },
        { x: 2, y: 0 }
      ],
      [
        { x: 0, y: 1 },
        { x: 2, y: 1 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_5.svg',
    name: 'pll_5',
    scramble: "(M2 U') (M2 U2) (M2 U') M2",
    solution: "(M2 U') (M2 U2) (M2 U') M2",
    type: 'H',
    subtype: 'H',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 1, y: 0 },
        { x: 1, y: 2 }
      ],
      [
        { x: 0, y: 1 },
        { x: 2, y: 1 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_6.svg',
    name: 'pll_6',
    scramble: "(R' UR' U') (R' U') (R' U R U R2)",
    solution: "(R2 U') (R' U' RU) (R U R U' R)",
    type: 'U',
    subtype: 'U',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 0, y: 1 },
        { x: 2, y: 1 },
        { x: 1, y: 0 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_7.svg',
    name: 'pll_7',
    scramble: "(R2 U') (R' U' RU) (R U R U' R)",
    solution: "(R' UR' U') (R' U') (R' U R U R2)",
    type: 'U',
    subtype: 'U',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 0, y: 1 },
        { x: 1, y: 0 },
        { x: 2, y: 1 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_8.svg',
    name: 'pll_8',
    scramble: "L U' R' UL' U2 R U' R' U2 R x2",
    solution: "B2 (R' U' R) B2 (L' D L' D') L2",
    type: 'J',
    subtype: 'J',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 0, y: 0 },
        { x: 0, y: 2 }
      ],
      [
        { x: 0, y: 1 },
        { x: 1, y: 2 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_9.svg',
    name: 'pll_9',
    scramble: "(R' U L U' R) (U2 L' U L U2 L') x2",
    solution: "B2 (L U L') B2 (R D' R D) R2",
    type: 'J',
    subtype: 'J',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 2, y: 0 },
        { x: 2, y: 2 }
      ],
      [
        { x: 2, y: 1 },
        { x: 1, y: 2 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_10.svg',
    name: 'pll_10',
    scramble: "(R U R' U') (R' F R2 U') (R' U' R U R' F')",
    solution: "(R U R' U') (R' F R2 U') (R' U' R U R' F')",
    type: 'T',
    subtype: 'T',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 2, y: 0 },
        { x: 2, y: 2 }
      ],
      [
        { x: 0, y: 1 },
        { x: 2, y: 1 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_11.svg',
    name: 'pll_11',
    scramble: "(L' U L' U') y'(R' F') (R2 U' R' U R' F R F) y",
    solution: "(L' U L' U') y'(R' F') (R2 U' R' U R' F R F)",
    type: 'V',
    subtype: 'V',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 0, y: 0 },
        { x: 2, y: 2 }
      ],
      [
        { x: 0, y: 1 },
        { x: 1, y: 2 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_12.svg',
    name: 'pll_12',
    scramble: "(L U2 L' U2) (L F' L' U' LU) (L F L2 U)",
    solution: "(L U2 L' U2) (L F' L' U' LU) (L F L2 U)",
    type: 'R',
    subtype: 'R',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 0, y: 0 },
        { x: 2, y: 0 }
      ],
      [
        { x: 0, y: 1 },
        { x: 1, y: 2 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_13.svg',
    name: 'pll_13',
    scramble: "(R' U2 R U2) (R' F R U R' U') (R' F' R2 U')",
    solution: "(R' U2 R U2) (R' F R U R' U') (R' F' R2 U')",
    type: 'R',
    subtype: 'R',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 0, y: 0 },
        { x: 2, y: 0 }
      ],
      [
        { x: 2, y: 1 },
        { x: 1, y: 2 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_14.svg',
    name: 'pll_14',
    scramble: "(L U L' B2) z' (R' U L' U' L) (U' R B2) z",
    solution: "z x' (U2 r' U R' U R U' r U2) y (L F' L') x",
    type: 'G',
    subtype: 'G',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 1, y: 0 },
        { x: 2, y: 1 },
        { x: 1, y: 2 }
      ],
      [
        { x: 2, y: 0 },
        { x: 0, y: 2 },
        { x: 2, y: 2 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_15.svg',
    name: 'pll_15',
    scramble: "(R' U' R B2) z (L U' R U R') (U r' U2) z' x",
    solution: "z' x' (U2 l U' LU' L' U l' U2) y' (R' F R) x",
    type: 'G',
    subtype: 'G',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 0, y: 0 },
        { x: 2, y: 2 },
        { x: 0, y: 2 }
      ],
      [
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 2 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_16.svg',
    name: 'pll_16',
    scramble: "z' (U2 l U' LU' L' U l' U2) y' (R' F R) x",
    solution: "(R' U' R B2) z (L U' R U R') (U r' U2) z' x",
    type: 'G',
    subtype: 'G',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 0, y: 0 },
        { x: 0, y: 2 },
        { x: 2, y: 2 }
      ],
      [
        { x: 1, y: 0 },
        { x: 1, y: 2 },
        { x: 0, y: 1 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_17.svg',
    name: 'pll_17',
    scramble: "z (U2 r' U R' U R U' r U2) y (L F' L') x",
    solution: "(L U L' B2) z' (R' U L' U' L) (U' R B2) z",
    type: 'G',
    subtype: 'G',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 2, y: 0 },
        { x: 2, y: 2 },
        { x: 0, y: 2 }
      ],
      [
        { x: 1, y: 0 },
        { x: 1, y: 2 },
        { x: 2, y: 1 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_18.svg',
    name: 'pll_18',
    scramble: "(U R' U' R U') (R U R U' R' U) (R U R2 U' R' U)",
    solution: "(U R' U' R U') (R U R U' R' U) (R U R2 U' R' U)",
    type: 'Z',
    subtype: 'Z',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 1, y: 0 },
        { x: 0, y: 1 }
      ],
      [
        { x: 2, y: 1 },
        { x: 1, y: 2 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_19.svg',
    name: 'pll_19',
    scramble: "L U' R U2 L' U R') (L U' R U2 L' U R') U'",
    solution: "L U' R U2 L' U R') (L U' R U2 L' U R') U'",
    type: 'N',
    subtype: 'N',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 2, y: 0 },
        { x: 0, y: 2 }
      ],
      [
        { x: 0, y: 1 },
        { x: 2, y: 1 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_20.svg',
    name: 'pll_20',
    scramble: "(R' UL' U2 R U' L) (R' UL' U2 R U' L) U",
    solution: "(R' UL' U2 R U' L) (R' UL' U2 R U' L) U",
    type: 'N',
    subtype: 'N',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 0, y: 0 },
        { x: 2, y: 2 }
      ],
      [
        { x: 0, y: 1 },
        { x: 2, y: 1 }
      ]
    ]
  },
  {
    active: true,
    category: 'PLL',
    image: 'pll_21.svg',
    name: 'pll_21',
    scramble: "(F R U' R' U' R U R' F') (R U R' U') (R' F R F')",
    solution: "(F R U' R' U' R U R' F') (R U R' U') (R' F R F')",
    type: 'Y',
    subtype: 'Y',
    squares: squresFull,
    strikes: srikesNone,
    lines: [
      [
        { x: 0, y: 0 },
        { x: 2, y: 2 }
      ],
      [
        { x: 1, y: 0 },
        { x: 0, y: 1 }
      ]
    ]
  }
];
