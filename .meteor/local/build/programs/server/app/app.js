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
  type: 'OLL',
  randomizableAlgorithm: true
}, {
  label: 'PLL',
  value: 'PLL',
  type: 'PLL',
  randomizableAlgorithm: true
}, {
  label: '3x3x3',
  value: '3x3x3',
  randomizableScramble: true
}, {
  label: 'OLL Attack',
  value: 'OLL-attack',
  type: 'OLL',
  settingsDisabled: true
}, {
  label: 'PLL Attack',
  value: 'PLL-attack',
  type: 'PLL',
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
  getAverage: () => getAverage
});
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
  // const userId = this.userId;
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
  return Results.find({
    userId: this.userId || 'demo'
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
  // 'algorithms.insert'({ category, image, scramble, solution, subtype, type }) {
  //   check(this.userId, String);
  //   check(category, String);
  //   check(image, String);
  //   check(scramble, String);
  //   check(solution, String);
  //   check(subtype, String);
  //   check(type, String);
  //
  //   const doc = {
  //     createdAt: new Date(),
  //     category,
  //     image,
  //     scramble,
  //     solution,
  //     subtype,
  //     type
  //   };
  //
  //   Algorithms.insert(doc);
  // },
  'algorithms.search'(text) {
    check(text, String);
    return Algorithms.find();
  } // 'algorithms.remove'(algorithmId) {
  //   check(this.userId, String);
  //   check(algorithmId, String);
  //
  //   Algorithms.remove(algorithmId);
  // }


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
      userId: this.userId || 'demo'
    };
    Results.insert(doc);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2NvbnN0LnRzIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvdXRpbHMudHMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9pbXBvcnRzL2FsZ29yaXRobXNDcmVhdGlvbi50cyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL2ltcG9ydHMvY29uc3QudHMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9wdWJsaWNhdGlvbnMvYWxnb3JpdGhtcy50cyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3B1YmxpY2F0aW9ucy9yZXN1bHRzLnRzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWFpbi50cyIsIm1ldGVvcjovL/CfkrthcHAvY29sbGVjdGlvbnMvYWxnb3JpdGhtcy50cyIsIm1ldGVvcjovL/CfkrthcHAvY29sbGVjdGlvbnMvcmVzdWx0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU0sQ0FBQyxNQUFQLENBQWE7QUFBQSxZQUFVLEVBQWU7QUFBekIsQ0FBYjtBQUFPLE1BQU0sVUFBVSxHQUFlLENBQ3BDO0FBQ0UsT0FBSyxFQUFFLEtBRFQ7QUFFRSxPQUFLLEVBQUUsS0FGVDtBQUdFLE1BQUksRUFBRSxLQUhSO0FBSUUsdUJBQXFCLEVBQUU7QUFKekIsQ0FEb0MsRUFPcEM7QUFDRSxPQUFLLEVBQUUsS0FEVDtBQUVFLE9BQUssRUFBRSxLQUZUO0FBR0UsTUFBSSxFQUFFLEtBSFI7QUFJRSx1QkFBcUIsRUFBRTtBQUp6QixDQVBvQyxFQWFwQztBQUNFLE9BQUssRUFBRSxPQURUO0FBRUUsT0FBSyxFQUFFLE9BRlQ7QUFHRSxzQkFBb0IsRUFBRTtBQUh4QixDQWJvQyxFQWtCcEM7QUFDRSxPQUFLLEVBQUUsWUFEVDtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLEtBSFI7QUFJRSxrQkFBZ0IsRUFBRTtBQUpwQixDQWxCb0MsRUF3QnBDO0FBQ0UsT0FBSyxFQUFFLFlBRFQ7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxLQUhSO0FBSUUsa0JBQWdCLEVBQUU7QUFKcEIsQ0F4Qm9DLENBQS9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2tCUCxNQUFNLE9BQU4sQ0FBTTtBQUFBLG1CQUE4Qix5QkFBOUI7QUFBOEI7QUFBOUIsQ0FBTjtBQUFBLE1BQU0sWUFBWSxHQUFrQixDQUNsQyxHQURrQyxFQUVsQyxJQUZrQyxFQUdsQyxJQUhrQyxFQUlsQyxHQUprQyxFQUtsQyxJQUxrQyxFQU1sQyxJQU5rQyxFQU9sQyxHQVBrQyxFQVFsQyxJQVJrQyxFQVNsQyxJQVRrQyxFQVVsQyxHQVZrQyxFQVdsQyxJQVhrQyxFQVlsQyxJQVprQyxFQWFsQyxHQWJrQyxFQWNsQyxJQWRrQyxFQWVsQyxJQWZrQyxFQWdCbEMsR0FoQmtDLEVBaUJsQyxJQWpCa0MsRUFrQmxDLElBbEJrQyxDQUFwQzs7QUFxQkEsTUFBTSxhQUFhLEdBQUcsTUFDcEIsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBSSxDQUFDLE1BQUwsS0FBZ0IsWUFBWSxDQUFDLE1BQXhDLENBQUQsQ0FEZDs7QUFHQSxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQUQsRUFBaUIsS0FBakIsS0FDcEIsS0FBSyxJQUFJLEtBQVQsR0FDSSxLQUFLLENBQUMsS0FBTixDQUFZLEVBQVosRUFBZ0IsSUFBaEIsQ0FBcUIsU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFOLENBQWUsU0FBZixDQUFsQyxDQURKLEdBRUksS0FITjs7QUFLTyxNQUFNLGlCQUFpQixHQUFJLE9BQUQsSUFBNEI7QUFDM0QsUUFBTSxLQUFLLEdBQUcsRUFBZDtBQUVBLE1BQUksSUFBSSxHQUFHLEVBQVg7QUFDQSxNQUFJLFlBQVksR0FBRyxFQUFuQjs7QUFDQSxPQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLE9BQXBCLEVBQTZCLENBQUMsRUFBOUIsRUFBa0M7QUFDaEMsUUFBSSxHQUFHLGFBQWEsRUFBcEI7O0FBQ0EsV0FBTyxhQUFhLENBQUMsSUFBRCxFQUFPLFlBQVAsQ0FBcEIsRUFBMEM7QUFDeEMsVUFBSSxHQUFHLGFBQWEsRUFBcEI7QUFDRDs7QUFFRCxnQkFBWSxHQUFHLElBQWY7QUFDQSxTQUFLLENBQUMsSUFBTixDQUFXLElBQVg7QUFDRDs7QUFFRCxTQUFPLEtBQUssQ0FBQyxJQUFOLENBQVcsR0FBWCxDQUFQO0FBQ0QsQ0FoQk07O0FBa0JBLE1BQU0sVUFBVSxHQUFJLE9BQUQsSUFBK0I7QUFDdkQsTUFBSSxDQUFDLE9BQUQsSUFBWSxPQUFPLENBQUMsTUFBUixLQUFtQixDQUFuQyxFQUFzQztBQUNwQyxXQUFPLENBQVA7QUFDRDs7QUFFRCxTQUFPLElBQUksQ0FBQyxLQUFMLENBQ0wsT0FBTyxDQUFDLE1BQVIsQ0FBZSxDQUFDLEdBQUQsRUFBTSxNQUFOLEtBQWlCLEdBQUcsR0FBRyxNQUF0QyxFQUE4QyxDQUE5QyxJQUFtRCxPQUFPLENBQUMsTUFEdEQsQ0FBUDtBQUdELENBUk0sQzs7Ozs7Ozs7Ozs7QUNuRVAsT0FBTyxNQUFQLENBQVM7QUFBQSxrQkFBa0I7QUFBbEIsQ0FBVDtBQUEyQixJQUErQixVQUEvQjtBQUErQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUduRCxNQUFNLGdCQUFnQixHQUFHLE1BQVc7QUFDekMsUUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFYLENBQW1CO0FBQUUsWUFBUSxFQUFFO0FBQVosR0FBbkIsQ0FBaEI7QUFDQSxRQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQVgsQ0FBbUI7QUFBRSxZQUFRLEVBQUU7QUFBWixHQUFuQixDQUFoQjtBQUVBLEdBQUMsS0FBRCxJQUFVLElBQUksQ0FBQyxPQUFMLENBQWEsU0FBUyxJQUFJLFVBQVUsQ0FBQyxNQUFYLENBQWtCLFNBQWxCLENBQTFCLENBQVY7QUFDQSxHQUFDLEtBQUQsSUFBVSxJQUFJLENBQUMsT0FBTCxDQUFhLFNBQVMsSUFBSSxVQUFVLENBQUMsTUFBWCxDQUFrQixTQUFsQixDQUExQixDQUFWO0FBQ0QsQ0FOTSxDOzs7Ozs7Ozs7OztBQ0RQLE1BQU0sT0FBTixDQUFNO0FBQUEsTUFBMEIsWUFBMUI7QUFBMEI7QUFBMUIsQ0FBTjtBQUFBLE1BQU0sVUFBVSxHQUFnQixDQUM5QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUQ4QixFQUU5QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUY4QixFQUc5QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUg4QixDQUFoQztBQU1BLE1BQU0sVUFBVSxHQUFnQixFQUFoQztBQUVPLE1BQU0sSUFBSSxHQUFzQixDQUNyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFdBRlQ7QUFHRSxNQUFJLEVBQUUsT0FIUjtBQUlFLFVBQVEsRUFBRSw2QkFKWjtBQUtFLFVBQVEsRUFBRSwwQkFMWjtBQU1FLE1BQUksRUFBRSxPQU5SO0FBT0UsU0FBTyxFQUFFLE9BUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQURxQyxFQXFCckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxXQUZUO0FBR0UsTUFBSSxFQUFFLE9BSFI7QUFJRSxVQUFRLEVBQUUsc0JBSlo7QUFLRSxVQUFRLEVBQUUsNEJBTFo7QUFNRSxNQUFJLEVBQUUsT0FOUjtBQU9FLFNBQU8sRUFBRSxPQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0FyQnFDLEVBeUNyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFdBRlQ7QUFHRSxNQUFJLEVBQUUsT0FIUjtBQUlFLFVBQVEsRUFBRSx3QkFKWjtBQUtFLFVBQVEsRUFBRSxzQkFMWjtBQU1FLE1BQUksRUFBRSxPQU5SO0FBT0UsU0FBTyxFQUFFLE9BUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQXpDcUMsRUE2RHJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsV0FGVDtBQUdFLE1BQUksRUFBRSxPQUhSO0FBSUUsVUFBUSxFQUFFLHFCQUpaO0FBS0UsVUFBUSxFQUFFLGlCQUxaO0FBTUUsTUFBSSxFQUFFLE9BTlI7QUFPRSxTQUFPLEVBQUUsT0FQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBN0RxQyxFQWlGckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxXQUZUO0FBR0UsTUFBSSxFQUFFLE9BSFI7QUFJRSxVQUFRLEVBQUUsc0JBSlo7QUFLRSxVQUFRLEVBQUUsc0JBTFo7QUFNRSxNQUFJLEVBQUUsT0FOUjtBQU9FLFNBQU8sRUFBRSxPQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0FqRnFDLEVBcUdyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFdBRlQ7QUFHRSxNQUFJLEVBQUUsT0FIUjtBQUlFLFVBQVEsRUFBRSxlQUpaO0FBS0UsVUFBUSxFQUFFLGtCQUxaO0FBTUUsTUFBSSxFQUFFLE9BTlI7QUFPRSxTQUFPLEVBQUUsT0FQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBckdxQyxFQXlIckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxXQUZUO0FBR0UsTUFBSSxFQUFFLE9BSFI7QUFJRSxVQUFRLEVBQUUsb0JBSlo7QUFLRSxVQUFRLEVBQUUsYUFMWjtBQU1FLE1BQUksRUFBRSxPQU5SO0FBT0UsU0FBTyxFQUFFLE9BUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQXpIcUMsRUE2SXJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsV0FGVDtBQUdFLE1BQUksRUFBRSxPQUhSO0FBSUUsVUFBUSxFQUFFLHlCQUpaO0FBS0UsVUFBUSxFQUFFLDBCQUxaO0FBTUUsTUFBSSxFQUFFLEtBTlI7QUFPRSxTQUFPLEVBQUUsS0FQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBN0lxQyxFQWlLckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxXQUZUO0FBR0UsTUFBSSxFQUFFLE9BSFI7QUFJRSxVQUFRLEVBQUUsZ0NBSlo7QUFLRSxVQUFRLEVBQUUseUJBTFo7QUFNRSxNQUFJLEVBQUUsS0FOUjtBQU9FLFNBQU8sRUFBRSxLQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0FqS3FDLEVBcUxyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSw2QkFKWjtBQUtFLFVBQVEsRUFBRSwyQkFMWjtBQU1FLE1BQUksRUFBRSxLQU5SO0FBT0UsU0FBTyxFQUFFLEtBUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQXJMcUMsRUF5TXJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLHdCQUpaO0FBS0UsVUFBUSxFQUFFLDZCQUxaO0FBTUUsTUFBSSxFQUFFLEtBTlI7QUFPRSxTQUFPLEVBQUUsS0FQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBek1xQyxFQTZOckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsMEJBSlo7QUFLRSxVQUFRLEVBQUUsc0JBTFo7QUFNRSxNQUFJLEVBQUUsS0FOUjtBQU9FLFNBQU8sRUFBRSxLQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0E3TnFDLEVBaVByQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSx1QkFKWjtBQUtFLFVBQVEsRUFBRSxxQkFMWjtBQU1FLE1BQUksRUFBRSxLQU5SO0FBT0UsU0FBTyxFQUFFLEtBUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQWpQcUMsRUFxUXJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLHFCQUpaO0FBS0UsVUFBUSxFQUFFLHVCQUxaO0FBTUUsTUFBSSxFQUFFLEtBTlI7QUFPRSxTQUFPLEVBQUUsS0FQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBclFxQyxFQXlSckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsK0JBSlo7QUFLRSxVQUFRLEVBQUUsNEJBTFo7QUFNRSxNQUFJLEVBQUUsS0FOUjtBQU9FLFNBQU8sRUFBRSxVQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0F6UnFDLEVBNlNyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSx1QkFKWjtBQUtFLFVBQVEsRUFBRSxxQkFMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLFVBUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQTdTcUMsRUFpVXJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLDRCQUpaO0FBS0UsVUFBUSxFQUFFLGtCQUxaO0FBTUUsTUFBSSxFQUFFLE1BTlI7QUFPRSxTQUFPLEVBQUUsVUFQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBalVxQyxFQXFWckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsZ0JBSlo7QUFLRSxVQUFRLEVBQUUsYUFMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLFVBUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQXJWcUMsRUF5V3JDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLGlCQUpaO0FBS0UsVUFBUSxFQUFFLGNBTFo7QUFNRSxNQUFJLEVBQUUsTUFOUjtBQU9FLFNBQU8sRUFBRSxVQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0F6V3FDLEVBNlhyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSw0QkFKWjtBQUtFLFVBQVEsRUFBRSwrQkFMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLFVBUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQTdYcUMsRUFpWnJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLHlCQUpaO0FBS0UsVUFBUSxFQUFFLDZCQUxaO0FBTUUsTUFBSSxFQUFFLE1BTlI7QUFPRSxTQUFPLEVBQUUsVUFQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBalpxQyxFQXFhckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsNEJBSlo7QUFLRSxVQUFRLEVBQUUsK0JBTFo7QUFNRSxNQUFJLEVBQUUsTUFOUjtBQU9FLFNBQU8sRUFBRSxNQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0FyYXFDLEVBeWJyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSx1QkFKWjtBQUtFLFVBQVEsRUFBRSxxQkFMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLE1BUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQXpicUMsRUE2Y3JDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLHNCQUpaO0FBS0UsVUFBUSxFQUFFLDRCQUxaO0FBTUUsTUFBSSxFQUFFLE1BTlI7QUFPRSxTQUFPLEVBQUUsTUFQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBN2NxQyxFQWllckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsc0JBSlo7QUFLRSxVQUFRLEVBQUUsMEJBTFo7QUFNRSxNQUFJLEVBQUUsTUFOUjtBQU9FLFNBQU8sRUFBRSxNQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0FqZXFDLEVBcWZyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSw4QkFKWjtBQUtFLFVBQVEsRUFBRSw4QkFMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLE1BUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQXJmcUMsRUF5Z0JyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSxnQ0FKWjtBQUtFLFVBQVEsRUFBRSw0QkFMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLE1BUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQXpnQnFDLEVBNmhCckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsNEJBSlo7QUFLRSxVQUFRLEVBQUUseUJBTFo7QUFNRSxNQUFJLEVBQUUsTUFOUjtBQU9FLFNBQU8sRUFBRSxNQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0E3aEJxQyxFQWlqQnJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLDZCQUpaO0FBS0UsVUFBUSxFQUFFLHdCQUxaO0FBTUUsTUFBSSxFQUFFLE1BTlI7QUFPRSxTQUFPLEVBQUUsTUFQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBampCcUMsRUFxa0JyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSx3QkFKWjtBQUtFLFVBQVEsRUFBRSwrQkFMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLFVBUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQXJrQnFDLEVBeWxCckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsaUJBSlo7QUFLRSxVQUFRLEVBQUUsd0JBTFo7QUFNRSxNQUFJLEVBQUUsTUFOUjtBQU9FLFNBQU8sRUFBRSxVQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0F6bEJxQyxFQTZtQnJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLGlCQUpaO0FBS0UsVUFBUSxFQUFFLHFCQUxaO0FBTUUsTUFBSSxFQUFFLE1BTlI7QUFPRSxTQUFPLEVBQUUsVUFQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBN21CcUMsRUFpb0JyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSxhQUpaO0FBS0UsVUFBUSxFQUFFLGdCQUxaO0FBTUUsTUFBSSxFQUFFLE1BTlI7QUFPRSxTQUFPLEVBQUUsVUFQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBam9CcUMsRUFxcEJyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSx3QkFKWjtBQUtFLFVBQVEsRUFBRSw4QkFMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLFVBUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQXJwQnFDLEVBeXFCckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsMEJBSlo7QUFLRSxVQUFRLEVBQUUsd0JBTFo7QUFNRSxNQUFJLEVBQUUsTUFOUjtBQU9FLFNBQU8sRUFBRSxVQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0F6cUJxQyxFQTZyQnJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLDhCQUpaO0FBS0UsVUFBUSxFQUFFLGtDQUxaO0FBTUUsTUFBSSxFQUFFLE1BTlI7QUFPRSxTQUFPLEVBQUUsVUFQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBN3JCcUMsRUFpdEJyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSxnQ0FKWjtBQUtFLFVBQVEsRUFBRSw4QkFMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLFVBUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQWp0QnFDLEVBcXVCckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUscUJBSlo7QUFLRSxVQUFRLEVBQUUsY0FMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLFFBUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQXJ1QnFDLEVBeXZCckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsZ0JBSlo7QUFLRSxVQUFRLEVBQUUsZ0JBTFo7QUFNRSxNQUFJLEVBQUUsTUFOUjtBQU9FLFNBQU8sRUFBRSxRQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0F6dkJxQyxFQTZ3QnJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLHdCQUpaO0FBS0UsVUFBUSxFQUFFLDJCQUxaO0FBTUUsTUFBSSxFQUFFLE1BTlI7QUFPRSxTQUFPLEVBQUUsUUFQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBN3dCcUMsRUFpeUJyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSxxQkFKWjtBQUtFLFVBQVEsRUFBRSxpQkFMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLFFBUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQWp5QnFDLEVBcXpCckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsdUJBSlo7QUFLRSxVQUFRLEVBQUUsY0FMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLFVBUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQXJ6QnFDLEVBeTBCckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsaUJBSlo7QUFLRSxVQUFRLEVBQUUsZ0JBTFo7QUFNRSxNQUFJLEVBQUUsTUFOUjtBQU9FLFNBQU8sRUFBRSxVQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0F6MEJxQyxFQTYxQnJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLHVCQUpaO0FBS0UsVUFBUSxFQUFFLHVCQUxaO0FBTUUsTUFBSSxFQUFFLE1BTlI7QUFPRSxTQUFPLEVBQUUsVUFQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBNzFCcUMsRUFpM0JyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSx3QkFKWjtBQUtFLFVBQVEsRUFBRSx1QkFMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLFVBUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQWozQnFDLEVBcTRCckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsMkJBSlo7QUFLRSxVQUFRLEVBQUUsdUJBTFo7QUFNRSxNQUFJLEVBQUUsTUFOUjtBQU9FLFNBQU8sRUFBRSxVQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0FyNEJxQyxFQXk1QnJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLDRCQUpaO0FBS0UsVUFBUSxFQUFFLHlCQUxaO0FBTUUsTUFBSSxFQUFFLE1BTlI7QUFPRSxTQUFPLEVBQUUsVUFQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBejVCcUMsRUE2NkJyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSwrQkFKWjtBQUtFLFVBQVEsRUFBRSxtQ0FMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLFVBUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQTc2QnFDLEVBaThCckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsMkJBSlo7QUFLRSxVQUFRLEVBQUUsdUNBTFo7QUFNRSxNQUFJLEVBQUUsTUFOUjtBQU9FLFNBQU8sRUFBRSxVQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0FqOEJxQyxFQXE5QnJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLGtCQUpaO0FBS0UsVUFBUSxFQUFFLDRCQUxaO0FBTUUsTUFBSSxFQUFFLE1BTlI7QUFPRSxTQUFPLEVBQUUsV0FQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBcjlCcUMsRUF5K0JyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSxxQkFKWjtBQUtFLFVBQVEsRUFBRSx1QkFMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLFdBUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQXorQnFDLEVBNi9CckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUseUJBSlo7QUFLRSxVQUFRLEVBQUUsNkJBTFo7QUFNRSxNQUFJLEVBQUUsTUFOUjtBQU9FLFNBQU8sRUFBRSxVQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0E3L0JxQyxFQWloQ3JDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLHdCQUpaO0FBS0UsVUFBUSxFQUFFLDRCQUxaO0FBTUUsTUFBSSxFQUFFLE1BTlI7QUFPRSxTQUFPLEVBQUUsVUFQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBamhDcUMsRUFxaUNyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSwwQkFKWjtBQUtFLFVBQVEsRUFBRSw4QkFMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLFVBUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQXJpQ3FDLEVBeWpDckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsNEJBSlo7QUFLRSxVQUFRLEVBQUUsMkJBTFo7QUFNRSxNQUFJLEVBQUUsTUFOUjtBQU9FLFNBQU8sRUFBRSxVQVBYO0FBUUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBUlg7QUFhRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sRUFJUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpPO0FBYlgsQ0F6akNxQyxFQTZrQ3JDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLDRCQUpaO0FBS0UsVUFBUSxFQUFFLDBCQUxaO0FBTUUsTUFBSSxFQUFFLE1BTlI7QUFPRSxTQUFPLEVBQUUsVUFQWDtBQVFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVJYO0FBYUUsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLEVBSVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKTztBQWJYLENBN2tDcUMsRUFpbUNyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSwwQkFKWjtBQUtFLFVBQVEsRUFBRSwwQkFMWjtBQU1FLE1BQUksRUFBRSxNQU5SO0FBT0UsU0FBTyxFQUFFLFVBUFg7QUFRRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FSWDtBQWFFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxFQUlQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSk87QUFiWCxDQWptQ3FDLENBQWhDO0FBdW5DQSxNQUFNLElBQUksR0FBc0IsQ0FDckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxXQUZUO0FBR0UsTUFBSSxFQUFFLE9BSFI7QUFJRSxVQUFRLEVBQUUsK0JBSlo7QUFLRSxVQUFRLEVBQUUsaUNBTFo7QUFNRSxNQUFJLEVBQUUsR0FOUjtBQU9FLFNBQU8sRUFBRSxHQVBYO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsVUFUWDtBQVVFLE9BQUssRUFBRSxDQUNMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixFQUdFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUhGLENBREs7QUFWVCxDQURxQyxFQW1CckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxXQUZUO0FBR0UsTUFBSSxFQUFFLE9BSFI7QUFJRSxVQUFRLEVBQUUsZ0NBSlo7QUFLRSxVQUFRLEVBQUUsK0JBTFo7QUFNRSxNQUFJLEVBQUUsR0FOUjtBQU9FLFNBQU8sRUFBRSxHQVBYO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsVUFUWDtBQVVFLE9BQUssRUFBRSxDQUNMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixFQUdFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUhGLENBREs7QUFWVCxDQW5CcUMsRUFxQ3JDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsV0FGVDtBQUdFLE1BQUksRUFBRSxPQUhSO0FBSUUsVUFBUSxFQUFFLGdEQUpaO0FBS0UsVUFBUSxFQUFFLGdEQUxaO0FBTUUsTUFBSSxFQUFFLEdBTlI7QUFPRSxTQUFPLEVBQUUsR0FQWDtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FESyxFQUtMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQUxLO0FBVlQsQ0FyQ3FDLEVBMERyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFdBRlQ7QUFHRSxNQUFJLEVBQUUsT0FIUjtBQUlFLFVBQVEsRUFBRSwyQ0FKWjtBQUtFLFVBQVEsRUFBRSwyQ0FMWjtBQU1FLE1BQUksRUFBRSxHQU5SO0FBT0UsU0FBTyxFQUFFLEdBUFg7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsT0FBSyxFQUFFLENBQ0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLENBREssRUFLTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FMSztBQVZULENBMURxQyxFQStFckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxXQUZUO0FBR0UsTUFBSSxFQUFFLE9BSFI7QUFJRSxVQUFRLEVBQUUsNEJBSlo7QUFLRSxVQUFRLEVBQUUsNEJBTFo7QUFNRSxNQUFJLEVBQUUsR0FOUjtBQU9FLFNBQU8sRUFBRSxHQVBYO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsVUFUWDtBQVVFLE9BQUssRUFBRSxDQUNMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQURLLEVBS0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLENBTEs7QUFWVCxDQS9FcUMsRUFvR3JDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsV0FGVDtBQUdFLE1BQUksRUFBRSxPQUhSO0FBSUUsVUFBUSxFQUFFLG1DQUpaO0FBS0UsVUFBUSxFQUFFLGlDQUxaO0FBTUUsTUFBSSxFQUFFLEdBTlI7QUFPRSxTQUFPLEVBQUUsR0FQWDtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsRUFHRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FIRixDQURLO0FBVlQsQ0FwR3FDLEVBc0hyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFdBRlQ7QUFHRSxNQUFJLEVBQUUsT0FIUjtBQUlFLFVBQVEsRUFBRSxpQ0FKWjtBQUtFLFVBQVEsRUFBRSxtQ0FMWjtBQU1FLE1BQUksRUFBRSxHQU5SO0FBT0UsU0FBTyxFQUFFLEdBUFg7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsT0FBSyxFQUFFLENBQ0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLEVBR0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBSEYsQ0FESztBQVZULENBdEhxQyxFQXdJckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxXQUZUO0FBR0UsTUFBSSxFQUFFLE9BSFI7QUFJRSxVQUFRLEVBQUUsZ0NBSlo7QUFLRSxVQUFRLEVBQUUsaUNBTFo7QUFNRSxNQUFJLEVBQUUsR0FOUjtBQU9FLFNBQU8sRUFBRSxHQVBYO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsVUFUWDtBQVVFLE9BQUssRUFBRSxDQUNMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQURLLEVBS0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLENBTEs7QUFWVCxDQXhJcUMsRUE2SnJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsV0FGVDtBQUdFLE1BQUksRUFBRSxPQUhSO0FBSUUsVUFBUSxFQUFFLG9DQUpaO0FBS0UsVUFBUSxFQUFFLDhCQUxaO0FBTUUsTUFBSSxFQUFFLEdBTlI7QUFPRSxTQUFPLEVBQUUsR0FQWDtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FESyxFQUtMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQUxLO0FBVlQsQ0E3SnFDLEVBa0xyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSw0Q0FKWjtBQUtFLFVBQVEsRUFBRSw0Q0FMWjtBQU1FLE1BQUksRUFBRSxHQU5SO0FBT0UsU0FBTyxFQUFFLEdBUFg7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsT0FBSyxFQUFFLENBQ0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLENBREssRUFLTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FMSztBQVZULENBbExxQyxFQXVNckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsZ0RBSlo7QUFLRSxVQUFRLEVBQUUsOENBTFo7QUFNRSxNQUFJLEVBQUUsR0FOUjtBQU9FLFNBQU8sRUFBRSxHQVBYO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsVUFUWDtBQVVFLE9BQUssRUFBRSxDQUNMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQURLLEVBS0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLENBTEs7QUFWVCxDQXZNcUMsRUE0TnJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLHlDQUpaO0FBS0UsVUFBUSxFQUFFLHlDQUxaO0FBTUUsTUFBSSxFQUFFLEdBTlI7QUFPRSxTQUFPLEVBQUUsR0FQWDtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FESyxFQUtMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQUxLO0FBVlQsQ0E1TnFDLEVBaVByQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSw2Q0FKWjtBQUtFLFVBQVEsRUFBRSw2Q0FMWjtBQU1FLE1BQUksRUFBRSxHQU5SO0FBT0UsU0FBTyxFQUFFLEdBUFg7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsT0FBSyxFQUFFLENBQ0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLENBREssRUFLTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FMSztBQVZULENBalBxQyxFQXNRckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsMkNBSlo7QUFLRSxVQUFRLEVBQUUsNkNBTFo7QUFNRSxNQUFJLEVBQUUsR0FOUjtBQU9FLFNBQU8sRUFBRSxHQVBYO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsVUFUWDtBQVVFLE9BQUssRUFBRSxDQUNMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixFQUdFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUhGLENBREssRUFNTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsRUFHRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FIRixDQU5LO0FBVlQsQ0F0UXFDLEVBNlJyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSw2Q0FKWjtBQUtFLFVBQVEsRUFBRSw4Q0FMWjtBQU1FLE1BQUksRUFBRSxHQU5SO0FBT0UsU0FBTyxFQUFFLEdBUFg7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsT0FBSyxFQUFFLENBQ0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLEVBR0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBSEYsQ0FESyxFQU1MLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixFQUdFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUhGLENBTks7QUFWVCxDQTdScUMsRUFvVHJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLDJDQUpaO0FBS0UsVUFBUSxFQUFFLDZDQUxaO0FBTUUsTUFBSSxFQUFFLEdBTlI7QUFPRSxTQUFPLEVBQUUsR0FQWDtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsRUFHRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FIRixDQURLLEVBTUwsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLEVBR0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBSEYsQ0FOSztBQVZULENBcFRxQyxFQTJVckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsMENBSlo7QUFLRSxVQUFRLEVBQUUsMkNBTFo7QUFNRSxNQUFJLEVBQUUsR0FOUjtBQU9FLFNBQU8sRUFBRSxHQVBYO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsVUFUWDtBQVVFLE9BQUssRUFBRSxDQUNMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixFQUdFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUhGLENBREssRUFNTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsRUFHRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FIRixDQU5LO0FBVlQsQ0EzVXFDLEVBa1dyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSxpREFKWjtBQUtFLFVBQVEsRUFBRSxpREFMWjtBQU1FLE1BQUksRUFBRSxHQU5SO0FBT0UsU0FBTyxFQUFFLEdBUFg7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsT0FBSyxFQUFFLENBQ0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLENBREssRUFLTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FMSztBQVZULENBbFdxQyxFQXVYckM7QUFDRSxVQUFRLEVBQUUsS0FEWjtBQUVFLE9BQUssRUFBRSxZQUZUO0FBR0UsTUFBSSxFQUFFLFFBSFI7QUFJRSxVQUFRLEVBQUUsMkNBSlo7QUFLRSxVQUFRLEVBQUUsMkNBTFo7QUFNRSxNQUFJLEVBQUUsR0FOUjtBQU9FLFNBQU8sRUFBRSxHQVBYO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsVUFUWDtBQVVFLE9BQUssRUFBRSxDQUNMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQURLLEVBS0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLENBTEs7QUFWVCxDQXZYcUMsRUE0WXJDO0FBQ0UsVUFBUSxFQUFFLEtBRFo7QUFFRSxPQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUksRUFBRSxRQUhSO0FBSUUsVUFBUSxFQUFFLHlDQUpaO0FBS0UsVUFBUSxFQUFFLHlDQUxaO0FBTUUsTUFBSSxFQUFFLEdBTlI7QUFPRSxTQUFPLEVBQUUsR0FQWDtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxPQUFLLEVBQUUsQ0FDTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FESyxFQUtMLENBQ0U7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBREYsRUFFRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FGRixDQUxLO0FBVlQsQ0E1WXFDLEVBaWFyQztBQUNFLFVBQVEsRUFBRSxLQURaO0FBRUUsT0FBSyxFQUFFLFlBRlQ7QUFHRSxNQUFJLEVBQUUsUUFIUjtBQUlFLFVBQVEsRUFBRSxrREFKWjtBQUtFLFVBQVEsRUFBRSxrREFMWjtBQU1FLE1BQUksRUFBRSxHQU5SO0FBT0UsU0FBTyxFQUFFLEdBUFg7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsT0FBSyxFQUFFLENBQ0wsQ0FDRTtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FERixFQUVFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUZGLENBREssRUFLTCxDQUNFO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQURGLEVBRUU7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBRkYsQ0FMSztBQVZULENBamFxQyxDQUFoQyxDOzs7Ozs7Ozs7OztBQ2pvQ1A7QUFBUyxNQUFRLEtBQVIsQ0FBYyxlQUFkLEVBQThCO0FBQUE7QUFBQTtBQUFBOztBQUFBLENBQTlCLEVBQThCLENBQTlCO0FBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFHdkMsTUFBTSxDQUFDLE9BQVAsQ0FBZSxZQUFmLEVBQTZCLFNBQVMsYUFBVCxHQUFzQjtBQUNqRDtBQUNBLFNBQU8sVUFBVSxDQUFDLElBQVgsRUFBUDtBQUNELENBSEQsRTs7Ozs7Ozs7Ozs7QUNIQTtBQUFTLE1BQVEsS0FBUixDQUFjLGVBQWQsRUFBOEI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsQ0FBOUIsRUFBOEIsQ0FBOUI7QUFBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUd2QyxNQUFNLENBQUMsT0FBUCxDQUFlLFNBQWYsRUFBMEIsU0FBUyxVQUFULEdBQW1CO0FBQzNDLFNBQU8sT0FBTyxDQUFDLElBQVIsQ0FBYTtBQUFFLFVBQU0sRUFBRSxLQUFLLE1BQUwsSUFBZTtBQUF6QixHQUFiLENBQVA7QUFDRCxDQUZELEU7Ozs7Ozs7Ozs7O0FDSEE7QUFBUyxNQUFRLEtBQVIsQ0FBYyxlQUFkLEVBQThCO0FBQUE7QUFBQTtBQUFBOztBQUFBLENBQTlCLEVBQThCLENBQTlCO0FBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFJdkMsTUFBTSxDQUFDLE9BQVAsQ0FBZSxNQUFLO0FBQ2xCO0FBQ0Esa0JBQWdCO0FBQ2pCLENBSEQsRTs7Ozs7Ozs7Ozs7QUNKQSxPQUFPLE1BQVAsQ0FBUztBQUFNLFlBQVE7QUFBZCxDQUFUO0FBQXVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUloQyxNQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxVQUFWLENBQXFCLFlBQXJCLENBQW5CO0FBRVAsTUFBTSxDQUFDLE9BQVAsQ0FBZTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFvQixJQUFwQixFQUF3QjtBQUN0QixTQUFLLENBQUMsSUFBRCxFQUFPLE1BQVAsQ0FBTDtBQUVBLFdBQU8sVUFBVSxDQUFDLElBQVgsRUFBUDtBQUNELEdBMUJZLENBMkJiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBaENhLENBQWYsRTs7Ozs7Ozs7Ozs7QUNOQSxPQUFPLE1BQVAsQ0FBUztBQUFNLFNBQUUsRUFBTTtBQUFkLENBQVQ7QUFBdUIsSUFBZ0IsTUFBaEI7QUFBZ0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUloQyxNQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxVQUFWLENBQXFCLFNBQXJCLENBQWhCO0FBRVAsTUFBTSxDQUFDLE9BQVAsQ0FBZTtBQUNiLHlCQUEwRDtBQUFBLFFBQXpDO0FBQUUsaUJBQUY7QUFBZSxjQUFmO0FBQXlCLGNBQXpCO0FBQW1DO0FBQW5DLEtBQXlDO0FBQ3hELFNBQUssQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUFMO0FBQ0EsU0FBSyxDQUFDLElBQUQsRUFBTyxNQUFQLENBQUw7O0FBRUEsUUFBSSxRQUFRLEtBQUssS0FBYixJQUFzQixRQUFRLEtBQUssS0FBbkMsSUFBNEMsUUFBUSxLQUFLLE9BQTdELEVBQXNFO0FBQ3BFLFdBQUssQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUFMO0FBQ0Q7O0FBRUQsUUFBSSxRQUFRLEtBQUssS0FBYixJQUFzQixRQUFRLEtBQUssS0FBdkMsRUFBOEM7QUFDNUMsV0FBSyxDQUFDLFdBQUQsRUFBYyxNQUFkLENBQUw7QUFDRDs7QUFFRCxVQUFNLEdBQUcsR0FBRztBQUNWLGlCQURVO0FBRVYsY0FGVTtBQUdWLGVBQVMsRUFBRSxJQUFJLElBQUosRUFIRDtBQUlWLGNBSlU7QUFLVixVQUxVO0FBTVYsWUFBTSxFQUFFLEtBQUssTUFBTCxJQUFlO0FBTmIsS0FBWjtBQVNBLFdBQU8sQ0FBQyxNQUFSLENBQWUsR0FBZjtBQUNELEdBdkJZOztBQXdCYixtQkFBaUIsUUFBakIsRUFBeUI7QUFDdkIsU0FBSyxDQUFDLEtBQUssTUFBTixFQUFjLE1BQWQsQ0FBTDtBQUNBLFNBQUssQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUFMO0FBRUEsV0FBTyxDQUFDLE1BQVIsQ0FBZTtBQUFFLFlBQU0sRUFBRSxLQUFLLE1BQWY7QUFBdUI7QUFBdkIsS0FBZjtBQUNEOztBQTdCWSxDQUFmLEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdID0gW1xuICB7XG4gICAgbGFiZWw6ICdPTEwnLFxuICAgIHZhbHVlOiAnT0xMJyxcbiAgICB0eXBlOiAnT0xMJyxcbiAgICByYW5kb21pemFibGVBbGdvcml0aG06IHRydWVcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUExMJyxcbiAgICB2YWx1ZTogJ1BMTCcsXG4gICAgdHlwZTogJ1BMTCcsXG4gICAgcmFuZG9taXphYmxlQWxnb3JpdGhtOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJzN4M3gzJyxcbiAgICB2YWx1ZTogJzN4M3gzJyxcbiAgICByYW5kb21pemFibGVTY3JhbWJsZTogdHJ1ZVxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdPTEwgQXR0YWNrJyxcbiAgICB2YWx1ZTogJ09MTC1hdHRhY2snLFxuICAgIHR5cGU6ICdPTEwnLFxuICAgIHNldHRpbmdzRGlzYWJsZWQ6IHRydWVcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnUExMIEF0dGFjaycsXG4gICAgdmFsdWU6ICdQTEwtYXR0YWNrJyxcbiAgICB0eXBlOiAnUExMJyxcbiAgICBzZXR0aW5nc0Rpc2FibGVkOiB0cnVlXG4gIH1cbl07XG4iLCJ0eXBlIGFsbG93ZWRNb3ZlID1cbiAgfCAnRidcbiAgfCBcIkYnXCJcbiAgfCAnRjInXG4gIHwgJ0InXG4gIHwgXCJCJ1wiXG4gIHwgJ0IyJ1xuICB8ICdSJ1xuICB8IFwiUidcIlxuICB8ICdSMidcbiAgfCAnTCdcbiAgfCBcIkwnXCJcbiAgfCAnTDInXG4gIHwgJ1UnXG4gIHwgXCJVJ1wiXG4gIHwgJ1UyJ1xuICB8ICdEJ1xuICB8IFwiRCdcIlxuICB8ICdEMic7XG5cbmNvbnN0IGFsbG93ZWRNb3ZlczogYWxsb3dlZE1vdmVbXSA9IFtcbiAgJ0YnLFxuICBcIkYnXCIsXG4gICdGMicsXG4gICdCJyxcbiAgXCJCJ1wiLFxuICAnQjInLFxuICAnUicsXG4gIFwiUidcIixcbiAgJ1IyJyxcbiAgJ0wnLFxuICBcIkwnXCIsXG4gICdMMicsXG4gICdVJyxcbiAgXCJVJ1wiLFxuICAnVTInLFxuICAnRCcsXG4gIFwiRCdcIixcbiAgJ0QyJ1xuXTtcblxuY29uc3QgZ2V0UmFuZG9tTW92ZSA9ICgpOiBhbGxvd2VkTW92ZSA9PlxuICBhbGxvd2VkTW92ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxsb3dlZE1vdmVzLmxlbmd0aCldO1xuXG5jb25zdCBtb3Zlc0NvbmZsaWN0ID0gKG1vdmVBPzogc3RyaW5nLCBtb3ZlQj86IHN0cmluZyk6IGJvb2xlYW4gPT5cbiAgbW92ZUEgJiYgbW92ZUJcbiAgICA/IG1vdmVBLnNwbGl0KCcnKS5zb21lKGNoYXJhY3RlciA9PiBtb3ZlQi5pbmNsdWRlcyhjaGFyYWN0ZXIpKVxuICAgIDogZmFsc2U7XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21TY3JhbWJsZSA9IChtb3Zlc05yOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBtb3ZlcyA9IFtdO1xuXG4gIGxldCBtb3ZlID0gJyc7XG4gIGxldCBwcmV2aW91c01vdmUgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlc05yOyBpKyspIHtcbiAgICBtb3ZlID0gZ2V0UmFuZG9tTW92ZSgpO1xuICAgIHdoaWxlIChtb3Zlc0NvbmZsaWN0KG1vdmUsIHByZXZpb3VzTW92ZSkpIHtcbiAgICAgIG1vdmUgPSBnZXRSYW5kb21Nb3ZlKCk7XG4gICAgfVxuXG4gICAgcHJldmlvdXNNb3ZlID0gbW92ZTtcbiAgICBtb3Zlcy5wdXNoKG1vdmUpO1xuICB9XG5cbiAgcmV0dXJuIG1vdmVzLmpvaW4oJyAnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBdmVyYWdlID0gKHJlc3VsdHM/OiBudW1iZXJbXSk6IG51bWJlciA9PiB7XG4gIGlmICghcmVzdWx0cyB8fCByZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIE1hdGgucm91bmQoXG4gICAgcmVzdWx0cy5yZWR1Y2UoKHN1bSwgcmVzdWx0KSA9PiBzdW0gKyByZXN1bHQsIDApIC8gcmVzdWx0cy5sZW5ndGhcbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBBbGdvcml0aG1zIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvYWxnb3JpdGhtcyc7XG5pbXBvcnQgeyBPTExzLCBQTExzIH0gZnJvbSAnLi9jb25zdCc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBbGdvcml0aG1zID0gKCk6IHZvaWQgPT4ge1xuICBjb25zdCBpc09MTCA9ICEhQWxnb3JpdGhtcy5maW5kT25lKHsgY2F0ZWdvcnk6ICdPTEwnIH0pO1xuICBjb25zdCBpc1BMTCA9ICEhQWxnb3JpdGhtcy5maW5kT25lKHsgY2F0ZWdvcnk6ICdQTEwnIH0pO1xuXG4gICFpc09MTCAmJiBPTExzLmZvckVhY2goYWxnb3JpdGhtID0+IEFsZ29yaXRobXMuaW5zZXJ0KGFsZ29yaXRobSkpO1xuICAhaXNQTEwgJiYgUExMcy5mb3JFYWNoKGFsZ29yaXRobSA9PiBBbGdvcml0aG1zLmluc2VydChhbGdvcml0aG0pKTtcbn07XG4iLCJpbXBvcnQgeyBBbGdvcml0aG1Ta2V0Y2gsIFNxdWFyZXNUeXBlLCBTdHJpa2VzVHlwZSB9IGZyb20gJy4uLy4uL2xpYi90eXBlcyc7XG5cbmNvbnN0IHNxdXJlc0Z1bGw6IFNxdWFyZXNUeXBlID0gWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgWzEsIDEsIDFdLFxuICBbMSwgMSwgMV0sXG4gIFsxLCAxLCAxXVxuXTtcblxuY29uc3Qgc3Jpa2VzTm9uZTogU3RyaWtlc1R5cGUgPSBbXTtcblxuZXhwb3J0IGNvbnN0IE9MTHM6IEFsZ29yaXRobVNrZXRjaFtdID0gW1xuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzEuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzEnLFxuICAgIHNjcmFtYmxlOiBcIlJVMiBSJyBVJyBSVVInIFUnIFJVJyBSJyBVJ1wiLFxuICAgIHNvbHV0aW9uOiBcIlJVMiBSJyBVJyBSVVInIFUnIFJVJyBSJ1wiLFxuICAgIHR5cGU6ICdDcm9zcycsXG4gICAgc3VidHlwZTogJ0Nyb3NzJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMicsXG4gICAgc2NyYW1ibGU6IFwiUlUyIFIyIFUnIFIyVScgUjJVMlJcIixcbiAgICBzb2x1dGlvbjogXCIoUlUyIFIyIFUnKSAoUjJVJykgKFIyVTJSKVwiLFxuICAgIHR5cGU6ICdDcm9zcycsXG4gICAgc3VidHlwZTogJ0Nyb3NzJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMy5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMycsXG4gICAgc2NyYW1ibGU6IFwieCcgKFJVUicgRFJVJyBSJyBEJyBGKVwiLFxuICAgIHNvbHV0aW9uOiBcIngnIChSVScgUicgRFJVUicgRCcpXCIsXG4gICAgdHlwZTogJ0Nyb3NzJyxcbiAgICBzdWJ0eXBlOiAnQ3Jvc3MnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80LnN2ZycsXG4gICAgbmFtZTogJ29sbF80JyxcbiAgICBzY3JhbWJsZTogXCJSVTJSRFInIFUyUkQnIFIyIFUyXCIsXG4gICAgc29sdXRpb246IFwiUjJEJyBSVTJSJ0RSVTJSXCIsXG4gICAgdHlwZTogJ0Nyb3NzJyxcbiAgICBzdWJ0eXBlOiAnQ3Jvc3MnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF81LnN2ZycsXG4gICAgbmFtZTogJ29sbF81JyxcbiAgICBzY3JhbWJsZTogXCJ4JyAoUlUnIFInIERSVVInIEQnKVwiLFxuICAgIHNvbHV0aW9uOiBcIngnIChSVVInIERSVScgUicgRCcpXCIsXG4gICAgdHlwZTogJ0Nyb3NzJyxcbiAgICBzdWJ0eXBlOiAnQ3Jvc3MnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF82LnN2ZycsXG4gICAgbmFtZTogJ29sbF82JyxcbiAgICBzY3JhbWJsZTogXCJSVVInIFVSVTJSJyBVXCIsXG4gICAgc29sdXRpb246IFwiTCcgVScgTFUnIEwnIFUyTFwiLFxuICAgIHR5cGU6ICdDcm9zcycsXG4gICAgc3VidHlwZTogJ0Nyb3NzJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNy5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNycsXG4gICAgc2NyYW1ibGU6IFwiTCcgVScgTFUnIEwnIFUyTFUnXCIsXG4gICAgc29sdXRpb246IFwiUlVSJyBVUlUyUidcIixcbiAgICB0eXBlOiAnQ3Jvc3MnLFxuICAgIHN1YnR5cGU6ICdDcm9zcycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzguc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzgnLFxuICAgIHNjcmFtYmxlOiBcIkZSJyBGJyBSVVIyQicgUicgQlUnIFInXCIsXG4gICAgc29sdXRpb246IFwiKFJVMlIyRlIpIChGJyBVMlInIEZSRicpXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0RvdCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzkuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzknLFxuICAgIHNjcmFtYmxlOiBcIkZSJyBGJyBSVTJGUicgRicgUlUnIFJVJyBSJyBVMlwiLFxuICAgIHNvbHV0aW9uOiBcIkxGJyBMJyBGVTJGVScgUlUnIFInIEYnXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0RvdCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzEwLnN2ZycsXG4gICAgbmFtZTogJ29sbF8xMCcsXG4gICAgc2NyYW1ibGU6IFwiRlInIEYnIFJVMlIgZCcgUlUnIFInIEYnIFUnXCIsXG4gICAgc29sdXRpb246IFwiKFJVMlIyRlJGJyBVMikgTScgVVJVJyBMJ1wiLFxuICAgIHR5cGU6ICdEb3QnLFxuICAgIHN1YnR5cGU6ICdEb3QnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xMS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTEnLFxuICAgIHNjcmFtYmxlOiBcIlJVMlIyRlJGJyBVMlInIEZSRicgVTJcIixcbiAgICBzb2x1dGlvbjogXCIoRlJVUicgVScgRicpIChmUlVSJyBVJyBmJylcIixcbiAgICB0eXBlOiAnRG90JyxcbiAgICBzdWJ0eXBlOiAnRG90JyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTIuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzEyJyxcbiAgICBzY3JhbWJsZTogXCJSJyBGJyBVMkYyVVJVJyBSJyBGJyBVMlJcIixcbiAgICBzb2x1dGlvbjogXCJSJyBVMkZSVVInIFUnIEYyVTJGUlwiLFxuICAgIHR5cGU6ICdEb3QnLFxuICAgIHN1YnR5cGU6ICdEb3QnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xMy5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTMnLFxuICAgIHNjcmFtYmxlOiBcIk1VJyBMRjJMJyBVJyBSVScgUjIgclwiLFxuICAgIHNvbHV0aW9uOiBcIk1VUicgRjJSVUwnIFUgTDIgbCdcIixcbiAgICB0eXBlOiAnRG90JyxcbiAgICBzdWJ0eXBlOiAnRG90JyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTQuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzE0JyxcbiAgICBzY3JhbWJsZTogXCJNVVInIEYyUlVMJyBVIEwyIGwnXCIsXG4gICAgc29sdXRpb246IFwiTVUnIExGMkwnIFUnIFJVJyBSMiByXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0RvdCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzE1LnN2ZycsXG4gICAgbmFtZTogJ29sbF8xNScsXG4gICAgc2NyYW1ibGU6IFwiKE1VTVVNVU1VKSAoTScgVU0nIFVNJyBVTScgVSlcIixcbiAgICBzb2x1dGlvbjogXCJNIChVUlVSJyBVJykgTTIgKFUgUlUnIHInKVwiLFxuICAgIHR5cGU6ICdEb3QnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgWCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzE2LnN2ZycsXG4gICAgbmFtZTogJ29sbF8xNicsXG4gICAgc2NyYW1ibGU6IFwiKFInIEZSVVInIFUnKSAoRicgVVIpXCIsXG4gICAgc29sdXRpb246IFwiUicgVScgRlVSVScgUicgRicgUlwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFAnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xNy5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTcnLFxuICAgIHNjcmFtYmxlOiBcIihMIEYnIEwnIFUnIEwgVSkgKEYgVScgTCcpXCIsXG4gICAgc29sdXRpb246IFwiTFVGJyBVJyBMJyBVTEZMJ1wiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFAnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xOC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTgnLFxuICAgIHNjcmFtYmxlOiBcIkYgKFJVUicgVScpIEYnXCIsXG4gICAgc29sdXRpb246IFwiRlVSVScgUicgRidcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBQJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTkuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzE5JyxcbiAgICBzY3JhbWJsZTogXCJGJyAoTCcgVScgTFUpIEZcIixcbiAgICBzb2x1dGlvbjogXCJGJyBVJyBMJyBVTEZcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBQJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjAuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzIwJyxcbiAgICBzY3JhbWJsZTogXCJCJyBSQlInIFUnIFInIFUnIFJVUicgVVJVMlwiLFxuICAgIHNvbHV0aW9uOiBcIihMJyBVJyBMVScgTCcgVSkgKExVTEYnIEwnIEYpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgVycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzIxLnN2ZycsXG4gICAgbmFtZTogJ29sbF8yMScsXG4gICAgc2NyYW1ibGU6IFwiRlInIEYnIFJVUlVSJyBVJyBSVScgUidcIixcbiAgICBzb2x1dGlvbjogXCIoUlVSJyBVUlUnKSAoUicgVScgUicgRlJGJylcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBXJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjIuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzIyJyxcbiAgICBzY3JhbWJsZTogXCJSJyBGJyBMRicgTCcgRkxGJyBMJyBGMlJVJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBGJyBMRicpICggTCcgRkxGJyBMJyBGMlIpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjMuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzIzJyxcbiAgICBzY3JhbWJsZTogXCJMRlInIEZSRicgUicgRlJGMkwnIFVcIixcbiAgICBzb2x1dGlvbjogXCJMRlInIEZSRicgUicgRlJGMkwnXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjQuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzI0JyxcbiAgICBzY3JhbWJsZTogXCJGJyBVJyBMJyBVTFUnIEwnIFVMRlwiLFxuICAgIHNvbHV0aW9uOiBcIkYnIChMJyBVJyBMVSkgKEwnIFUnIExVKSBGXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjUuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzI1JyxcbiAgICBzY3JhbWJsZTogXCJGIFVSVScgUicgVVJVJyBSJyBGJ1wiLFxuICAgIHNvbHV0aW9uOiBcIkYgKFJVUicgVScpIChSVVInIFUnKSBGJ1wiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnRGFzaCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzI2LnN2ZycsXG4gICAgbmFtZTogJ29sbF8yNicsXG4gICAgc2NyYW1ibGU6IFwiKHIgVScpIChyMiBVKSAocjIgVSByMiBVJyByKVwiLFxuICAgIHNvbHV0aW9uOiBcIihyJyBVKSAocjJVJykgKHIyVScpIChyMlVyJylcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0Rhc2gnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8yNy5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMjcnLFxuICAgIHNjcmFtYmxlOiBcIihyJyBVKSAocjJVJykgKHIyVScpIChyMlVyJylVMlwiLFxuICAgIHNvbHV0aW9uOiBcIihsVScpIChsMlUpIChsMlUpIChsMlUnIGwpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjguc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzI4JyxcbiAgICBzY3JhbWJsZTogXCJMIEYnIEwnIFUnIEwgRiBMJyB5IEwnIFUgTFwiLFxuICAgIHNvbHV0aW9uOiBcIkwnIFUnIEwgeScgTEYnIEwnIFVMRkwnXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjkuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzI5JyxcbiAgICBzY3JhbWJsZTogXCJSJyBGIFIgVSBSJyBGJyBSIHknIFIgVScgUidcIixcbiAgICBzb2x1dGlvbjogXCJSVVInIHkgUicgRlJVJyBSJyBGJyBSXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMzAuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzMwJyxcbiAgICBzY3JhbWJsZTogXCJCJyBGUicgRicgUkJVUlUnIFInIFUyXCIsXG4gICAgc29sdXRpb246IFwiKFInIFUnIFJVIEYpIHgnIChSIFUnIFInIFVEJylcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBDJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMzEuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzMxJyxcbiAgICBzY3JhbWJsZTogXCJSVUInIFJCUicgVScgUidcIixcbiAgICBzb2x1dGlvbjogXCIoUicgVScgUicgRikgKFJGJyBVKSBSXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgQycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzMyLnN2ZycsXG4gICAgbmFtZTogJ29sbF8zMicsXG4gICAgc2NyYW1ibGU6IFwiRlInIEYnIFJVUlUnIFInXCIsXG4gICAgc29sdXRpb246IFwiKFJVUicgVScpIChSJyBGUkYnKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFQnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zMy5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzMnLFxuICAgIHNjcmFtYmxlOiBcIkZVUlUnIFInIEYnXCIsXG4gICAgc29sdXRpb246IFwiRiAoUlVSJyBVJykgRidcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBUJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMzQuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzM0JyxcbiAgICBzY3JhbWJsZTogXCJCJyBSQlUyUicgVScgUlUnIFIyVTJSXCIsXG4gICAgc29sdXRpb246IFwiKFJVMlIyVScgUlUnIFInIFUyKSAoRiBSIEYnKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIEknLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zNS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzUnLFxuICAgIHNjcmFtYmxlOiBcIkYgKFJVUicgVScpIChSVVInIFUnKSBGJ1wiLFxuICAgIHNvbHV0aW9uOiBcIkYgKFVSVScgUicgVVJVJyBSJykgRidcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBJJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMzYuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzM2JyxcbiAgICBzY3JhbWJsZTogXCJMJyBCJyBMUicgVScgUlVSJyBVJyBSVUwnIEJMXCIsXG4gICAgc29sdXRpb246IFwiKEwnIEInIExVJykgKFInIFVSVScgUicgVVJMJyBCTClcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBJJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMzcuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzM3JyxcbiAgICBzY3JhbWJsZTogXCIoUicgVScgUlUnIFInIFUpIHknIChSJyBVUkIpVSdcIixcbiAgICBzb2x1dGlvbjogXCIoUicgVScgUlUnIFInIFUpIHknIChSJyBVUkIpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgSScsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzM4LnN2ZycsXG4gICAgbmFtZTogJ29sbF8zOCcsXG4gICAgc2NyYW1ibGU6IFwiUicgRicgTEYnIEwnIEYyUiBVMlwiLFxuICAgIHNvbHV0aW9uOiBcInInIFUyUlVSJ1UgclwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnU3F1YXJlJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMzkuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzM5JyxcbiAgICBzY3JhbWJsZTogXCJMRlInIEZSRjJMJyBVMlwiLFxuICAgIHNvbHV0aW9uOiBcImwgVTJMJ1UnTFUnIGwnXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdTcXVhcmUnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80MC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDAnLFxuICAgIHNjcmFtYmxlOiBcIlInIFUyIGwgVScgUlVSJyBsJyBVMlJcIixcbiAgICBzb2x1dGlvbjogXCJ4JyAoUicgRjJSMlUnIFInIFVSJyBGMlIpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdTcXVhcmUnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80MS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDEnLFxuICAgIHNjcmFtYmxlOiBcIihSVVInIFUnKSAoUicgRlJGJylcIixcbiAgICBzb2x1dGlvbjogXCJGUicgRicgUlVSVScgUidcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ1NxdWFyZScsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzQyLnN2ZycsXG4gICAgbmFtZTogJ29sbF80MicsXG4gICAgc2NyYW1ibGU6IFwiTCBGMiBSJyBGJyBSIEYnIEwnIFUyXCIsXG4gICAgc29sdXRpb246IFwibCBVTCdVTFUyIGwnXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgUycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDEsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzQzLnN2ZycsXG4gICAgbmFtZTogJ29sbF80MycsXG4gICAgc2NyYW1ibGU6IFwiUicgRjJMRkwnIEZSIFUyXCIsXG4gICAgc29sdXRpb246IFwicicgVSdSVSdSJ1UyIHJcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNDQuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQ0JyxcbiAgICBzY3JhbWJsZTogXCJNVScgUlUyUicgVScgUlUnIFIyclVcIixcbiAgICBzb2x1dGlvbjogXCJGJ0wnVSdMVUYgVSBGUlVSJ1UnRidcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNDUuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQ1JyxcbiAgICBzY3JhbWJsZTogXCJNJyBVUicgVTJSVVInIFVSMiByJyBVXCIsXG4gICAgc29sdXRpb246IFwiRlJVUidVJ0YnIFUgRlJVUidVJ0YnXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgUycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzQ2LnN2ZycsXG4gICAgbmFtZTogJ29sbF80NicsXG4gICAgc2NyYW1ibGU6IFwiQjJSJyBVUlUnIFInIFUnIFIyQlInIEJVMlwiLFxuICAgIHNvbHV0aW9uOiBcIkYnIExGJyBMMlVMVUwnIFUnIExGMlwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFMnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80Ny5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDcnLFxuICAgIHNjcmFtYmxlOiBcImwgVScgbCcgVScgUjJVUicgQlJVJyBSMlUyXCIsXG4gICAgc29sdXRpb246IFwiRlInIEZSMlUnIFInIFUnIFJVUicgRjJcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNDguc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQ4JyxcbiAgICBzY3JhbWJsZTogXCJCJyBVJyBSJyBVJyBSIHkgVVJVMlInIFUnIFJVJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBGUkYnIFInIEZSRicpIChSVSBSJyBVJyBSVVInKVwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFMnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAxXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80OS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDknLFxuICAgIHNjcmFtYmxlOiBcIkZVUlVSJyB5JyBVJyBSJyBVMlJVUicgVSdcIixcbiAgICBzb2x1dGlvbjogXCIoTEYnIEwnIEZMRicgTCcgRikgKEwnIFUnIEwgVUwnIFUnIEwpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgUycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzUwLnN2ZycsXG4gICAgbmFtZTogJ29sbF81MCcsXG4gICAgc2NyYW1ibGU6IFwiTFVGJyBVJyBMJyBVTEZMJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihMIEYnIEwnIFUnIEwgVSkgKEYgVScgTCcpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMaWdodG5pbmcnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF81MS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNTEnLFxuICAgIHNjcmFtYmxlOiBcIlInIFUnIEZVUlUnIFInIEYnIFJcIixcbiAgICBzb2x1dGlvbjogXCIoUicgRlJVUicgVScpIChGJyBVUilcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xpZ2h0bmluZycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzUyLnN2ZycsXG4gICAgbmFtZTogJ29sbF81MicsXG4gICAgc2NyYW1ibGU6IFwiTCcgVScgTCB5JyBMRicgTCcgVUxGTCdcIixcbiAgICBzb2x1dGlvbjogXCIoTEYnIEwnIFUnIExGTCcpIHknIChSJyBVUilcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBMJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNTMuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzUzJyxcbiAgICBzY3JhbWJsZTogXCJSVVInIHkgUicgRlJVJyBSJyBGJyBSXCIsXG4gICAgc29sdXRpb246IFwiKFInIEZSVVInIEYnIFIpIHkgKExVJyBMJylcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBMJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNTQuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzU0JyxcbiAgICBzY3JhbWJsZTogXCJMJyBCJyBMIFUnIFInIFUgUiBMJyBCIExcIixcbiAgICBzb2x1dGlvbjogXCIoTCcgQicgTCkgKFInIFUnIFJVKSAoTCcgQkwpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgTCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzU1LnN2ZycsXG4gICAgbmFtZTogJ29sbF81NScsXG4gICAgc2NyYW1ibGU6IFwiTCBGIEwnIFUgUiBVJyBSJyBMRicgTCcgVTJcIixcbiAgICBzb2x1dGlvbjogXCIoUkJSJykgKExVTCcgVScpIChSQicgUicpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgTCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzU2LnN2ZycsXG4gICAgbmFtZTogJ29sbF81NicsXG4gICAgc2NyYW1ibGU6IFwiKFJMJyBCTFInKSBVMiAoUkwnIEJMUicpVSdcIixcbiAgICBzb2x1dGlvbjogXCIoUkwnIEJMUicpIFUyIChSTCcgQkxSJylcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBGJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNTcuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzU3JyxcbiAgICBzY3JhbWJsZTogXCJGIFInIEYnIFIgTCcgVSBSIFUnIFInIExcIixcbiAgICBzb2x1dGlvbjogXCIoUlVSJyBVJykgciAoUicgVVJVJyByJylcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBIJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBQTExzOiBBbGdvcml0aG1Ta2V0Y2hbXSA9IFtcbiAge1xuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xLnN2ZycsXG4gICAgbmFtZTogJ3BsbF8xJyxcbiAgICBzY3JhbWJsZTogXCJ4JyAoVSBMJyBVIFIyIFUnKSAoTCBVIFIyIFUyKVwiLFxuICAgIHNvbHV0aW9uOiBcIngnIChSJyBEIFInKSBVMiAoUiBEJyBSJyBVMiBSMilcIixcbiAgICB0eXBlOiAnQScsXG4gICAgc3VidHlwZTogJ0EnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMiwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzIuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzInLFxuICAgIHNjcmFtYmxlOiBcIngnIChVJyBSIFUnIEwyVSkgKFInIFUnIEwyIFUyKVwiLFxuICAgIHNvbHV0aW9uOiBcIngnIChMIEQnIEwpIFUyIChMJyBEIEwpIFUyIEwyXCIsXG4gICAgdHlwZTogJ0EnLFxuICAgIHN1YnR5cGU6ICdBJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogMiB9LFxuICAgICAgICB7IHg6IDIsIHk6IDAgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8zLnN2ZycsXG4gICAgbmFtZTogJ3BsbF8zJyxcbiAgICBzY3JhbWJsZTogXCJ4JyAoUiBVJyBSJyBEIFIgVSBSJyBEJykgKFIgVSBSJyBEIFIgVScgUicgRCcpXCIsXG4gICAgc29sdXRpb246IFwieCcgKFIgVScgUicgRCBSIFUgUicgRCcpIChSIFUgUicgRCBSIFUnIFInIEQnKVwiLFxuICAgIHR5cGU6ICdFJyxcbiAgICBzdWJ0eXBlOiAnRScsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAyLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMiwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzQuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzQnLFxuICAgIHNjcmFtYmxlOiBcIihSJyBVUlUnIFIyKSB5JyAoUicgVScgUlUpIChCUkInIFInIEIyVScpXCIsXG4gICAgc29sdXRpb246IFwiKFInIFVSVScgUjIpIHknIChSJyBVJyBSVSkgKEJSQicgUicgQjJVJylcIixcbiAgICB0eXBlOiAnRScsXG4gICAgc3VidHlwZTogJ0UnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAwIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgICB7IHg6IDIsIHk6IDEgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF81LnN2ZycsXG4gICAgbmFtZTogJ3BsbF81JyxcbiAgICBzY3JhbWJsZTogXCIoTTIgVScpIChNMiBVMikgKE0yIFUnKSBNMlwiLFxuICAgIHNvbHV0aW9uOiBcIihNMiBVJykgKE0yIFUyKSAoTTIgVScpIE0yXCIsXG4gICAgdHlwZTogJ0gnLFxuICAgIHN1YnR5cGU6ICdIJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDEgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAxIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfNi5zdmcnLFxuICAgIG5hbWU6ICdwbGxfNicsXG4gICAgc2NyYW1ibGU6IFwiKFInIFVSJyBVJykgKFInIFUnKSAoUicgVSBSIFUgUjIpXCIsXG4gICAgc29sdXRpb246IFwiKFIyIFUnKSAoUicgVScgUlUpIChSIFUgUiBVJyBSKVwiLFxuICAgIHR5cGU6ICdVJyxcbiAgICBzdWJ0eXBlOiAnVScsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgICB7IHg6IDIsIHk6IDEgfSxcbiAgICAgICAgeyB4OiAxLCB5OiAwIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfNy5zdmcnLFxuICAgIG5hbWU6ICdwbGxfNycsXG4gICAgc2NyYW1ibGU6IFwiKFIyIFUnKSAoUicgVScgUlUpIChSIFUgUiBVJyBSKVwiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBVUicgVScpIChSJyBVJykgKFInIFUgUiBVIFIyKVwiLFxuICAgIHR5cGU6ICdVJyxcbiAgICBzdWJ0eXBlOiAnVScsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgICB7IHg6IDEsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAxIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfOC5zdmcnLFxuICAgIG5hbWU6ICdwbGxfOCcsXG4gICAgc2NyYW1ibGU6IFwiTCBVJyBSJyBVTCcgVTIgUiBVJyBSJyBVMiBSIHgyXCIsXG4gICAgc29sdXRpb246IFwiQjIgKFInIFUnIFIpIEIyIChMJyBEIEwnIEQnKSBMMlwiLFxuICAgIHR5cGU6ICdKJyxcbiAgICBzdWJ0eXBlOiAnSicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzkuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzknLFxuICAgIHNjcmFtYmxlOiBcIihSJyBVIEwgVScgUikgKFUyIEwnIFUgTCBVMiBMJykgeDJcIixcbiAgICBzb2x1dGlvbjogXCJCMiAoTCBVIEwnKSBCMiAoUiBEJyBSIEQpIFIyXCIsXG4gICAgdHlwZTogJ0onLFxuICAgIHN1YnR5cGU6ICdKJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAyLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMiwgeTogMiB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IDIsIHk6IDEgfSxcbiAgICAgICAgeyB4OiAxLCB5OiAyIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMTAuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzEwJyxcbiAgICBzY3JhbWJsZTogXCIoUiBVIFInIFUnKSAoUicgRiBSMiBVJykgKFInIFUnIFIgVSBSJyBGJylcIixcbiAgICBzb2x1dGlvbjogXCIoUiBVIFInIFUnKSAoUicgRiBSMiBVJykgKFInIFUnIFIgVSBSJyBGJylcIixcbiAgICB0eXBlOiAnVCcsXG4gICAgc3VidHlwZTogJ1QnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDIsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAyLCB5OiAyIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgICB7IHg6IDIsIHk6IDEgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xMS5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTEnLFxuICAgIHNjcmFtYmxlOiBcIihMJyBVIEwnIFUnKSB5JyhSJyBGJykgKFIyIFUnIFInIFUgUicgRiBSIEYpIHlcIixcbiAgICBzb2x1dGlvbjogXCIoTCcgVSBMJyBVJykgeScoUicgRicpIChSMiBVJyBSJyBVIFInIEYgUiBGKVwiLFxuICAgIHR5cGU6ICdWJyxcbiAgICBzdWJ0eXBlOiAnVicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzEyLnN2ZycsXG4gICAgbmFtZTogJ3BsbF8xMicsXG4gICAgc2NyYW1ibGU6IFwiKEwgVTIgTCcgVTIpIChMIEYnIEwnIFUnIExVKSAoTCBGIEwyIFUpXCIsXG4gICAgc29sdXRpb246IFwiKEwgVTIgTCcgVTIpIChMIEYnIEwnIFUnIExVKSAoTCBGIEwyIFUpXCIsXG4gICAgdHlwZTogJ1InLFxuICAgIHN1YnR5cGU6ICdSJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMiwgeTogMCB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDEgfSxcbiAgICAgICAgeyB4OiAxLCB5OiAyIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMTMuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzEzJyxcbiAgICBzY3JhbWJsZTogXCIoUicgVTIgUiBVMikgKFInIEYgUiBVIFInIFUnKSAoUicgRicgUjIgVScpXCIsXG4gICAgc29sdXRpb246IFwiKFInIFUyIFIgVTIpIChSJyBGIFIgVSBSJyBVJykgKFInIEYnIFIyIFUnKVwiLFxuICAgIHR5cGU6ICdSJyxcbiAgICBzdWJ0eXBlOiAnUicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDAgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAyLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzE0LnN2ZycsXG4gICAgbmFtZTogJ3BsbF8xNCcsXG4gICAgc2NyYW1ibGU6IFwiKEwgVSBMJyBCMikgeicgKFInIFUgTCcgVScgTCkgKFUnIFIgQjIpIHpcIixcbiAgICBzb2x1dGlvbjogXCJ6IHgnIChVMiByJyBVIFInIFUgUiBVJyByIFUyKSB5IChMIEYnIEwnKSB4XCIsXG4gICAgdHlwZTogJ0cnLFxuICAgIHN1YnR5cGU6ICdHJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMiwgeTogMSB9LFxuICAgICAgICB7IHg6IDEsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAyLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMCwgeTogMiB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xNS5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTUnLFxuICAgIHNjcmFtYmxlOiBcIihSJyBVJyBSIEIyKSB6IChMIFUnIFIgVSBSJykgKFUgcicgVTIpIHonIHhcIixcbiAgICBzb2x1dGlvbjogXCJ6JyB4JyAoVTIgbCBVJyBMVScgTCcgVSBsJyBVMikgeScgKFInIEYgUikgeFwiLFxuICAgIHR5cGU6ICdHJyxcbiAgICBzdWJ0eXBlOiAnRycsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAyIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMSwgeTogMCB9LFxuICAgICAgICB7IHg6IDAsIHk6IDEgfSxcbiAgICAgICAgeyB4OiAxLCB5OiAyIH1cbiAgICAgIF1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMTYuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzE2JyxcbiAgICBzY3JhbWJsZTogXCJ6JyAoVTIgbCBVJyBMVScgTCcgVSBsJyBVMikgeScgKFInIEYgUikgeFwiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBVJyBSIEIyKSB6IChMIFUnIFIgVSBSJykgKFUgcicgVTIpIHonIHhcIixcbiAgICB0eXBlOiAnRycsXG4gICAgc3VidHlwZTogJ0cnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAyIH0sXG4gICAgICAgIHsgeDogMiwgeTogMiB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IDEsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAxLCB5OiAyIH0sXG4gICAgICAgIHsgeDogMCwgeTogMSB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzE3LnN2ZycsXG4gICAgbmFtZTogJ3BsbF8xNycsXG4gICAgc2NyYW1ibGU6IFwieiAoVTIgcicgVSBSJyBVIFIgVScgciBVMikgeSAoTCBGJyBMJykgeFwiLFxuICAgIHNvbHV0aW9uOiBcIihMIFUgTCcgQjIpIHonIChSJyBVIEwnIFUnIEwpIChVJyBSIEIyKSB6XCIsXG4gICAgdHlwZTogJ0cnLFxuICAgIHN1YnR5cGU6ICdHJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAyLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMiwgeTogMiB9LFxuICAgICAgICB7IHg6IDAsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAxLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMSwgeTogMiB9LFxuICAgICAgICB7IHg6IDIsIHk6IDEgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xOC5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTgnLFxuICAgIHNjcmFtYmxlOiBcIihVIFInIFUnIFIgVScpIChSIFUgUiBVJyBSJyBVKSAoUiBVIFIyIFUnIFInIFUpXCIsXG4gICAgc29sdXRpb246IFwiKFUgUicgVScgUiBVJykgKFIgVSBSIFUnIFInIFUpIChSIFUgUjIgVScgUicgVSlcIixcbiAgICB0eXBlOiAnWicsXG4gICAgc3VidHlwZTogJ1onLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDEsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAxIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMiwgeTogMSB9LFxuICAgICAgICB7IHg6IDEsIHk6IDIgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xOS5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTknLFxuICAgIHNjcmFtYmxlOiBcIkwgVScgUiBVMiBMJyBVIFInKSAoTCBVJyBSIFUyIEwnIFUgUicpIFUnXCIsXG4gICAgc29sdXRpb246IFwiTCBVJyBSIFUyIEwnIFUgUicpIChMIFUnIFIgVTIgTCcgVSBSJykgVSdcIixcbiAgICB0eXBlOiAnTicsXG4gICAgc3VidHlwZTogJ04nLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW1xuICAgICAgICB7IHg6IDIsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAyIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMSB9LFxuICAgICAgICB7IHg6IDIsIHk6IDEgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8yMC5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMjAnLFxuICAgIHNjcmFtYmxlOiBcIihSJyBVTCcgVTIgUiBVJyBMKSAoUicgVUwnIFUyIFIgVScgTCkgVVwiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBVTCcgVTIgUiBVJyBMKSAoUicgVUwnIFUyIFIgVScgTCkgVVwiLFxuICAgIHR5cGU6ICdOJyxcbiAgICBzdWJ0eXBlOiAnTicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbXG4gICAgICAgIHsgeDogMCwgeTogMCB9LFxuICAgICAgICB7IHg6IDIsIHk6IDIgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAxIH0sXG4gICAgICAgIHsgeDogMiwgeTogMSB9XG4gICAgICBdXG4gICAgXVxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzIxLnN2ZycsXG4gICAgbmFtZTogJ3BsbF8yMScsXG4gICAgc2NyYW1ibGU6IFwiKEYgUiBVJyBSJyBVJyBSIFUgUicgRicpIChSIFUgUicgVScpIChSJyBGIFIgRicpXCIsXG4gICAgc29sdXRpb246IFwiKEYgUiBVJyBSJyBVJyBSIFUgUicgRicpIChSIFUgUicgVScpIChSJyBGIFIgRicpXCIsXG4gICAgdHlwZTogJ1knLFxuICAgIHN1YnR5cGU6ICdZJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFtcbiAgICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgIHsgeDogMiwgeTogMiB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICB7IHg6IDEsIHk6IDAgfSxcbiAgICAgICAgeyB4OiAwLCB5OiAxIH1cbiAgICAgIF1cbiAgICBdXG4gIH1cbl07XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IEFsZ29yaXRobXMgfSBmcm9tICcuLi8uLi9jb2xsZWN0aW9ucy9hbGdvcml0aG1zJztcblxuTWV0ZW9yLnB1Ymxpc2goJ2FsZ29yaXRobXMnLCBmdW5jdGlvbiBnZXRBbGdvcml0aG1zKCkge1xuICAvLyBjb25zdCB1c2VySWQgPSB0aGlzLnVzZXJJZDtcbiAgcmV0dXJuIEFsZ29yaXRobXMuZmluZCgpO1xufSk7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IFJlc3VsdHMgfSBmcm9tICcuLi8uLi9jb2xsZWN0aW9ucy9yZXN1bHRzJztcblxuTWV0ZW9yLnB1Ymxpc2goJ3Jlc3VsdHMnLCBmdW5jdGlvbiBnZXRSZXN1bHRzKCkge1xuICByZXR1cm4gUmVzdWx0cy5maW5kKHsgdXNlcklkOiB0aGlzLnVzZXJJZCB8fCAnZGVtbycgfSk7XG59KTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuXG5pbXBvcnQgeyBjcmVhdGVBbGdvcml0aG1zIH0gZnJvbSAnLi9pbXBvcnRzL2FsZ29yaXRobXNDcmVhdGlvbic7XG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcbiAgLy9VbmlDb25maWcucHJpdmF0ZS5ydW5PbmNlKCdjcmVhdGVBbGdvcml0aG1zJywgY3JlYXRlQWxnb3JpdGhtcyk7XG4gIGNyZWF0ZUFsZ29yaXRobXMoKTtcbn0pO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5pbXBvcnQgeyBjaGVjayB9IGZyb20gJ21ldGVvci9jaGVjayc7XG5cbmV4cG9ydCBjb25zdCBBbGdvcml0aG1zID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ2FsZ29yaXRobXMnKTtcblxuTWV0ZW9yLm1ldGhvZHMoe1xuICAvLyAnYWxnb3JpdGhtcy5pbnNlcnQnKHsgY2F0ZWdvcnksIGltYWdlLCBzY3JhbWJsZSwgc29sdXRpb24sIHN1YnR5cGUsIHR5cGUgfSkge1xuICAvLyAgIGNoZWNrKHRoaXMudXNlcklkLCBTdHJpbmcpO1xuICAvLyAgIGNoZWNrKGNhdGVnb3J5LCBTdHJpbmcpO1xuICAvLyAgIGNoZWNrKGltYWdlLCBTdHJpbmcpO1xuICAvLyAgIGNoZWNrKHNjcmFtYmxlLCBTdHJpbmcpO1xuICAvLyAgIGNoZWNrKHNvbHV0aW9uLCBTdHJpbmcpO1xuICAvLyAgIGNoZWNrKHN1YnR5cGUsIFN0cmluZyk7XG4gIC8vICAgY2hlY2sodHlwZSwgU3RyaW5nKTtcbiAgLy9cbiAgLy8gICBjb25zdCBkb2MgPSB7XG4gIC8vICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gIC8vICAgICBjYXRlZ29yeSxcbiAgLy8gICAgIGltYWdlLFxuICAvLyAgICAgc2NyYW1ibGUsXG4gIC8vICAgICBzb2x1dGlvbixcbiAgLy8gICAgIHN1YnR5cGUsXG4gIC8vICAgICB0eXBlXG4gIC8vICAgfTtcbiAgLy9cbiAgLy8gICBBbGdvcml0aG1zLmluc2VydChkb2MpO1xuICAvLyB9LFxuICAnYWxnb3JpdGhtcy5zZWFyY2gnKHRleHQpIHtcbiAgICBjaGVjayh0ZXh0LCBTdHJpbmcpO1xuXG4gICAgcmV0dXJuIEFsZ29yaXRobXMuZmluZCgpO1xuICB9XG4gIC8vICdhbGdvcml0aG1zLnJlbW92ZScoYWxnb3JpdGhtSWQpIHtcbiAgLy8gICBjaGVjayh0aGlzLnVzZXJJZCwgU3RyaW5nKTtcbiAgLy8gICBjaGVjayhhbGdvcml0aG1JZCwgU3RyaW5nKTtcbiAgLy9cbiAgLy8gICBBbGdvcml0aG1zLnJlbW92ZShhbGdvcml0aG1JZCk7XG4gIC8vIH1cbn0pO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5pbXBvcnQgeyBjaGVjayB9IGZyb20gJ21ldGVvci9jaGVjayc7XG5cbmV4cG9ydCBjb25zdCBSZXN1bHRzID0gbmV3IE1vbmdvLkNvbGxlY3Rpb24oJ3Jlc3VsdHMnKTtcblxuTWV0ZW9yLm1ldGhvZHMoe1xuICAncmVzdWx0cy5pbnNlcnQnKHsgYWxnb3JpdGhtSWQsIGNhdGVnb3J5LCBzY3JhbWJsZSwgdGltZSB9KSB7XG4gICAgY2hlY2soY2F0ZWdvcnksIFN0cmluZyk7XG4gICAgY2hlY2sodGltZSwgTnVtYmVyKTtcblxuICAgIGlmIChjYXRlZ29yeSA9PT0gJ09MTCcgfHwgY2F0ZWdvcnkgPT09ICdQTEwnIHx8IGNhdGVnb3J5ID09PSAnM3gzeDMnKSB7XG4gICAgICBjaGVjayhzY3JhbWJsZSwgU3RyaW5nKTtcbiAgICB9XG5cbiAgICBpZiAoY2F0ZWdvcnkgPT09ICdPTEwnIHx8IGNhdGVnb3J5ID09PSAnUExMJykge1xuICAgICAgY2hlY2soYWxnb3JpdGhtSWQsIFN0cmluZyk7XG4gICAgfVxuXG4gICAgY29uc3QgZG9jID0ge1xuICAgICAgYWxnb3JpdGhtSWQsXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgIHNjcmFtYmxlLFxuICAgICAgdGltZSxcbiAgICAgIHVzZXJJZDogdGhpcy51c2VySWQgfHwgJ2RlbW8nXG4gICAgfTtcblxuICAgIFJlc3VsdHMuaW5zZXJ0KGRvYyk7XG4gIH0sXG4gICdyZXN1bHRzLnJlbW92ZScocmVzdWx0SWQpIHtcbiAgICBjaGVjayh0aGlzLnVzZXJJZCwgU3RyaW5nKTtcbiAgICBjaGVjayhyZXN1bHRJZCwgU3RyaW5nKTtcblxuICAgIFJlc3VsdHMucmVtb3ZlKHsgdXNlcklkOiB0aGlzLnVzZXJJZCwgcmVzdWx0SWQgfSk7XG4gIH1cbn0pO1xuIl19
