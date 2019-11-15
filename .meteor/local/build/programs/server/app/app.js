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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2NvbnN0LnRzIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvdXRpbHMudHMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9pbXBvcnRzL2FsZ29yaXRobXNDcmVhdGlvbi50cyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL2ltcG9ydHMvY29uc3QudHMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9wdWJsaWNhdGlvbnMvYWxnb3JpdGhtcy50cyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3B1YmxpY2F0aW9ucy9yZXN1bHRzLnRzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi50cyIsIm1ldGVvcjovL/CfkrthcHAvY29sbGVjdGlvbnMvYWxnb3JpdGhtcy50cyIsIm1ldGVvcjovL/CfkrthcHAvY29sbGVjdGlvbnMvcmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU0sQ0FBQyxNQUFQLENBQWE7QUFBQSxZQUFVLEVBQWU7QUFBekIsQ0FBYjtBQUFPLE1BQU0sVUFBVSxHQUFlLENBQ3BDO0FBQ0UsT0FBSyxFQUFFLEtBRFQ7QUFFRSxPQUFLLEVBQUUsS0FGVDtBQUdFLHVCQUFxQixFQUFFO0FBSHpCLENBRG9DLEVBTXBDO0FBQ0UsT0FBSyxFQUFFLEtBRFQ7QUFFRSxPQUFLLEVBQUUsS0FGVDtBQUdFLHVCQUFxQixFQUFFO0FBSHpCLENBTm9DLEVBV3BDO0FBQ0UsT0FBSyxFQUFFLE9BRFQ7QUFFRSxPQUFLLEVBQUUsT0FGVDtBQUdFLHNCQUFvQixFQUFFO0FBSHhCLENBWG9DLEVBZ0JwQztBQUNFLE9BQUssRUFBRSxZQURUO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxvQkFBa0IsRUFBRSxLQUh0QjtBQUlFLGtCQUFnQixFQUFFO0FBSnBCLENBaEJvQyxFQXNCcEM7QUFDRSxPQUFLLEVBQUUsWUFEVDtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0Usb0JBQWtCLEVB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O0FBQW1DO0FBQW5DLEtBQTZDO0FBQzlELFNBQUssQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUFMO0FBQ0EsU0FBSyxDQUFDLElBQUQsRUFBTyxNQUFQLENBQUw7O0FBRUEsUUFBSSxRQUFRLEtBQUssS0FBYixJQUFzQixRQUFRLEtBQUssS0FBbkMsSUFBNEMsUUFBUSxLQUFLLE9BQTdELEVBQXNFO0FBQ3BFLFdBQUssQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUFMO0FBQ0Q7O0FBRUQsUUFBSSxRQUFRLEtBQUssS0FBYixJQUFzQixRQUFRLEtBQUssS0FBdkMsRUFBOEM7QUFDNUMsV0FBSyxDQUFDLFdBQUQsRUFBYyxNQUFkLENBQUw7QUFDRCxLQVY2RCxDQVk5RDs7QUFDQTs7Ozs7QUFJQSxVQUFNLEdBQUcsR0FBRztBQUNWLGlCQURVO0FBRVYsY0FGVTtBQUdWLGVBQVMsRUFBRSxJQUFJLElBQUosRUFIRDtBQUlWLGNBSlU7QUFLVjtBQUxVLEtBQVo7QUFRQSxXQUFPLENBQUMsTUFBUixDQUFlLEdBQWY7QUFDRCxHQTNCWTtBQTRCYixvQkFBa0IsSUFBSSxJQUFHO0FBQ3ZCLFNBQUssQ0FBQyxJQUFELEVBQU8sTUFBUCxDQUFMO0FBRUEsV0FBTyxPQUFPLENBQUMsSUFBUixFQUFQO0FBQ0QsR0FoQ1k7QUFpQ2Isb0JBQWtCLFFBQVEsSUFBRztBQUMzQixTQUFLLENBQUMsUUFBRCxFQUFXLE1BQVgsQ0FBTDtBQUVBOzs7Ozs7QUFNQSxXQUFPLENBQUMsTUFBUixDQUFlLFFBQWY7QUFDRDtBQTNDWSxDQUFmLEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhdGVnb3J5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBjYXRlZ29yaWVzOiBjYXRlZ29yeVtdID0gW1xuICB7XG4gICAgbGFiZWw6ICdPTEwnLFxuICAgIHZhbHVlOiAnT0xMJyxcbiAgICByYW5kb21pemFibGVBbGdvcml0aG06IHRydWVcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUExMJyxcbiAgICB2YWx1ZTogJ1BMTCcsXG4gICAgcmFuZG9taXphYmxlQWxnb3JpdGhtOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJzN4M3gzJyxcbiAgICB2YWx1ZTogJzN4M3gzJyxcbiAgICByYW5kb21pemFibGVTY3JhbWJsZTogdHJ1ZVxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdPTEwgQXR0YWNrJyxcbiAgICB2YWx1ZTogJ09MTC1hdHRhY2snLFxuICAgIGFsZ29yaXRobXNDYXRlZ29yeTogJ09MTCcsXG4gICAgc2V0dGluZ3NEaXNhYmxlZDogdHJ1ZVxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdQTEwgQXR0YWNrJyxcbiAgICB2YWx1ZTogJ1BMTC1hdHRhY2snLFxuICAgIGFsZ29yaXRobXNDYXRlZ29yeTogJ1BMTCcsXG4gICAgc2V0dGluZ3NEaXNhYmxlZDogdHJ1ZVxuICB9XG5dO1xuIiwiaW1wb3J0IHJhbmRvbSBmcm9tICdsb2Rhc2gvcmFuZG9tJztcblxudHlwZSBhbGxvd2VkTW92ZSA9XG4gIHwgJ0YnXG4gIHwgXCJGJ1wiXG4gIHwgJ0YyJ1xuICB8ICdCJ1xuICB8IFwiQidcIlxuICB8ICdCMidcbiAgfCAnUidcbiAgfCBcIlInXCJcbiAgfCAnUjInXG4gIHwgJ0wnXG4gIHwgXCJMJ1wiXG4gIHwgJ0wyJ1xuICB8ICdVJ1xuICB8IFwiVSdcIlxuICB8ICdVMidcbiAgfCAnRCdcbiAgfCBcIkQnXCJcbiAgfCAnRDInO1xuXG5jb25zdCBhbGxvd2VkTW92ZXM6IGFsbG93ZWRNb3ZlW10gPSBbXG4gICdGJyxcbiAgXCJGJ1wiLFxuICAnRjInLFxuICAnQicsXG4gIFwiQidcIixcbiAgJ0IyJyxcbiAgJ1InLFxuICBcIlInXCIsXG4gICdSMicsXG4gICdMJyxcbiAgXCJMJ1wiLFxuICAnTDInLFxuICAnVScsXG4gIFwiVSdcIixcbiAgJ1UyJyxcbiAgJ0QnLFxuICBcIkQnXCIsXG4gICdEMidcbl07XG5cbmNvbnN0IGdldFJhbmRvbU1vdmUgPSAoKTogYWxsb3dlZE1vdmUgPT5cbiAgYWxsb3dlZE1vdmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsbG93ZWRNb3Zlcy5sZW5ndGgpXTtcblxuY29uc3QgbW92ZXNDb25mbGljdCA9IChtb3ZlQT86IHN0cmluZywgbW92ZUI/OiBzdHJpbmcpOiBib29sZWFuID0+XG4gIG1vdmVBICYmIG1vdmVCXG4gICAgPyBtb3ZlQS5zcGxpdCgnJykuc29tZShjaGFyYWN0ZXIgPT4gbW92ZUIuaW5jbHVkZXMoY2hhcmFjdGVyKSlcbiAgICA6IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tU2NyYW1ibGUgPSAobW92ZXNOcjogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgY29uc3QgbW92ZXMgPSBbXTtcblxuICBsZXQgbW92ZSA9ICcnO1xuICBsZXQgcHJldmlvdXNNb3ZlID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbW92ZXNOcjsgaSsrKSB7XG4gICAgbW92ZSA9IGdldFJhbmRvbU1vdmUoKTtcbiAgICB3aGlsZSAobW92ZXNDb25mbGljdChtb3ZlLCBwcmV2aW91c01vdmUpKSB7XG4gICAgICBtb3ZlID0gZ2V0UmFuZG9tTW92ZSgpO1xuICAgIH1cblxuICAgIHByZXZpb3VzTW92ZSA9IG1vdmU7XG4gICAgbW92ZXMucHVzaChtb3ZlKTtcbiAgfVxuXG4gIHJldHVybiBtb3Zlcy5qb2luKCcgJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tRW50cnkgPSAoYXJyYXk6IGFueVtdLCBleGNsdWRlSWQ/OiBzdHJpbmcpOiBhbnkgPT4ge1xuICBjb25zdCBpbmRleCA9IHJhbmRvbSgwLCBhcnJheS5sZW5ndGggLSAxKTtcbiAgY29uc3QgZW50cnkgPSBhcnJheVtpbmRleF07XG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDEgJiYgZXhjbHVkZUlkICYmIGVudHJ5Ll9pZCA9PT0gZXhjbHVkZUlkKSB7XG4gICAgcmV0dXJuIGdldFJhbmRvbUVudHJ5KGFycmF5LCBleGNsdWRlSWQpO1xuICB9XG5cbiAgcmV0dXJuIGVudHJ5O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEF2ZXJhZ2UgPSAocmVzdWx0cz86IG51bWJlcltdKTogbnVtYmVyID0+IHtcbiAgaWYgKCFyZXN1bHRzIHx8IHJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gTWF0aC5yb3VuZChcbiAgICByZXN1bHRzLnJlZHVjZSgoc3VtLCByZXN1bHQpID0+IHN1bSArIHJlc3VsdCwgMCkgLyByZXN1bHRzLmxlbmd0aFxuICApO1xufTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgQWxnb3JpdGhtcyB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2FsZ29yaXRobXMnO1xuXG5pbXBvcnQgeyBPTExzLCBQTExzIH0gZnJvbSAnLi9jb25zdCc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBbGdvcml0aG1zID0gKCkgPT4ge1xuICBjb25zdCBpc09MTCA9ICEhQWxnb3JpdGhtcy5maW5kT25lKHsgY2F0ZWdvcnk6ICdPTEwnIH0pO1xuICBjb25zdCBpc1BMTCA9ICEhQWxnb3JpdGhtcy5maW5kT25lKHsgY2F0ZWdvcnk6ICdQTEwnIH0pO1xuXG4gICFpc09MTCAmJlxuICAgIE9MTHMuZm9yRWFjaChhbGdvcml0aG0gPT4gTWV0ZW9yLmNhbGwoJ2FsZ29yaXRobXMuaW5zZXJ0JywgYWxnb3JpdGhtKSk7XG4gICFpc1BMTCAmJlxuICAgIFBMTHMuZm9yRWFjaChhbGdvcml0aG0gPT4gTWV0ZW9yLmNhbGwoJ2FsZ29yaXRobXMuaW5zZXJ0JywgYWxnb3JpdGhtKSk7XG59O1xuIiwiaW1wb3J0IHsgYWxnb3JpdGhtLCBzcXVhcmVzVHlwZSwgc3RyaWtlc1R5cGUgfSBmcm9tICcuLi8uLi9saWIvdHlwZXMnO1xuXG5jb25zdCBzcXVyZXNGdWxsOiBzcXVhcmVzVHlwZSA9IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gIFsxLCAxLCAxXSxcbiAgWzEsIDEsIDFdLFxuICBbMSwgMSwgMV1cbl07XG5cbmNvbnN0IHNyaWtlc05vbmU6IHN0cmlrZXNUeXBlID0gW107XG5cbmV4cG9ydCBjb25zdCBPTExzOiBhbGdvcml0aG1bXSA9IFtcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMScsXG4gICAgc2NyYW1ibGU6IFwiUlUyIFInIFUnIFJVUicgVScgUlUnIFInIFUnXCIsXG4gICAgc29sdXRpb246IFwiUlUyIFInIFUnIFJVUicgVScgUlUnIFInXCIsXG4gICAgdHlwZTogJ0Nyb3NzJyxcbiAgICBzdWJ0eXBlOiAnQ3Jvc3MnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMicsXG4gICAgc2NyYW1ibGU6IFwiUlUyIFIyIFUnIFIyVScgUjJVMlJcIixcbiAgICBzb2x1dGlvbjogXCIoUlUyIFIyIFUnKSAoUjJVJykgKFIyVTJSKVwiLFxuICAgIHR5cGU6ICdDcm9zcycsXG4gICAgc3VidHlwZTogJ0Nyb3NzJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzMuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzMnLFxuICAgIHNjcmFtYmxlOiBcIngnIChSVVInIERSVScgUicgRCcgRilcIixcbiAgICBzb2x1dGlvbjogXCJ4JyAoUlUnIFInIERSVVInIEQnKVwiLFxuICAgIHR5cGU6ICdDcm9zcycsXG4gICAgc3VidHlwZTogJ0Nyb3NzJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzQuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQnLFxuICAgIHNjcmFtYmxlOiBcIlJVMlJEUicgVTJSRCcgUjIgVTJcIixcbiAgICBzb2x1dGlvbjogXCJSMkQnIFJVMlInRFJVMlJcIixcbiAgICB0eXBlOiAnQ3Jvc3MnLFxuICAgIHN1YnR5cGU6ICdDcm9zcycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF81LnN2ZycsXG4gICAgbmFtZTogJ29sbF81JyxcbiAgICBzY3JhbWJsZTogXCJ4JyAoUlUnIFInIERSVVInIEQnKVwiLFxuICAgIHNvbHV0aW9uOiBcIngnIChSVVInIERSVScgUicgRCcpXCIsXG4gICAgdHlwZTogJ0Nyb3NzJyxcbiAgICBzdWJ0eXBlOiAnQ3Jvc3MnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNicsXG4gICAgc2NyYW1ibGU6IFwiUlVSJyBVUlUyUicgVVwiLFxuICAgIHNvbHV0aW9uOiBcIkwnIFUnIExVJyBMJyBVMkxcIixcbiAgICB0eXBlOiAnQ3Jvc3MnLFxuICAgIHN1YnR5cGU6ICdDcm9zcycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF83LnN2ZycsXG4gICAgbmFtZTogJ29sbF83JyxcbiAgICBzY3JhbWJsZTogXCJMJyBVJyBMVScgTCcgVTJMVSdcIixcbiAgICBzb2x1dGlvbjogXCJSVVInIFVSVTJSJ1wiLFxuICAgIHR5cGU6ICdDcm9zcycsXG4gICAgc3VidHlwZTogJ0Nyb3NzJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzguc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzgnLFxuICAgIHNjcmFtYmxlOiBcIkZSJyBGJyBSVVIyQicgUicgQlUnIFInXCIsXG4gICAgc29sdXRpb246IFwiKFJVMlIyRlIpIChGJyBVMlInIEZSRicpXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0RvdCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF85LnN2ZycsXG4gICAgbmFtZTogJ29sbF85JyxcbiAgICBzY3JhbWJsZTogXCJGUicgRicgUlUyRlInIEYnIFJVJyBSVScgUicgVTJcIixcbiAgICBzb2x1dGlvbjogXCJMRicgTCcgRlUyRlUnIFJVJyBSJyBGJ1wiLFxuICAgIHR5cGU6ICdEb3QnLFxuICAgIHN1YnR5cGU6ICdEb3QnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTAuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzEwJyxcbiAgICBzY3JhbWJsZTogXCJGUicgRicgUlUyUiBkJyBSVScgUicgRicgVSdcIixcbiAgICBzb2x1dGlvbjogXCIoUlUyUjJGUkYnIFUyKSBNJyBVUlUnIEwnXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0RvdCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xMS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTEnLFxuICAgIHNjcmFtYmxlOiBcIlJVMlIyRlJGJyBVMlInIEZSRicgVTJcIixcbiAgICBzb2x1dGlvbjogXCIoRlJVUicgVScgRicpIChmUlVSJyBVJyBmJylcIixcbiAgICB0eXBlOiAnRG90JyxcbiAgICBzdWJ0eXBlOiAnRG90JyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzEyLnN2ZycsXG4gICAgbmFtZTogJ29sbF8xMicsXG4gICAgc2NyYW1ibGU6IFwiUicgRicgVTJGMlVSVScgUicgRicgVTJSXCIsXG4gICAgc29sdXRpb246IFwiUicgVTJGUlVSJyBVJyBGMlUyRlJcIixcbiAgICB0eXBlOiAnRG90JyxcbiAgICBzdWJ0eXBlOiAnRG90JyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzEzLnN2ZycsXG4gICAgbmFtZTogJ29sbF8xMycsXG4gICAgc2NyYW1ibGU6IFwiTVUnIExGMkwnIFUnIFJVJyBSMiByXCIsXG4gICAgc29sdXRpb246IFwiTVVSJyBGMlJVTCcgVSBMMiBsJ1wiLFxuICAgIHR5cGU6ICdEb3QnLFxuICAgIHN1YnR5cGU6ICdEb3QnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTQuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzE0JyxcbiAgICBzY3JhbWJsZTogXCJNVVInIEYyUlVMJyBVIEwyIGwnXCIsXG4gICAgc29sdXRpb246IFwiTVUnIExGMkwnIFUnIFJVJyBSMiByXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0RvdCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xNS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTUnLFxuICAgIHNjcmFtYmxlOiBcIihNVU1VTVVNVSkgKE0nIFVNJyBVTScgVU0nIFUpXCIsXG4gICAgc29sdXRpb246IFwiTSAoVVJVUicgVScpIE0yIChVIFJVJyByJylcIixcbiAgICB0eXBlOiAnRG90JyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFgnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTYuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzE2JyxcbiAgICBzY3JhbWJsZTogXCIoUicgRlJVUicgVScpIChGJyBVUilcIixcbiAgICBzb2x1dGlvbjogXCJSJyBVJyBGVVJVJyBSJyBGJyBSXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgUCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xNy5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTcnLFxuICAgIHNjcmFtYmxlOiBcIihMIEYnIEwnIFUnIEwgVSkgKEYgVScgTCcpXCIsXG4gICAgc29sdXRpb246IFwiTFVGJyBVJyBMJyBVTEZMJ1wiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFAnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTguc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzE4JyxcbiAgICBzY3JhbWJsZTogXCJGIChSVVInIFUnKSBGJ1wiLFxuICAgIHNvbHV0aW9uOiBcIkZVUlUnIFInIEYnXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgUCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xOS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTknLFxuICAgIHNjcmFtYmxlOiBcIkYnIChMJyBVJyBMVSkgRlwiLFxuICAgIHNvbHV0aW9uOiBcIkYnIFUnIEwnIFVMRlwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFAnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjAuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzIwJyxcbiAgICBzY3JhbWJsZTogXCJCJyBSQlInIFUnIFInIFUnIFJVUicgVVJVMlwiLFxuICAgIHNvbHV0aW9uOiBcIihMJyBVJyBMVScgTCcgVSkgKExVTEYnIEwnIEYpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgVycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8yMS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMjEnLFxuICAgIHNjcmFtYmxlOiBcIkZSJyBGJyBSVVJVUicgVScgUlUnIFInXCIsXG4gICAgc29sdXRpb246IFwiKFJVUicgVVJVJykgKFInIFUnIFInIEZSRicpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgVycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8yMi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMjInLFxuICAgIHNjcmFtYmxlOiBcIlInIEYnIExGJyBMJyBGTEYnIEwnIEYyUlUnXCIsXG4gICAgc29sdXRpb246IFwiKFInIEYnIExGJykgKCBMJyBGTEYnIEwnIEYyUilcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0Rhc2gnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjMuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzIzJyxcbiAgICBzY3JhbWJsZTogXCJMRlInIEZSRicgUicgRlJGMkwnIFVcIixcbiAgICBzb2x1dGlvbjogXCJMRlInIEZSRicgUicgRlJGMkwnXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzI0LnN2ZycsXG4gICAgbmFtZTogJ29sbF8yNCcsXG4gICAgc2NyYW1ibGU6IFwiRicgVScgTCcgVUxVJyBMJyBVTEZcIixcbiAgICBzb2x1dGlvbjogXCJGJyAoTCcgVScgTFUpIChMJyBVJyBMVSkgRlwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnRGFzaCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8yNS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMjUnLFxuICAgIHNjcmFtYmxlOiBcIkYgVVJVJyBSJyBVUlUnIFInIEYnXCIsXG4gICAgc29sdXRpb246IFwiRiAoUlVSJyBVJykgKFJVUicgVScpIEYnXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzI2LnN2ZycsXG4gICAgbmFtZTogJ29sbF8yNicsXG4gICAgc2NyYW1ibGU6IFwiKHIgVScpIChyMiBVKSAocjIgVSByMiBVJyByKVwiLFxuICAgIHNvbHV0aW9uOiBcIihyJyBVKSAocjJVJykgKHIyVScpIChyMlVyJylcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0Rhc2gnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjcuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzI3JyxcbiAgICBzY3JhbWJsZTogXCIocicgVSkgKHIyVScpIChyMlUnKSAocjJVcicpVTJcIixcbiAgICBzb2x1dGlvbjogXCIobFUnKSAobDJVKSAobDJVKSAobDJVJyBsKVwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnRGFzaCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8yOC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMjgnLFxuICAgIHNjcmFtYmxlOiBcIkwgRicgTCcgVScgTCBGIEwnIHkgTCcgVSBMXCIsXG4gICAgc29sdXRpb246IFwiTCcgVScgTCB5JyBMRicgTCcgVUxGTCdcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0Rhc2gnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjkuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzI5JyxcbiAgICBzY3JhbWJsZTogXCJSJyBGIFIgVSBSJyBGJyBSIHknIFIgVScgUidcIixcbiAgICBzb2x1dGlvbjogXCJSVVInIHkgUicgRlJVJyBSJyBGJyBSXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzMwLnN2ZycsXG4gICAgbmFtZTogJ29sbF8zMCcsXG4gICAgc2NyYW1ibGU6IFwiQicgRlInIEYnIFJCVVJVJyBSJyBVMlwiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBVJyBSVSBGKSB4JyAoUiBVJyBSJyBVRCcpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgQycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zMS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzEnLFxuICAgIHNjcmFtYmxlOiBcIlJVQicgUkJSJyBVJyBSJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBVJyBSJyBGKSAoUkYnIFUpIFJcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBDJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzMyLnN2ZycsXG4gICAgbmFtZTogJ29sbF8zMicsXG4gICAgc2NyYW1ibGU6IFwiRlInIEYnIFJVUlUnIFInXCIsXG4gICAgc29sdXRpb246IFwiKFJVUicgVScpIChSJyBGUkYnKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFQnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMzMuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzMzJyxcbiAgICBzY3JhbWJsZTogXCJGVVJVJyBSJyBGJ1wiLFxuICAgIHNvbHV0aW9uOiBcIkYgKFJVUicgVScpIEYnXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgVCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zNC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzQnLFxuICAgIHNjcmFtYmxlOiBcIkInIFJCVTJSJyBVJyBSVScgUjJVMlJcIixcbiAgICBzb2x1dGlvbjogXCIoUlUyUjJVJyBSVScgUicgVTIpIChGIFIgRicpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgSScsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zNS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzUnLFxuICAgIHNjcmFtYmxlOiBcIkYgKFJVUicgVScpIChSVVInIFUnKSBGJ1wiLFxuICAgIHNvbHV0aW9uOiBcIkYgKFVSVScgUicgVVJVJyBSJykgRidcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBJJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzM2LnN2ZycsXG4gICAgbmFtZTogJ29sbF8zNicsXG4gICAgc2NyYW1ibGU6IFwiTCcgQicgTFInIFUnIFJVUicgVScgUlVMJyBCTFwiLFxuICAgIHNvbHV0aW9uOiBcIihMJyBCJyBMVScpIChSJyBVUlUnIFInIFVSTCcgQkwpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgSScsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zNy5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzcnLFxuICAgIHNjcmFtYmxlOiBcIihSJyBVJyBSVScgUicgVSkgeScgKFInIFVSQilVJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBVJyBSVScgUicgVSkgeScgKFInIFVSQilcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBJJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzM4LnN2ZycsXG4gICAgbmFtZTogJ29sbF8zOCcsXG4gICAgc2NyYW1ibGU6IFwiUicgRicgTEYnIEwnIEYyUiBVMlwiLFxuICAgIHNvbHV0aW9uOiBcInInIFUyUlVSJ1UgclwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnU3F1YXJlJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzM5LnN2ZycsXG4gICAgbmFtZTogJ29sbF8zOScsXG4gICAgc2NyYW1ibGU6IFwiTEZSJyBGUkYyTCcgVTJcIixcbiAgICBzb2x1dGlvbjogXCJsIFUyTCdVJ0xVJyBsJ1wiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnU3F1YXJlJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzQwLnN2ZycsXG4gICAgbmFtZTogJ29sbF80MCcsXG4gICAgc2NyYW1ibGU6IFwiUicgVTIgbCBVJyBSVVInIGwnIFUyUlwiLFxuICAgIHNvbHV0aW9uOiBcIngnIChSJyBGMlIyVScgUicgVVInIEYyUilcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ1NxdWFyZScsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80MS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDEnLFxuICAgIHNjcmFtYmxlOiBcIihSVVInIFUnKSAoUicgRlJGJylcIixcbiAgICBzb2x1dGlvbjogXCJGUicgRicgUlVSVScgUidcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ1NxdWFyZScsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80Mi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDInLFxuICAgIHNjcmFtYmxlOiBcIkwgRjIgUicgRicgUiBGJyBMJyBVMlwiLFxuICAgIHNvbHV0aW9uOiBcImwgVUwnVUxVMiBsJ1wiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFMnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNDMuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQzJyxcbiAgICBzY3JhbWJsZTogXCJSJyBGMkxGTCcgRlIgVTJcIixcbiAgICBzb2x1dGlvbjogXCJyJyBVJ1JVJ1InVTIgclwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFMnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNDQuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQ0JyxcbiAgICBzY3JhbWJsZTogXCJNVScgUlUyUicgVScgUlUnIFIyclVcIixcbiAgICBzb2x1dGlvbjogXCJGJ0wnVSdMVUYgVSBGUlVSJ1UnRidcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzQ1LnN2ZycsXG4gICAgbmFtZTogJ29sbF80NScsXG4gICAgc2NyYW1ibGU6IFwiTScgVVInIFUyUlVSJyBVUjIgcicgVVwiLFxuICAgIHNvbHV0aW9uOiBcIkZSVVInVSdGJyBVIEZSVVInVSdGJ1wiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFMnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNDYuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQ2JyxcbiAgICBzY3JhbWJsZTogXCJCMlInIFVSVScgUicgVScgUjJCUicgQlUyXCIsXG4gICAgc29sdXRpb246IFwiRicgTEYnIEwyVUxVTCcgVScgTEYyXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgUycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80Ny5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDcnLFxuICAgIHNjcmFtYmxlOiBcImwgVScgbCcgVScgUjJVUicgQlJVJyBSMlUyXCIsXG4gICAgc29sdXRpb246IFwiRlInIEZSMlUnIFInIFUnIFJVUicgRjJcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzQ4LnN2ZycsXG4gICAgbmFtZTogJ29sbF80OCcsXG4gICAgc2NyYW1ibGU6IFwiQicgVScgUicgVScgUiB5IFVSVTJSJyBVJyBSVSdcIixcbiAgICBzb2x1dGlvbjogXCIoUicgRlJGJyBSJyBGUkYnKSAoUlUgUicgVScgUlVSJylcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzQ5LnN2ZycsXG4gICAgbmFtZTogJ29sbF80OScsXG4gICAgc2NyYW1ibGU6IFwiRlVSVVInIHknIFUnIFInIFUyUlVSJyBVJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihMRicgTCcgRkxGJyBMJyBGKSAoTCcgVScgTCBVTCcgVScgTClcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzUwLnN2ZycsXG4gICAgbmFtZTogJ29sbF81MCcsXG4gICAgc2NyYW1ibGU6IFwiTFVGJyBVJyBMJyBVTEZMJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihMIEYnIEwnIFUnIEwgVSkgKEYgVScgTCcpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMaWdodG5pbmcnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNTEuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzUxJyxcbiAgICBzY3JhbWJsZTogXCJSJyBVJyBGVVJVJyBSJyBGJyBSXCIsXG4gICAgc29sdXRpb246IFwiKFInIEZSVVInIFUnKSAoRicgVVIpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMaWdodG5pbmcnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNTIuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzUyJyxcbiAgICBzY3JhbWJsZTogXCJMJyBVJyBMIHknIExGJyBMJyBVTEZMJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihMRicgTCcgVScgTEZMJykgeScgKFInIFVSKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIEwnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNTMuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzUzJyxcbiAgICBzY3JhbWJsZTogXCJSVVInIHkgUicgRlJVJyBSJyBGJyBSXCIsXG4gICAgc29sdXRpb246IFwiKFInIEZSVVInIEYnIFIpIHkgKExVJyBMJylcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBMJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzU0LnN2ZycsXG4gICAgbmFtZTogJ29sbF81NCcsXG4gICAgc2NyYW1ibGU6IFwiTCcgQicgTCBVJyBSJyBVIFIgTCcgQiBMXCIsXG4gICAgc29sdXRpb246IFwiKEwnIEInIEwpIChSJyBVJyBSVSkgKEwnIEJMKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIEwnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNTUuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzU1JyxcbiAgICBzY3JhbWJsZTogXCJMIEYgTCcgVSBSIFUnIFInIExGJyBMJyBVMlwiLFxuICAgIHNvbHV0aW9uOiBcIihSQlInKSAoTFVMJyBVJykgKFJCJyBSJylcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBMJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzU2LnN2ZycsXG4gICAgbmFtZTogJ29sbF81NicsXG4gICAgc2NyYW1ibGU6IFwiKFJMJyBCTFInKSBVMiAoUkwnIEJMUicpVSdcIixcbiAgICBzb2x1dGlvbjogXCIoUkwnIEJMUicpIFUyIChSTCcgQkxSJylcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBGJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzU3LnN2ZycsXG4gICAgbmFtZTogJ29sbF81NycsXG4gICAgc2NyYW1ibGU6IFwiRiBSJyBGJyBSIEwnIFUgUiBVJyBSJyBMXCIsXG4gICAgc29sdXRpb246IFwiKFJVUicgVScpIHIgKFInIFVSVScgcicpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgSCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgUExMczogYWxnb3JpdGhtW10gPSBbXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzEuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzEnLFxuICAgIHNjcmFtYmxlOiBcIngnIChVIEwnIFUgUjIgVScpIChMIFUgUjIgVTIpXCIsXG4gICAgc29sdXRpb246IFwieCcgKFInIEQgUicpIFUyIChSIEQnIFInIFUyIFIyKVwiLFxuICAgIHR5cGU6ICdBJyxcbiAgICBzdWJ0eXBlOiAnQScsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAyIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzIuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzInLFxuICAgIHNjcmFtYmxlOiBcIngnIChVJyBSIFUnIEwyVSkgKFInIFUnIEwyIFUyKVwiLFxuICAgIHNvbHV0aW9uOiBcIngnIChMIEQnIEwpIFUyIChMJyBEIEwpIFUyIEwyXCIsXG4gICAgdHlwZTogJ0EnLFxuICAgIHN1YnR5cGU6ICdBJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogMiB9LFxuICAgICAgICB7IHg6IDIsIHk6IDAgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMy5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMycsXG4gICAgc2NyYW1ibGU6IFwieCcgKFIgVScgUicgRCBSIFUgUicgRCcpIChSIFUgUicgRCBSIFUnIFInIEQnKVwiLFxuICAgIHNvbHV0aW9uOiBcIngnIChSIFUnIFInIEQgUiBVIFInIEQnKSAoUiBVIFInIEQgUiBVJyBSJyBEJylcIixcbiAgICB0eXBlOiAnRScsXG4gICAgc3VidHlwZTogJ0UnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAyIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMiwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfNC5zdmcnLFxuICAgIG5hbWU6ICdwbGxfNCcsXG4gICAgc2NyYW1ibGU6IFwiKFInIFVSVScgUjIpIHknIChSJyBVJyBSVSkgKEJSQicgUicgQjJVJylcIixcbiAgICBzb2x1dGlvbjogXCIoUicgVVJVJyBSMikgeScgKFInIFUnIFJVKSAoQlJCJyBSJyBCMlUnKVwiLFxuICAgIHR5cGU6ICdFJyxcbiAgICBzdWJ0eXBlOiAnRScsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDAgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMiwgeTogMSB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF81LnN2ZycsXG4gICAgbmFtZTogJ3BsbF81JyxcbiAgICBzY3JhbWJsZTogXCIoTTIgVScpIChNMiBVMikgKE0yIFUnKSBNMlwiLFxuICAgIHNvbHV0aW9uOiBcIihNMiBVJykgKE0yIFUyKSAoTTIgVScpIE0yXCIsXG4gICAgdHlwZTogJ0gnLFxuICAgIHN1YnR5cGU6ICdIJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDEgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAxIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzYuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzYnLFxuICAgIHNjcmFtYmxlOiBcIihSJyBVUicgVScpIChSJyBVJykgKFInIFUgUiBVIFIyKVwiLFxuICAgIHNvbHV0aW9uOiBcIihSMiBVJykgKFInIFUnIFJVKSAoUiBVIFIgVScgUilcIixcbiAgICB0eXBlOiAnVScsXG4gICAgc3VidHlwZTogJ1UnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDEgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMCB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF83LnN2ZycsXG4gICAgbmFtZTogJ3BsbF83JyxcbiAgICBzY3JhbWJsZTogXCIoUjIgVScpIChSJyBVJyBSVSkgKFIgVSBSIFUnIFIpXCIsXG4gICAgc29sdXRpb246IFwiKFInIFVSJyBVJykgKFInIFUnKSAoUicgVSBSIFUgUjIpXCIsXG4gICAgdHlwZTogJ1UnLFxuICAgIHN1YnR5cGU6ICdVJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDEgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfOC5zdmcnLFxuICAgIG5hbWU6ICdwbGxfOCcsXG4gICAgc2NyYW1ibGU6IFwiTCBVJyBSJyBVTCcgVTIgUiBVJyBSJyBVMiBSIHgyXCIsXG4gICAgc29sdXRpb246IFwiQjIgKFInIFUnIFIpIEIyIChMJyBEIEwnIEQnKSBMMlwiLFxuICAgIHR5cGU6ICdKJyxcbiAgICBzdWJ0eXBlOiAnSicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF85LnN2ZycsXG4gICAgbmFtZTogJ3BsbF85JyxcbiAgICBzY3JhbWJsZTogXCIoUicgVSBMIFUnIFIpIChVMiBMJyBVIEwgVTIgTCcpIHgyXCIsXG4gICAgc29sdXRpb246IFwiQjIgKEwgVSBMJykgQjIgKFIgRCcgUiBEKSBSMlwiLFxuICAgIHR5cGU6ICdKJyxcbiAgICBzdWJ0eXBlOiAnSicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMiwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAyLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xMC5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTAnLFxuICAgIHNjcmFtYmxlOiBcIihSIFUgUicgVScpIChSJyBGIFIyIFUnKSAoUicgVScgUiBVIFInIEYnKVwiLFxuICAgIHNvbHV0aW9uOiBcIihSIFUgUicgVScpIChSJyBGIFIyIFUnKSAoUicgVScgUiBVIFInIEYnKVwiLFxuICAgIHR5cGU6ICdUJyxcbiAgICBzdWJ0eXBlOiAnVCcsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMiwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMiwgeTogMSB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xMS5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTEnLFxuICAgIHNjcmFtYmxlOiBcIihMJyBVIEwnIFUnKSB5JyhSJyBGJykgKFIyIFUnIFInIFUgUicgRiBSIEYpIHlcIixcbiAgICBzb2x1dGlvbjogXCIoTCcgVSBMJyBVJykgeScoUicgRicpIChSMiBVJyBSJyBVIFInIEYgUiBGKVwiLFxuICAgIHR5cGU6ICdWJyxcbiAgICBzdWJ0eXBlOiAnVicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xMi5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTInLFxuICAgIHNjcmFtYmxlOiBcIihMIFUyIEwnIFUyKSAoTCBGJyBMJyBVJyBMVSkgKEwgRiBMMiBVKVwiLFxuICAgIHNvbHV0aW9uOiBcIihMIFUyIEwnIFUyKSAoTCBGJyBMJyBVJyBMVSkgKEwgRiBMMiBVKVwiLFxuICAgIHR5cGU6ICdSJyxcbiAgICBzdWJ0eXBlOiAnUicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDAgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xMy5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTMnLFxuICAgIHNjcmFtYmxlOiBcIihSJyBVMiBSIFUyKSAoUicgRiBSIFUgUicgVScpIChSJyBGJyBSMiBVJylcIixcbiAgICBzb2x1dGlvbjogXCIoUicgVTIgUiBVMikgKFInIEYgUiBVIFInIFUnKSAoUicgRicgUjIgVScpXCIsXG4gICAgdHlwZTogJ1InLFxuICAgIHN1YnR5cGU6ICdSJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMiwgeTogMCB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IDIsIHk6IDEgfSxcbiAgICAgICAgeyB4OiAxLCB5OiAyIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzE0LnN2ZycsXG4gICAgbmFtZTogJ3BsbF8xNCcsXG4gICAgc2NyYW1ibGU6IFwiKEwgVSBMJyBCMikgeicgKFInIFUgTCcgVScgTCkgKFUnIFIgQjIpIHpcIixcbiAgICBzb2x1dGlvbjogXCJ6IHgnIChVMiByJyBVIFInIFUgUiBVJyByIFUyKSB5IChMIEYnIEwnKSB4XCIsXG4gICAgdHlwZTogJ0cnLFxuICAgIHN1YnR5cGU6ICdHJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMiwgeTogMSB9LFxuICAgICAgICB7IHg6IDEsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAyLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogMiB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMTUuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzE1JyxcbiAgICBzY3JhbWJsZTogXCIoUicgVScgUiBCMikgeiAoTCBVJyBSIFUgUicpIChVIHInIFUyKSB6JyB4XCIsXG4gICAgc29sdXRpb246IFwieicgeCcgKFUyIGwgVScgTFUnIEwnIFUgbCcgVTIpIHknIChSJyBGIFIpIHhcIixcbiAgICB0eXBlOiAnRycsXG4gICAgc3VidHlwZTogJ0cnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAyIH0sXG4gICAgICAgIHsgeDogMCwgeTogMiB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IDEsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xNi5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTYnLFxuICAgIHNjcmFtYmxlOiBcInonIChVMiBsIFUnIExVJyBMJyBVIGwnIFUyKSB5JyAoUicgRiBSKSB4XCIsXG4gICAgc29sdXRpb246IFwiKFInIFUnIFIgQjIpIHogKEwgVScgUiBVIFInKSAoVSByJyBVMikgeicgeFwiLFxuICAgIHR5cGU6ICdHJyxcbiAgICBzdWJ0eXBlOiAnRycsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IDIgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAyIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMSwgeTogMCB9LFxuICAgICAgICB7IHg6IDEsIHk6IDIgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAxIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzE3LnN2ZycsXG4gICAgbmFtZTogJ3BsbF8xNycsXG4gICAgc2NyYW1ibGU6IFwieiAoVTIgcicgVSBSJyBVIFIgVScgciBVMikgeSAoTCBGJyBMJykgeFwiLFxuICAgIHNvbHV0aW9uOiBcIihMIFUgTCcgQjIpIHonIChSJyBVIEwnIFUnIEwpIChVJyBSIEIyKSB6XCIsXG4gICAgdHlwZTogJ0cnLFxuICAgIHN1YnR5cGU6ICdHJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAyLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMiwgeTogMiB9LFxuICAgICAgICB7IHg6IDAsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9LFxuICAgICAgICB7IHg6IDIsIHk6IDEgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMTguc3ZnJyxcbiAgICBuYW1lOiAncGxsXzE4JyxcbiAgICBzY3JhbWJsZTogXCIoVSBSJyBVJyBSIFUnKSAoUiBVIFIgVScgUicgVSkgKFIgVSBSMiBVJyBSJyBVKVwiLFxuICAgIHNvbHV0aW9uOiBcIihVIFInIFUnIFIgVScpIChSIFUgUiBVJyBSJyBVKSAoUiBVIFIyIFUnIFInIFUpXCIsXG4gICAgdHlwZTogJ1onLFxuICAgIHN1YnR5cGU6ICdaJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogMSB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IDIsIHk6IDEgfSxcbiAgICAgICAgeyB4OiAxLCB5OiAyIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzE5LnN2ZycsXG4gICAgbmFtZTogJ3BsbF8xOScsXG4gICAgc2NyYW1ibGU6IFwiTCBVJyBSIFUyIEwnIFUgUicpIChMIFUnIFIgVTIgTCcgVSBSJykgVSdcIixcbiAgICBzb2x1dGlvbjogXCJMIFUnIFIgVTIgTCcgVSBSJykgKEwgVScgUiBVMiBMJyBVIFInKSBVJ1wiLFxuICAgIHR5cGU6ICdOJyxcbiAgICBzdWJ0eXBlOiAnTicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMiwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMiwgeTogMSB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8yMC5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMjAnLFxuICAgIHNjcmFtYmxlOiBcIihSJyBVTCcgVTIgUiBVJyBMKSAoUicgVUwnIFUyIFIgVScgTCkgVVwiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBVTCcgVTIgUiBVJyBMKSAoUicgVUwnIFUyIFIgVScgTCkgVVwiLFxuICAgIHR5cGU6ICdOJyxcbiAgICBzdWJ0eXBlOiAnTicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMiwgeTogMSB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8yMS5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMjEnLFxuICAgIHNjcmFtYmxlOiBcIihGIFIgVScgUicgVScgUiBVIFInIEYnKSAoUiBVIFInIFUnKSAoUicgRiBSIEYnKVwiLFxuICAgIHNvbHV0aW9uOiBcIihGIFIgVScgUicgVScgUiBVIFInIEYnKSAoUiBVIFInIFUnKSAoUicgRiBSIEYnKVwiLFxuICAgIHR5cGU6ICdZJyxcbiAgICBzdWJ0eXBlOiAnWScsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogMSB9XG4gICAgICBdXG4gICAgXVxuICB9XG5dO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBBbGdvcml0aG1zIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvYWxnb3JpdGhtcyc7XG5cbi8vIFRPRE8gT25seSBwdWJsaXNoIGFsZ29yaXRobXMgdGhhdCBhcmUgcHVibGljIG9yIGJlbG9uZyB0byB0aGUgY3VycmVudCB1c2VyXG5NZXRlb3IucHVibGlzaCgnYWxnb3JpdGhtcycsICgpID0+IEFsZ29yaXRobXMuZmluZCgpKTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgUmVzdWx0cyB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL3Jlc3VsdHMnO1xuXG4vLyBUT0RPIE9ubHkgcHVibGlzaCBhbGdvcml0aG1zIHRoYXQgYXJlIHB1YmxpYyBvciBiZWxvbmcgdG8gdGhlIGN1cnJlbnQgdXNlclxuTWV0ZW9yLnB1Ymxpc2goJ3Jlc3VsdHMnLCAoKSA9PiBSZXN1bHRzLmZpbmQoKSk7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcblxuaW1wb3J0IHsgY3JlYXRlQWxnb3JpdGhtcyB9IGZyb20gJy4vaW1wb3J0cy9hbGdvcml0aG1zQ3JlYXRpb24nO1xuXG5NZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG4gIC8vVW5pQ29uZmlnLnByaXZhdGUucnVuT25jZSgnY3JlYXRlQWxnb3JpdGhtcycsIGNyZWF0ZUFsZ29yaXRobXMpO1xuICBjcmVhdGVBbGdvcml0aG1zKCk7XG59KTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuaW1wb3J0IHsgY2hlY2sgfSBmcm9tICdtZXRlb3IvY2hlY2snO1xuXG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJztcblxuZXhwb3J0IGNvbnN0IEFsZ29yaXRobXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignYWxnb3JpdGhtcycpO1xuXG5NZXRlb3IubWV0aG9kcyh7XG4gICdhbGdvcml0aG1zLnRvZ2dsZUFjdGl2ZSc6IChhbGdJZCwgYWN0aXZlKSA9PiB7XG4gICAgY2hlY2soYWN0aXZlLCBCb29sZWFuKTtcbiAgICBjaGVjayhhbGdJZCwgU3RyaW5nKTtcblxuICAgIEFsZ29yaXRobXMudXBkYXRlKGFsZ0lkLCB7ICRzZXQ6IHsgYWN0aXZlIH0gfSk7XG4gIH0sXG4gICdhbGdvcml0aG1zLmFjdGl2YXRlQWxsJzogY2F0ZWdvcnkgPT4ge1xuICAgIEFsZ29yaXRobXMudXBkYXRlKFxuICAgICAgeyBjYXRlZ29yeSB9LFxuICAgICAgeyAkc2V0OiB7IGFjdGl2ZTogdHJ1ZSB9IH0sXG4gICAgICB7IG11bHRpOiB0cnVlIH1cbiAgICApO1xuICB9LFxuICAnYWxnb3JpdGhtcy5kZWFjdGl2YXRlQWxsJzogY2F0ZWdvcnkgPT4ge1xuICAgIEFsZ29yaXRobXMudXBkYXRlKFxuICAgICAgeyBjYXRlZ29yeSB9LFxuICAgICAgeyAkc2V0OiB7IGFjdGl2ZTogZmFsc2UgfSB9LFxuICAgICAgeyBtdWx0aTogdHJ1ZSB9XG4gICAgKTtcbiAgfSxcbiAgJ2FsZ29yaXRobXMuaW5zZXJ0JzogKHtcbiAgICBjYXRlZ29yeSxcbiAgICBpbWFnZSxcbiAgICBzY3JhbWJsZSxcbiAgICBzb2x1dGlvbixcbiAgICBzdWJ0eXBlLFxuICAgIHR5cGVcbiAgfSkgPT4ge1xuICAgIGV4cGVjdChjYXRlZ29yeSkudG8uYmUuYSgnc3RyaW5nJyk7XG4gICAgZXhwZWN0KGltYWdlKS50by5iZS5hKCdzdHJpbmcnKTtcbiAgICBleHBlY3Qoc2NyYW1ibGUpLnRvLmJlLmEoJ3N0cmluZycpO1xuICAgIGV4cGVjdChzb2x1dGlvbikudG8uYmUuYSgnc3RyaW5nJyk7XG4gICAgZXhwZWN0KHN1YnR5cGUpLnRvLmJlLmEoJ3N0cmluZycpO1xuICAgIGV4cGVjdCh0eXBlKS50by5iZS5hKCdzdHJpbmcnKTtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgdXNlciBpcyBsb2dnZWQgaW4gYmVmb3JlIGluc2VydGluZyBhIGFsZ29yaXRobVxuICAgIC8qIGlmICghIE1ldGVvci51c2VySWQoKSkge1xuICAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcignbm90LWF1dGhvcml6ZWQnKTtcbiAgICAgfSovXG5cbiAgICBjb25zdCBkb2MgPSB7XG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIGltYWdlLFxuICAgICAgc2NyYW1ibGUsXG4gICAgICBzb2x1dGlvbixcbiAgICAgIHN1YnR5cGUsXG4gICAgICB0eXBlXG4gICAgfTtcblxuICAgIEFsZ29yaXRobXMuaW5zZXJ0KGRvYyk7XG4gIH0sXG4gICdhbGdvcml0aG1zLnNlYXJjaCcodGV4dCkge1xuICAgIGNoZWNrKHRleHQsIFN0cmluZyk7XG5cbiAgICByZXR1cm4gQWxnb3JpdGhtcy5maW5kKCk7XG4gIH0sXG4gICdhbGdvcml0aG1zLnJlbW92ZScoYWxnb3JpdGhtSWQpIHtcbiAgICBjaGVjayhhbGdvcml0aG1JZCwgU3RyaW5nKTtcblxuICAgIC8qY29uc3QgYWxnb3JpdGhtID0gQWxnb3JpdGhtcy5maW5kT25lKGFsZ29yaXRobUlkKTtcbiAgICBpZiAoYWxnb3JpdGhtLnByaXZhdGUgJiYgYWxnb3JpdGhtLm93bmVyICE9PSBNZXRlb3IudXNlcklkKCkpIHtcbiAgICAgIC8vIElmIHRoZSBhbGdvcml0aG0gaXMgcHJpdmF0ZSwgbWFrZSBzdXJlIG9ubHkgdGhlIG93bmVyIGNhbiBkZWxldGUgaXRcbiAgICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdub3QtYXV0aG9yaXplZCcpO1xuICAgIH0qL1xuXG4gICAgQWxnb3JpdGhtcy5yZW1vdmUoYWxnb3JpdGhtSWQpO1xuICB9IC8qLFxuICAgICdhbGdvcml0aG1zLnNldENoZWNrZWQnKGFsZ29yaXRobUlkLCBzZXRDaGVja2VkKSB7XG4gICAgICAgIGNoZWNrKGFsZ29yaXRobUlkLCBTdHJpbmcpO1xuICAgICAgICBjaGVjayhzZXRDaGVja2VkLCBCb29sZWFuKTtcblxuICAgICAgICBjb25zdCBhbGdvcml0aG0gPSBBbGdvcml0aG1zLmZpbmRPbmUoYWxnb3JpdGhtSWQpO1xuICAgICAgICBpZiAoYWxnb3JpdGhtLnByaXZhdGUgJiYgYWxnb3JpdGhtLm93bmVyICE9PSBNZXRlb3IudXNlcklkKCkpIHtcbiAgICAgICAgICAgICAgLy8gSWYgdGhlIGFsZ29yaXRobSBpcyBwcml2YXRlLCBtYWtlIHN1cmUgb25seSB0aGUgb3duZXIgY2FuIGNoZWNrIGl0IG9mZlxuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcignbm90LWF1dGhvcml6ZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBBbGdvcml0aG1zLnVwZGF0ZShhbGdvcml0aG1JZCwgeyAkc2V0OiB7IGNoZWNrZWQ6IHNldENoZWNrZWQgfSB9KTtcbiAgICB9LFxuICAgICdhbGdvcml0aG1zLnNldFByaXZhdGUnKGFsZ29yaXRobUlkLCBzZXRUb1ByaXZhdGUpIHtcbiAgICAgICAgY2hlY2soYWxnb3JpdGhtSWQsIFN0cmluZyk7XG4gICAgICAgIGNoZWNrKHNldFRvUHJpdmF0ZSwgQm9vbGVhbik7XG5cbiAgICAgICAgY29uc3QgYWxnb3JpdGhtID0gQWxnb3JpdGhtcy5maW5kT25lKGFsZ29yaXRobUlkKTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgb25seSB0aGUgYWxnb3JpdGhtIG93bmVyIGNhbiBtYWtlIGEgYWxnb3JpdGhtIHByaXZhdGVcbiAgICAgICAgaWYgKGFsZ29yaXRobS5vd25lciAhPT0gTWV0ZW9yLnVzZXJJZCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdub3QtYXV0aG9yaXplZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgQWxnb3JpdGhtcy51cGRhdGUoYWxnb3JpdGhtSWQsIHsgJHNldDogeyBwcml2YXRlOiBzZXRUb1ByaXZhdGUgfSB9KTtcbiAgICB9LCovXG59KTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuaW1wb3J0IHsgY2hlY2sgfSBmcm9tICdtZXRlb3IvY2hlY2snO1xuXG5leHBvcnQgY29uc3QgUmVzdWx0cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdyZXN1bHRzJyk7XG5cbk1ldGVvci5tZXRob2RzKHtcbiAgJ3Jlc3VsdHMuaW5zZXJ0JzogKHsgYWxnb3JpdGhtSWQsIGNhdGVnb3J5LCBzY3JhbWJsZSwgdGltZSB9KSA9PiB7XG4gICAgY2hlY2soY2F0ZWdvcnksIFN0cmluZyk7XG4gICAgY2hlY2sodGltZSwgTnVtYmVyKTtcblxuICAgIGlmIChjYXRlZ29yeSA9PT0gJ09MTCcgfHwgY2F0ZWdvcnkgPT09ICdQTEwnIHx8IGNhdGVnb3J5ID09PSAnM3gzeDMnKSB7XG4gICAgICBjaGVjayhzY3JhbWJsZSwgU3RyaW5nKTtcbiAgICB9XG5cbiAgICBpZiAoY2F0ZWdvcnkgPT09ICdPTEwnIHx8IGNhdGVnb3J5ID09PSAnUExMJykge1xuICAgICAgY2hlY2soYWxnb3JpdGhtSWQsIFN0cmluZyk7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbiBiZWZvcmUgaW5zZXJ0aW5nIGEgcmVzdWx0XG4gICAgLyogaWYgKCEgTWV0ZW9yLnVzZXJJZCgpKSB7XG4gICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ25vdC1hdXRob3JpemVkJyk7XG4gICAgIH0qL1xuXG4gICAgY29uc3QgZG9jID0ge1xuICAgICAgYWxnb3JpdGhtSWQsXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgIHNjcmFtYmxlLFxuICAgICAgdGltZVxuICAgIH07XG5cbiAgICBSZXN1bHRzLmluc2VydChkb2MpO1xuICB9LFxuICAncmVzdWx0cy5zZWFyY2gnOiB0ZXh0ID0+IHtcbiAgICBjaGVjayh0ZXh0LCBTdHJpbmcpO1xuXG4gICAgcmV0dXJuIFJlc3VsdHMuZmluZCgpO1xuICB9LFxuICAncmVzdWx0cy5yZW1vdmUnOiByZXN1bHRJZCA9PiB7XG4gICAgY2hlY2socmVzdWx0SWQsIFN0cmluZyk7XG5cbiAgICAvKmNvbnN0IHJlc3VsdCA9IFJlc3VsdHMuZmluZE9uZShyZXN1bHRJZCk7XG4gICAgIGlmIChyZXN1bHQucHJpdmF0ZSAmJiByZXN1bHQub3duZXIgIT09IE1ldGVvci51c2VySWQoKSkge1xuICAgICAvLyBJZiB0aGUgcmVzdWx0IGlzIHByaXZhdGUsIG1ha2Ugc3VyZSBvbmx5IHRoZSBvd25lciBjYW4gZGVsZXRlIGl0XG4gICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ25vdC1hdXRob3JpemVkJyk7XG4gICAgIH0qL1xuXG4gICAgUmVzdWx0cy5yZW1vdmUocmVzdWx0SWQpO1xuICB9XG59KTtcbiJdfQ==
