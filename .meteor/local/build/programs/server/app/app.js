var require = meteorInstall({"lib":{"const.ts":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// lib/const.ts                                                                                     //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////

},"types.ts":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// lib/types.ts                                                                                     //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
//////////////////////////////////////////////////////////////////////////////////////////////////////

},"utils.ts":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// lib/utils.ts                                                                                     //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"imports":{"algorithmsCreation.ts":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// server/imports/algorithmsCreation.ts                                                             //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
module.export({
  createAlgorithms: () => createAlgorithms
});
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
let OLLs, PLLs;
module.link("./const", {
  OLLs(v) {
    OLLs = v;
  },

  PLLs(v) {
    PLLs = v;
  }

}, 2);

const createAlgorithms = () => {
  const isOLL = !!Algorithms.findOne({
    category: 'OLL'
  });
  const isPLL = !!Algorithms.findOne({
    category: 'PLL'
  });
  !isOLL && OLLs.forEach(algorithm => Meteor.call('algorithms.insert', algorithm));
  !isPLL && PLLs.forEach(algorithm => Meteor.call('algorithms.insert', algorithm));
};
//////////////////////////////////////////////////////////////////////////////////////////////////////

},"const.ts":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// server/imports/const.ts                                                                          //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////

}},"publications":{"algorithms.ts":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// server/publications/algorithms.ts                                                                //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
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
// TODO Only publish algorithms that are public or belong to the current user
Meteor.publish('algorithms', () => Algorithms.find());
//////////////////////////////////////////////////////////////////////////////////////////////////////

},"results.ts":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// server/publications/results.ts                                                                   //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
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
// TODO Only publish algorithms that are public or belong to the current user
Meteor.publish('results', () => Results.find());
//////////////////////////////////////////////////////////////////////////////////////////////////////

}},"main.ts":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// server/main.ts                                                                                   //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////

}},"collections":{"algorithms.ts":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// collections/algorithms.ts                                                                        //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
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
let expect;
module.link("chai", {
  expect(v) {
    expect = v;
  }

}, 3);
const Algorithms = new Mongo.Collection('algorithms');
Meteor.methods({
  'algorithms.toggleActive': (algId, active) => {
    check(active, Boolean);
    check(algId, String);
    Algorithms.update(algId, {
      $set: {
        active
      }
    });
  },
  'algorithms.activateAll': category => {
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
  'algorithms.deactivateAll': category => {
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
  'algorithms.insert': (_ref) => {
    let {
      category,
      image,
      scramble,
      solution,
      subtype,
      type
    } = _ref;
    expect(category).to.be.a('string');
    expect(image).to.be.a('string');
    expect(scramble).to.be.a('string');
    expect(solution).to.be.a('string');
    expect(subtype).to.be.a('string');
    expect(type).to.be.a('string'); // Make sure the user is logged in before inserting a algorithm

    /* if (! Meteor.userId()) {
         throw new Meteor.Error('not-authorized');
     }*/

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
    check(text, String);
    return Algorithms.find();
  },

  'algorithms.remove'(algorithmId) {
    check(algorithmId, String);
    /*const algorithm = Algorithms.findOne(algorithmId);
    if (algorithm.private && algorithm.owner !== Meteor.userId()) {
      // If the algorithm is private, make sure only the owner can delete it
          throw new Meteor.Error('not-authorized');
    }*/

    Algorithms.remove(algorithmId);
  }
  /*,
  'algorithms.setChecked'(algorithmId, setChecked) {
      check(algorithmId, String);
      check(setChecked, Boolean);
         const algorithm = Algorithms.findOne(algorithmId);
      if (algorithm.private && algorithm.owner !== Meteor.userId()) {
            // If the algorithm is private, make sure only the owner can check it off
                throw new Meteor.Error('not-authorized');
          }
         Algorithms.update(algorithmId, { $set: { checked: setChecked } });
  },
  'algorithms.setPrivate'(algorithmId, setToPrivate) {
      check(algorithmId, String);
      check(setToPrivate, Boolean);
         const algorithm = Algorithms.findOne(algorithmId);
         // Make sure only the algorithm owner can make a algorithm private
      if (algorithm.owner !== Meteor.userId()) {
          throw new Meteor.Error('not-authorized');
      }
         Algorithms.update(algorithmId, { $set: { private: setToPrivate } });
  },*/


});
//////////////////////////////////////////////////////////////////////////////////////////////////////

},"results.ts":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// collections/results.ts                                                                           //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
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
  'results.insert': (_ref) => {
    let {
      algorithmId,
      category,
      scramble,
      time
    } = _ref;
    check(category, String);
    check(time, Number);

    if (category === 'OLL' || category === 'PLL' || category === '3x3x3') {
      check(scramble, String);
    }

    if (category === 'OLL' || category === 'PLL') {
      check(algorithmId, String);
    } // Make sure the user is logged in before inserting a result

    /* if (! Meteor.userId()) {
     throw new Meteor.Error('not-authorized');
     }*/


    const doc = {
      algorithmId,
      category,
      createdAt: new Date(),
      scramble,
      time
    };
    Results.insert(doc);
  },
  'results.search': text => {
    check(text, String);
    return Results.find();
  },
  'results.remove': resultId => {
    check(resultId, String);
    /*const result = Results.findOne(resultId);
     if (result.private && result.owner !== Meteor.userId()) {
     // If the result is private, make sure only the owner can delete it
     throw new Meteor.Error('not-authorized');
     }*/

    Results.remove(resultId);
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2NvbnN0LnRzIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvdXRpbHMudHMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9pbXBvcnRzL2FsZ29yaXRobXNDcmVhdGlvbi50cyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL2ltcG9ydHMvY29uc3QudHMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9wdWJsaWNhdGlvbnMvYWxnb3JpdGhtcy50cyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3B1YmxpY2F0aW9ucy9yZXN1bHRzLnRzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi50cyIsIm1ldGVvcjovL/CfkrthcHAvY29sbGVjdGlvbnMvYWxnb3JpdGhtcy50cyIsIm1ldGVvcjovL/CfkrthcHAvY29sbGVjdGlvbnMvcmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU0sQ0FBQyxNQUFQLENBQWE7QUFBQSxZQUFVLEVBQWU7QUFBekIsQ0FBYjtBQUFPLE1BQU0sVUFBVSxHQUFlLENBQ3BDO0FBQ0UsT0FBSyxFQUFFLEtBRFQ7QUFFRSxPQUFLLEVBQUUsS0FGVDtBQUdFLHVCQUFxQixFQUFFO0FBSHpCLENBRG9DLEVBTXBDO0FBQ0UsT0FBSyxFQUFFLEtBRFQ7QUFFRSxPQUFLLEVBQUUsS0FGVDtBQUdFLHVCQUFxQixFQUFFO0FBSHpCLENBTm9DLEVBV3BDO0FBQ0UsT0FBSyxFQUFFLE9BRFQ7QUFFRSxPQUFLLEVBQUUsT0FGVDtBQUdFLHNCQUFvQixFQUFFO0FBSHhCLENBWG9DLEVBZ0JwQztBQUNFLE9BQUssRUFBRSxZQURUO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxvQkFBa0IsRUFBRSxLQUh0QjtBQUlFLGtCQUFnQixFQUFFO0FBSnBCLENBaEJvQyxFQXNCcEM7QUFDRSxPQUFLLEVBQUUsWUFEVDtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0Usb0JBQWtCLEVB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O0FBQW1DO0FBQW5DLEtBQTZDO0FBQzlELFNBQUssQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUFMO0FBQ0EsU0FBSyxDQUFDLElBQUQsRUFBTyxNQUFQLENBQUw7O0FBRUEsUUFBSSxRQUFRLEtBQUssS0FBYixJQUFzQixRQUFRLEtBQUssS0FBbkMsSUFBNEMsUUFBUSxLQUFLLE9BQTdELEVBQXNFO0FBQ3BFLFdBQUssQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUFMO0FBQ0Q7O0FBRUQsUUFBSSxRQUFRLEtBQUssS0FBYixJQUFzQixRQUFRLEtBQUssS0FBdkMsRUFBOEM7QUFDNUMsV0FBSyxDQUFDLFdBQUQsRUFBYyxNQUFkLENBQUw7QUFDRCxLQVY2RCxDQVk5RDs7QUFDQTs7Ozs7QUFJQSxVQUFNLEdBQUcsR0FBRztBQUNWLGlCQURVO0FBRVYsY0FGVTtBQUdWLGVBQVMsRUFBRSxJQUFJLElBQUosRUFIRDtBQUlWLGNBSlU7QUFLVjtBQUxVLEtBQVo7QUFRQSxXQUFPLENBQUMsTUFBUixDQUFlLEdBQWY7QUFDRCxHQTNCWTtBQTRCYixvQkFBa0IsSUFBSSxJQUFHO0FBQ3ZCLFNBQUssQ0FBQyxJQUFELEVBQU8sTUFBUCxDQUFMO0FBRUEsV0FBTyxPQUFPLENBQUMsSUFBUixFQUFQO0FBQ0QsR0FoQ1k7QUFpQ2Isb0JBQWtCLFFBQVEsSUFBRztBQUMzQixTQUFLLENBQUMsUUFBRCxFQUFXLE1BQVgsQ0FBTDtBQUVBOzs7Ozs7QUFNQSxXQUFPLENBQUMsTUFBUixDQUFlLFFBQWY7QUFDRDtBQTNDWSxDQUFmLEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhdGVnb3J5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBjYXRlZ29yaWVzOiBjYXRlZ29yeVtdID0gW1xuICB7XG4gICAgbGFiZWw6ICdPTEwnLFxuICAgIHZhbHVlOiAnT0xMJyxcbiAgICByYW5kb21pemFibGVBbGdvcml0aG06IHRydWVcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUExMJyxcbiAgICB2YWx1ZTogJ1BMTCcsXG4gICAgcmFuZG9taXphYmxlQWxnb3JpdGhtOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJzN4M3gzJyxcbiAgICB2YWx1ZTogJzN4M3gzJyxcbiAgICByYW5kb21pemFibGVTY3JhbWJsZTogdHJ1ZVxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdPTEwgQXR0YWNrJyxcbiAgICB2YWx1ZTogJ09MTC1hdHRhY2snLFxuICAgIGFsZ29yaXRobXNDYXRlZ29yeTogJ09MTCcsXG4gICAgc2V0dGluZ3NEaXNhYmxlZDogdHJ1ZVxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdQTEwgQXR0YWNrJyxcbiAgICB2YWx1ZTogJ1BMTC1hdHRhY2snLFxuICAgIGFsZ29yaXRobXNDYXRlZ29yeTogJ1BMTCcsXG4gICAgc2V0dGluZ3NEaXNhYmxlZDogdHJ1ZVxuICB9XG5dO1xuIiwiaW1wb3J0IHJhbmRvbSBmcm9tICdsb2Rhc2gvcmFuZG9tJztcblxudHlwZSBhbGxvd2VkTW92ZSA9XG4gIHwgJ0YnXG4gIHwgXCJGJ1wiXG4gIHwgJ0YyJ1xuICB8ICdCJ1xuICB8IFwiQidcIlxuICB8ICdCMidcbiAgfCAnUidcbiAgfCBcIlInXCJcbiAgfCAnUjInXG4gIHwgJ0wnXG4gIHwgXCJMJ1wiXG4gIHwgJ0wyJ1xuICB8ICdVJ1xuICB8IFwiVSdcIlxuICB8ICdVMidcbiAgfCAnRCdcbiAgfCBcIkQnXCJcbiAgfCAnRDInO1xuXG5jb25zdCBhbGxvd2VkTW92ZXM6IGFsbG93ZWRNb3ZlW10gPSBbXG4gICdGJyxcbiAgXCJGJ1wiLFxuICAnRjInLFxuICAnQicsXG4gIFwiQidcIixcbiAgJ0IyJyxcbiAgJ1InLFxuICBcIlInXCIsXG4gICdSMicsXG4gICdMJyxcbiAgXCJMJ1wiLFxuICAnTDInLFxuICAnVScsXG4gIFwiVSdcIixcbiAgJ1UyJyxcbiAgJ0QnLFxuICBcIkQnXCIsXG4gICdEMidcbl07XG5cbmNvbnN0IGdldFJhbmRvbU1vdmUgPSAoKTogYWxsb3dlZE1vdmUgPT5cbiAgYWxsb3dlZE1vdmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsbG93ZWRNb3Zlcy5sZW5ndGgpXTtcblxuY29uc3QgbW92ZXNDb25mbGljdCA9IChtb3ZlQT86IHN0cmluZywgbW92ZUI/OiBzdHJpbmcpOiBib29sZWFuID0+XG4gIG1vdmVBICYmIG1vdmVCXG4gICAgPyBtb3ZlQS5zcGxpdCgnJykuc29tZShjaGFyYWN0ZXIgPT4gbW92ZUIuaW5jbHVkZXMoY2hhcmFjdGVyKSlcbiAgICA6IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tU2NyYW1ibGUgPSAobW92ZXNOcjogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgY29uc3QgbW92ZXMgPSBbXTtcblxuICBsZXQgbW92ZSA9ICcnO1xuICBsZXQgcHJldmlvdXNNb3ZlID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbW92ZXNOcjsgaSsrKSB7XG4gICAgbW92ZSA9IGdldFJhbmRvbU1vdmUoKTtcbiAgICB3aGlsZSAobW92ZXNDb25mbGljdChtb3ZlLCBwcmV2aW91c01vdmUpKSB7XG4gICAgICBtb3ZlID0gZ2V0UmFuZG9tTW92ZSgpO1xuICAgIH1cblxuICAgIHByZXZpb3VzTW92ZSA9IG1vdmU7XG4gICAgbW92ZXMucHVzaChtb3ZlKTtcbiAgfVxuXG4gIHJldHVybiBtb3Zlcy5qb2luKCcgJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tRW50cnkgPSAoYXJyYXk6IGFueVtdLCBleGNsdWRlSWQ/OiBzdHJpbmcpOiBhbnkgPT4ge1xuICBjb25zdCBpbmRleCA9IHJhbmRvbSgwLCBhcnJheS5sZW5ndGggLSAxKTtcbiAgY29uc3QgZW50cnkgPSBhcnJheVtpbmRleF07XG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDEgJiYgZXhjbHVkZUlkICYmIGVudHJ5Ll9pZCA9PT0gZXhjbHVkZUlkKSB7XG4gICAgcmV0dXJuIGdldFJhbmRvbUVudHJ5KGFycmF5LCBleGNsdWRlSWQpO1xuICB9XG5cbiAgcmV0dXJuIGVudHJ5O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEF2ZXJhZ2UgPSAocmVzdWx0cz86IG51bWJlcltdKTogbnVtYmVyID0+IHtcbiAgaWYgKCFyZXN1bHRzIHx8IHJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gTWF0aC5yb3VuZChcbiAgICByZXN1bHRzLnJlZHVjZSgoc3VtLCByZXN1bHQpID0+IHN1bSArIHJlc3VsdCwgMCkgLyByZXN1bHRzLmxlbmd0aFxuICApO1xufTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgQWxnb3JpdGhtcyB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2FsZ29yaXRobXMnO1xuXG5pbXBvcnQgeyBPTExzLCBQTExzIH0gZnJvbSAnLi9jb25zdCc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBbGdvcml0aG1zID0gKCkgPT4ge1xuICBjb25zdCBpc09MTCA9ICEhQWxnb3JpdGhtcy5maW5kT25lKHsgY2F0ZWdvcnk6ICdPTEwnIH0pO1xuICBjb25zdCBpc1BMTCA9ICEhQWxnb3JpdGhtcy5maW5kT25lKHsgY2F0ZWdvcnk6ICdQTEwnIH0pO1xuXG4gICFpc09MTCAmJlxuICAgIE9MTHMuZm9yRWFjaChhbGdvcml0aG0gPT4gTWV0ZW9yLmNhbGwoJ2FsZ29yaXRobXMuaW5zZXJ0JywgYWxnb3JpdGhtKSk7XG4gICFpc1BMTCAmJlxuICAgIFBMTHMuZm9yRWFjaChhbGdvcml0aG0gPT4gTWV0ZW9yLmNhbGwoJ2FsZ29yaXRobXMuaW5zZXJ0JywgYWxnb3JpdGhtKSk7XG59O1xuIiwiaW1wb3J0IHsgYWxnb3JpdGhtIH0gZnJvbSAnLi4vLi4vbGliL3R5cGVzJztcblxuY29uc3Qgc3F1cmVzRnVsbDogc3F1YXJlc1R5cGUgPSBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICBbMSwgMSwgMV0sXG4gIFsxLCAxLCAxXSxcbiAgWzEsIDEsIDFdXG5dO1xuXG5jb25zdCBzcmlrZXNOb25lOiBzdHJpa2VzVHlwZSA9IFtdO1xuXG5leHBvcnQgY29uc3QgT0xMczogYWxnb3JpdGhtW10gPSBbXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzEuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzEnLFxuICAgIHNjcmFtYmxlOiBcIlJVMiBSJyBVJyBSVVInIFUnIFJVJyBSJyBVJ1wiLFxuICAgIHNvbHV0aW9uOiBcIlJVMiBSJyBVJyBSVVInIFUnIFJVJyBSJ1wiLFxuICAgIHR5cGU6ICdDcm9zcycsXG4gICAgc3VidHlwZTogJ0Nyb3NzJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzIuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzInLFxuICAgIHNjcmFtYmxlOiBcIlJVMiBSMiBVJyBSMlUnIFIyVTJSXCIsXG4gICAgc29sdXRpb246IFwiKFJVMiBSMiBVJykgKFIyVScpIChSMlUyUilcIixcbiAgICB0eXBlOiAnQ3Jvc3MnLFxuICAgIHN1YnR5cGU6ICdDcm9zcycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zLnN2ZycsXG4gICAgbmFtZTogJ29sbF8zJyxcbiAgICBzY3JhbWJsZTogXCJ4JyAoUlVSJyBEUlUnIFInIEQnIEYpXCIsXG4gICAgc29sdXRpb246IFwieCcgKFJVJyBSJyBEUlVSJyBEJylcIixcbiAgICB0eXBlOiAnQ3Jvc3MnLFxuICAgIHN1YnR5cGU6ICdDcm9zcycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80LnN2ZycsXG4gICAgbmFtZTogJ29sbF80JyxcbiAgICBzY3JhbWJsZTogXCJSVTJSRFInIFUyUkQnIFIyIFUyXCIsXG4gICAgc29sdXRpb246IFwiUjJEJyBSVTJSJ0RSVTJSXCIsXG4gICAgdHlwZTogJ0Nyb3NzJyxcbiAgICBzdWJ0eXBlOiAnQ3Jvc3MnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNScsXG4gICAgc2NyYW1ibGU6IFwieCcgKFJVJyBSJyBEUlVSJyBEJylcIixcbiAgICBzb2x1dGlvbjogXCJ4JyAoUlVSJyBEUlUnIFInIEQnKVwiLFxuICAgIHR5cGU6ICdDcm9zcycsXG4gICAgc3VidHlwZTogJ0Nyb3NzJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzYuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzYnLFxuICAgIHNjcmFtYmxlOiBcIlJVUicgVVJVMlInIFVcIixcbiAgICBzb2x1dGlvbjogXCJMJyBVJyBMVScgTCcgVTJMXCIsXG4gICAgdHlwZTogJ0Nyb3NzJyxcbiAgICBzdWJ0eXBlOiAnQ3Jvc3MnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNy5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNycsXG4gICAgc2NyYW1ibGU6IFwiTCcgVScgTFUnIEwnIFUyTFUnXCIsXG4gICAgc29sdXRpb246IFwiUlVSJyBVUlUyUidcIixcbiAgICB0eXBlOiAnQ3Jvc3MnLFxuICAgIHN1YnR5cGU6ICdDcm9zcycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF84LnN2ZycsXG4gICAgbmFtZTogJ29sbF84JyxcbiAgICBzY3JhbWJsZTogXCJGUicgRicgUlVSMkInIFInIEJVJyBSJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihSVTJSMkZSKSAoRicgVTJSJyBGUkYnKVwiLFxuICAgIHR5cGU6ICdEb3QnLFxuICAgIHN1YnR5cGU6ICdEb3QnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfOS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfOScsXG4gICAgc2NyYW1ibGU6IFwiRlInIEYnIFJVMkZSJyBGJyBSVScgUlUnIFInIFUyXCIsXG4gICAgc29sdXRpb246IFwiTEYnIEwnIEZVMkZVJyBSVScgUicgRidcIixcbiAgICB0eXBlOiAnRG90JyxcbiAgICBzdWJ0eXBlOiAnRG90JyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzEwLnN2ZycsXG4gICAgbmFtZTogJ29sbF8xMCcsXG4gICAgc2NyYW1ibGU6IFwiRlInIEYnIFJVMlIgZCcgUlUnIFInIEYnIFUnXCIsXG4gICAgc29sdXRpb246IFwiKFJVMlIyRlJGJyBVMikgTScgVVJVJyBMJ1wiLFxuICAgIHR5cGU6ICdEb3QnLFxuICAgIHN1YnR5cGU6ICdEb3QnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTEuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzExJyxcbiAgICBzY3JhbWJsZTogXCJSVTJSMkZSRicgVTJSJyBGUkYnIFUyXCIsXG4gICAgc29sdXRpb246IFwiKEZSVVInIFUnIEYnKSAoZlJVUicgVScgZicpXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0RvdCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xMi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTInLFxuICAgIHNjcmFtYmxlOiBcIlInIEYnIFUyRjJVUlUnIFInIEYnIFUyUlwiLFxuICAgIHNvbHV0aW9uOiBcIlInIFUyRlJVUicgVScgRjJVMkZSXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0RvdCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xMy5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTMnLFxuICAgIHNjcmFtYmxlOiBcIk1VJyBMRjJMJyBVJyBSVScgUjIgclwiLFxuICAgIHNvbHV0aW9uOiBcIk1VUicgRjJSVUwnIFUgTDIgbCdcIixcbiAgICB0eXBlOiAnRG90JyxcbiAgICBzdWJ0eXBlOiAnRG90JyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzE0LnN2ZycsXG4gICAgbmFtZTogJ29sbF8xNCcsXG4gICAgc2NyYW1ibGU6IFwiTVVSJyBGMlJVTCcgVSBMMiBsJ1wiLFxuICAgIHNvbHV0aW9uOiBcIk1VJyBMRjJMJyBVJyBSVScgUjIgclwiLFxuICAgIHR5cGU6ICdEb3QnLFxuICAgIHN1YnR5cGU6ICdEb3QnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTUuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzE1JyxcbiAgICBzY3JhbWJsZTogXCIoTVVNVU1VTVUpIChNJyBVTScgVU0nIFVNJyBVKVwiLFxuICAgIHNvbHV0aW9uOiBcIk0gKFVSVVInIFUnKSBNMiAoVSBSVScgcicpXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBYJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzE2LnN2ZycsXG4gICAgbmFtZTogJ29sbF8xNicsXG4gICAgc2NyYW1ibGU6IFwiKFInIEZSVVInIFUnKSAoRicgVVIpXCIsXG4gICAgc29sdXRpb246IFwiUicgVScgRlVSVScgUicgRicgUlwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFAnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTcuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzE3JyxcbiAgICBzY3JhbWJsZTogXCIoTCBGJyBMJyBVJyBMIFUpIChGIFUnIEwnKVwiLFxuICAgIHNvbHV0aW9uOiBcIkxVRicgVScgTCcgVUxGTCdcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBQJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzE4LnN2ZycsXG4gICAgbmFtZTogJ29sbF8xOCcsXG4gICAgc2NyYW1ibGU6IFwiRiAoUlVSJyBVJykgRidcIixcbiAgICBzb2x1dGlvbjogXCJGVVJVJyBSJyBGJ1wiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFAnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTkuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzE5JyxcbiAgICBzY3JhbWJsZTogXCJGJyAoTCcgVScgTFUpIEZcIixcbiAgICBzb2x1dGlvbjogXCJGJyBVJyBMJyBVTEZcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBQJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzIwLnN2ZycsXG4gICAgbmFtZTogJ29sbF8yMCcsXG4gICAgc2NyYW1ibGU6IFwiQicgUkJSJyBVJyBSJyBVJyBSVVInIFVSVTJcIixcbiAgICBzb2x1dGlvbjogXCIoTCcgVScgTFUnIEwnIFUpIChMVUxGJyBMJyBGKVwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFcnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjEuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzIxJyxcbiAgICBzY3JhbWJsZTogXCJGUicgRicgUlVSVVInIFUnIFJVJyBSJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihSVVInIFVSVScpIChSJyBVJyBSJyBGUkYnKVwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFcnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjIuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzIyJyxcbiAgICBzY3JhbWJsZTogXCJSJyBGJyBMRicgTCcgRkxGJyBMJyBGMlJVJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBGJyBMRicpICggTCcgRkxGJyBMJyBGMlIpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzIzLnN2ZycsXG4gICAgbmFtZTogJ29sbF8yMycsXG4gICAgc2NyYW1ibGU6IFwiTEZSJyBGUkYnIFInIEZSRjJMJyBVXCIsXG4gICAgc29sdXRpb246IFwiTEZSJyBGUkYnIFInIEZSRjJMJ1wiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnRGFzaCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8yNC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMjQnLFxuICAgIHNjcmFtYmxlOiBcIkYnIFUnIEwnIFVMVScgTCcgVUxGXCIsXG4gICAgc29sdXRpb246IFwiRicgKEwnIFUnIExVKSAoTCcgVScgTFUpIEZcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0Rhc2gnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjUuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzI1JyxcbiAgICBzY3JhbWJsZTogXCJGIFVSVScgUicgVVJVJyBSJyBGJ1wiLFxuICAgIHNvbHV0aW9uOiBcIkYgKFJVUicgVScpIChSVVInIFUnKSBGJ1wiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnRGFzaCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8yNi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMjYnLFxuICAgIHNjcmFtYmxlOiBcIihyIFUnKSAocjIgVSkgKHIyIFUgcjIgVScgcilcIixcbiAgICBzb2x1dGlvbjogXCIocicgVSkgKHIyVScpIChyMlUnKSAocjJVcicpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzI3LnN2ZycsXG4gICAgbmFtZTogJ29sbF8yNycsXG4gICAgc2NyYW1ibGU6IFwiKHInIFUpIChyMlUnKSAocjJVJykgKHIyVXInKVUyXCIsXG4gICAgc29sdXRpb246IFwiKGxVJykgKGwyVSkgKGwyVSkgKGwyVScgbClcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0Rhc2gnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjguc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzI4JyxcbiAgICBzY3JhbWJsZTogXCJMIEYnIEwnIFUnIEwgRiBMJyB5IEwnIFUgTFwiLFxuICAgIHNvbHV0aW9uOiBcIkwnIFUnIEwgeScgTEYnIEwnIFVMRkwnXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzI5LnN2ZycsXG4gICAgbmFtZTogJ29sbF8yOScsXG4gICAgc2NyYW1ibGU6IFwiUicgRiBSIFUgUicgRicgUiB5JyBSIFUnIFInXCIsXG4gICAgc29sdXRpb246IFwiUlVSJyB5IFInIEZSVScgUicgRicgUlwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnRGFzaCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zMC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzAnLFxuICAgIHNjcmFtYmxlOiBcIkInIEZSJyBGJyBSQlVSVScgUicgVTJcIixcbiAgICBzb2x1dGlvbjogXCIoUicgVScgUlUgRikgeCcgKFIgVScgUicgVUQnKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIEMnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMzEuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzMxJyxcbiAgICBzY3JhbWJsZTogXCJSVUInIFJCUicgVScgUidcIixcbiAgICBzb2x1dGlvbjogXCIoUicgVScgUicgRikgKFJGJyBVKSBSXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgQycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zMi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzInLFxuICAgIHNjcmFtYmxlOiBcIkZSJyBGJyBSVVJVJyBSJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihSVVInIFUnKSAoUicgRlJGJylcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBUJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzMzLnN2ZycsXG4gICAgbmFtZTogJ29sbF8zMycsXG4gICAgc2NyYW1ibGU6IFwiRlVSVScgUicgRidcIixcbiAgICBzb2x1dGlvbjogXCJGIChSVVInIFUnKSBGJ1wiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFQnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMzQuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzM0JyxcbiAgICBzY3JhbWJsZTogXCJCJyBSQlUyUicgVScgUlUnIFIyVTJSXCIsXG4gICAgc29sdXRpb246IFwiKFJVMlIyVScgUlUnIFInIFUyKSAoRiBSIEYnKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIEknLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMzUuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzM1JyxcbiAgICBzY3JhbWJsZTogXCJGIChSVVInIFUnKSAoUlVSJyBVJykgRidcIixcbiAgICBzb2x1dGlvbjogXCJGIChVUlUnIFInIFVSVScgUicpIEYnXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgSScsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zNi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzYnLFxuICAgIHNjcmFtYmxlOiBcIkwnIEInIExSJyBVJyBSVVInIFUnIFJVTCcgQkxcIixcbiAgICBzb2x1dGlvbjogXCIoTCcgQicgTFUnKSAoUicgVVJVJyBSJyBVUkwnIEJMKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIEknLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMzcuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzM3JyxcbiAgICBzY3JhbWJsZTogXCIoUicgVScgUlUnIFInIFUpIHknIChSJyBVUkIpVSdcIixcbiAgICBzb2x1dGlvbjogXCIoUicgVScgUlUnIFInIFUpIHknIChSJyBVUkIpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgSScsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zOC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzgnLFxuICAgIHNjcmFtYmxlOiBcIlInIEYnIExGJyBMJyBGMlIgVTJcIixcbiAgICBzb2x1dGlvbjogXCJyJyBVMlJVUidVIHJcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ1NxdWFyZScsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zOS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzknLFxuICAgIHNjcmFtYmxlOiBcIkxGUicgRlJGMkwnIFUyXCIsXG4gICAgc29sdXRpb246IFwibCBVMkwnVSdMVScgbCdcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ1NxdWFyZScsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80MC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDAnLFxuICAgIHNjcmFtYmxlOiBcIlInIFUyIGwgVScgUlVSJyBsJyBVMlJcIixcbiAgICBzb2x1dGlvbjogXCJ4JyAoUicgRjJSMlUnIFInIFVSJyBGMlIpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdTcXVhcmUnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNDEuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQxJyxcbiAgICBzY3JhbWJsZTogXCIoUlVSJyBVJykgKFInIEZSRicpXCIsXG4gICAgc29sdXRpb246IFwiRlInIEYnIFJVUlUnIFInXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdTcXVhcmUnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNDIuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQyJyxcbiAgICBzY3JhbWJsZTogXCJMIEYyIFInIEYnIFIgRicgTCcgVTJcIixcbiAgICBzb2x1dGlvbjogXCJsIFVMJ1VMVTIgbCdcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzQzLnN2ZycsXG4gICAgbmFtZTogJ29sbF80MycsXG4gICAgc2NyYW1ibGU6IFwiUicgRjJMRkwnIEZSIFUyXCIsXG4gICAgc29sdXRpb246IFwicicgVSdSVSdSJ1UyIHJcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzQ0LnN2ZycsXG4gICAgbmFtZTogJ29sbF80NCcsXG4gICAgc2NyYW1ibGU6IFwiTVUnIFJVMlInIFUnIFJVJyBSMnJVXCIsXG4gICAgc29sdXRpb246IFwiRidMJ1UnTFVGIFUgRlJVUidVJ0YnXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgUycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80NS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDUnLFxuICAgIHNjcmFtYmxlOiBcIk0nIFVSJyBVMlJVUicgVVIyIHInIFVcIixcbiAgICBzb2x1dGlvbjogXCJGUlVSJ1UnRicgVSBGUlVSJ1UnRidcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMSwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzQ2LnN2ZycsXG4gICAgbmFtZTogJ29sbF80NicsXG4gICAgc2NyYW1ibGU6IFwiQjJSJyBVUlUnIFInIFUnIFIyQlInIEJVMlwiLFxuICAgIHNvbHV0aW9uOiBcIkYnIExGJyBMMlVMVUwnIFUnIExGMlwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFMnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNDcuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQ3JyxcbiAgICBzY3JhbWJsZTogXCJsIFUnIGwnIFUnIFIyVVInIEJSVScgUjJVMlwiLFxuICAgIHNvbHV0aW9uOiBcIkZSJyBGUjJVJyBSJyBVJyBSVVInIEYyXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgUycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80OC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDgnLFxuICAgIHNjcmFtYmxlOiBcIkInIFUnIFInIFUnIFIgeSBVUlUyUicgVScgUlUnXCIsXG4gICAgc29sdXRpb246IFwiKFInIEZSRicgUicgRlJGJykgKFJVIFInIFUnIFJVUicpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgUycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80OS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDknLFxuICAgIHNjcmFtYmxlOiBcIkZVUlVSJyB5JyBVJyBSJyBVMlJVUicgVSdcIixcbiAgICBzb2x1dGlvbjogXCIoTEYnIEwnIEZMRicgTCcgRikgKEwnIFUnIEwgVUwnIFUnIEwpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgUycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF81MC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNTAnLFxuICAgIHNjcmFtYmxlOiBcIkxVRicgVScgTCcgVUxGTCdcIixcbiAgICBzb2x1dGlvbjogXCIoTCBGJyBMJyBVJyBMIFUpIChGIFUnIEwnKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGlnaHRuaW5nJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzUxLnN2ZycsXG4gICAgbmFtZTogJ29sbF81MScsXG4gICAgc2NyYW1ibGU6IFwiUicgVScgRlVSVScgUicgRicgUlwiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBGUlVSJyBVJykgKEYnIFVSKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGlnaHRuaW5nJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzUyLnN2ZycsXG4gICAgbmFtZTogJ29sbF81MicsXG4gICAgc2NyYW1ibGU6IFwiTCcgVScgTCB5JyBMRicgTCcgVUxGTCdcIixcbiAgICBzb2x1dGlvbjogXCIoTEYnIEwnIFUnIExGTCcpIHknIChSJyBVUilcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBMJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzUzLnN2ZycsXG4gICAgbmFtZTogJ29sbF81MycsXG4gICAgc2NyYW1ibGU6IFwiUlVSJyB5IFInIEZSVScgUicgRicgUlwiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBGUlVSJyBGJyBSKSB5IChMVScgTCcpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgTCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF81NC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNTQnLFxuICAgIHNjcmFtYmxlOiBcIkwnIEInIEwgVScgUicgVSBSIEwnIEIgTFwiLFxuICAgIHNvbHV0aW9uOiBcIihMJyBCJyBMKSAoUicgVScgUlUpIChMJyBCTClcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBMJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzU1LnN2ZycsXG4gICAgbmFtZTogJ29sbF81NScsXG4gICAgc2NyYW1ibGU6IFwiTCBGIEwnIFUgUiBVJyBSJyBMRicgTCcgVTJcIixcbiAgICBzb2x1dGlvbjogXCIoUkJSJykgKExVTCcgVScpIChSQicgUicpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgTCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF81Ni5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNTYnLFxuICAgIHNjcmFtYmxlOiBcIihSTCcgQkxSJykgVTIgKFJMJyBCTFInKVUnXCIsXG4gICAgc29sdXRpb246IFwiKFJMJyBCTFInKSBVMiAoUkwnIEJMUicpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgRicsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF81Ny5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNTcnLFxuICAgIHNjcmFtYmxlOiBcIkYgUicgRicgUiBMJyBVIFIgVScgUicgTFwiLFxuICAgIHNvbHV0aW9uOiBcIihSVVInIFUnKSByIChSJyBVUlUnIHInKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIEgnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IFBMTHM6IGFsZ29yaXRobVtdID0gW1xuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xLnN2ZycsXG4gICAgbmFtZTogJ3BsbF8xJyxcbiAgICBzY3JhbWJsZTogXCJ4JyAoVSBMJyBVIFIyIFUnKSAoTCBVIFIyIFUyKVwiLFxuICAgIHNvbHV0aW9uOiBcIngnIChSJyBEIFInKSBVMiAoUiBEJyBSJyBVMiBSMilcIixcbiAgICB0eXBlOiAnQScsXG4gICAgc3VidHlwZTogJ0EnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMiwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8yLnN2ZycsXG4gICAgbmFtZTogJ3BsbF8yJyxcbiAgICBzY3JhbWJsZTogXCJ4JyAoVScgUiBVJyBMMlUpIChSJyBVJyBMMiBVMilcIixcbiAgICBzb2x1dGlvbjogXCJ4JyAoTCBEJyBMKSBVMiAoTCcgRCBMKSBVMiBMMlwiLFxuICAgIHR5cGU6ICdBJyxcbiAgICBzdWJ0eXBlOiAnQScsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IDIgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAwIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzMuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzMnLFxuICAgIHNjcmFtYmxlOiBcIngnIChSIFUnIFInIEQgUiBVIFInIEQnKSAoUiBVIFInIEQgUiBVJyBSJyBEJylcIixcbiAgICBzb2x1dGlvbjogXCJ4JyAoUiBVJyBSJyBEIFIgVSBSJyBEJykgKFIgVSBSJyBEIFIgVScgUicgRCcpXCIsXG4gICAgdHlwZTogJ0UnLFxuICAgIHN1YnR5cGU6ICdFJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogMiB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IDIsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAyIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzQuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzQnLFxuICAgIHNjcmFtYmxlOiBcIihSJyBVUlUnIFIyKSB5JyAoUicgVScgUlUpIChCUkInIFInIEIyVScpXCIsXG4gICAgc29sdXRpb246IFwiKFInIFVSVScgUjIpIHknIChSJyBVJyBSVSkgKEJSQicgUicgQjJVJylcIixcbiAgICB0eXBlOiAnRScsXG4gICAgc3VidHlwZTogJ0UnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAwIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgICB7IHg6IDIsIHk6IDEgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfNS5zdmcnLFxuICAgIG5hbWU6ICdwbGxfNScsXG4gICAgc2NyYW1ibGU6IFwiKE0yIFUnKSAoTTIgVTIpIChNMiBVJykgTTJcIixcbiAgICBzb2x1dGlvbjogXCIoTTIgVScpIChNMiBVMikgKE0yIFUnKSBNMlwiLFxuICAgIHR5cGU6ICdIJyxcbiAgICBzdWJ0eXBlOiAnSCcsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMSwgeTogMCB9LFxuICAgICAgICB7IHg6IDEsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMiwgeTogMSB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF82LnN2ZycsXG4gICAgbmFtZTogJ3BsbF82JyxcbiAgICBzY3JhbWJsZTogXCIoUicgVVInIFUnKSAoUicgVScpIChSJyBVIFIgVSBSMilcIixcbiAgICBzb2x1dGlvbjogXCIoUjIgVScpIChSJyBVJyBSVSkgKFIgVSBSIFUnIFIpXCIsXG4gICAgdHlwZTogJ1UnLFxuICAgIHN1YnR5cGU6ICdVJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMiwgeTogMSB9LFxuICAgICAgICB7IHg6IDEsIHk6IDAgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfNy5zdmcnLFxuICAgIG5hbWU6ICdwbGxfNycsXG4gICAgc2NyYW1ibGU6IFwiKFIyIFUnKSAoUicgVScgUlUpIChSIFUgUiBVJyBSKVwiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBVUicgVScpIChSJyBVJykgKFInIFUgUiBVIFIyKVwiLFxuICAgIHR5cGU6ICdVJyxcbiAgICBzdWJ0eXBlOiAnVScsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgICB7IHg6IDEsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAxIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzguc3ZnJyxcbiAgICBuYW1lOiAncGxsXzgnLFxuICAgIHNjcmFtYmxlOiBcIkwgVScgUicgVUwnIFUyIFIgVScgUicgVTIgUiB4MlwiLFxuICAgIHNvbHV0aW9uOiBcIkIyIChSJyBVJyBSKSBCMiAoTCcgRCBMJyBEJykgTDJcIixcbiAgICB0eXBlOiAnSicsXG4gICAgc3VidHlwZTogJ0onLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAyIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgICB7IHg6IDEsIHk6IDIgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfOS5zdmcnLFxuICAgIG5hbWU6ICdwbGxfOScsXG4gICAgc2NyYW1ibGU6IFwiKFInIFUgTCBVJyBSKSAoVTIgTCcgVSBMIFUyIEwnKSB4MlwiLFxuICAgIHNvbHV0aW9uOiBcIkIyIChMIFUgTCcpIEIyIChSIEQnIFIgRCkgUjJcIixcbiAgICB0eXBlOiAnSicsXG4gICAgc3VidHlwZTogJ0onLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDIsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAyIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMiwgeTogMSB9LFxuICAgICAgICB7IHg6IDEsIHk6IDIgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMTAuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzEwJyxcbiAgICBzY3JhbWJsZTogXCIoUiBVIFInIFUnKSAoUicgRiBSMiBVJykgKFInIFUnIFIgVSBSJyBGJylcIixcbiAgICBzb2x1dGlvbjogXCIoUiBVIFInIFUnKSAoUicgRiBSMiBVJykgKFInIFUnIFIgVSBSJyBGJylcIixcbiAgICB0eXBlOiAnVCcsXG4gICAgc3VidHlwZTogJ1QnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDIsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAyIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgICB7IHg6IDIsIHk6IDEgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMTEuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzExJyxcbiAgICBzY3JhbWJsZTogXCIoTCcgVSBMJyBVJykgeScoUicgRicpIChSMiBVJyBSJyBVIFInIEYgUiBGKSB5XCIsXG4gICAgc29sdXRpb246IFwiKEwnIFUgTCcgVScpIHknKFInIEYnKSAoUjIgVScgUicgVSBSJyBGIFIgRilcIixcbiAgICB0eXBlOiAnVicsXG4gICAgc3VidHlwZTogJ1YnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAyIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgICB7IHg6IDEsIHk6IDIgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMTIuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzEyJyxcbiAgICBzY3JhbWJsZTogXCIoTCBVMiBMJyBVMikgKEwgRicgTCcgVScgTFUpIChMIEYgTDIgVSlcIixcbiAgICBzb2x1dGlvbjogXCIoTCBVMiBMJyBVMikgKEwgRicgTCcgVScgTFUpIChMIEYgTDIgVSlcIixcbiAgICB0eXBlOiAnUicsXG4gICAgc3VidHlwZTogJ1InLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAwIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgICB7IHg6IDEsIHk6IDIgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMTMuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzEzJyxcbiAgICBzY3JhbWJsZTogXCIoUicgVTIgUiBVMikgKFInIEYgUiBVIFInIFUnKSAoUicgRicgUjIgVScpXCIsXG4gICAgc29sdXRpb246IFwiKFInIFUyIFIgVTIpIChSJyBGIFIgVSBSJyBVJykgKFInIEYnIFIyIFUnKVwiLFxuICAgIHR5cGU6ICdSJyxcbiAgICBzdWJ0eXBlOiAnUicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDAgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAyLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xNC5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTQnLFxuICAgIHNjcmFtYmxlOiBcIihMIFUgTCcgQjIpIHonIChSJyBVIEwnIFUnIEwpIChVJyBSIEIyKSB6XCIsXG4gICAgc29sdXRpb246IFwieiB4JyAoVTIgcicgVSBSJyBVIFIgVScgciBVMikgeSAoTCBGJyBMJykgeFwiLFxuICAgIHR5cGU6ICdHJyxcbiAgICBzdWJ0eXBlOiAnRycsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMSwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDEgfSxcbiAgICAgICAgeyB4OiAxLCB5OiAyIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMiwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IDIgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAyIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzE1LnN2ZycsXG4gICAgbmFtZTogJ3BsbF8xNScsXG4gICAgc2NyYW1ibGU6IFwiKFInIFUnIFIgQjIpIHogKEwgVScgUiBVIFInKSAoVSByJyBVMikgeicgeFwiLFxuICAgIHNvbHV0aW9uOiBcInonIHgnIChVMiBsIFUnIExVJyBMJyBVIGwnIFUyKSB5JyAoUicgRiBSKSB4XCIsXG4gICAgdHlwZTogJ0cnLFxuICAgIHN1YnR5cGU6ICdHJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMiwgeTogMiB9LFxuICAgICAgICB7IHg6IDAsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgICB7IHg6IDEsIHk6IDIgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMTYuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzE2JyxcbiAgICBzY3JhbWJsZTogXCJ6JyAoVTIgbCBVJyBMVScgTCcgVSBsJyBVMikgeScgKFInIEYgUikgeFwiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBVJyBSIEIyKSB6IChMIFUnIFIgVSBSJykgKFUgcicgVTIpIHonIHhcIixcbiAgICB0eXBlOiAnRycsXG4gICAgc3VidHlwZTogJ0cnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAyIH0sXG4gICAgICAgIHsgeDogMiwgeTogMiB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IDEsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAxLCB5OiAyIH0sXG4gICAgICAgIHsgeDogMCwgeTogMSB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xNy5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTcnLFxuICAgIHNjcmFtYmxlOiBcInogKFUyIHInIFUgUicgVSBSIFUnIHIgVTIpIHkgKEwgRicgTCcpIHhcIixcbiAgICBzb2x1dGlvbjogXCIoTCBVIEwnIEIyKSB6JyAoUicgVSBMJyBVJyBMKSAoVScgUiBCMikgelwiLFxuICAgIHR5cGU6ICdHJyxcbiAgICBzdWJ0eXBlOiAnRycsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMiwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAyIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMSwgeTogMCB9LFxuICAgICAgICB7IHg6IDEsIHk6IDIgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAxIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzE4LnN2ZycsXG4gICAgbmFtZTogJ3BsbF8xOCcsXG4gICAgc2NyYW1ibGU6IFwiKFUgUicgVScgUiBVJykgKFIgVSBSIFUnIFInIFUpIChSIFUgUjIgVScgUicgVSlcIixcbiAgICBzb2x1dGlvbjogXCIoVSBSJyBVJyBSIFUnKSAoUiBVIFIgVScgUicgVSkgKFIgVSBSMiBVJyBSJyBVKVwiLFxuICAgIHR5cGU6ICdaJyxcbiAgICBzdWJ0eXBlOiAnWicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMSwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IDEgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAyLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xOS5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTknLFxuICAgIHNjcmFtYmxlOiBcIkwgVScgUiBVMiBMJyBVIFInKSAoTCBVJyBSIFUyIEwnIFUgUicpIFUnXCIsXG4gICAgc29sdXRpb246IFwiTCBVJyBSIFUyIEwnIFUgUicpIChMIFUnIFIgVTIgTCcgVSBSJykgVSdcIixcbiAgICB0eXBlOiAnTicsXG4gICAgc3VidHlwZTogJ04nLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDIsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAyIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgICB7IHg6IDIsIHk6IDEgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMjAuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzIwJyxcbiAgICBzY3JhbWJsZTogXCIoUicgVUwnIFUyIFIgVScgTCkgKFInIFVMJyBVMiBSIFUnIEwpIFVcIixcbiAgICBzb2x1dGlvbjogXCIoUicgVUwnIFUyIFIgVScgTCkgKFInIFVMJyBVMiBSIFUnIEwpIFVcIixcbiAgICB0eXBlOiAnTicsXG4gICAgc3VidHlwZTogJ04nLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAyIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgICB7IHg6IDIsIHk6IDEgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMjEuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzIxJyxcbiAgICBzY3JhbWJsZTogXCIoRiBSIFUnIFInIFUnIFIgVSBSJyBGJykgKFIgVSBSJyBVJykgKFInIEYgUiBGJylcIixcbiAgICBzb2x1dGlvbjogXCIoRiBSIFUnIFInIFUnIFIgVSBSJyBGJykgKFIgVSBSJyBVJykgKFInIEYgUiBGJylcIixcbiAgICB0eXBlOiAnWScsXG4gICAgc3VidHlwZTogJ1knLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAyIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMSwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IDEgfVxuICAgICAgXVxuICAgIF1cbiAgfVxuXTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgQWxnb3JpdGhtcyB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2FsZ29yaXRobXMnO1xuXG4vLyBUT0RPIE9ubHkgcHVibGlzaCBhbGdvcml0aG1zIHRoYXQgYXJlIHB1YmxpYyBvciBiZWxvbmcgdG8gdGhlIGN1cnJlbnQgdXNlclxuTWV0ZW9yLnB1Ymxpc2goJ2FsZ29yaXRobXMnLCAoKSA9PiBBbGdvcml0aG1zLmZpbmQoKSk7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IFJlc3VsdHMgfSBmcm9tICcuLi8uLi9jb2xsZWN0aW9ucy9yZXN1bHRzJztcblxuLy8gVE9ETyBPbmx5IHB1Ymxpc2ggYWxnb3JpdGhtcyB0aGF0IGFyZSBwdWJsaWMgb3IgYmVsb25nIHRvIHRoZSBjdXJyZW50IHVzZXJcbk1ldGVvci5wdWJsaXNoKCdyZXN1bHRzJywgKCkgPT4gUmVzdWx0cy5maW5kKCkpO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5cbmltcG9ydCB7IGNyZWF0ZUFsZ29yaXRobXMgfSBmcm9tICcuL2ltcG9ydHMvYWxnb3JpdGhtc0NyZWF0aW9uJztcblxuTWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuICAvL1VuaUNvbmZpZy5wcml2YXRlLnJ1bk9uY2UoJ2NyZWF0ZUFsZ29yaXRobXMnLCBjcmVhdGVBbGdvcml0aG1zKTtcbiAgY3JlYXRlQWxnb3JpdGhtcygpO1xufSk7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbmltcG9ydCB7IGNoZWNrIH0gZnJvbSAnbWV0ZW9yL2NoZWNrJztcblxuaW1wb3J0IHsgZXhwZWN0IH0gZnJvbSAnY2hhaSc7XG5cbmV4cG9ydCBjb25zdCBBbGdvcml0aG1zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2FsZ29yaXRobXMnKTtcblxuTWV0ZW9yLm1ldGhvZHMoe1xuICAnYWxnb3JpdGhtcy50b2dnbGVBY3RpdmUnOiAoYWxnSWQsIGFjdGl2ZSkgPT4ge1xuICAgIGNoZWNrKGFjdGl2ZSwgQm9vbGVhbik7XG4gICAgY2hlY2soYWxnSWQsIFN0cmluZyk7XG5cbiAgICBBbGdvcml0aG1zLnVwZGF0ZShhbGdJZCwgeyAkc2V0OiB7IGFjdGl2ZSB9IH0pO1xuICB9LFxuICAnYWxnb3JpdGhtcy5hY3RpdmF0ZUFsbCc6IGNhdGVnb3J5ID0+IHtcbiAgICBBbGdvcml0aG1zLnVwZGF0ZShcbiAgICAgIHsgY2F0ZWdvcnkgfSxcbiAgICAgIHsgJHNldDogeyBhY3RpdmU6IHRydWUgfSB9LFxuICAgICAgeyBtdWx0aTogdHJ1ZSB9XG4gICAgKTtcbiAgfSxcbiAgJ2FsZ29yaXRobXMuZGVhY3RpdmF0ZUFsbCc6IGNhdGVnb3J5ID0+IHtcbiAgICBBbGdvcml0aG1zLnVwZGF0ZShcbiAgICAgIHsgY2F0ZWdvcnkgfSxcbiAgICAgIHsgJHNldDogeyBhY3RpdmU6IGZhbHNlIH0gfSxcbiAgICAgIHsgbXVsdGk6IHRydWUgfVxuICAgICk7XG4gIH0sXG4gICdhbGdvcml0aG1zLmluc2VydCc6ICh7XG4gICAgY2F0ZWdvcnksXG4gICAgaW1hZ2UsXG4gICAgc2NyYW1ibGUsXG4gICAgc29sdXRpb24sXG4gICAgc3VidHlwZSxcbiAgICB0eXBlXG4gIH0pID0+IHtcbiAgICBleHBlY3QoY2F0ZWdvcnkpLnRvLmJlLmEoJ3N0cmluZycpO1xuICAgIGV4cGVjdChpbWFnZSkudG8uYmUuYSgnc3RyaW5nJyk7XG4gICAgZXhwZWN0KHNjcmFtYmxlKS50by5iZS5hKCdzdHJpbmcnKTtcbiAgICBleHBlY3Qoc29sdXRpb24pLnRvLmJlLmEoJ3N0cmluZycpO1xuICAgIGV4cGVjdChzdWJ0eXBlKS50by5iZS5hKCdzdHJpbmcnKTtcbiAgICBleHBlY3QodHlwZSkudG8uYmUuYSgnc3RyaW5nJyk7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhlIHVzZXIgaXMgbG9nZ2VkIGluIGJlZm9yZSBpbnNlcnRpbmcgYSBhbGdvcml0aG1cbiAgICAvKiBpZiAoISBNZXRlb3IudXNlcklkKCkpIHtcbiAgICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ25vdC1hdXRob3JpemVkJyk7XG4gICAgIH0qL1xuXG4gICAgY29uc3QgZG9jID0ge1xuICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgY2F0ZWdvcnksXG4gICAgICBpbWFnZSxcbiAgICAgIHNjcmFtYmxlLFxuICAgICAgc29sdXRpb24sXG4gICAgICBzdWJ0eXBlLFxuICAgICAgdHlwZVxuICAgIH07XG5cbiAgICBBbGdvcml0aG1zLmluc2VydChkb2MpO1xuICB9LFxuICAnYWxnb3JpdGhtcy5zZWFyY2gnKHRleHQpIHtcbiAgICBjaGVjayh0ZXh0LCBTdHJpbmcpO1xuXG4gICAgcmV0dXJuIEFsZ29yaXRobXMuZmluZCgpO1xuICB9LFxuICAnYWxnb3JpdGhtcy5yZW1vdmUnKGFsZ29yaXRobUlkKSB7XG4gICAgY2hlY2soYWxnb3JpdGhtSWQsIFN0cmluZyk7XG5cbiAgICAvKmNvbnN0IGFsZ29yaXRobSA9IEFsZ29yaXRobXMuZmluZE9uZShhbGdvcml0aG1JZCk7XG4gICAgaWYgKGFsZ29yaXRobS5wcml2YXRlICYmIGFsZ29yaXRobS5vd25lciAhPT0gTWV0ZW9yLnVzZXJJZCgpKSB7XG4gICAgICAvLyBJZiB0aGUgYWxnb3JpdGhtIGlzIHByaXZhdGUsIG1ha2Ugc3VyZSBvbmx5IHRoZSBvd25lciBjYW4gZGVsZXRlIGl0XG4gICAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcignbm90LWF1dGhvcml6ZWQnKTtcbiAgICB9Ki9cblxuICAgIEFsZ29yaXRobXMucmVtb3ZlKGFsZ29yaXRobUlkKTtcbiAgfSAvKixcbiAgICAnYWxnb3JpdGhtcy5zZXRDaGVja2VkJyhhbGdvcml0aG1JZCwgc2V0Q2hlY2tlZCkge1xuICAgICAgICBjaGVjayhhbGdvcml0aG1JZCwgU3RyaW5nKTtcbiAgICAgICAgY2hlY2soc2V0Q2hlY2tlZCwgQm9vbGVhbik7XG5cbiAgICAgICAgY29uc3QgYWxnb3JpdGhtID0gQWxnb3JpdGhtcy5maW5kT25lKGFsZ29yaXRobUlkKTtcbiAgICAgICAgaWYgKGFsZ29yaXRobS5wcml2YXRlICYmIGFsZ29yaXRobS5vd25lciAhPT0gTWV0ZW9yLnVzZXJJZCgpKSB7XG4gICAgICAgICAgICAgIC8vIElmIHRoZSBhbGdvcml0aG0gaXMgcHJpdmF0ZSwgbWFrZSBzdXJlIG9ubHkgdGhlIG93bmVyIGNhbiBjaGVjayBpdCBvZmZcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ25vdC1hdXRob3JpemVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgQWxnb3JpdGhtcy51cGRhdGUoYWxnb3JpdGhtSWQsIHsgJHNldDogeyBjaGVja2VkOiBzZXRDaGVja2VkIH0gfSk7XG4gICAgfSxcbiAgICAnYWxnb3JpdGhtcy5zZXRQcml2YXRlJyhhbGdvcml0aG1JZCwgc2V0VG9Qcml2YXRlKSB7XG4gICAgICAgIGNoZWNrKGFsZ29yaXRobUlkLCBTdHJpbmcpO1xuICAgICAgICBjaGVjayhzZXRUb1ByaXZhdGUsIEJvb2xlYW4pO1xuXG4gICAgICAgIGNvbnN0IGFsZ29yaXRobSA9IEFsZ29yaXRobXMuZmluZE9uZShhbGdvcml0aG1JZCk7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIG9ubHkgdGhlIGFsZ29yaXRobSBvd25lciBjYW4gbWFrZSBhIGFsZ29yaXRobSBwcml2YXRlXG4gICAgICAgIGlmIChhbGdvcml0aG0ub3duZXIgIT09IE1ldGVvci51c2VySWQoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcignbm90LWF1dGhvcml6ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEFsZ29yaXRobXMudXBkYXRlKGFsZ29yaXRobUlkLCB7ICRzZXQ6IHsgcHJpdmF0ZTogc2V0VG9Qcml2YXRlIH0gfSk7XG4gICAgfSwqL1xufSk7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbmltcG9ydCB7IGNoZWNrIH0gZnJvbSAnbWV0ZW9yL2NoZWNrJztcblxuZXhwb3J0IGNvbnN0IFJlc3VsdHMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbigncmVzdWx0cycpO1xuXG5NZXRlb3IubWV0aG9kcyh7XG4gICdyZXN1bHRzLmluc2VydCc6ICh7IGFsZ29yaXRobUlkLCBjYXRlZ29yeSwgc2NyYW1ibGUsIHRpbWUgfSkgPT4ge1xuICAgIGNoZWNrKGNhdGVnb3J5LCBTdHJpbmcpO1xuICAgIGNoZWNrKHRpbWUsIE51bWJlcik7XG5cbiAgICBpZiAoY2F0ZWdvcnkgPT09ICdPTEwnIHx8IGNhdGVnb3J5ID09PSAnUExMJyB8fCBjYXRlZ29yeSA9PT0gJzN4M3gzJykge1xuICAgICAgY2hlY2soc2NyYW1ibGUsIFN0cmluZyk7XG4gICAgfVxuXG4gICAgaWYgKGNhdGVnb3J5ID09PSAnT0xMJyB8fCBjYXRlZ29yeSA9PT0gJ1BMTCcpIHtcbiAgICAgIGNoZWNrKGFsZ29yaXRobUlkLCBTdHJpbmcpO1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgdXNlciBpcyBsb2dnZWQgaW4gYmVmb3JlIGluc2VydGluZyBhIHJlc3VsdFxuICAgIC8qIGlmICghIE1ldGVvci51c2VySWQoKSkge1xuICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdub3QtYXV0aG9yaXplZCcpO1xuICAgICB9Ki9cblxuICAgIGNvbnN0IGRvYyA9IHtcbiAgICAgIGFsZ29yaXRobUlkLFxuICAgICAgY2F0ZWdvcnksXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICBzY3JhbWJsZSxcbiAgICAgIHRpbWVcbiAgICB9O1xuXG4gICAgUmVzdWx0cy5pbnNlcnQoZG9jKTtcbiAgfSxcbiAgJ3Jlc3VsdHMuc2VhcmNoJzogdGV4dCA9PiB7XG4gICAgY2hlY2sodGV4dCwgU3RyaW5nKTtcblxuICAgIHJldHVybiBSZXN1bHRzLmZpbmQoKTtcbiAgfSxcbiAgJ3Jlc3VsdHMucmVtb3ZlJzogcmVzdWx0SWQgPT4ge1xuICAgIGNoZWNrKHJlc3VsdElkLCBTdHJpbmcpO1xuXG4gICAgLypjb25zdCByZXN1bHQgPSBSZXN1bHRzLmZpbmRPbmUocmVzdWx0SWQpO1xuICAgICBpZiAocmVzdWx0LnByaXZhdGUgJiYgcmVzdWx0Lm93bmVyICE9PSBNZXRlb3IudXNlcklkKCkpIHtcbiAgICAgLy8gSWYgdGhlIHJlc3VsdCBpcyBwcml2YXRlLCBtYWtlIHN1cmUgb25seSB0aGUgb3duZXIgY2FuIGRlbGV0ZSBpdFxuICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdub3QtYXV0aG9yaXplZCcpO1xuICAgICB9Ki9cblxuICAgIFJlc3VsdHMucmVtb3ZlKHJlc3VsdElkKTtcbiAgfVxufSk7XG4iXX0=
