var require = meteorInstall({"lib":{"const.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// lib/const.ts                                                                            //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
module.export({
  categories: () => categories
});
const categories = [{
  label: 'OLL',
  value: 'OLL',
  randomizableAlgorithm: true
}, {
  label: 'PLL',
  value: 'PLL',
  randomizableAlgorithm: true
}, {
  label: '3x3x3',
  value: '3x3x3',
  randomizableScramble: true
}, {
  label: 'OLL Attack',
  value: 'OLL-attack',
  algorithmsCategory: 'OLL',
  settingsDisabled: true
}, {
  label: 'PLL Attack',
  value: 'PLL-attack',
  algorithmsCategory: 'PLL',
  settingsDisabled: true
}];
/////////////////////////////////////////////////////////////////////////////////////////////

},"types.ts":function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// lib/types.ts                                                                            //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
/////////////////////////////////////////////////////////////////////////////////////////////

},"utils.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// lib/utils.ts                                                                            //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
module.export({
  getRandomScramble: () => getRandomScramble,
  getRandomEntry: () => getRandomEntry,
  getAverage: () => getAverage
});
let random;
module.link("lodash/random", {
  default(v) {
    random = v;
  }

}, 0);
const allowedMoves = ['F', "F'", 'F2', 'B', "B'", 'B2', 'R', "R'", 'R2', 'L', "L'", 'L2', 'U', "U'", 'U2', 'D', "D'", 'D2'];

const getRandomMove = () => allowedMoves[Math.floor(Math.random() * allowedMoves.length)];

const movesConflict = (moveA, moveB) => moveA && moveB ? moveA.split('').some(character => moveB.includes(character)) : false;

const getRandomScramble = movesNr => {
  const moves = [];
  let move = '';
  let previousMove = '';

  for (let i = 0; i < movesNr; i++) {
    move = getRandomMove();

    while (movesConflict(move, previousMove)) {
      move = getRandomMove();
    }

    previousMove = move;
    moves.push(move);
  }

  return moves.join(' ');
};

const getRandomEntry = (array, excludeId) => {
  const index = random(0, array.length - 1);
  const entry = array[index];

  if (array.length > 1 && excludeId && entry._id === excludeId) {
    return getRandomEntry(array, excludeId);
  }

  return entry;
};

const getAverage = results => {
  if (!results || results.length === 0) {
    return 0;
  }

  return Math.round(results.reduce((sum, result) => sum + result, 0) / results.length);
};
/////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"imports":{"algorithmsCreation.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// server/imports/algorithmsCreation.ts                                                    //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
module.export({
  createAlgorithms: () => createAlgorithms
});
let Algorithms;
module.link("../../collections/algorithms", {
  Algorithms(v) {
    Algorithms = v;
  }

}, 0);
let OLLs, PLLs;
module.link("./const", {
  OLLs(v) {
    OLLs = v;
  },

  PLLs(v) {
    PLLs = v;
  }

}, 1);

const createAlgorithms = () => {
  const isOLL = !!Algorithms.findOne({
    category: 'OLL'
  });
  const isPLL = !!Algorithms.findOne({
    category: 'PLL'
  });
  !isOLL && OLLs.forEach(algorithm => Algorithms.insert(algorithm));
  !isPLL && PLLs.forEach(algorithm => Algorithms.insert(algorithm));
};
/////////////////////////////////////////////////////////////////////////////////////////////

},"const.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// server/imports/const.ts                                                                 //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
module.export({
  OLLs: () => OLLs,
  PLLs: () => PLLs
});
const squresFull = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
const srikesNone = [];
const OLLs = [{
  active: true,
  category: 'OLL',
  image: 'oll_1.svg',
  name: 'oll_1',
  scramble: "RU2 R' U' RUR' U' RU' R' U'",
  solution: "RU2 R' U' RUR' U' RU' R'",
  type: 'Cross',
  subtype: 'Cross',
  squares: [[0, 1, 0], [1, 1, 1], [0, 1, 0]],
  strikes: [[1, 0, 1], [0, 0, 0], [1, 0, 1], [0, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_2.svg',
  name: 'oll_2',
  scramble: "RU2 R2 U' R2U' R2U2R",
  solution: "(RU2 R2 U') (R2U') (R2U2R)",
  type: 'Cross',
  subtype: 'Cross',
  squares: [[0, 1, 0], [1, 1, 1], [0, 1, 0]],
  strikes: [[0, 0, 1], [0, 0, 0], [0, 0, 1], [1, 0, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_3.svg',
  name: 'oll_3',
  scramble: "x' (RUR' DRU' R' D' F)",
  solution: "x' (RU' R' DRUR' D')",
  type: 'Cross',
  subtype: 'Cross',
  squares: [[0, 1, 1], [1, 1, 1], [1, 1, 0]],
  strikes: [[1, 0, 0], [0, 0, 1], [0, 0, 0], [0, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_4.svg',
  name: 'oll_4',
  scramble: "RU2RDR' U2RD' R2 U2",
  solution: "R2D' RU2R'DRU2R",
  type: 'Cross',
  subtype: 'Cross',
  squares: [[0, 1, 0], [1, 1, 1], [1, 1, 1]],
  strikes: [[1, 0, 1], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_5.svg',
  name: 'oll_5',
  scramble: "x' (RU' R' DRUR' D')",
  solution: "x' (RUR' DRU' R' D')",
  type: 'Cross',
  subtype: 'Cross',
  squares: [[1, 1, 1], [1, 1, 1], [0, 1, 0]],
  strikes: [[0, 0, 0], [0, 0, 1], [0, 0, 0], [0, 0, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_6.svg',
  name: 'oll_6',
  scramble: "RUR' URU2R' U",
  solution: "L' U' LU' L' U2L",
  type: 'Cross',
  subtype: 'Cross',
  squares: [[0, 1, 0], [1, 1, 1], [0, 1, 1]],
  strikes: [[0, 0, 1], [0, 0, 0], [1, 0, 0], [1, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_7.svg',
  name: 'oll_7',
  scramble: "L' U' LU' L' U2LU'",
  solution: "RUR' URU2R'",
  type: 'Cross',
  subtype: 'Cross',
  squares: [[0, 1, 0], [1, 1, 1], [1, 1, 0]],
  strikes: [[1, 0, 0], [1, 0, 0], [0, 0, 1], [0, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_8.svg',
  name: 'oll_8',
  scramble: "FR' F' RUR2B' R' BU' R'",
  solution: "(RU2R2FR) (F' U2R' FRF')",
  type: 'Dot',
  subtype: 'Dot',
  squares: [[0, 0, 0], [0, 1, 0], [0, 0, 0]],
  strikes: [[0, 1, 0], [1, 1, 1], [0, 1, 0], [1, 1, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_9.svg',
  name: 'oll_9',
  scramble: "FR' F' RU2FR' F' RU' RU' R' U2",
  solution: "LF' L' FU2FU' RU' R' F'",
  type: 'Dot',
  subtype: 'Dot',
  squares: [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
  strikes: [[0, 1, 0], [1, 1, 0], [1, 1, 0], [0, 1, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_10.svg',
  name: 'oll_10',
  scramble: "FR' F' RU2R d' RU' R' F' U'",
  solution: "(RU2R2FRF' U2) M' URU' L'",
  type: 'Dot',
  subtype: 'Dot',
  squares: [[0, 0, 1], [0, 1, 0], [0, 0, 1]],
  strikes: [[0, 1, 0], [0, 1, 0], [0, 1, 0], [1, 1, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_11.svg',
  name: 'oll_11',
  scramble: "RU2R2FRF' U2R' FRF' U2",
  solution: "(FRUR' U' F') (fRUR' U' f')",
  type: 'Dot',
  subtype: 'Dot',
  squares: [[0, 0, 0], [0, 1, 0], [0, 0, 0]],
  strikes: [[0, 1, 1], [0, 1, 0], [0, 1, 1], [1, 1, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_12.svg',
  name: 'oll_12',
  scramble: "R' F' U2F2URU' R' F' U2R",
  solution: "R' U2FRUR' U' F2U2FR",
  type: 'Dot',
  subtype: 'Dot',
  squares: [[1, 0, 1], [0, 1, 0], [0, 0, 0]],
  strikes: [[0, 1, 0], [0, 1, 1], [0, 1, 0], [0, 1, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_13.svg',
  name: 'oll_13',
  scramble: "MU' LF2L' U' RU' R2 r",
  solution: "MUR' F2RUL' U L2 l'",
  type: 'Dot',
  subtype: 'Dot',
  squares: [[0, 0, 0], [0, 1, 0], [1, 0, 0]],
  strikes: [[1, 1, 0], [1, 1, 0], [0, 1, 1], [0, 1, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_14.svg',
  name: 'oll_14',
  scramble: "MUR' F2RUL' U L2 l'",
  solution: "MU' LF2L' U' RU' R2 r",
  type: 'Dot',
  subtype: 'Dot',
  squares: [[0, 0, 0], [0, 1, 0], [0, 0, 1]],
  strikes: [[0, 1, 1], [0, 1, 0], [1, 1, 0], [1, 1, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_15.svg',
  name: 'oll_15',
  scramble: "(MUMUMUMU) (M' UM' UM' UM' U)",
  solution: "M (URUR' U') M2 (U RU' r')",
  type: 'Dot',
  subtype: 'Letter X',
  squares: [[1, 0, 1], [0, 1, 0], [1, 0, 1]],
  strikes: [[0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_16.svg',
  name: 'oll_16',
  scramble: "(R' FRUR' U') (F' UR)",
  solution: "R' U' FURU' R' F' R",
  type: 'Dash',
  subtype: 'Letter P',
  squares: [[0, 1, 1], [0, 1, 1], [0, 0, 1]],
  strikes: [[1, 0, 0], [0, 0, 0], [1, 1, 0], [0, 1, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_17.svg',
  name: 'oll_17',
  scramble: "(L F' L' U' L U) (F U' L')",
  solution: "LUF' U' L' ULFL'",
  type: 'Dash',
  subtype: 'Letter P',
  squares: [[1, 1, 0], [1, 1, 0], [1, 0, 0]],
  strikes: [[0, 0, 1], [0, 1, 0], [0, 1, 1], [0, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_18.svg',
  name: 'oll_18',
  scramble: "F (RUR' U') F'",
  solution: "FURU' R' F'",
  type: 'Dash',
  subtype: 'Letter P',
  squares: [[1, 1, 0], [1, 1, 0], [1, 0, 0]],
  strikes: [[0, 0, 0], [1, 1, 1], [0, 1, 0], [0, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_19.svg',
  name: 'oll_19',
  scramble: "F' (L' U' LU) F",
  solution: "F' U' L' ULF",
  type: 'Dash',
  subtype: 'Letter P',
  squares: [[0, 1, 1], [0, 1, 1], [0, 0, 1]],
  strikes: [[0, 0, 0], [0, 0, 0], [0, 1, 0], [1, 1, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_20.svg',
  name: 'oll_20',
  scramble: "B' RBR' U' R' U' RUR' URU2",
  solution: "(L' U' LU' L' U) (LULF' L' F)",
  type: 'Dash',
  subtype: 'Letter W',
  squares: [[1, 1, 0], [0, 1, 1], [0, 0, 1]],
  strikes: [[0, 0, 1], [0, 0, 0], [0, 1, 0], [0, 1, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_21.svg',
  name: 'oll_21',
  scramble: "FR' F' RURUR' U' RU' R'",
  solution: "(RUR' URU') (R' U' R' FRF')",
  type: 'Dash',
  subtype: 'Letter W',
  squares: [[0, 1, 1], [1, 1, 0], [1, 0, 0]],
  strikes: [[1, 0, 0], [0, 1, 1], [0, 1, 0], [0, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_22.svg',
  name: 'oll_22',
  scramble: "R' F' LF' L' FLF' L' F2RU'",
  solution: "(R' F' LF') ( L' FLF' L' F2R)",
  type: 'Dash',
  subtype: 'Dash',
  squares: [[0, 1, 0], [1, 1, 0], [0, 0, 0]],
  strikes: [[0, 0, 0], [1, 1, 1], [0, 1, 0], [1, 0, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_23.svg',
  name: 'oll_23',
  scramble: "LFR' FRF' R' FRF2L' U",
  solution: "LFR' FRF' R' FRF2L'",
  type: 'Dash',
  subtype: 'Dash',
  squares: [[0, 1, 0], [0, 1, 1], [0, 0, 0]],
  strikes: [[0, 0, 0], [1, 0, 1], [0, 1, 0], [1, 1, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_24.svg',
  name: 'oll_24',
  scramble: "F' U' L' ULU' L' ULF",
  solution: "F' (L' U' LU) (L' U' LU) F",
  type: 'Dash',
  subtype: 'Dash',
  squares: [[0, 1, 0], [0, 1, 1], [0, 0, 0]],
  strikes: [[1, 0, 0], [1, 0, 1], [1, 1, 0], [0, 1, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_25.svg',
  name: 'oll_25',
  scramble: "F URU' R' URU' R' F'",
  solution: "F (RUR' U') (RUR' U') F'",
  type: 'Dash',
  subtype: 'Dash',
  squares: [[0, 1, 0], [1, 1, 0], [0, 0, 0]],
  strikes: [[0, 0, 1], [0, 1, 0], [0, 1, 1], [1, 0, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_26.svg',
  name: 'oll_26',
  scramble: "(r U') (r2 U) (r2 U r2 U' r)",
  solution: "(r' U) (r2U') (r2U') (r2Ur')",
  type: 'Dash',
  subtype: 'Dash',
  squares: [[0, 0, 0], [0, 1, 1], [0, 1, 0]],
  strikes: [[0, 1, 1], [0, 0, 0], [0, 0, 1], [1, 1, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_27.svg',
  name: 'oll_27',
  scramble: "(r' U) (r2U') (r2U') (r2Ur')U2",
  solution: "(lU') (l2U) (l2U) (l2U' l)",
  type: 'Dash',
  subtype: 'Dash',
  squares: [[0, 0, 0], [1, 1, 0], [0, 1, 0]],
  strikes: [[1, 1, 0], [1, 1, 1], [1, 0, 0], [0, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_28.svg',
  name: 'oll_28',
  scramble: "L F' L' U' L F L' y L' U L",
  solution: "L' U' L y' LF' L' ULFL'",
  type: 'Dash',
  subtype: 'Dash',
  squares: [[1, 0, 0], [0, 1, 1], [0, 1, 0]],
  strikes: [[0, 1, 1], [0, 0, 1], [1, 0, 0], [0, 1, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_29.svg',
  name: 'oll_29',
  scramble: "R' F R U R' F' R y' R U' R'",
  solution: "RUR' y R' FRU' R' F' R",
  type: 'Dash',
  subtype: 'Dash',
  squares: [[0, 0, 1], [1, 1, 0], [0, 1, 0]],
  strikes: [[1, 1, 0], [0, 1, 0], [0, 0, 1], [0, 0, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_30.svg',
  name: 'oll_30',
  scramble: "B' FR' F' RBURU' R' U2",
  solution: "(R' U' RU F) x' (R U' R' UD')",
  type: 'Line',
  subtype: 'Letter C',
  squares: [[1, 0, 1], [1, 1, 1], [0, 0, 0]],
  strikes: [[0, 1, 0], [0, 0, 1], [0, 1, 0], [0, 0, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_31.svg',
  name: 'oll_31',
  scramble: "RUB' RBR' U' R'",
  solution: "(R' U' R' F) (RF' U) R",
  type: 'Line',
  subtype: 'Letter C',
  squares: [[1, 1, 0], [0, 1, 0], [1, 1, 0]],
  strikes: [[0, 0, 0], [1, 1, 1], [0, 0, 0], [0, 1, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_32.svg',
  name: 'oll_32',
  scramble: "FR' F' RURU' R'",
  solution: "(RUR' U') (R' FRF')",
  type: 'Line',
  subtype: 'Letter T',
  squares: [[0, 0, 1], [1, 1, 1], [0, 0, 1]],
  strikes: [[1, 1, 0], [0, 0, 0], [1, 1, 0], [0, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_33.svg',
  name: 'oll_33',
  scramble: "FURU' R' F'",
  solution: "F (RUR' U') F'",
  type: 'Line',
  subtype: 'Letter T',
  squares: [[0, 0, 1], [1, 1, 1], [0, 0, 1]],
  strikes: [[0, 1, 0], [0, 0, 0], [0, 1, 0], [1, 0, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_34.svg',
  name: 'oll_34',
  scramble: "B' RBU2R' U' RU' R2U2R",
  solution: "(RU2R2U' RU' R' U2) (F R F')",
  type: 'Line',
  subtype: 'Letter I',
  squares: [[0, 1, 0], [0, 1, 0], [0, 1, 0]],
  strikes: [[0, 0, 0], [1, 1, 1], [0, 0, 0], [1, 1, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_35.svg',
  name: 'oll_35',
  scramble: "F (RUR' U') (RUR' U') F'",
  solution: "F (URU' R' URU' R') F'",
  type: 'Line',
  subtype: 'Letter I',
  squares: [[0, 0, 0], [1, 1, 1], [0, 0, 0]],
  strikes: [[1, 1, 0], [1, 0, 1], [1, 1, 0], [0, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_36.svg',
  name: 'oll_36',
  scramble: "L' B' LR' U' RUR' U' RUL' BL",
  solution: "(L' B' LU') (R' URU' R' URL' BL)",
  type: 'Line',
  subtype: 'Letter I',
  squares: [[0, 0, 0], [1, 1, 1], [0, 0, 0]],
  strikes: [[0, 1, 0], [1, 0, 1], [0, 1, 0], [1, 0, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_37.svg',
  name: 'oll_37',
  scramble: "(R' U' RU' R' U) y' (R' URB)U'",
  solution: "(R' U' RU' R' U) y' (R' URB)",
  type: 'Line',
  subtype: 'Letter I',
  squares: [[0, 1, 0], [0, 1, 0], [0, 1, 0]],
  strikes: [[1, 0, 0], [1, 1, 1], [1, 0, 0], [0, 1, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_38.svg',
  name: 'oll_38',
  scramble: "R' F' LF' L' F2R U2",
  solution: "r' U2RUR'U r",
  type: 'Dash',
  subtype: 'Square',
  squares: [[0, 0, 0], [0, 1, 1], [0, 1, 1]],
  strikes: [[1, 1, 0], [1, 0, 0], [0, 0, 0], [0, 1, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_39.svg',
  name: 'oll_39',
  scramble: "LFR' FRF2L' U2",
  solution: "l U2L'U'LU' l'",
  type: 'Dash',
  subtype: 'Square',
  squares: [[0, 0, 0], [1, 1, 0], [1, 1, 0]],
  strikes: [[0, 1, 1], [0, 1, 1], [0, 0, 0], [1, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_40.svg',
  name: 'oll_40',
  scramble: "R' U2 l U' RUR' l' U2R",
  solution: "x' (R' F2R2U' R' UR' F2R)",
  type: 'Dash',
  subtype: 'Square',
  squares: [[0, 1, 1], [0, 1, 1], [1, 0, 0]],
  strikes: [[1, 0, 0], [0, 0, 1], [0, 1, 0], [0, 1, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_41.svg',
  name: 'oll_41',
  scramble: "(RUR' U') (R' FRF')",
  solution: "FR' F' RURU' R'",
  type: 'Dash',
  subtype: 'Square',
  squares: [[1, 1, 0], [1, 1, 0], [0, 0, 1]],
  strikes: [[0, 0, 0], [1, 1, 0], [1, 1, 0], [0, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_42.svg',
  name: 'oll_42',
  scramble: "L F2 R' F' R F' L' U2",
  solution: "l UL'ULU2 l'",
  type: 'Dash',
  subtype: 'Letter S',
  squares: [[0, 0, 1], [0, 1, 1], [0, 1, 0]],
  strikes: [[1, 1, 0], [0, 0, 0], [0, 0, 1], [0, 1, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_43.svg',
  name: 'oll_43',
  scramble: "R' F2LFL' FR U2",
  solution: "r' U'RU'R'U2 r",
  type: 'Dash',
  subtype: 'Letter S',
  squares: [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
  strikes: [[0, 1, 1], [0, 1, 1], [1, 0, 0], [0, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_44.svg',
  name: 'oll_44',
  scramble: "MU' RU2R' U' RU' R2rU",
  solution: "F'L'U'LUF U FRUR'U'F'",
  type: 'Dash',
  subtype: 'Letter S',
  squares: [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
  strikes: [[0, 1, 0], [1, 1, 0], [0, 0, 1], [0, 0, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_45.svg',
  name: 'oll_45',
  scramble: "M' UR' U2RUR' UR2 r' U",
  solution: "FRUR'U'F' U FRUR'U'F'",
  type: 'Dash',
  subtype: 'Letter S',
  squares: [[0, 0, 1], [0, 1, 1], [0, 1, 0]],
  strikes: [[0, 1, 0], [0, 0, 1], [1, 0, 0], [1, 1, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_46.svg',
  name: 'oll_46',
  scramble: "B2R' URU' R' U' R2BR' BU2",
  solution: "F' LF' L2ULUL' U' LF2",
  type: 'Dash',
  subtype: 'Letter S',
  squares: [[0, 1, 0], [0, 1, 1], [1, 0, 1]],
  strikes: [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_47.svg',
  name: 'oll_47',
  scramble: "l U' l' U' R2UR' BRU' R2U2",
  solution: "FR' FR2U' R' U' RUR' F2",
  type: 'Dash',
  subtype: 'Letter S',
  squares: [[0, 1, 0], [1, 1, 0], [1, 0, 1]],
  strikes: [[0, 0, 0], [1, 1, 0], [0, 1, 0], [1, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_48.svg',
  name: 'oll_48',
  scramble: "B' U' R' U' R y URU2R' U' RU'",
  solution: "(R' FRF' R' FRF') (RU R' U' RUR')",
  type: 'Dash',
  subtype: 'Letter S',
  squares: [[0, 1, 1], [1, 1, 0], [0, 0, 1]],
  strikes: [[0, 0, 0], [0, 1, 0], [0, 1, 0], [1, 0, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_49.svg',
  name: 'oll_49',
  scramble: "FURUR' y' U' R' U2RUR' U'",
  solution: "(LF' L' FLF' L' F) (L' U' L UL' U' L)",
  type: 'Dash',
  subtype: 'Letter S',
  squares: [[1, 1, 0], [0, 1, 1], [1, 0, 0]],
  strikes: [[0, 0, 0], [1, 0, 1], [0, 1, 0], [0, 1, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_50.svg',
  name: 'oll_50',
  scramble: "LUF' U' L' ULFL'",
  solution: "(L F' L' U' L U) (F U' L')",
  type: 'Line',
  subtype: 'Lightning',
  squares: [[0, 0, 1], [1, 1, 1], [1, 0, 0]],
  strikes: [[1, 1, 0], [0, 0, 1], [0, 1, 0], [0, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_51.svg',
  name: 'oll_51',
  scramble: "R' U' FURU' R' F' R",
  solution: "(R' FRUR' U') (F' UR)",
  type: 'Line',
  subtype: 'Lightning',
  squares: [[1, 0, 0], [1, 1, 1], [0, 0, 1]],
  strikes: [[0, 1, 1], [0, 0, 0], [0, 1, 0], [0, 0, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_52.svg',
  name: 'oll_52',
  scramble: "L' U' L y' LF' L' ULFL'",
  solution: "(LF' L' U' LFL') y' (R' UR)",
  type: 'Line',
  subtype: 'Letter L',
  squares: [[0, 0, 0], [1, 1, 1], [1, 0, 0]],
  strikes: [[1, 1, 0], [1, 0, 0], [0, 1, 1], [0, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_53.svg',
  name: 'oll_53',
  scramble: "RUR' y R' FRU' R' F' R",
  solution: "(R' FRUR' F' R) y (LU' L')",
  type: 'Line',
  subtype: 'Letter L',
  squares: [[0, 0, 0], [1, 1, 1], [0, 0, 1]],
  strikes: [[0, 1, 1], [0, 0, 0], [1, 1, 0], [1, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_54.svg',
  name: 'oll_54',
  scramble: "L' B' L U' R' U R L' B L",
  solution: "(L' B' L) (R' U' RU) (L' BL)",
  type: 'Line',
  subtype: 'Letter L',
  squares: [[0, 0, 0], [1, 1, 1], [0, 0, 1]],
  strikes: [[1, 1, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_55.svg',
  name: 'oll_55',
  scramble: "L F L' U R U' R' LF' L' U2",
  solution: "(RBR') (LUL' U') (RB' R')",
  type: 'Line',
  subtype: 'Letter L',
  squares: [[0, 0, 0], [1, 1, 1], [1, 0, 0]],
  strikes: [[0, 1, 1], [0, 0, 1], [0, 1, 0], [1, 0, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_56.svg',
  name: 'oll_56',
  scramble: "(RL' BLR') U2 (RL' BLR')U'",
  solution: "(RL' BLR') U2 (RL' BLR')",
  type: 'Dash',
  subtype: 'Letter F',
  squares: [[1, 0, 1], [0, 1, 1], [1, 1, 1]],
  strikes: [[0, 1, 0], [0, 0, 0], [0, 0, 0], [0, 1, 0]]
}, {
  active: true,
  category: 'OLL',
  image: 'oll_57.svg',
  name: 'oll_57',
  scramble: "F R' F' R L' U R U' R' L",
  solution: "(RUR' U') r (R' URU' r')",
  type: 'Line',
  subtype: 'Letter H',
  squares: [[1, 0, 1], [1, 1, 1], [1, 0, 1]],
  strikes: [[0, 1, 0], [0, 0, 0], [0, 1, 0], [0, 0, 0]]
}];
const PLLs = [{
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
  lines: [[{
    x: 0,
    y: 0
  }, {
    x: 2,
    y: 0
  }, {
    x: 2,
    y: 2
  }]]
}, {
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
  lines: [[{
    x: 0,
    y: 0
  }, {
    x: 0,
    y: 2
  }, {
    x: 2,
    y: 0
  }]]
}, {
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
  lines: [[{
    x: 0,
    y: 0
  }, {
    x: 0,
    y: 2
  }], [{
    x: 2,
    y: 0
  }, {
    x: 2,
    y: 2
  }]]
}, {
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
  lines: [[{
    x: 0,
    y: 0
  }, {
    x: 2,
    y: 0
  }], [{
    x: 0,
    y: 1
  }, {
    x: 2,
    y: 1
  }]]
}, {
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
  lines: [[{
    x: 1,
    y: 0
  }, {
    x: 1,
    y: 2
  }], [{
    x: 0,
    y: 1
  }, {
    x: 2,
    y: 1
  }]]
}, {
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
  lines: [[{
    x: 0,
    y: 1
  }, {
    x: 2,
    y: 1
  }, {
    x: 1,
    y: 0
  }]]
}, {
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
  lines: [[{
    x: 0,
    y: 1
  }, {
    x: 1,
    y: 0
  }, {
    x: 2,
    y: 1
  }]]
}, {
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
  lines: [[{
    x: 0,
    y: 0
  }, {
    x: 0,
    y: 2
  }], [{
    x: 0,
    y: 1
  }, {
    x: 1,
    y: 2
  }]]
}, {
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
  lines: [[{
    x: 2,
    y: 0
  }, {
    x: 2,
    y: 2
  }], [{
    x: 2,
    y: 1
  }, {
    x: 1,
    y: 2
  }]]
}, {
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
  lines: [[{
    x: 2,
    y: 0
  }, {
    x: 2,
    y: 2
  }], [{
    x: 0,
    y: 1
  }, {
    x: 2,
    y: 1
  }]]
}, {
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
  lines: [[{
    x: 0,
    y: 0
  }, {
    x: 2,
    y: 2
  }], [{
    x: 0,
    y: 1
  }, {
    x: 1,
    y: 2
  }]]
}, {
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
  lines: [[{
    x: 0,
    y: 0
  }, {
    x: 2,
    y: 0
  }], [{
    x: 0,
    y: 1
  }, {
    x: 1,
    y: 2
  }]]
}, {
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
  lines: [[{
    x: 0,
    y: 0
  }, {
    x: 2,
    y: 0
  }], [{
    x: 2,
    y: 1
  }, {
    x: 1,
    y: 2
  }]]
}, {
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
  lines: [[{
    x: 1,
    y: 0
  }, {
    x: 2,
    y: 1
  }, {
    x: 1,
    y: 2
  }], [{
    x: 2,
    y: 0
  }, {
    x: 0,
    y: 2
  }, {
    x: 2,
    y: 2
  }]]
}, {
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
  lines: [[{
    x: 0,
    y: 0
  }, {
    x: 2,
    y: 2
  }, {
    x: 0,
    y: 2
  }], [{
    x: 1,
    y: 0
  }, {
    x: 0,
    y: 1
  }, {
    x: 1,
    y: 2
  }]]
}, {
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
  lines: [[{
    x: 0,
    y: 0
  }, {
    x: 0,
    y: 2
  }, {
    x: 2,
    y: 2
  }], [{
    x: 1,
    y: 0
  }, {
    x: 1,
    y: 2
  }, {
    x: 0,
    y: 1
  }]]
}, {
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
  lines: [[{
    x: 2,
    y: 0
  }, {
    x: 2,
    y: 2
  }, {
    x: 0,
    y: 2
  }], [{
    x: 1,
    y: 0
  }, {
    x: 1,
    y: 2
  }, {
    x: 2,
    y: 1
  }]]
}, {
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
  lines: [[{
    x: 1,
    y: 0
  }, {
    x: 0,
    y: 1
  }], [{
    x: 2,
    y: 1
  }, {
    x: 1,
    y: 2
  }]]
}, {
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
  lines: [[{
    x: 2,
    y: 0
  }, {
    x: 0,
    y: 2
  }], [{
    x: 0,
    y: 1
  }, {
    x: 2,
    y: 1
  }]]
}, {
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
  lines: [[{
    x: 0,
    y: 0
  }, {
    x: 2,
    y: 2
  }], [{
    x: 0,
    y: 1
  }, {
    x: 2,
    y: 1
  }]]
}, {
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
  lines: [[{
    x: 0,
    y: 0
  }, {
    x: 2,
    y: 2
  }], [{
    x: 1,
    y: 0
  }, {
    x: 0,
    y: 1
  }]]
}];
/////////////////////////////////////////////////////////////////////////////////////////////

}},"publications":{"algorithms.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// server/publications/algorithms.ts                                                       //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Algorithms;
module.link("../../collections/algorithms", {
  Algorithms(v) {
    Algorithms = v;
  }

}, 1);
Meteor.publish('algorithms', function getAlgorithms() {
  const userId = this.userId;

  if (!userId) {
    return this.ready();
  }

  return Algorithms.find();
});
/////////////////////////////////////////////////////////////////////////////////////////////

},"results.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// server/publications/results.ts                                                          //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Results;
module.link("../../collections/results", {
  Results(v) {
    Results = v;
  }

}, 1);
Meteor.publish('results', function getResults() {
  const userId = this.userId;

  if (!userId) {
    return this.ready();
  }

  return Results.find({
    userId
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////

}},"main.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// server/main.ts                                                                          //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let createAlgorithms;
module.link("./imports/algorithmsCreation", {
  createAlgorithms(v) {
    createAlgorithms = v;
  }

}, 1);
Meteor.startup(() => {
  //UniConfig.private.runOnce('createAlgorithms', createAlgorithms);
  createAlgorithms();
});
/////////////////////////////////////////////////////////////////////////////////////////////

}},"collections":{"algorithms.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// collections/algorithms.ts                                                               //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
module.export({
  Algorithms: () => Algorithms
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 1);
let check;
module.link("meteor/check", {
  check(v) {
    check = v;
  }

}, 2);
const Algorithms = new Mongo.Collection('algorithms');
Meteor.methods({
  'algorithms.toggleActive'(algId, active) {
    check(this.userId, String);
    check(active, Boolean);
    check(algId, String);
    Algorithms.update(algId, {
      $set: {
        active
      }
    });
  },

  'algorithms.activateAll'(category) {
    check(this.userId, String);
    check(category, String);
    Algorithms.update({
      category
    }, {
      $set: {
        active: true
      }
    }, {
      multi: true
    });
  },

  'algorithms.deactivateAll'(category) {
    check(this.userId, String);
    check(category, String);
    Algorithms.update({
      category
    }, {
      $set: {
        active: false
      }
    }, {
      multi: true
    });
  },

  'algorithms.insert'(_ref) {
    let {
      category,
      image,
      scramble,
      solution,
      subtype,
      type
    } = _ref;
    check(this.userId, String);
    check(category, String);
    check(image, String);
    check(scramble, String);
    check(solution, String);
    check(subtype, String);
    check(type, String);
    const doc = {
      createdAt: new Date(),
      category,
      image,
      scramble,
      solution,
      subtype,
      type
    };
    Algorithms.insert(doc);
  },

  'algorithms.search'(text) {
    check(this.userId, String);
    check(text, String);
    return Algorithms.find();
  },

  'algorithms.remove'(algorithmId) {
    check(this.userId, String);
    check(algorithmId, String);
    Algorithms.remove(algorithmId);
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////

},"results.ts":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// collections/results.ts                                                                  //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
module.export({
  Results: () => Results
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 1);
let check;
module.link("meteor/check", {
  check(v) {
    check = v;
  }

}, 2);
const Results = new Mongo.Collection('results');
Meteor.methods({
  'results.insert'(_ref) {
    let {
      algorithmId,
      category,
      scramble,
      time
    } = _ref;
    check(this.userId, String);
    check(category, String);
    check(time, Number);

    if (category === 'OLL' || category === 'PLL' || category === '3x3x3') {
      check(scramble, String);
    }

    if (category === 'OLL' || category === 'PLL') {
      check(algorithmId, String);
    }

    const doc = {
      algorithmId,
      category,
      createdAt: new Date(),
      scramble,
      time,
      userId: this.userId
    };
    Results.insert(doc);
  },

  'results.search'(text) {
    check(this.userId, String);
    check(text, String);
    return Results.find({
      userId: this.userId
    });
  },

  'results.remove'(resultId) {
    check(this.userId, String);
    check(resultId, String);
    Results.remove({
      userId: this.userId,
      resultId
    });
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".ts",
    ".jsx",
    ".tsx",
    ".mjs"
  ]
});

require("/lib/const.ts");
require("/lib/types.ts");
require("/lib/utils.ts");
require("/server/publications/algorithms.ts");
require("/server/publications/results.ts");
require("/collections/algorithms.ts");
require("/collections/results.ts");
require("/server/main.ts");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2NvbnN0LnRzIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvdXRpbHMudHMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9pbXBvcnRzL2FsZ29yaXRobXNDcmVhdGlvbi50cyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL2ltcG9ydHMvY29uc3QudHMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9wdWJsaWNhdGlvbnMvYWxnb3JpdGhtcy50cyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3B1YmxpY2F0aW9ucy9yZXN1bHRzLnRzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi50cyIsIm1ldGVvcjovL/CfkrthcHAvY29sbGVjdGlvbnMvYWxnb3JpdGhtcy50cyIsIm1ldGVvcjovL/CfkrthcHAvY29sbGVjdGlvbnMvcmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU0sQ0FBQyxNQUFQLENBQWE7QUFBQSxZQUFVLEVBQWU7QUFBekIsQ0FBYjtBQUFPLE1BQU0sVUFBVSxHQUFlLENBQ3BDO0FBQ0UsT0FBSyxFQUFFLEtBRFQ7QUFFRSxPQUFLLEVBQUUsS0FGVDtBQUdFLHVCQUFxQixFQUFFO0FBSHpCLENBRG9DLEVBTXBDO0FBQ0UsT0FBSyxFQUFFLEtBRFQ7QUFFRSxPQUFLLEVBQUUsS0FGVDtBQUdFLHVCQUFxQixFQUFFO0FBSHpCLENBTm9DLEVBV3BDO0FBQ0UsT0FBSyxFQUFFLE9BRFQ7QUFFRSxPQUFLLEVBQUUsT0FGVDtBQUdFLHNCQUFvQixFQUFFO0FBSHhCLENBWG9DLEVBZ0JwQztBQUNFLE9BQUssRUFBRSxZQURUO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxvQkFBa0IsRUFBRSxLQUh0QjtBQUlFLGtCQUFnQixFQUFFO0FBSnBCLENBaEJvQyxFQXNCcEM7QUFDRSxPQUFLLEVBQUUsWUFEVDtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0Usb0JBQWtCLEVBQUUsS0FIdEI7QUFJRSxrQkFBZ0IsRUFBRTtBQUpwQixDQXRCb0MsQ0FBL0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlAsT0FBTyxNQUFQLENBQWE7QUFBQSxtQkFBTSxRQUFnQixpQkFBdEI7QUFBc0Isc0NBQXRCO0FBQXNCO0FBQXRCLENBQWI7QUFBbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQXNCbkMsTUFBTSxZQUFZLEdBQWtCLENBQ2xDLEdBRGtDLEVBRWxDLElBRmtDLEVBR2xDLElBSGtDLEVBSWxDLEdBSmtDLEVBS2xDLElBTGtDLEVBTWxDLElBTmtDLEVBT2xDLEdBUGtDLEVBUWxDLElBUmtDLEVBU2xDLElBVGtDLEVBVWxDLEdBVmtDLEVBV2xDLElBWGtDLEVBWWxDLElBWmtDLEVBYWxDLEdBYmtDLEVBY2xDLElBZGtDLEVBZWxDLElBZmtDLEVBZ0JsQyxHQWhCa0MsRUFpQmxDLElBakJrQyxFQWtCbEMsSUFsQmtDLENBQXBDOztBQXFCQSxNQUFNLGFBQWEsR0FBRyxNQUNwQixZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUwsQ0FBVyxJQUFJLENBQUMsTUFBTCxLQUFnQixZQUFZLENBQUMsTUFBeEMsQ0FBRCxDQURkOztBQUdBLE1BQU0sYUFBYSxHQUFHLENBQUMsS0FBRCxFQUFpQixLQUFqQixLQUNwQixLQUFLLElBQUksS0FBVCxHQUNJLEtBQUssQ0FBQyxLQUFOLENBQVksRUFBWixFQUFnQixJQUFoQixDQUFxQixTQUFTLElBQUksS0FBSyxDQUFDLFFBQU4sQ0FBZSxTQUFmLENBQWxDLENBREosR0FFSSxLQUhOOztBQUtPLE1BQU0saUJBQWlCLEdBQUksT0FBRCxJQUE0QjtBQUMzRCxRQUFNLEtBQUssR0FBRyxFQUFkO0FBRUEsTUFBSSxJQUFJLEdBQUcsRUFBWDtBQUNBLE1BQUksWUFBWSxHQUFHLEVBQW5COztBQUNBLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsT0FBcEIsRUFBNkIsQ0FBQyxFQUE5QixFQUFrQztBQUNoQyxRQUFJLEdBQUcsYUFBYSxFQUFwQjs7QUFDQSxXQUFPLGFBQWEsQ0FBQyxJQUFELEVBQU8sWUFBUCxDQUFwQixFQUEwQztBQUN4QyxVQUFJLEdBQUcsYUFBYSxFQUFwQjtBQUNEOztBQUVELGdCQUFZLEdBQUcsSUFBZjtBQUNBLFNBQUssQ0FBQyxJQUFOLENBQVcsSUFBWDtBQUNEOztBQUVELFNBQU8sS0FBSyxDQUFDLElBQU4sQ0FBVyxHQUFYLENBQVA7QUFDRCxDQWhCTTs7QUFrQkEsTUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUFELEVBQWUsU0FBZixLQUEwQztBQUN0RSxRQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBRCxFQUFJLEtBQUssQ0FBQyxNQUFOLEdBQWUsQ0FBbkIsQ0FBcEI7QUFDQSxRQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBRCxDQUFuQjs7QUFFQSxNQUFJLEtBQUssQ0FBQyxNQUFOLEdBQWUsQ0FBZixJQUFvQixTQUFwQixJQUFpQyxLQUFLLENBQUMsR0FBTixLQUFjLFNBQW5ELEVBQThEO0FBQzVELFdBQU8sY0FBYyxDQUFDLEtBQUQsRUFBUSxTQUFSLENBQXJCO0FBQ0Q7O0FBRUQsU0FBTyxLQUFQO0FBQ0QsQ0FUTTs7QUFXQSxNQUFNLFVBQVUsR0FBSSxPQUFELElBQStCO0FBQ3ZELE1BQUksQ0FBQyxPQUFELElBQVksT0FBTyxDQUFDLE1BQVIsS0FBbUIsQ0FBbkMsRUFBc0M7QUFDcEMsV0FBTyxDQUFQO0FBQ0Q7O0FBRUQsU0FBTyxJQUFJLENBQUMsS0FBTCxDQUNMLE9BQU8sQ0FBQyxNQUFSLENBQWUsQ0FBQyxHQUFELEVBQU0sTUFBTixLQUFpQixHQUFHLEdBQUcsTUFBdEMsRUFBOEMsQ0FBOUMsSUFBbUQsT0FBTyxDQUFDLE1BRHRELENBQVA7QUFHRCxDQVJNLEM7Ozs7Ozs7Ozs7O0FDaEZQLE9BQU8sTUFBUCxDQUFTO0FBQUEsa0JBQWtCO0FBQWxCLENBQVQ7QUFBMkIsSUFBK0IsVUFBL0I7QUFBK0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFHbkQsTUFBTSxnQkFBZ0IsR0FBRyxNQUFLO0FBQ25DLFFBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBWCxDQUFtQjtBQUFFLFlBQVEsRUFBRTtBQUFaLEdBQW5CLENBQWhCO0FBQ0EsUUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFYLENBQW1CO0FBQUUsWUFBUSxFQUFFO0FBQVosR0FBbkIsQ0FBaEI7QUFFQSxHQUFDLEtBQUQsSUFBVSxJQUFJLENBQUMsT0FBTCxDQUFhLFNBQVMsSUFBSSxVQUFVLENBQUMsTUFBWCxDQUFrQixTQUFsQixDQUExQixDQUFWO0FBQ0EsR0FBQyxLQUFELElBQVUsSUFBSSxDQUFDLE9BQUwsQ0FBYSxTQUFTLElBQUksVUFBVSxDQUFDLE1BQVgsQ0FBa0IsU0FBbEIsQ0FBMUIsQ0FBVjtBQUNELENBTk0sQzs7Ozs7Ozs7Ozs7QUNEUCxNQUFNLE9BQU4sQ0FBTTtBQUFBLE1BQTBCLFlBQTFCO0FBQTBCO0FBQTFCLENBQU47QUFBQSxNQUFNLFVBQVUsR0FBZ0IsQ0FDOUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEOEIsRUFFOUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGOEIsRUFHOUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FIOEIsQ0FBaEM7QUFNQSxNQUFNLFVBQVUsR0FBZ0IsRUFBaEM7QUFFTyxNQUFNLElBQUksR0FBZ0IsQ0FDL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFdBSFQ7QUFJRSxNQUFJLEVBQUUsT0FKUjtBQUtFLFVBQVEsRUFBRSw2QkFMWjtBQU1FLFVBQVEsRUFBRSwwQkFOWjtBQU9FLE1BQUksRUFBRSxPQVBSO0FBUUUsU0FBTyxFQUFFLE9BUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQUQrQixFQXNCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFdBSFQ7QUFJRSxNQUFJLEVBQUUsT0FKUjtBQUtFLFVBQVEsRUFBRSxzQkFMWjtBQU1FLFVBQVEsRUFBRSw0QkFOWjtBQU9FLE1BQUksRUFBRSxPQVBSO0FBUUUsU0FBTyxFQUFFLE9BUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQXRCK0IsRUEyQy9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxXQUhUO0FBSUUsTUFBSSxFQUFFLE9BSlI7QUFLRSxVQUFRLEVBQUUsd0JBTFo7QUFNRSxVQUFRLEVBQUUsc0JBTlo7QUFPRSxNQUFJLEVBQUUsT0FQUjtBQVFFLFNBQU8sRUFBRSxPQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBZFgsQ0EzQytCLEVBZ0UvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLHFCQUxaO0FBTUUsVUFBUSxFQUFFLGlCQU5aO0FBT0UsTUFBSSxFQUFFLE9BUFI7QUFRRSxTQUFPLEVBQUUsT0FSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWRYLENBaEUrQixFQXFGL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFdBSFQ7QUFJRSxNQUFJLEVBQUUsT0FKUjtBQUtFLFVBQVEsRUFBRSxzQkFMWjtBQU1FLFVBQVEsRUFBRSxzQkFOWjtBQU9FLE1BQUksRUFBRSxPQVBSO0FBUUUsU0FBTyxFQUFFLE9BUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQXJGK0IsRUEwRy9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxXQUhUO0FBSUUsTUFBSSxFQUFFLE9BSlI7QUFLRSxVQUFRLEVBQUUsZUFMWjtBQU1FLFVBQVEsRUFBRSxrQkFOWjtBQU9FLE1BQUksRUFBRSxPQVBSO0FBUUUsU0FBTyxFQUFFLE9BUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQTFHK0IsRUErSC9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxXQUhUO0FBSUUsTUFBSSxFQUFFLE9BSlI7QUFLRSxVQUFRLEVBQUUsb0JBTFo7QUFNRSxVQUFRLEVBQUUsYUFOWjtBQU9FLE1BQUksRUFBRSxPQVBSO0FBUUUsU0FBTyxFQUFFLE9BUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQS9IK0IsRUFvSi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxXQUhUO0FBSUUsTUFBSSxFQUFFLE9BSlI7QUFLRSxVQUFRLEVBQUUseUJBTFo7QUFNRSxVQUFRLEVBQUUsMEJBTlo7QUFPRSxNQUFJLEVBQUUsS0FQUjtBQVFFLFNBQU8sRUFBRSxLQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBZFgsQ0FwSitCLEVBeUsvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLGdDQUxaO0FBTUUsVUFBUSxFQUFFLHlCQU5aO0FBT0UsTUFBSSxFQUFFLEtBUFI7QUFRRSxTQUFPLEVBQUUsS0FSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWRYLENBeksrQixFQThML0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSw2QkFMWjtBQU1FLFVBQVEsRUFBRSwyQkFOWjtBQU9FLE1BQUksRUFBRSxLQVBSO0FBUUUsU0FBTyxFQUFFLEtBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQTlMK0IsRUFtTi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsd0JBTFo7QUFNRSxVQUFRLEVBQUUsNkJBTlo7QUFPRSxNQUFJLEVBQUUsS0FQUjtBQVFFLFNBQU8sRUFBRSxLQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBZFgsQ0FuTitCLEVBd08vQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLDBCQUxaO0FBTUUsVUFBUSxFQUFFLHNCQU5aO0FBT0UsTUFBSSxFQUFFLEtBUFI7QUFRRSxTQUFPLEVBQUUsS0FSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWRYLENBeE8rQixFQTZQL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSx1QkFMWjtBQU1FLFVBQVEsRUFBRSxxQkFOWjtBQU9FLE1BQUksRUFBRSxLQVBSO0FBUUUsU0FBTyxFQUFFLEtBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQTdQK0IsRUFrUi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUscUJBTFo7QUFNRSxVQUFRLEVBQUUsdUJBTlo7QUFPRSxNQUFJLEVBQUUsS0FQUjtBQVFFLFNBQU8sRUFBRSxLQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBZFgsQ0FsUitCLEVBdVMvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLCtCQUxaO0FBTUUsVUFBUSxFQUFFLDRCQU5aO0FBT0UsTUFBSSxFQUFFLEtBUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWRYLENBdlMrQixFQTRUL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSx1QkFMWjtBQU1FLFVBQVEsRUFBRSxxQkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQTVUK0IsRUFpVi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsNEJBTFo7QUFNRSxVQUFRLEVBQUUsa0JBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBZFgsQ0FqVitCLEVBc1cvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLGdCQUxaO0FBTUUsVUFBUSxFQUFFLGFBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBZFgsQ0F0VytCLEVBMlgvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLGlCQUxaO0FBTUUsVUFBUSxFQUFFLGNBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBZFgsQ0EzWCtCLEVBZ1ovQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLDRCQUxaO0FBTUUsVUFBUSxFQUFFLCtCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWRYLENBaForQixFQXFhL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSx5QkFMWjtBQU1FLFVBQVEsRUFBRSw2QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQXJhK0IsRUEwYi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsNEJBTFo7QUFNRSxVQUFRLEVBQUUsK0JBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxNQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBZFgsQ0ExYitCLEVBK2MvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLHVCQUxaO0FBTUUsVUFBUSxFQUFFLHFCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsTUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWRYLENBL2MrQixFQW9lL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSxzQkFMWjtBQU1FLFVBQVEsRUFBRSw0QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLE1BUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQXBlK0IsRUF5Zi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsc0JBTFo7QUFNRSxVQUFRLEVBQUUsMEJBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxNQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBZFgsQ0F6ZitCLEVBOGdCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSw4QkFMWjtBQU1FLFVBQVEsRUFBRSw4QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLE1BUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQTlnQitCLEVBbWlCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSxnQ0FMWjtBQU1FLFVBQVEsRUFBRSw0QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLE1BUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQW5pQitCLEVBd2pCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSw0QkFMWjtBQU1FLFVBQVEsRUFBRSx5QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLE1BUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQXhqQitCLEVBNmtCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSw2QkFMWjtBQU1FLFVBQVEsRUFBRSx3QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLE1BUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQTdrQitCLEVBa21CL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSx3QkFMWjtBQU1FLFVBQVEsRUFBRSwrQkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQWxtQitCLEVBdW5CL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSxpQkFMWjtBQU1FLFVBQVEsRUFBRSx3QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQXZuQitCLEVBNG9CL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSxpQkFMWjtBQU1FLFVBQVEsRUFBRSxxQkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQTVvQitCLEVBaXFCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSxhQUxaO0FBTUUsVUFBUSxFQUFFLGdCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWRYLENBanFCK0IsRUFzckIvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLHdCQUxaO0FBTUUsVUFBUSxFQUFFLDhCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWRYLENBdHJCK0IsRUEyc0IvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLDBCQUxaO0FBTUUsVUFBUSxFQUFFLHdCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWRYLENBM3NCK0IsRUFndUIvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLDhCQUxaO0FBTUUsVUFBUSxFQUFFLGtDQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWRYLENBaHVCK0IsRUFxdkIvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLGdDQUxaO0FBTUUsVUFBUSxFQUFFLDhCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWRYLENBcnZCK0IsRUEwd0IvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLHFCQUxaO0FBTUUsVUFBUSxFQUFFLGNBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxRQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBZFgsQ0Exd0IrQixFQSt4Qi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsZ0JBTFo7QUFNRSxVQUFRLEVBQUUsZ0JBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxRQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBZFgsQ0EveEIrQixFQW96Qi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsd0JBTFo7QUFNRSxVQUFRLEVBQUUsMkJBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxRQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBZFgsQ0FwekIrQixFQXkwQi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUscUJBTFo7QUFNRSxVQUFRLEVBQUUsaUJBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxRQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBZFgsQ0F6MEIrQixFQTgxQi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsdUJBTFo7QUFNRSxVQUFRLEVBQUUsY0FOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQTkxQitCLEVBbTNCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSxpQkFMWjtBQU1FLFVBQVEsRUFBRSxnQkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQW4zQitCLEVBdzRCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSx1QkFMWjtBQU1FLFVBQVEsRUFBRSx1QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQXg0QitCLEVBNjVCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSx3QkFMWjtBQU1FLFVBQVEsRUFBRSx1QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQTc1QitCLEVBazdCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSwyQkFMWjtBQU1FLFVBQVEsRUFBRSx1QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQWw3QitCLEVBdThCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSw0QkFMWjtBQU1FLFVBQVEsRUFBRSx5QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQXY4QitCLEVBNDlCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSwrQkFMWjtBQU1FLFVBQVEsRUFBRSxtQ0FOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQTU5QitCLEVBaS9CL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSwyQkFMWjtBQU1FLFVBQVEsRUFBRSx1Q0FOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQWovQitCLEVBc2dDL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSxrQkFMWjtBQU1FLFVBQVEsRUFBRSw0QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFdBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQXRnQytCLEVBMmhDL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSxxQkFMWjtBQU1FLFVBQVEsRUFBRSx1QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFdBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQTNoQytCLEVBZ2pDL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSx5QkFMWjtBQU1FLFVBQVEsRUFBRSw2QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQWhqQytCLEVBcWtDL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSx3QkFMWjtBQU1FLFVBQVEsRUFBRSw0QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQXJrQytCLEVBMGxDL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSwwQkFMWjtBQU1FLFVBQVEsRUFBRSw4QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQTFsQytCLEVBK21DL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSw0QkFMWjtBQU1FLFVBQVEsRUFBRSwyQkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQS9tQytCLEVBb29DL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSw0QkFMWjtBQU1FLFVBQVEsRUFBRSwwQkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQXBvQytCLEVBeXBDL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSwwQkFMWjtBQU1FLFVBQVEsRUFBRSwwQkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFkWCxDQXpwQytCLENBQTFCO0FBZ3JDQSxNQUFNLElBQUksR0FBZ0IsQ0FDL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFdBSFQ7QUFJRSxNQUFJLEVBQUUsT0FKUjtBQUtFLFVBQVEsRUFBRSwrQkFMWjtBQU1FLFVBQVEsRUFBRSxpQ0FOWjtBQU9FLE1BQUksRUFBRSxHQVBSO0FBUUUsU0FBTyxFQUFFLEdBUlg7QUFTRSxTQUFPLEVBQUUsVUFUWDtBQVVFLFNBQU8sRUFBRSxVQVZYO0FBV0UsT0FBSyxFQUFFLENBQ0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLEVBR0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBSEYsQ0FESztBQVhULENBRCtCLEVBb0IvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLGdDQUxaO0FBTUUsVUFBUSxFQUFFLCtCQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsRUFHRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FIRixDQURLO0FBWFQsQ0FwQitCLEVBdUMvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLGdEQUxaO0FBTUUsVUFBUSxFQUFFLGdEQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FESyxFQUtMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQUxLO0FBWFQsQ0F2QytCLEVBNkQvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLDJDQUxaO0FBTUUsVUFBUSxFQUFFLDJDQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FESyxFQUtMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQUxLO0FBWFQsQ0E3RCtCLEVBbUYvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLDRCQUxaO0FBTUUsVUFBUSxFQUFFLDRCQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FESyxFQUtMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQUxLO0FBWFQsQ0FuRitCLEVBeUcvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLG1DQUxaO0FBTUUsVUFBUSxFQUFFLGlDQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsRUFHRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FIRixDQURLO0FBWFQsQ0F6RytCLEVBNEgvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLGlDQUxaO0FBTUUsVUFBUSxFQUFFLG1DQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsRUFHRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FIRixDQURLO0FBWFQsQ0E1SCtCLEVBK0kvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLGdDQUxaO0FBTUUsVUFBUSxFQUFFLGlDQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FESyxFQUtMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQUxLO0FBWFQsQ0EvSStCLEVBcUsvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLG9DQUxaO0FBTUUsVUFBUSxFQUFFLDhCQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FESyxFQUtMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQUxLO0FBWFQsQ0FySytCLEVBMkwvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLDRDQUxaO0FBTUUsVUFBUSxFQUFFLDRDQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FESyxFQUtMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQUxLO0FBWFQsQ0EzTCtCLEVBaU4vQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLGdEQUxaO0FBTUUsVUFBUSxFQUFFLDhDQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FESyxFQUtMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQUxLO0FBWFQsQ0FqTitCLEVBdU8vQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLHlDQUxaO0FBTUUsVUFBUSxFQUFFLHlDQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FESyxFQUtMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQUxLO0FBWFQsQ0F2TytCLEVBNlAvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLDZDQUxaO0FBTUUsVUFBUSxFQUFFLDZDQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FESyxFQUtMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQUxLO0FBWFQsQ0E3UCtCLEVBbVIvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLDJDQUxaO0FBTUUsVUFBUSxFQUFFLDZDQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsRUFHRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FIRixDQURLLEVBTUwsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLEVBR0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBSEYsQ0FOSztBQVhULENBblIrQixFQTJTL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSw2Q0FMWjtBQU1FLFVBQVEsRUFBRSw4Q0FOWjtBQU9FLE1BQUksRUFBRSxHQVBSO0FBUUUsU0FBTyxFQUFFLEdBUlg7QUFTRSxTQUFPLEVBQUUsVUFUWDtBQVVFLFNBQU8sRUFBRSxVQVZYO0FBV0UsT0FBSyxFQUFFLENBQ0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLEVBR0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBSEYsQ0FESyxFQU1MLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixFQUdFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUhGLENBTks7QUFYVCxDQTNTK0IsRUFtVS9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsMkNBTFo7QUFNRSxVQUFRLEVBQUUsNkNBTlo7QUFPRSxNQUFJLEVBQUUsR0FQUjtBQVFFLFNBQU8sRUFBRSxHQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxTQUFPLEVBQUUsVUFWWDtBQVdFLE9BQUssRUFBRSxDQUNMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixFQUdFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUhGLENBREssRUFNTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsRUFHRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FIRixDQU5LO0FBWFQsQ0FuVStCLEVBMlYvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLDBDQUxaO0FBTUUsVUFBUSxFQUFFLDJDQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsRUFHRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FIRixDQURLLEVBTUwsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLEVBR0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBSEYsQ0FOSztBQVhULENBM1YrQixFQW1YL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSxpREFMWjtBQU1FLFVBQVEsRUFBRSxpREFOWjtBQU9FLE1BQUksRUFBRSxHQVBSO0FBUUUsU0FBTyxFQUFFLEdBUlg7QUFTRSxTQUFPLEVBQUUsVUFUWDtBQVVFLFNBQU8sRUFBRSxVQVZYO0FBV0UsT0FBSyxFQUFFLENBQ0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLENBREssRUFLTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FMSztBQVhULENBblgrQixFQXlZL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSwyQ0FMWjtBQU1FLFVBQVEsRUFBRSwyQ0FOWjtBQU9FLE1BQUksRUFBRSxHQVBSO0FBUUUsU0FBTyxFQUFFLEdBUlg7QUFTRSxTQUFPLEVBQUUsVUFUWDtBQVVFLFNBQU8sRUFBRSxVQVZYO0FBV0UsT0FBSyxFQUFFLENBQ0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLENBREssRUFLTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FMSztBQVhULENBelkrQixFQStaL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSx5Q0FMWjtBQU1FLFVBQVEsRUFBRSx5Q0FOWjtBQU9FLE1BQUksRUFBRSxHQVBSO0FBUUUsU0FBTyxFQUFFLEdBUlg7QUFTRSxTQUFPLEVBQUUsVUFUWDtBQVVFLFNBQU8sRUFBRSxVQVZYO0FBV0UsT0FBSyxFQUFFLENBQ0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLENBREssRUFLTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FMSztBQVhULENBL1orQixFQXFiL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSxrREFMWjtBQU1FLFVBQVEsRUFBRSxrREFOWjtBQU9FLE1BQUksRUFBRSxHQVBSO0FBUUUsU0FBTyxFQUFFLEdBUlg7QUFTRSxTQUFPLEVBQUUsVUFUWDtBQVVFLFNBQU8sRUFBRSxVQVZYO0FBV0UsT0FBSyxFQUFFLENBQ0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLENBREssRUFLTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FMSztBQVhULENBcmIrQixDQUExQixDOzs7Ozs7Ozs7OztBQzFyQ1A7QUFBUyxNQUFRLEtBQVIsQ0FBYyxlQUFkLEVBQThCO0FBQUE7QUFBQTtBQUFBOztBQUFBLENBQTlCLEVBQThCLENBQTlCO0FBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFHdkMsTUFBTSxDQUFDLE9BQVAsQ0FBZSxZQUFmLEVBQTZCLFNBQVMsYUFBVCxHQUFzQjtBQUNqRCxRQUFNLE1BQU0sR0FBRyxLQUFLLE1BQXBCOztBQUNBLE1BQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxXQUFPLEtBQUssS0FBTCxFQUFQO0FBQ0Q7O0FBRUQsU0FBTyxVQUFVLENBQUMsSUFBWCxFQUFQO0FBQ0QsQ0FQRCxFOzs7Ozs7Ozs7OztBQ0hBO0FBQVMsTUFBUSxLQUFSLENBQWMsZUFBZCxFQUE4QjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxDQUE5QixFQUE4QixDQUE5QjtBQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBR3ZDLE1BQU0sQ0FBQyxPQUFQLENBQWUsU0FBZixFQUEwQixTQUFTLFVBQVQsR0FBbUI7QUFDM0MsUUFBTSxNQUFNLEdBQUcsS0FBSyxNQUFwQjs7QUFDQSxNQUFJLENBQUMsTUFBTCxFQUFhO0FBQ1gsV0FBTyxLQUFLLEtBQUwsRUFBUDtBQUNEOztBQUVELFNBQU8sT0FBTyxDQUFDLElBQVIsQ0FBYTtBQUFFO0FBQUYsR0FBYixDQUFQO0FBQ0QsQ0FQRCxFOzs7Ozs7Ozs7OztBQ0hBO0FBQVMsTUFBUSxLQUFSLENBQWMsZUFBZCxFQUE4QjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxDQUE5QixFQUE4QixDQUE5QjtBQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBSXZDLE1BQU0sQ0FBQyxPQUFQLENBQWUsTUFBSztBQUNsQjtBQUNBLGtCQUFnQjtBQUNqQixDQUhELEU7Ozs7Ozs7Ozs7O0FDSkEsT0FBTyxNQUFQLENBQVM7QUFBTSxZQUFRO0FBQWQsQ0FBVDtBQUF1QztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFJaEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsVUFBVixDQUFxQixZQUFyQixDQUFuQjtBQUVQLE1BQU0sQ0FBQyxPQUFQLENBQWU7QUFDYiw0QkFBMEIsS0FBMUIsRUFBaUMsTUFBakMsRUFBdUM7QUFDckMsU0FBSyxDQUFDLEtBQUssTUFBTixFQUFjLE1BQWQsQ0FBTDtBQUNBLFNBQUssQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFMO0FBQ0EsU0FBSyxDQUFDLEtBQUQsRUFBUSxNQUFSLENBQUw7QUFFQSxjQUFVLENBQUMsTUFBWCxDQUFrQixLQUFsQixFQUF5QjtBQUFFLFVBQUksRUFBRTtBQUFFO0FBQUY7QUFBUixLQUF6QjtBQUNELEdBUFk7O0FBUWIsMkJBQXlCLFFBQXpCLEVBQWlDO0FBQy9CLFNBQUssQ0FBQyxLQUFLLE1BQU4sRUFBYyxNQUFkLENBQUw7QUFDQSxTQUFLLENBQUMsUUFBRCxFQUFXLE1BQVgsQ0FBTDtBQUVBLGNBQVUsQ0FBQyxNQUFYLENBQ0U7QUFBRTtBQUFGLEtBREYsRUFFRTtBQUFFLFVBQUksRUFBRTtBQUFFLGNBQU0sRUFBRTtBQUFWO0FBQVIsS0FGRixFQUdFO0FBQUUsV0FBSyxFQUFFO0FBQVQsS0FIRjtBQUtELEdBakJZOztBQWtCYiw2QkFBMkIsUUFBM0IsRUFBbUM7QUFDakMsU0FBSyxDQUFDLEtBQUssTUFBTixFQUFjLE1BQWQsQ0FBTDtBQUNBLFNBQUssQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUFMO0FBRUEsY0FBVSxDQUFDLE1BQVgsQ0FDRTtBQUFFO0FBQUYsS0FERixFQUVFO0FBQUUsVUFBSSxFQUFFO0FBQUUsY0FBTSxFQUFFO0FBQVY7QUFBUixLQUZGLEVBR0U7QUFBRSxXQUFLLEVBQUU7QUFBVCxLQUhGO0FBS0QsR0EzQlk7O0FBNEJiLDRCQUEwRTtBQUFBLFFBQXREO0FBQUUsY0FBRjtBQUFZLFdBQVo7QUFBbUIsY0FBbkI7QUFBNkIsY0FBN0I7QUFBdUMsYUFBdkM7QUFBZ0Q7QUFBaEQsS0FBc0Q7QUFDeEUsU0FBSyxDQUFDLEtBQUssTUFBTixFQUFjLE1BQWQsQ0FBTDtBQUNBLFNBQUssQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUFMO0FBQ0EsU0FBSyxDQUFDLEtBQUQsRUFBUSxNQUFSLENBQUw7QUFDQSxTQUFLLENBQUMsUUFBRCxFQUFXLE1BQVgsQ0FBTDtBQUNBLFNBQUssQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUFMO0FBQ0EsU0FBSyxDQUFDLE9BQUQsRUFBVSxNQUFWLENBQUw7QUFDQSxTQUFLLENBQUMsSUFBRCxFQUFPLE1BQVAsQ0FBTDtBQUVBLFVBQU0sR0FBRyxHQUFHO0FBQ1YsZUFBUyxFQUFFLElBQUksSUFBSixFQUREO0FBRVYsY0FGVTtBQUdWLFdBSFU7QUFJVixjQUpVO0FBS1YsY0FMVTtBQU1WLGFBTlU7QUFPVjtBQVBVLEtBQVo7QUFVQSxjQUFVLENBQUMsTUFBWCxDQUFrQixHQUFsQjtBQUNELEdBaERZOztBQWlEYixzQkFBb0IsSUFBcEIsRUFBd0I7QUFDdEIsU0FBSyxDQUFDLEtBQUssTUFBTixFQUFjLE1BQWQsQ0FBTDtBQUNBLFNBQUssQ0FBQyxJQUFELEVBQU8sTUFBUCxDQUFMO0FBRUEsV0FBTyxVQUFVLENBQUMsSUFBWCxFQUFQO0FBQ0QsR0F0RFk7O0FBdURiLHNCQUFvQixXQUFwQixFQUErQjtBQUM3QixTQUFLLENBQUMsS0FBSyxNQUFOLEVBQWMsTUFBZCxDQUFMO0FBQ0EsU0FBSyxDQUFDLFdBQUQsRUFBYyxNQUFkLENBQUw7QUFFQSxjQUFVLENBQUMsTUFBWCxDQUFrQixXQUFsQjtBQUNEOztBQTVEWSxDQUFmLEU7Ozs7Ozs7Ozs7O0FDTkEsT0FBTyxNQUFQLENBQVM7QUFBTSxTQUFFLEVBQU07QUFBZCxDQUFUO0FBQXVCLElBQWdCLE1BQWhCO0FBQWdCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFJaEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsVUFBVixDQUFxQixTQUFyQixDQUFoQjtBQUVQLE1BQU0sQ0FBQyxPQUFQLENBQWU7QUFDYix5QkFBMEQ7QUFBQSxRQUF6QztBQUFFLGlCQUFGO0FBQWUsY0FBZjtBQUF5QixjQUF6QjtBQUFtQztBQUFuQyxLQUF5QztBQUN4RCxTQUFLLENBQUMsS0FBSyxNQUFOLEVBQWMsTUFBZCxDQUFMO0FBQ0EsU0FBSyxDQUFDLFFBQUQsRUFBVyxNQUFYLENBQUw7QUFDQSxTQUFLLENBQUMsSUFBRCxFQUFPLE1BQVAsQ0FBTDs7QUFFQSxRQUFJLFFBQVEsS0FBSyxLQUFiLElBQXNCLFFBQVEsS0FBSyxLQUFuQyxJQUE0QyxRQUFRLEtBQUssT0FBN0QsRUFBc0U7QUFDcEUsV0FBSyxDQUFDLFFBQUQsRUFBVyxNQUFYLENBQUw7QUFDRDs7QUFFRCxRQUFJLFFBQVEsS0FBSyxLQUFiLElBQXNCLFFBQVEsS0FBSyxLQUF2QyxFQUE4QztBQUM1QyxXQUFLLENBQUMsV0FBRCxFQUFjLE1BQWQsQ0FBTDtBQUNEOztBQUVELFVBQU0sR0FBRyxHQUFHO0FBQ1YsaUJBRFU7QUFFVixjQUZVO0FBR1YsZUFBUyxFQUFFLElBQUksSUFBSixFQUhEO0FBSVYsY0FKVTtBQUtWLFVBTFU7QUFNVixZQUFNLEVBQUUsS0FBSztBQU5ILEtBQVo7QUFTQSxXQUFPLENBQUMsTUFBUixDQUFlLEdBQWY7QUFDRCxHQXhCWTs7QUF5QmIsbUJBQWlCLElBQWpCLEVBQXFCO0FBQ25CLFNBQUssQ0FBQyxLQUFLLE1BQU4sRUFBYyxNQUFkLENBQUw7QUFDQSxTQUFLLENBQUMsSUFBRCxFQUFPLE1BQVAsQ0FBTDtBQUVBLFdBQU8sT0FBTyxDQUFDLElBQVIsQ0FBYTtBQUFFLFlBQU0sRUFBRSxLQUFLO0FBQWYsS0FBYixDQUFQO0FBQ0QsR0E5Qlk7O0FBK0JiLG1CQUFpQixRQUFqQixFQUF5QjtBQUN2QixTQUFLLENBQUMsS0FBSyxNQUFOLEVBQWMsTUFBZCxDQUFMO0FBQ0EsU0FBSyxDQUFDLFFBQUQsRUFBVyxNQUFYLENBQUw7QUFFQSxXQUFPLENBQUMsTUFBUixDQUFlO0FBQUUsWUFBTSxFQUFFLEtBQUssTUFBZjtBQUF1QjtBQUF2QixLQUFmO0FBQ0Q7O0FBcENZLENBQWYsRSIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2F0ZWdvcnkgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGNhdGVnb3JpZXM6IGNhdGVnb3J5W10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ09MTCcsXG4gICAgdmFsdWU6ICdPTEwnLFxuICAgIHJhbmRvbWl6YWJsZUFsZ29yaXRobTogdHJ1ZVxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdQTEwnLFxuICAgIHZhbHVlOiAnUExMJyxcbiAgICByYW5kb21pemFibGVBbGdvcml0aG06IHRydWVcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnM3gzeDMnLFxuICAgIHZhbHVlOiAnM3gzeDMnLFxuICAgIHJhbmRvbWl6YWJsZVNjcmFtYmxlOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ09MTCBBdHRhY2snLFxuICAgIHZhbHVlOiAnT0xMLWF0dGFjaycsXG4gICAgYWxnb3JpdGhtc0NhdGVnb3J5OiAnT0xMJyxcbiAgICBzZXR0aW5nc0Rpc2FibGVkOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1BMTCBBdHRhY2snLFxuICAgIHZhbHVlOiAnUExMLWF0dGFjaycsXG4gICAgYWxnb3JpdGhtc0NhdGVnb3J5OiAnUExMJyxcbiAgICBzZXR0aW5nc0Rpc2FibGVkOiB0cnVlXG4gIH1cbl07XG4iLCJpbXBvcnQgcmFuZG9tIGZyb20gJ2xvZGFzaC9yYW5kb20nO1xuXG50eXBlIGFsbG93ZWRNb3ZlID1cbiAgfCAnRidcbiAgfCBcIkYnXCJcbiAgfCAnRjInXG4gIHwgJ0InXG4gIHwgXCJCJ1wiXG4gIHwgJ0IyJ1xuICB8ICdSJ1xuICB8IFwiUidcIlxuICB8ICdSMidcbiAgfCAnTCdcbiAgfCBcIkwnXCJcbiAgfCAnTDInXG4gIHwgJ1UnXG4gIHwgXCJVJ1wiXG4gIHwgJ1UyJ1xuICB8ICdEJ1xuICB8IFwiRCdcIlxuICB8ICdEMic7XG5cbmNvbnN0IGFsbG93ZWRNb3ZlczogYWxsb3dlZE1vdmVbXSA9IFtcbiAgJ0YnLFxuICBcIkYnXCIsXG4gICdGMicsXG4gICdCJyxcbiAgXCJCJ1wiLFxuICAnQjInLFxuICAnUicsXG4gIFwiUidcIixcbiAgJ1IyJyxcbiAgJ0wnLFxuICBcIkwnXCIsXG4gICdMMicsXG4gICdVJyxcbiAgXCJVJ1wiLFxuICAnVTInLFxuICAnRCcsXG4gIFwiRCdcIixcbiAgJ0QyJ1xuXTtcblxuY29uc3QgZ2V0UmFuZG9tTW92ZSA9ICgpOiBhbGxvd2VkTW92ZSA9PlxuICBhbGxvd2VkTW92ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxsb3dlZE1vdmVzLmxlbmd0aCldO1xuXG5jb25zdCBtb3Zlc0NvbmZsaWN0ID0gKG1vdmVBPzogc3RyaW5nLCBtb3ZlQj86IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgbW92ZUEgJiYgbW92ZUJcbiAgICA/IG1vdmVBLnNwbGl0KCcnKS5zb21lKGNoYXJhY3RlciA9PiBtb3ZlQi5pbmNsdWRlcyhjaGFyYWN0ZXIpKVxuICAgIDogZmFsc2U7XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21TY3JhbWJsZSA9IChtb3Zlc05yOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBtb3ZlcyA9IFtdO1xuXG4gIGxldCBtb3ZlID0gJyc7XG4gIGxldCBwcmV2aW91c01vdmUgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlc05yOyBpKyspIHtcbiAgICBtb3ZlID0gZ2V0UmFuZG9tTW92ZSgpO1xuICAgIHdoaWxlIChtb3Zlc0NvbmZsaWN0KG1vdmUsIHByZXZpb3VzTW92ZSkpIHtcbiAgICAgIG1vdmUgPSBnZXRSYW5kb21Nb3ZlKCk7XG4gICAgfVxuXG4gICAgcHJldmlvdXNNb3ZlID0gbW92ZTtcbiAgICBtb3Zlcy5wdXNoKG1vdmUpO1xuICB9XG5cbiAgcmV0dXJuIG1vdmVzLmpvaW4oJyAnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21FbnRyeSA9IChhcnJheTogYW55W10sIGV4Y2x1ZGVJZD86IHN0cmluZyk6IGFueSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gcmFuZG9tKDAsIGFycmF5Lmxlbmd0aCAtIDEpO1xuICBjb25zdCBlbnRyeSA9IGFycmF5W2luZGV4XTtcblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMSAmJiBleGNsdWRlSWQgJiYgZW50cnkuX2lkID09PSBleGNsdWRlSWQpIHtcbiAgICByZXR1cm4gZ2V0UmFuZG9tRW50cnkoYXJyYXksIGV4Y2x1ZGVJZCk7XG4gIH1cblxuICByZXR1cm4gZW50cnk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QXZlcmFnZSA9IChyZXN1bHRzPzogbnVtYmVyW10pOiBudW1iZXIgPT4ge1xuICBpZiAoIXJlc3VsdHMgfHwgcmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKFxuICAgIHJlc3VsdHMucmVkdWNlKChzdW0sIHJlc3VsdCkgPT4gc3VtICsgcmVzdWx0LCAwKSAvIHJlc3VsdHMubGVuZ3RoXG4gICk7XG59O1xuIiwiaW1wb3J0IHsgQWxnb3JpdGhtcyB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2FsZ29yaXRobXMnO1xuaW1wb3J0IHsgT0xMcywgUExMcyB9IGZyb20gJy4vY29uc3QnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQWxnb3JpdGhtcyA9ICgpID0+IHtcbiAgY29uc3QgaXNPTEwgPSAhIUFsZ29yaXRobXMuZmluZE9uZSh7IGNhdGVnb3J5OiAnT0xMJyB9KTtcbiAgY29uc3QgaXNQTEwgPSAhIUFsZ29yaXRobXMuZmluZE9uZSh7IGNhdGVnb3J5OiAnUExMJyB9KTtcblxuICAhaXNPTEwgJiYgT0xMcy5mb3JFYWNoKGFsZ29yaXRobSA9PiBBbGdvcml0aG1zLmluc2VydChhbGdvcml0aG0pKTtcbiAgIWlzUExMICYmIFBMTHMuZm9yRWFjaChhbGdvcml0aG0gPT4gQWxnb3JpdGhtcy5pbnNlcnQoYWxnb3JpdGhtKSk7XG59O1xuIiwiaW1wb3J0IHsgYWxnb3JpdGhtLCBzcXVhcmVzVHlwZSwgc3RyaWtlc1R5cGUgfSBmcm9tICcuLi8uLi9saWIvdHlwZXMnO1xuXG5jb25zdCBzcXVyZXNGdWxsOiBzcXVhcmVzVHlwZSA9IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gIFsxLCAxLCAxXSxcbiAgWzEsIDEsIDFdLFxuICBbMSwgMSwgMV1cbl07XG5cbmNvbnN0IHNyaWtlc05vbmU6IHN0cmlrZXNUeXBlID0gW107XG5cbmV4cG9ydCBjb25zdCBPTExzOiBhbGdvcml0aG1bXSA9IFtcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMScsXG4gICAgc2NyYW1ibGU6IFwiUlUyIFInIFUnIFJVUicgVScgUlUnIFInIFUnXCIsXG4gICAgc29sdXRpb246IFwiUlUyIFInIFUnIFJVUicgVScgUlUnIFInXCIsXG4gICAgdHlwZTogJ0Nyb3NzJyxcbiAgICBzdWJ0eXBlOiAnQ3Jvc3MnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMicsXG4gICAgc2NyYW1ibGU6IFwiUlUyIFIyIFUnIFIyVScgUjJVMlJcIixcbiAgICBzb2x1dGlvbjogXCIoUlUyIFIyIFUnKSAoUjJVJykgKFIyVTJSKVwiLFxuICAgIHR5cGU6ICdDcm9zcycsXG4gICAgc3VidHlwZTogJ0Nyb3NzJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzMuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzMnLFxuICAgIHNjcmFtYmxlOiBcIngnIChSVVInIERSVScgUicgRCcgRilcIixcbiAgICBzb2x1dGlvbjogXCJ4JyAoUlUnIFInIERSVVInIEQnKVwiLFxuICAgIHR5cGU6ICdDcm9zcycsXG4gICAgc3VidHlwZTogJ0Nyb3NzJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzQuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQnLFxuICAgIHNjcmFtYmxlOiBcIlJVMlJEUicgVTJSRCcgUjIgVTJcIixcbiAgICBzb2x1dGlvbjogXCJSMkQnIFJVMlInRFJVMlJcIixcbiAgICB0eXBlOiAnQ3Jvc3MnLFxuICAgIHN1YnR5cGU6ICdDcm9zcycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF81LnN2ZycsXG4gICAgbmFtZTogJ29sbF81JyxcbiAgICBzY3JhbWJsZTogXCJ4JyAoUlUnIFInIERSVVInIEQnKVwiLFxuICAgIHNvbHV0aW9uOiBcIngnIChSVVInIERSVScgUicgRCcpXCIsXG4gICAgdHlwZTogJ0Nyb3NzJyxcbiAgICBzdWJ0eXBlOiAnQ3Jvc3MnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNicsXG4gICAgc2NyYW1ibGU6IFwiUlVSJyBVUlUyUicgVVwiLFxuICAgIHNvbHV0aW9uOiBcIkwnIFUnIExVJyBMJyBVMkxcIixcbiAgICB0eXBlOiAnQ3Jvc3MnLFxuICAgIHN1YnR5cGU6ICdDcm9zcycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF83LnN2ZycsXG4gICAgbmFtZTogJ29sbF83JyxcbiAgICBzY3JhbWJsZTogXCJMJyBVJyBMVScgTCcgVTJMVSdcIixcbiAgICBzb2x1dGlvbjogXCJSVVInIFVSVTJSJ1wiLFxuICAgIHR5cGU6ICdDcm9zcycsXG4gICAgc3VidHlwZTogJ0Nyb3NzJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzguc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzgnLFxuICAgIHNjcmFtYmxlOiBcIkZSJyBGJyBSVVIyQicgUicgQlUnIFInXCIsXG4gICAgc29sdXRpb246IFwiKFJVMlIyRlIpIChGJyBVMlInIEZSRicpXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0RvdCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF85LnN2ZycsXG4gICAgbmFtZTogJ29sbF85JyxcbiAgICBzY3JhbWJsZTogXCJGUicgRicgUlUyRlInIEYnIFJVJyBSVScgUicgVTJcIixcbiAgICBzb2x1dGlvbjogXCJMRicgTCcgRlUyRlUnIFJVJyBSJyBGJ1wiLFxuICAgIHR5cGU6ICdEb3QnLFxuICAgIHN1YnR5cGU6ICdEb3QnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTAuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzEwJyxcbiAgICBzY3JhbWJsZTogXCJGUicgRicgUlUyUiBkJyBSVScgUicgRicgVSdcIixcbiAgICBzb2x1dGlvbjogXCIoUlUyUjJGUkYnIFUyKSBNJyBVUlUnIEwnXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0RvdCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xMS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTEnLFxuICAgIHNjcmFtYmxlOiBcIlJVMlIyRlJGJyBVMlInIEZSRicgVTJcIixcbiAgICBzb2x1dGlvbjogXCIoRlJVUicgVScgRicpIChmUlVSJyBVJyBmJylcIixcbiAgICB0eXBlOiAnRG90JyxcbiAgICBzdWJ0eXBlOiAnRG90JyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzEyLnN2ZycsXG4gICAgbmFtZTogJ29sbF8xMicsXG4gICAgc2NyYW1ibGU6IFwiUicgRicgVTJGMlVSVScgUicgRicgVTJSXCIsXG4gICAgc29sdXRpb246IFwiUicgVTJGUlVSJyBVJyBGMlUyRlJcIixcbiAgICB0eXBlOiAnRG90JyxcbiAgICBzdWJ0eXBlOiAnRG90JyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzEzLnN2ZycsXG4gICAgbmFtZTogJ29sbF8xMycsXG4gICAgc2NyYW1ibGU6IFwiTVUnIExGMkwnIFUnIFJVJyBSMiByXCIsXG4gICAgc29sdXRpb246IFwiTVVSJyBGMlJVTCcgVSBMMiBsJ1wiLFxuICAgIHR5cGU6ICdEb3QnLFxuICAgIHN1YnR5cGU6ICdEb3QnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTQuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzE0JyxcbiAgICBzY3JhbWJsZTogXCJNVVInIEYyUlVMJyBVIEwyIGwnXCIsXG4gICAgc29sdXRpb246IFwiTVUnIExGMkwnIFUnIFJVJyBSMiByXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0RvdCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xNS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTUnLFxuICAgIHNjcmFtYmxlOiBcIihNVU1VTVVNVSkgKE0nIFVNJyBVTScgVU0nIFUpXCIsXG4gICAgc29sdXRpb246IFwiTSAoVVJVUicgVScpIE0yIChVIFJVJyByJylcIixcbiAgICB0eXBlOiAnRG90JyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFgnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTYuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzE2JyxcbiAgICBzY3JhbWJsZTogXCIoUicgRlJVUicgVScpIChGJyBVUilcIixcbiAgICBzb2x1dGlvbjogXCJSJyBVJyBGVVJVJyBSJyBGJyBSXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgUCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xNy5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTcnLFxuICAgIHNjcmFtYmxlOiBcIihMIEYnIEwnIFUnIEwgVSkgKEYgVScgTCcpXCIsXG4gICAgc29sdXRpb246IFwiTFVGJyBVJyBMJyBVTEZMJ1wiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFAnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTguc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzE4JyxcbiAgICBzY3JhbWJsZTogXCJGIChSVVInIFUnKSBGJ1wiLFxuICAgIHNvbHV0aW9uOiBcIkZVUlUnIFInIEYnXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgUCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xOS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTknLFxuICAgIHNjcmFtYmxlOiBcIkYnIChMJyBVJyBMVSkgRlwiLFxuICAgIHNvbHV0aW9uOiBcIkYnIFUnIEwnIFVMRlwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFAnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjAuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzIwJyxcbiAgICBzY3JhbWJsZTogXCJCJyBSQlInIFUnIFInIFUnIFJVUicgVVJVMlwiLFxuICAgIHNvbHV0aW9uOiBcIihMJyBVJyBMVScgTCcgVSkgKExVTEYnIEwnIEYpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgVycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8yMS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMjEnLFxuICAgIHNjcmFtYmxlOiBcIkZSJyBGJyBSVVJVUicgVScgUlUnIFInXCIsXG4gICAgc29sdXRpb246IFwiKFJVUicgVVJVJykgKFInIFUnIFInIEZSRicpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgVycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8yMi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMjInLFxuICAgIHNjcmFtYmxlOiBcIlInIEYnIExGJyBMJyBGTEYnIEwnIEYyUlUnXCIsXG4gICAgc29sdXRpb246IFwiKFInIEYnIExGJykgKCBMJyBGTEYnIEwnIEYyUilcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0Rhc2gnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjMuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzIzJyxcbiAgICBzY3JhbWJsZTogXCJMRlInIEZSRicgUicgRlJGMkwnIFVcIixcbiAgICBzb2x1dGlvbjogXCJMRlInIEZSRicgUicgRlJGMkwnXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzI0LnN2ZycsXG4gICAgbmFtZTogJ29sbF8yNCcsXG4gICAgc2NyYW1ibGU6IFwiRicgVScgTCcgVUxVJyBMJyBVTEZcIixcbiAgICBzb2x1dGlvbjogXCJGJyAoTCcgVScgTFUpIChMJyBVJyBMVSkgRlwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnRGFzaCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8yNS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMjUnLFxuICAgIHNjcmFtYmxlOiBcIkYgVVJVJyBSJyBVUlUnIFInIEYnXCIsXG4gICAgc29sdXRpb246IFwiRiAoUlVSJyBVJykgKFJVUicgVScpIEYnXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzI2LnN2ZycsXG4gICAgbmFtZTogJ29sbF8yNicsXG4gICAgc2NyYW1ibGU6IFwiKHIgVScpIChyMiBVKSAocjIgVSByMiBVJyByKVwiLFxuICAgIHNvbHV0aW9uOiBcIihyJyBVKSAocjJVJykgKHIyVScpIChyMlVyJylcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0Rhc2gnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjcuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzI3JyxcbiAgICBzY3JhbWJsZTogXCIocicgVSkgKHIyVScpIChyMlUnKSAocjJVcicpVTJcIixcbiAgICBzb2x1dGlvbjogXCIobFUnKSAobDJVKSAobDJVKSAobDJVJyBsKVwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnRGFzaCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8yOC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMjgnLFxuICAgIHNjcmFtYmxlOiBcIkwgRicgTCcgVScgTCBGIEwnIHkgTCcgVSBMXCIsXG4gICAgc29sdXRpb246IFwiTCcgVScgTCB5JyBMRicgTCcgVUxGTCdcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0Rhc2gnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjkuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzI5JyxcbiAgICBzY3JhbWJsZTogXCJSJyBGIFIgVSBSJyBGJyBSIHknIFIgVScgUidcIixcbiAgICBzb2x1dGlvbjogXCJSVVInIHkgUicgRlJVJyBSJyBGJyBSXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzMwLnN2ZycsXG4gICAgbmFtZTogJ29sbF8zMCcsXG4gICAgc2NyYW1ibGU6IFwiQicgRlInIEYnIFJCVVJVJyBSJyBVMlwiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBVJyBSVSBGKSB4JyAoUiBVJyBSJyBVRCcpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgQycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zMS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzEnLFxuICAgIHNjcmFtYmxlOiBcIlJVQicgUkJSJyBVJyBSJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBVJyBSJyBGKSAoUkYnIFUpIFJcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBDJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzMyLnN2ZycsXG4gICAgbmFtZTogJ29sbF8zMicsXG4gICAgc2NyYW1ibGU6IFwiRlInIEYnIFJVUlUnIFInXCIsXG4gICAgc29sdXRpb246IFwiKFJVUicgVScpIChSJyBGUkYnKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFQnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMzMuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzMzJyxcbiAgICBzY3JhbWJsZTogXCJGVVJVJyBSJyBGJ1wiLFxuICAgIHNvbHV0aW9uOiBcIkYgKFJVUicgVScpIEYnXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgVCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zNC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzQnLFxuICAgIHNjcmFtYmxlOiBcIkInIFJCVTJSJyBVJyBSVScgUjJVMlJcIixcbiAgICBzb2x1dGlvbjogXCIoUlUyUjJVJyBSVScgUicgVTIpIChGIFIgRicpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgSScsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zNS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzUnLFxuICAgIHNjcmFtYmxlOiBcIkYgKFJVUicgVScpIChSVVInIFUnKSBGJ1wiLFxuICAgIHNvbHV0aW9uOiBcIkYgKFVSVScgUicgVVJVJyBSJykgRidcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBJJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzM2LnN2ZycsXG4gICAgbmFtZTogJ29sbF8zNicsXG4gICAgc2NyYW1ibGU6IFwiTCcgQicgTFInIFUnIFJVUicgVScgUlVMJyBCTFwiLFxuICAgIHNvbHV0aW9uOiBcIihMJyBCJyBMVScpIChSJyBVUlUnIFInIFVSTCcgQkwpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgSScsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zNy5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzcnLFxuICAgIHNjcmFtYmxlOiBcIihSJyBVJyBSVScgUicgVSkgeScgKFInIFVSQilVJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBVJyBSVScgUicgVSkgeScgKFInIFVSQilcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBJJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzM4LnN2ZycsXG4gICAgbmFtZTogJ29sbF8zOCcsXG4gICAgc2NyYW1ibGU6IFwiUicgRicgTEYnIEwnIEYyUiBVMlwiLFxuICAgIHNvbHV0aW9uOiBcInInIFUyUlVSJ1UgclwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnU3F1YXJlJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzM5LnN2ZycsXG4gICAgbmFtZTogJ29sbF8zOScsXG4gICAgc2NyYW1ibGU6IFwiTEZSJyBGUkYyTCcgVTJcIixcbiAgICBzb2x1dGlvbjogXCJsIFUyTCdVJ0xVJyBsJ1wiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnU3F1YXJlJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzQwLnN2ZycsXG4gICAgbmFtZTogJ29sbF80MCcsXG4gICAgc2NyYW1ibGU6IFwiUicgVTIgbCBVJyBSVVInIGwnIFUyUlwiLFxuICAgIHNvbHV0aW9uOiBcIngnIChSJyBGMlIyVScgUicgVVInIEYyUilcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ1NxdWFyZScsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80MS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDEnLFxuICAgIHNjcmFtYmxlOiBcIihSVVInIFUnKSAoUicgRlJGJylcIixcbiAgICBzb2x1dGlvbjogXCJGUicgRicgUlVSVScgUidcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ1NxdWFyZScsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80Mi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDInLFxuICAgIHNjcmFtYmxlOiBcIkwgRjIgUicgRicgUiBGJyBMJyBVMlwiLFxuICAgIHNvbHV0aW9uOiBcImwgVUwnVUxVMiBsJ1wiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFMnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNDMuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQzJyxcbiAgICBzY3JhbWJsZTogXCJSJyBGMkxGTCcgRlIgVTJcIixcbiAgICBzb2x1dGlvbjogXCJyJyBVJ1JVJ1InVTIgclwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFMnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNDQuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQ0JyxcbiAgICBzY3JhbWJsZTogXCJNVScgUlUyUicgVScgUlUnIFIyclVcIixcbiAgICBzb2x1dGlvbjogXCJGJ0wnVSdMVUYgVSBGUlVSJ1UnRidcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzQ1LnN2ZycsXG4gICAgbmFtZTogJ29sbF80NScsXG4gICAgc2NyYW1ibGU6IFwiTScgVVInIFUyUlVSJyBVUjIgcicgVVwiLFxuICAgIHNvbHV0aW9uOiBcIkZSVVInVSdGJyBVIEZSVVInVSdGJ1wiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFMnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNDYuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQ2JyxcbiAgICBzY3JhbWJsZTogXCJCMlInIFVSVScgUicgVScgUjJCUicgQlUyXCIsXG4gICAgc29sdXRpb246IFwiRicgTEYnIEwyVUxVTCcgVScgTEYyXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgUycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80Ny5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDcnLFxuICAgIHNjcmFtYmxlOiBcImwgVScgbCcgVScgUjJVUicgQlJVJyBSMlUyXCIsXG4gICAgc29sdXRpb246IFwiRlInIEZSMlUnIFInIFUnIFJVUicgRjJcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzQ4LnN2ZycsXG4gICAgbmFtZTogJ29sbF80OCcsXG4gICAgc2NyYW1ibGU6IFwiQicgVScgUicgVScgUiB5IFVSVTJSJyBVJyBSVSdcIixcbiAgICBzb2x1dGlvbjogXCIoUicgRlJGJyBSJyBGUkYnKSAoUlUgUicgVScgUlVSJylcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzQ5LnN2ZycsXG4gICAgbmFtZTogJ29sbF80OScsXG4gICAgc2NyYW1ibGU6IFwiRlVSVVInIHknIFUnIFInIFUyUlVSJyBVJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihMRicgTCcgRkxGJyBMJyBGKSAoTCcgVScgTCBVTCcgVScgTClcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzUwLnN2ZycsXG4gICAgbmFtZTogJ29sbF81MCcsXG4gICAgc2NyYW1ibGU6IFwiTFVGJyBVJyBMJyBVTEZMJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihMIEYnIEwnIFUnIEwgVSkgKEYgVScgTCcpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMaWdodG5pbmcnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNTEuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzUxJyxcbiAgICBzY3JhbWJsZTogXCJSJyBVJyBGVVJVJyBSJyBGJyBSXCIsXG4gICAgc29sdXRpb246IFwiKFInIEZSVVInIFUnKSAoRicgVVIpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMaWdodG5pbmcnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNTIuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzUyJyxcbiAgICBzY3JhbWJsZTogXCJMJyBVJyBMIHknIExGJyBMJyBVTEZMJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihMRicgTCcgVScgTEZMJykgeScgKFInIFVSKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIEwnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNTMuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzUzJyxcbiAgICBzY3JhbWJsZTogXCJSVVInIHkgUicgRlJVJyBSJyBGJyBSXCIsXG4gICAgc29sdXRpb246IFwiKFInIEZSVVInIEYnIFIpIHkgKExVJyBMJylcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBMJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzU0LnN2ZycsXG4gICAgbmFtZTogJ29sbF81NCcsXG4gICAgc2NyYW1ibGU6IFwiTCcgQicgTCBVJyBSJyBVIFIgTCcgQiBMXCIsXG4gICAgc29sdXRpb246IFwiKEwnIEInIEwpIChSJyBVJyBSVSkgKEwnIEJMKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIEwnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNTUuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzU1JyxcbiAgICBzY3JhbWJsZTogXCJMIEYgTCcgVSBSIFUnIFInIExGJyBMJyBVMlwiLFxuICAgIHNvbHV0aW9uOiBcIihSQlInKSAoTFVMJyBVJykgKFJCJyBSJylcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBMJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzU2LnN2ZycsXG4gICAgbmFtZTogJ29sbF81NicsXG4gICAgc2NyYW1ibGU6IFwiKFJMJyBCTFInKSBVMiAoUkwnIEJMUicpVSdcIixcbiAgICBzb2x1dGlvbjogXCIoUkwnIEJMUicpIFUyIChSTCcgQkxSJylcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBGJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzU3LnN2ZycsXG4gICAgbmFtZTogJ29sbF81NycsXG4gICAgc2NyYW1ibGU6IFwiRiBSJyBGJyBSIEwnIFUgUiBVJyBSJyBMXCIsXG4gICAgc29sdXRpb246IFwiKFJVUicgVScpIHIgKFInIFVSVScgcicpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgSCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgUExMczogYWxnb3JpdGhtW10gPSBbXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzEuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzEnLFxuICAgIHNjcmFtYmxlOiBcIngnIChVIEwnIFUgUjIgVScpIChMIFUgUjIgVTIpXCIsXG4gICAgc29sdXRpb246IFwieCcgKFInIEQgUicpIFUyIChSIEQnIFInIFUyIFIyKVwiLFxuICAgIHR5cGU6ICdBJyxcbiAgICBzdWJ0eXBlOiAnQScsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAyIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzIuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzInLFxuICAgIHNjcmFtYmxlOiBcIngnIChVJyBSIFUnIEwyVSkgKFInIFUnIEwyIFUyKVwiLFxuICAgIHNvbHV0aW9uOiBcIngnIChMIEQnIEwpIFUyIChMJyBEIEwpIFUyIEwyXCIsXG4gICAgdHlwZTogJ0EnLFxuICAgIHN1YnR5cGU6ICdBJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogMiB9LFxuICAgICAgICB7IHg6IDIsIHk6IDAgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMy5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMycsXG4gICAgc2NyYW1ibGU6IFwieCcgKFIgVScgUicgRCBSIFUgUicgRCcpIChSIFUgUicgRCBSIFUnIFInIEQnKVwiLFxuICAgIHNvbHV0aW9uOiBcIngnIChSIFUnIFInIEQgUiBVIFInIEQnKSAoUiBVIFInIEQgUiBVJyBSJyBEJylcIixcbiAgICB0eXBlOiAnRScsXG4gICAgc3VidHlwZTogJ0UnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAyIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMiwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfNC5zdmcnLFxuICAgIG5hbWU6ICdwbGxfNCcsXG4gICAgc2NyYW1ibGU6IFwiKFInIFVSVScgUjIpIHknIChSJyBVJyBSVSkgKEJSQicgUicgQjJVJylcIixcbiAgICBzb2x1dGlvbjogXCIoUicgVVJVJyBSMikgeScgKFInIFUnIFJVKSAoQlJCJyBSJyBCMlUnKVwiLFxuICAgIHR5cGU6ICdFJyxcbiAgICBzdWJ0eXBlOiAnRScsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDAgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMiwgeTogMSB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF81LnN2ZycsXG4gICAgbmFtZTogJ3BsbF81JyxcbiAgICBzY3JhbWJsZTogXCIoTTIgVScpIChNMiBVMikgKE0yIFUnKSBNMlwiLFxuICAgIHNvbHV0aW9uOiBcIihNMiBVJykgKE0yIFUyKSAoTTIgVScpIE0yXCIsXG4gICAgdHlwZTogJ0gnLFxuICAgIHN1YnR5cGU6ICdIJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDEgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAxIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzYuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzYnLFxuICAgIHNjcmFtYmxlOiBcIihSJyBVUicgVScpIChSJyBVJykgKFInIFUgUiBVIFIyKVwiLFxuICAgIHNvbHV0aW9uOiBcIihSMiBVJykgKFInIFUnIFJVKSAoUiBVIFIgVScgUilcIixcbiAgICB0eXBlOiAnVScsXG4gICAgc3VidHlwZTogJ1UnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDEgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMCB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF83LnN2ZycsXG4gICAgbmFtZTogJ3BsbF83JyxcbiAgICBzY3JhbWJsZTogXCIoUjIgVScpIChSJyBVJyBSVSkgKFIgVSBSIFUnIFIpXCIsXG4gICAgc29sdXRpb246IFwiKFInIFVSJyBVJykgKFInIFUnKSAoUicgVSBSIFUgUjIpXCIsXG4gICAgdHlwZTogJ1UnLFxuICAgIHN1YnR5cGU6ICdVJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDEgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfOC5zdmcnLFxuICAgIG5hbWU6ICdwbGxfOCcsXG4gICAgc2NyYW1ibGU6IFwiTCBVJyBSJyBVTCcgVTIgUiBVJyBSJyBVMiBSIHgyXCIsXG4gICAgc29sdXRpb246IFwiQjIgKFInIFUnIFIpIEIyIChMJyBEIEwnIEQnKSBMMlwiLFxuICAgIHR5cGU6ICdKJyxcbiAgICBzdWJ0eXBlOiAnSicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF85LnN2ZycsXG4gICAgbmFtZTogJ3BsbF85JyxcbiAgICBzY3JhbWJsZTogXCIoUicgVSBMIFUnIFIpIChVMiBMJyBVIEwgVTIgTCcpIHgyXCIsXG4gICAgc29sdXRpb246IFwiQjIgKEwgVSBMJykgQjIgKFIgRCcgUiBEKSBSMlwiLFxuICAgIHR5cGU6ICdKJyxcbiAgICBzdWJ0eXBlOiAnSicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMiwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAyLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xMC5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTAnLFxuICAgIHNjcmFtYmxlOiBcIihSIFUgUicgVScpIChSJyBGIFIyIFUnKSAoUicgVScgUiBVIFInIEYnKVwiLFxuICAgIHNvbHV0aW9uOiBcIihSIFUgUicgVScpIChSJyBGIFIyIFUnKSAoUicgVScgUiBVIFInIEYnKVwiLFxuICAgIHR5cGU6ICdUJyxcbiAgICBzdWJ0eXBlOiAnVCcsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMiwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMiwgeTogMSB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xMS5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTEnLFxuICAgIHNjcmFtYmxlOiBcIihMJyBVIEwnIFUnKSB5JyhSJyBGJykgKFIyIFUnIFInIFUgUicgRiBSIEYpIHlcIixcbiAgICBzb2x1dGlvbjogXCIoTCcgVSBMJyBVJykgeScoUicgRicpIChSMiBVJyBSJyBVIFInIEYgUiBGKVwiLFxuICAgIHR5cGU6ICdWJyxcbiAgICBzdWJ0eXBlOiAnVicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xMi5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTInLFxuICAgIHNjcmFtYmxlOiBcIihMIFUyIEwnIFUyKSAoTCBGJyBMJyBVJyBMVSkgKEwgRiBMMiBVKVwiLFxuICAgIHNvbHV0aW9uOiBcIihMIFUyIEwnIFUyKSAoTCBGJyBMJyBVJyBMVSkgKEwgRiBMMiBVKVwiLFxuICAgIHR5cGU6ICdSJyxcbiAgICBzdWJ0eXBlOiAnUicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDAgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xMy5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTMnLFxuICAgIHNjcmFtYmxlOiBcIihSJyBVMiBSIFUyKSAoUicgRiBSIFUgUicgVScpIChSJyBGJyBSMiBVJylcIixcbiAgICBzb2x1dGlvbjogXCIoUicgVTIgUiBVMikgKFInIEYgUiBVIFInIFUnKSAoUicgRicgUjIgVScpXCIsXG4gICAgdHlwZTogJ1InLFxuICAgIHN1YnR5cGU6ICdSJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMiwgeTogMCB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IDIsIHk6IDEgfSxcbiAgICAgICAgeyB4OiAxLCB5OiAyIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzE0LnN2ZycsXG4gICAgbmFtZTogJ3BsbF8xNCcsXG4gICAgc2NyYW1ibGU6IFwiKEwgVSBMJyBCMikgeicgKFInIFUgTCcgVScgTCkgKFUnIFIgQjIpIHpcIixcbiAgICBzb2x1dGlvbjogXCJ6IHgnIChVMiByJyBVIFInIFUgUiBVJyByIFUyKSB5IChMIEYnIEwnKSB4XCIsXG4gICAgdHlwZTogJ0cnLFxuICAgIHN1YnR5cGU6ICdHJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMiwgeTogMSB9LFxuICAgICAgICB7IHg6IDEsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAyLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogMiB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMTUuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzE1JyxcbiAgICBzY3JhbWJsZTogXCIoUicgVScgUiBCMikgeiAoTCBVJyBSIFUgUicpIChVIHInIFUyKSB6JyB4XCIsXG4gICAgc29sdXRpb246IFwieicgeCcgKFUyIGwgVScgTFUnIEwnIFUgbCcgVTIpIHknIChSJyBGIFIpIHhcIixcbiAgICB0eXBlOiAnRycsXG4gICAgc3VidHlwZTogJ0cnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAyIH0sXG4gICAgICAgIHsgeDogMCwgeTogMiB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IDEsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xNi5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTYnLFxuICAgIHNjcmFtYmxlOiBcInonIChVMiBsIFUnIExVJyBMJyBVIGwnIFUyKSB5JyAoUicgRiBSKSB4XCIsXG4gICAgc29sdXRpb246IFwiKFInIFUnIFIgQjIpIHogKEwgVScgUiBVIFInKSAoVSByJyBVMikgeicgeFwiLFxuICAgIHR5cGU6ICdHJyxcbiAgICBzdWJ0eXBlOiAnRycsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IDIgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAyIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMSwgeTogMCB9LFxuICAgICAgICB7IHg6IDEsIHk6IDIgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAxIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzE3LnN2ZycsXG4gICAgbmFtZTogJ3BsbF8xNycsXG4gICAgc2NyYW1ibGU6IFwieiAoVTIgcicgVSBSJyBVIFIgVScgciBVMikgeSAoTCBGJyBMJykgeFwiLFxuICAgIHNvbHV0aW9uOiBcIihMIFUgTCcgQjIpIHonIChSJyBVIEwnIFUnIEwpIChVJyBSIEIyKSB6XCIsXG4gICAgdHlwZTogJ0cnLFxuICAgIHN1YnR5cGU6ICdHJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAyLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMiwgeTogMiB9LFxuICAgICAgICB7IHg6IDAsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9LFxuICAgICAgICB7IHg6IDIsIHk6IDEgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMTguc3ZnJyxcbiAgICBuYW1lOiAncGxsXzE4JyxcbiAgICBzY3JhbWJsZTogXCIoVSBSJyBVJyBSIFUnKSAoUiBVIFIgVScgUicgVSkgKFIgVSBSMiBVJyBSJyBVKVwiLFxuICAgIHNvbHV0aW9uOiBcIihVIFInIFUnIFIgVScpIChSIFUgUiBVJyBSJyBVKSAoUiBVIFIyIFUnIFInIFUpXCIsXG4gICAgdHlwZTogJ1onLFxuICAgIHN1YnR5cGU6ICdaJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogMSB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IDIsIHk6IDEgfSxcbiAgICAgICAgeyB4OiAxLCB5OiAyIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzE5LnN2ZycsXG4gICAgbmFtZTogJ3BsbF8xOScsXG4gICAgc2NyYW1ibGU6IFwiTCBVJyBSIFUyIEwnIFUgUicpIChMIFUnIFIgVTIgTCcgVSBSJykgVSdcIixcbiAgICBzb2x1dGlvbjogXCJMIFUnIFIgVTIgTCcgVSBSJykgKEwgVScgUiBVMiBMJyBVIFInKSBVJ1wiLFxuICAgIHR5cGU6ICdOJyxcbiAgICBzdWJ0eXBlOiAnTicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMiwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMiwgeTogMSB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8yMC5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMjAnLFxuICAgIHNjcmFtYmxlOiBcIihSJyBVTCcgVTIgUiBVJyBMKSAoUicgVUwnIFUyIFIgVScgTCkgVVwiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBVTCcgVTIgUiBVJyBMKSAoUicgVUwnIFUyIFIgVScgTCkgVVwiLFxuICAgIHR5cGU6ICdOJyxcbiAgICBzdWJ0eXBlOiAnTicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMiwgeTogMSB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8yMS5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMjEnLFxuICAgIHNjcmFtYmxlOiBcIihGIFIgVScgUicgVScgUiBVIFInIEYnKSAoUiBVIFInIFUnKSAoUicgRiBSIEYnKVwiLFxuICAgIHNvbHV0aW9uOiBcIihGIFIgVScgUicgVScgUiBVIFInIEYnKSAoUiBVIFInIFUnKSAoUicgRiBSIEYnKVwiLFxuICAgIHR5cGU6ICdZJyxcbiAgICBzdWJ0eXBlOiAnWScsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogMSB9XG4gICAgICBdXG4gICAgXVxuICB9XG5dO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBBbGdvcml0aG1zIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvYWxnb3JpdGhtcyc7XG5cbk1ldGVvci5wdWJsaXNoKCdhbGdvcml0aG1zJywgZnVuY3Rpb24gZ2V0QWxnb3JpdGhtcygpIHtcbiAgY29uc3QgdXNlcklkID0gdGhpcy51c2VySWQ7XG4gIGlmICghdXNlcklkKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbiAgfVxuXG4gIHJldHVybiBBbGdvcml0aG1zLmZpbmQoKTtcbn0pO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBSZXN1bHRzIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvcmVzdWx0cyc7XG5cbk1ldGVvci5wdWJsaXNoKCdyZXN1bHRzJywgZnVuY3Rpb24gZ2V0UmVzdWx0cygpIHtcbiAgY29uc3QgdXNlcklkID0gdGhpcy51c2VySWQ7XG4gIGlmICghdXNlcklkKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbiAgfVxuXG4gIHJldHVybiBSZXN1bHRzLmZpbmQoeyB1c2VySWQgfSk7XG59KTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuXG5pbXBvcnQgeyBjcmVhdGVBbGdvcml0aG1zIH0gZnJvbSAnLi9pbXBvcnRzL2FsZ29yaXRobXNDcmVhdGlvbic7XG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcbiAgLy9VbmlDb25maWcucHJpdmF0ZS5ydW5PbmNlKCdjcmVhdGVBbGdvcml0aG1zJywgY3JlYXRlQWxnb3JpdGhtcyk7XG4gIGNyZWF0ZUFsZ29yaXRobXMoKTtcbn0pO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5pbXBvcnQgeyBjaGVjayB9IGZyb20gJ21ldGVvci9jaGVjayc7XG5cbmV4cG9ydCBjb25zdCBBbGdvcml0aG1zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2FsZ29yaXRobXMnKTtcblxuTWV0ZW9yLm1ldGhvZHMoe1xuICAnYWxnb3JpdGhtcy50b2dnbGVBY3RpdmUnKGFsZ0lkLCBhY3RpdmUpIHtcbiAgICBjaGVjayh0aGlzLnVzZXJJZCwgU3RyaW5nKTtcbiAgICBjaGVjayhhY3RpdmUsIEJvb2xlYW4pO1xuICAgIGNoZWNrKGFsZ0lkLCBTdHJpbmcpO1xuXG4gICAgQWxnb3JpdGhtcy51cGRhdGUoYWxnSWQsIHsgJHNldDogeyBhY3RpdmUgfSB9KTtcbiAgfSxcbiAgJ2FsZ29yaXRobXMuYWN0aXZhdGVBbGwnKGNhdGVnb3J5KSB7XG4gICAgY2hlY2sodGhpcy51c2VySWQsIFN0cmluZyk7XG4gICAgY2hlY2soY2F0ZWdvcnksIFN0cmluZyk7XG5cbiAgICBBbGdvcml0aG1zLnVwZGF0ZShcbiAgICAgIHsgY2F0ZWdvcnkgfSxcbiAgICAgIHsgJHNldDogeyBhY3RpdmU6IHRydWUgfSB9LFxuICAgICAgeyBtdWx0aTogdHJ1ZSB9XG4gICAgKTtcbiAgfSxcbiAgJ2FsZ29yaXRobXMuZGVhY3RpdmF0ZUFsbCcoY2F0ZWdvcnkpIHtcbiAgICBjaGVjayh0aGlzLnVzZXJJZCwgU3RyaW5nKTtcbiAgICBjaGVjayhjYXRlZ29yeSwgU3RyaW5nKTtcblxuICAgIEFsZ29yaXRobXMudXBkYXRlKFxuICAgICAgeyBjYXRlZ29yeSB9LFxuICAgICAgeyAkc2V0OiB7IGFjdGl2ZTogZmFsc2UgfSB9LFxuICAgICAgeyBtdWx0aTogdHJ1ZSB9XG4gICAgKTtcbiAgfSxcbiAgJ2FsZ29yaXRobXMuaW5zZXJ0Jyh7IGNhdGVnb3J5LCBpbWFnZSwgc2NyYW1ibGUsIHNvbHV0aW9uLCBzdWJ0eXBlLCB0eXBlIH0pIHtcbiAgICBjaGVjayh0aGlzLnVzZXJJZCwgU3RyaW5nKTtcbiAgICBjaGVjayhjYXRlZ29yeSwgU3RyaW5nKTtcbiAgICBjaGVjayhpbWFnZSwgU3RyaW5nKTtcbiAgICBjaGVjayhzY3JhbWJsZSwgU3RyaW5nKTtcbiAgICBjaGVjayhzb2x1dGlvbiwgU3RyaW5nKTtcbiAgICBjaGVjayhzdWJ0eXBlLCBTdHJpbmcpO1xuICAgIGNoZWNrKHR5cGUsIFN0cmluZyk7XG5cbiAgICBjb25zdCBkb2MgPSB7XG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIGltYWdlLFxuICAgICAgc2NyYW1ibGUsXG4gICAgICBzb2x1dGlvbixcbiAgICAgIHN1YnR5cGUsXG4gICAgICB0eXBlXG4gICAgfTtcblxuICAgIEFsZ29yaXRobXMuaW5zZXJ0KGRvYyk7XG4gIH0sXG4gICdhbGdvcml0aG1zLnNlYXJjaCcodGV4dCkge1xuICAgIGNoZWNrKHRoaXMudXNlcklkLCBTdHJpbmcpO1xuICAgIGNoZWNrKHRleHQsIFN0cmluZyk7XG5cbiAgICByZXR1cm4gQWxnb3JpdGhtcy5maW5kKCk7XG4gIH0sXG4gICdhbGdvcml0aG1zLnJlbW92ZScoYWxnb3JpdGhtSWQpIHtcbiAgICBjaGVjayh0aGlzLnVzZXJJZCwgU3RyaW5nKTtcbiAgICBjaGVjayhhbGdvcml0aG1JZCwgU3RyaW5nKTtcblxuICAgIEFsZ29yaXRobXMucmVtb3ZlKGFsZ29yaXRobUlkKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbmltcG9ydCB7IGNoZWNrIH0gZnJvbSAnbWV0ZW9yL2NoZWNrJztcblxuZXhwb3J0IGNvbnN0IFJlc3VsdHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigncmVzdWx0cycpO1xuXG5NZXRlb3IubWV0aG9kcyh7XG4gICdyZXN1bHRzLmluc2VydCcoeyBhbGdvcml0aG1JZCwgY2F0ZWdvcnksIHNjcmFtYmxlLCB0aW1lIH0pIHtcbiAgICBjaGVjayh0aGlzLnVzZXJJZCwgU3RyaW5nKTtcbiAgICBjaGVjayhjYXRlZ29yeSwgU3RyaW5nKTtcbiAgICBjaGVjayh0aW1lLCBOdW1iZXIpO1xuXG4gICAgaWYgKGNhdGVnb3J5ID09PSAnT0xMJyB8fCBjYXRlZ29yeSA9PT0gJ1BMTCcgfHwgY2F0ZWdvcnkgPT09ICczeDN4MycpIHtcbiAgICAgIGNoZWNrKHNjcmFtYmxlLCBTdHJpbmcpO1xuICAgIH1cblxuICAgIGlmIChjYXRlZ29yeSA9PT0gJ09MTCcgfHwgY2F0ZWdvcnkgPT09ICdQTEwnKSB7XG4gICAgICBjaGVjayhhbGdvcml0aG1JZCwgU3RyaW5nKTtcbiAgICB9XG5cbiAgICBjb25zdCBkb2MgPSB7XG4gICAgICBhbGdvcml0aG1JZCxcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgc2NyYW1ibGUsXG4gICAgICB0aW1lLFxuICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZFxuICAgIH07XG5cbiAgICBSZXN1bHRzLmluc2VydChkb2MpO1xuICB9LFxuICAncmVzdWx0cy5zZWFyY2gnKHRleHQpIHtcbiAgICBjaGVjayh0aGlzLnVzZXJJZCwgU3RyaW5nKTtcbiAgICBjaGVjayh0ZXh0LCBTdHJpbmcpO1xuXG4gICAgcmV0dXJuIFJlc3VsdHMuZmluZCh7IHVzZXJJZDogdGhpcy51c2VySWQgfSk7XG4gIH0sXG4gICdyZXN1bHRzLnJlbW92ZScocmVzdWx0SWQpIHtcbiAgICBjaGVjayh0aGlzLnVzZXJJZCwgU3RyaW5nKTtcbiAgICBjaGVjayhyZXN1bHRJZCwgU3RyaW5nKTtcblxuICAgIFJlc3VsdHMucmVtb3ZlKHsgdXNlcklkOiB0aGlzLnVzZXJJZCwgcmVzdWx0SWQgfSk7XG4gIH1cbn0pO1xuIl19
