var require = meteorInstall({"lib":{"global-helpers.ts":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// lib/global-helpers.ts                                                                            //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
module.export({
  getRandomScramble: () => getRandomScramble
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

require("/lib/global-helpers.ts");
require("/server/publications/algorithms.ts");
require("/server/publications/results.ts");
require("/collections/algorithms.ts");
require("/collections/results.ts");
require("/server/main.ts");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbGliL2dsb2JhbC1oZWxwZXJzLnRzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvaW1wb3J0cy9hbGdvcml0aG1zQ3JlYXRpb24udHMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9pbXBvcnRzL2NvbnN0LnRzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zL2FsZ29yaXRobXMudHMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9wdWJsaWNhdGlvbnMvcmVzdWx0cy50cyIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21haW4udHMiLCJtZXRlb3I6Ly/wn5K7YXBwL2NvbGxlY3Rpb25zL2FsZ29yaXRobXMudHMiLCJtZXRlb3I6Ly/wn5K7YXBwL2NvbGxlY3Rpb25zL3Jlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFvQkEsTUFBTSxPQUFOLENBQU07QUFBQSxtQkFBOEI7QUFBOUIsQ0FBTjtBQUFBLE1BQU0sWUFBWSxHQUFrQixDQUNsQyxHQURrQyxFQUVsQyxJQUZrQyxFQUdsQyxJQUhrQyxFQUlsQyxHQUprQyxFQUtsQyxJQUxrQyxFQU1sQyxJQU5rQyxFQU9sQyxHQVBrQyxFQVFsQyxJQVJrQyxFQVNsQyxJQVRrQyxFQVVsQyxHQVZrQyxFQVdsQyxJQVhrQyxFQVlsQyxJQVprQyxFQWFsQyxHQWJrQyxFQWNsQyxJQWRrQyxFQWVsQyxJQWZrQyxFQWdCbEMsR0FoQmtDLEVBaUJsQyxJQWpCa0MsRUFrQmxDLElBbEJrQyxDQUFwQzs7QUFxQkEsTUFBTSxhQUFhLEdBQUcsTUFDcEIsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBSSxDQUFDLE1BQUwsS0FBZ0IsWUFBWSxDQUFDLE1BQXhDLENBQUQsQ0FEZDs7QUFHQSxNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQUQsRUFBaUIsS0FBakIsS0FDcEIsS0FBSyxJQUFJLEtBQVQsR0FDSSxLQUFLLENBQUMsS0FBTixDQUFZLEVBQVosRUFBZ0IsSUFBaEIsQ0FBcUIsU0FBUyxJQUFJLEtBQUssQ0FBQyxRQUFOLENBQWUsU0FBZixDQUFsQyxDQURKLEdBRUksS0FITjs7QUFLTyxNQUFNLGlCQUFpQixHQUFJLE9BQUQsSUFBNEI7QUFDM0QsUUFBTSxLQUFLLEdBQUcsRUFBZDtBQUVBLE1BQUksSUFBSSxHQUFHLEVBQVg7QUFDQSxNQUFJLFlBQVksR0FBRyxFQUFuQjs7QUFDQSxPQUFLLElBQUksQ0FBQyxHQUFHLENBQWIsRUFBZ0IsQ0FBQyxHQUFHLE9BQXBCLEVBQTZCLENBQUMsRUFBOUIsRUFBa0M7QUFDaEMsUUFBSSxHQUFHLGFBQWEsRUFBcEI7O0FBQ0EsV0FBTyxhQUFhLENBQUMsSUFBRCxFQUFPLFlBQVAsQ0FBcEIsRUFBMEM7QUFDeEMsVUFBSSxHQUFHLGFBQWEsRUFBcEI7QUFDRDs7QUFFRCxnQkFBWSxHQUFHLElBQWY7QUFDQSxTQUFLLENBQUMsSUFBTixDQUFXLElBQVg7QUFDRDs7QUFFRCxTQUFPLEtBQUssQ0FBQyxJQUFOLENBQVcsR0FBWCxDQUFQO0FBQ0QsQ0FoQk0sQzs7Ozs7Ozs7Ozs7QUNqRFAsT0FBTyxNQUFQLENBQVM7QUFBTSxrQkFBUTtBQUFkLENBQVQ7QUFBdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFLaEMsTUFBTSxnQkFBZ0IsR0FBRyxNQUFLO0FBQ25DLFFBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBWCxDQUFtQjtBQUFFLFlBQVEsRUFBRTtBQUFaLEdBQW5CLENBQWhCO0FBQ0EsUUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFYLENBQW1CO0FBQUUsWUFBUSxFQUFFO0FBQVosR0FBbkIsQ0FBaEI7QUFFQSxHQUFDLEtBQUQsSUFDRSxJQUFJLENBQUMsT0FBTCxDQUFhLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBUCxDQUFZLG1CQUFaLEVBQWlDLFNBQWpDLENBQTFCLENBREY7QUFFQSxHQUFDLEtBQUQsSUFDRSxJQUFJLENBQUMsT0FBTCxDQUFhLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBUCxDQUFZLG1CQUFaLEVBQWlDLFNBQWpDLENBQTFCLENBREY7QUFFRCxDQVJNLEM7Ozs7Ozs7Ozs7O0FDNEJQLE1BQU0sT0FBTixDQUFNO0FBQUEsTUFBMEIsWUFBMUI7QUFBMEI7QUFBMUIsQ0FBTjtBQUFBLE1BQU0sVUFBVSxHQUFnQixDQUM5QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUQ4QixFQUU5QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUY4QixFQUc5QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUg4QixDQUFoQztBQU1BLE1BQU0sVUFBVSxHQUFnQixFQUFoQztBQUVPLE1BQU0sSUFBSSxHQUFnQixDQUMvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLDZCQUxaO0FBTUUsVUFBUSxFQUFFLDBCQU5aO0FBT0UsTUFBSSxFQUFFLE9BUFI7QUFRRSxTQUFPLEVBQUUsT0FSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQUQrQixFQWlCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFdBSFQ7QUFJRSxNQUFJLEVBQUUsT0FKUjtBQUtFLFVBQVEsRUFBRSxzQkFMWjtBQU1FLFVBQVEsRUFBRSw0QkFOWjtBQU9FLE1BQUksRUFBRSxPQVBSO0FBUUUsU0FBTyxFQUFFLE9BUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0FqQitCLEVBaUMvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLHdCQUxaO0FBTUUsVUFBUSxFQUFFLHNCQU5aO0FBT0UsTUFBSSxFQUFFLE9BUFI7QUFRRSxTQUFPLEVBQUUsT0FSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWpDK0IsRUFpRC9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxXQUhUO0FBSUUsTUFBSSxFQUFFLE9BSlI7QUFLRSxVQUFRLEVBQUUscUJBTFo7QUFNRSxVQUFRLEVBQUUsaUJBTlo7QUFPRSxNQUFJLEVBQUUsT0FQUjtBQVFFLFNBQU8sRUFBRSxPQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBakQrQixFQWlFL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFdBSFQ7QUFJRSxNQUFJLEVBQUUsT0FKUjtBQUtFLFVBQVEsRUFBRSxzQkFMWjtBQU1FLFVBQVEsRUFBRSxzQkFOWjtBQU9FLE1BQUksRUFBRSxPQVBSO0FBUUUsU0FBTyxFQUFFLE9BUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0FqRStCLEVBaUYvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLGVBTFo7QUFNRSxVQUFRLEVBQUUsa0JBTlo7QUFPRSxNQUFJLEVBQUUsT0FQUjtBQVFFLFNBQU8sRUFBRSxPQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBakYrQixFQWlHL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFdBSFQ7QUFJRSxNQUFJLEVBQUUsT0FKUjtBQUtFLFVBQVEsRUFBRSxvQkFMWjtBQU1FLFVBQVEsRUFBRSxhQU5aO0FBT0UsTUFBSSxFQUFFLE9BUFI7QUFRRSxTQUFPLEVBQUUsT0FSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWpHK0IsRUFpSC9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxXQUhUO0FBSUUsTUFBSSxFQUFFLE9BSlI7QUFLRSxVQUFRLEVBQUUseUJBTFo7QUFNRSxVQUFRLEVBQUUsMEJBTlo7QUFPRSxNQUFJLEVBQUUsS0FQUjtBQVFFLFNBQU8sRUFBRSxLQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBakgrQixFQWlJL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFdBSFQ7QUFJRSxNQUFJLEVBQUUsT0FKUjtBQUtFLFVBQVEsRUFBRSxnQ0FMWjtBQU1FLFVBQVEsRUFBRSx5QkFOWjtBQU9FLE1BQUksRUFBRSxLQVBSO0FBUUUsU0FBTyxFQUFFLEtBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0FqSStCLEVBaUovQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLDZCQUxaO0FBTUUsVUFBUSxFQUFFLDJCQU5aO0FBT0UsTUFBSSxFQUFFLEtBUFI7QUFRRSxTQUFPLEVBQUUsS0FSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWpKK0IsRUFpSy9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsd0JBTFo7QUFNRSxVQUFRLEVBQUUsNkJBTlo7QUFPRSxNQUFJLEVBQUUsS0FQUjtBQVFFLFNBQU8sRUFBRSxLQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBaksrQixFQWlML0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSwwQkFMWjtBQU1FLFVBQVEsRUFBRSxzQkFOWjtBQU9FLE1BQUksRUFBRSxLQVBSO0FBUUUsU0FBTyxFQUFFLEtBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0FqTCtCLEVBaU0vQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLHVCQUxaO0FBTUUsVUFBUSxFQUFFLHFCQU5aO0FBT0UsTUFBSSxFQUFFLEtBUFI7QUFRRSxTQUFPLEVBQUUsS0FSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWpNK0IsRUFpTi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUscUJBTFo7QUFNRSxVQUFRLEVBQUUsdUJBTlo7QUFPRSxNQUFJLEVBQUUsS0FQUjtBQVFFLFNBQU8sRUFBRSxLQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBak4rQixFQWlPL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSwrQkFMWjtBQU1FLFVBQVEsRUFBRSw0QkFOWjtBQU9FLE1BQUksRUFBRSxLQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0FqTytCLEVBaVAvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLHVCQUxaO0FBTUUsVUFBUSxFQUFFLHFCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWpQK0IsRUFpUS9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsNEJBTFo7QUFNRSxVQUFRLEVBQUUsa0JBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBalErQixFQWlSL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSxnQkFMWjtBQU1FLFVBQVEsRUFBRSxhQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWpSK0IsRUFpUy9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsaUJBTFo7QUFNRSxVQUFRLEVBQUUsY0FOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0FqUytCLEVBaVQvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLDRCQUxaO0FBTUUsVUFBUSxFQUFFLCtCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWpUK0IsRUFpVS9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUseUJBTFo7QUFNRSxVQUFRLEVBQUUsNkJBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBalUrQixFQWlWL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSw0QkFMWjtBQU1FLFVBQVEsRUFBRSwrQkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLE1BUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0FqVitCLEVBaVcvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLHVCQUxaO0FBTUUsVUFBUSxFQUFFLHFCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsTUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWpXK0IsRUFpWC9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsc0JBTFo7QUFNRSxVQUFRLEVBQUUsNEJBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxNQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBalgrQixFQWlZL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSxzQkFMWjtBQU1FLFVBQVEsRUFBRSwwQkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLE1BUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0FqWStCLEVBaVovQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLDhCQUxaO0FBTUUsVUFBUSxFQUFFLDhCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsTUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWpaK0IsRUFpYS9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsZ0NBTFo7QUFNRSxVQUFRLEVBQUUsNEJBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxNQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBamErQixFQWliL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSw0QkFMWjtBQU1FLFVBQVEsRUFBRSx5QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLE1BUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0FqYitCLEVBaWMvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLDZCQUxaO0FBTUUsVUFBUSxFQUFFLHdCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsTUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWpjK0IsRUFpZC9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsd0JBTFo7QUFNRSxVQUFRLEVBQUUsK0JBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBamQrQixFQWllL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSxpQkFMWjtBQU1FLFVBQVEsRUFBRSx3QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0FqZStCLEVBaWYvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLGlCQUxaO0FBTUUsVUFBUSxFQUFFLHFCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWpmK0IsRUFpZ0IvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLGFBTFo7QUFNRSxVQUFRLEVBQUUsZ0JBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBamdCK0IsRUFpaEIvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLHdCQUxaO0FBTUUsVUFBUSxFQUFFLDhCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWpoQitCLEVBaWlCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSwwQkFMWjtBQU1FLFVBQVEsRUFBRSx3QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0FqaUIrQixFQWlqQi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsOEJBTFo7QUFNRSxVQUFRLEVBQUUsa0NBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBampCK0IsRUFpa0IvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLGdDQUxaO0FBTUUsVUFBUSxFQUFFLDhCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWprQitCLEVBaWxCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSxxQkFMWjtBQU1FLFVBQVEsRUFBRSxjQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsUUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWpsQitCLEVBaW1CL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSxnQkFMWjtBQU1FLFVBQVEsRUFBRSxnQkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFFBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0FqbUIrQixFQWluQi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsd0JBTFo7QUFNRSxVQUFRLEVBQUUsMkJBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxRQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBam5CK0IsRUFpb0IvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLHFCQUxaO0FBTUUsVUFBUSxFQUFFLGlCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsUUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWpvQitCLEVBaXBCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSx1QkFMWjtBQU1FLFVBQVEsRUFBRSxjQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWpwQitCLEVBaXFCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSxpQkFMWjtBQU1FLFVBQVEsRUFBRSxnQkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0FqcUIrQixFQWlyQi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsdUJBTFo7QUFNRSxVQUFRLEVBQUUsdUJBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBanJCK0IsRUFpc0IvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLHdCQUxaO0FBTUUsVUFBUSxFQUFFLHVCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWpzQitCLEVBaXRCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSwyQkFMWjtBQU1FLFVBQVEsRUFBRSx1QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0FqdEIrQixFQWl1Qi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsNEJBTFo7QUFNRSxVQUFRLEVBQUUseUJBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBanVCK0IsRUFpdkIvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLCtCQUxaO0FBTUUsVUFBUSxFQUFFLG1DQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWp2QitCLEVBaXdCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSwyQkFMWjtBQU1FLFVBQVEsRUFBRSx1Q0FOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0Fqd0IrQixFQWl4Qi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsa0JBTFo7QUFNRSxVQUFRLEVBQUUsNEJBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxXQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBanhCK0IsRUFpeUIvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLHFCQUxaO0FBTUUsVUFBUSxFQUFFLHVCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsV0FSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWp5QitCLEVBaXpCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSx5QkFMWjtBQU1FLFVBQVEsRUFBRSw2QkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0FqekIrQixFQWkwQi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsd0JBTFo7QUFNRSxVQUFRLEVBQUUsNEJBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBajBCK0IsRUFpMUIvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLDBCQUxaO0FBTUUsVUFBUSxFQUFFLDhCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWoxQitCLEVBaTJCL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFlBSFQ7QUFJRSxNQUFJLEVBQUUsUUFKUjtBQUtFLFVBQVEsRUFBRSw0QkFMWjtBQU1FLFVBQVEsRUFBRSwyQkFOWjtBQU9FLE1BQUksRUFBRSxNQVBSO0FBUUUsU0FBTyxFQUFFLFVBUlg7QUFTRSxTQUFPLEVBQUUsQ0FDUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURPLEVBRVAsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTyxFQUdQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSE8sQ0FUWDtBQWNFLFNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQUQsRUFBWSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFaLEVBQXVCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQXZCLEVBQWtDLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWxDO0FBZFgsQ0FqMkIrQixFQWkzQi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsNEJBTFo7QUFNRSxVQUFRLEVBQUUsMEJBTlo7QUFPRSxNQUFJLEVBQUUsTUFQUjtBQVFFLFNBQU8sRUFBRSxVQVJYO0FBU0UsU0FBTyxFQUFFLENBQ1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FETyxFQUVQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRk8sRUFHUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhPLENBVFg7QUFjRSxTQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFELEVBQVksQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBWixFQUF1QixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUF2QixFQUFrQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUFsQztBQWRYLENBajNCK0IsRUFpNEIvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsWUFIVDtBQUlFLE1BQUksRUFBRSxRQUpSO0FBS0UsVUFBUSxFQUFFLDBCQUxaO0FBTUUsVUFBUSxFQUFFLDBCQU5aO0FBT0UsTUFBSSxFQUFFLE1BUFI7QUFRRSxTQUFPLEVBQUUsVUFSWDtBQVNFLFNBQU8sRUFBRSxDQUNQLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRE8sRUFFUCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZPLEVBR1AsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FITyxDQVRYO0FBY0UsU0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBRCxFQUFZLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVosRUFBdUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBdkIsRUFBa0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBbEM7QUFkWCxDQWo0QitCLENBQTFCO0FBbTVCQSxNQUFNLElBQUksR0FBZ0IsQ0FDL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFdBSFQ7QUFJRSxNQUFJLEVBQUUsT0FKUjtBQUtFLFVBQVEsRUFBRSwrQkFMWjtBQU1FLFVBQVEsRUFBRSxpQ0FOWjtBQU9FLE1BQUksRUFBRSxHQVBSO0FBUUUsU0FBTyxFQUFFLEdBUlg7QUFTRSxTQUFPLEVBQUUsVUFUWDtBQVVFLFNBQU8sRUFBRSxVQVZYO0FBV0UsT0FBSyxFQUFFLENBQUMsQ0FBQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBRCxFQUFpQjtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakIsRUFBaUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpDLENBQUQ7QUFYVCxDQUQrQixFQWMvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLGdDQUxaO0FBTUUsVUFBUSxFQUFFLCtCQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUFELEVBQWlCO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUFqQixFQUFpQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakMsQ0FBRDtBQVhULENBZCtCLEVBMkIvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLGdEQUxaO0FBTUUsVUFBUSxFQUFFLGdEQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUFELEVBQWlCO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUFqQixDQUFELEVBQW1DLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLENBQW5DO0FBWFQsQ0EzQitCLEVBd0MvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLDJDQUxaO0FBTUUsVUFBUSxFQUFFLDJDQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUFELEVBQWlCO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUFqQixDQUFELEVBQW1DLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLENBQW5DO0FBWFQsQ0F4QytCLEVBcUQvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLDRCQUxaO0FBTUUsVUFBUSxFQUFFLDRCQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUFELEVBQWlCO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUFqQixDQUFELEVBQW1DLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLENBQW5DO0FBWFQsQ0FyRCtCLEVBa0UvQjtBQUNFLFFBQU0sRUFBRSxJQURWO0FBRUUsVUFBUSxFQUFFLEtBRlo7QUFHRSxPQUFLLEVBQUUsV0FIVDtBQUlFLE1BQUksRUFBRSxPQUpSO0FBS0UsVUFBUSxFQUFFLG1DQUxaO0FBTUUsVUFBUSxFQUFFLGlDQU5aO0FBT0UsTUFBSSxFQUFFLEdBUFI7QUFRRSxTQUFPLEVBQUUsR0FSWDtBQVNFLFNBQU8sRUFBRSxVQVRYO0FBVUUsU0FBTyxFQUFFLFVBVlg7QUFXRSxPQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUFELEVBQWlCO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUFqQixFQUFpQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakMsQ0FBRDtBQVhULENBbEUrQixFQStFL0I7QUFDRSxRQUFNLEVBQUUsSUFEVjtBQUVFLFVBQVEsRUFBRSxLQUZaO0FBR0UsT0FBSyxFQUFFLFdBSFQ7QUFJRSxNQUFJLEVBQUUsT0FKUjtBQUtFLFVBQVEsRUFBRSxpQ0FMWjtBQU1FLFVBQVEsRUFBRSxtQ0FOWjtBQU9FLE1BQUksRUFBRSxHQVBSO0FBUUUsU0FBTyxFQUFFLEdBUlg7QUFTRSxTQUFPLEVBQUUsVUFUWDtBQVVFLFNBQU8sRUFBRSxVQVZYO0FBV0UsT0FBSyxFQUFFLENBQUMsQ0FBQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBRCxFQUFpQjtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakIsRUFBaUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpDLENBQUQ7QUFYVCxDQS9FK0IsRUE0Ri9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxXQUhUO0FBSUUsTUFBSSxFQUFFLE9BSlI7QUFLRSxVQUFRLEVBQUUsZ0NBTFo7QUFNRSxVQUFRLEVBQUUsaUNBTlo7QUFPRSxNQUFJLEVBQUUsR0FQUjtBQVFFLFNBQU8sRUFBRSxHQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxTQUFPLEVBQUUsVUFWWDtBQVdFLE9BQUssRUFBRSxDQUFDLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLENBQUQsRUFBbUMsQ0FBQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBRCxFQUFpQjtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakIsQ0FBbkM7QUFYVCxDQTVGK0IsRUF5Ry9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxXQUhUO0FBSUUsTUFBSSxFQUFFLE9BSlI7QUFLRSxVQUFRLEVBQUUsb0NBTFo7QUFNRSxVQUFRLEVBQUUsOEJBTlo7QUFPRSxNQUFJLEVBQUUsR0FQUjtBQVFFLFNBQU8sRUFBRSxHQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxTQUFPLEVBQUUsVUFWWDtBQVdFLE9BQUssRUFBRSxDQUFDLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLENBQUQsRUFBbUMsQ0FBQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBRCxFQUFpQjtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakIsQ0FBbkM7QUFYVCxDQXpHK0IsRUFzSC9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsNENBTFo7QUFNRSxVQUFRLEVBQUUsNENBTlo7QUFPRSxNQUFJLEVBQUUsR0FQUjtBQVFFLFNBQU8sRUFBRSxHQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxTQUFPLEVBQUUsVUFWWDtBQVdFLE9BQUssRUFBRSxDQUFDLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLENBQUQsRUFBbUMsQ0FBQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBRCxFQUFpQjtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakIsQ0FBbkM7QUFYVCxDQXRIK0IsRUFtSS9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsZ0RBTFo7QUFNRSxVQUFRLEVBQUUsOENBTlo7QUFPRSxNQUFJLEVBQUUsR0FQUjtBQVFFLFNBQU8sRUFBRSxHQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxTQUFPLEVBQUUsVUFWWDtBQVdFLE9BQUssRUFBRSxDQUFDLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLENBQUQsRUFBbUMsQ0FBQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBRCxFQUFpQjtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakIsQ0FBbkM7QUFYVCxDQW5JK0IsRUFnSi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUseUNBTFo7QUFNRSxVQUFRLEVBQUUseUNBTlo7QUFPRSxNQUFJLEVBQUUsR0FQUjtBQVFFLFNBQU8sRUFBRSxHQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxTQUFPLEVBQUUsVUFWWDtBQVdFLE9BQUssRUFBRSxDQUFDLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLENBQUQsRUFBbUMsQ0FBQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBRCxFQUFpQjtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakIsQ0FBbkM7QUFYVCxDQWhKK0IsRUE2Si9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsNkNBTFo7QUFNRSxVQUFRLEVBQUUsNkNBTlo7QUFPRSxNQUFJLEVBQUUsR0FQUjtBQVFFLFNBQU8sRUFBRSxHQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxTQUFPLEVBQUUsVUFWWDtBQVdFLE9BQUssRUFBRSxDQUFDLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLENBQUQsRUFBbUMsQ0FBQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBRCxFQUFpQjtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakIsQ0FBbkM7QUFYVCxDQTdKK0IsRUEwSy9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsMkNBTFo7QUFNRSxVQUFRLEVBQUUsNkNBTlo7QUFPRSxNQUFJLEVBQUUsR0FQUjtBQVFFLFNBQU8sRUFBRSxHQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxTQUFPLEVBQUUsVUFWWDtBQVdFLE9BQUssRUFBRSxDQUNMLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLEVBQWlDO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUFqQyxDQURLLEVBRUwsQ0FBQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBRCxFQUFpQjtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakIsRUFBaUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpDLENBRks7QUFYVCxDQTFLK0IsRUEwTC9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsNkNBTFo7QUFNRSxVQUFRLEVBQUUsOENBTlo7QUFPRSxNQUFJLEVBQUUsR0FQUjtBQVFFLFNBQU8sRUFBRSxHQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxTQUFPLEVBQUUsVUFWWDtBQVdFLE9BQUssRUFBRSxDQUNMLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLEVBQWlDO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUFqQyxDQURLLEVBRUwsQ0FBQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBRCxFQUFpQjtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakIsRUFBaUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpDLENBRks7QUFYVCxDQTFMK0IsRUEwTS9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsMkNBTFo7QUFNRSxVQUFRLEVBQUUsNkNBTlo7QUFPRSxNQUFJLEVBQUUsR0FQUjtBQVFFLFNBQU8sRUFBRSxHQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxTQUFPLEVBQUUsVUFWWDtBQVdFLE9BQUssRUFBRSxDQUNMLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLEVBQWlDO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUFqQyxDQURLLEVBRUwsQ0FBQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBRCxFQUFpQjtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakIsRUFBaUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpDLENBRks7QUFYVCxDQTFNK0IsRUEwTi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsMENBTFo7QUFNRSxVQUFRLEVBQUUsMkNBTlo7QUFPRSxNQUFJLEVBQUUsR0FQUjtBQVFFLFNBQU8sRUFBRSxHQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxTQUFPLEVBQUUsVUFWWDtBQVdFLE9BQUssRUFBRSxDQUNMLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLEVBQWlDO0FBQUUsS0FBQyxFQUFFLENBQUw7QUFBUSxLQUFDLEVBQUU7QUFBWCxHQUFqQyxDQURLLEVBRUwsQ0FBQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBRCxFQUFpQjtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakIsRUFBaUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpDLENBRks7QUFYVCxDQTFOK0IsRUEwTy9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsaURBTFo7QUFNRSxVQUFRLEVBQUUsaURBTlo7QUFPRSxNQUFJLEVBQUUsR0FQUjtBQVFFLFNBQU8sRUFBRSxHQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxTQUFPLEVBQUUsVUFWWDtBQVdFLE9BQUssRUFBRSxDQUFDLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLENBQUQsRUFBbUMsQ0FBQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBRCxFQUFpQjtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakIsQ0FBbkM7QUFYVCxDQTFPK0IsRUF1UC9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsMkNBTFo7QUFNRSxVQUFRLEVBQUUsMkNBTlo7QUFPRSxNQUFJLEVBQUUsR0FQUjtBQVFFLFNBQU8sRUFBRSxHQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxTQUFPLEVBQUUsVUFWWDtBQVdFLE9BQUssRUFBRSxDQUFDLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLENBQUQsRUFBbUMsQ0FBQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBRCxFQUFpQjtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakIsQ0FBbkM7QUFYVCxDQXZQK0IsRUFvUS9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUseUNBTFo7QUFNRSxVQUFRLEVBQUUseUNBTlo7QUFPRSxNQUFJLEVBQUUsR0FQUjtBQVFFLFNBQU8sRUFBRSxHQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxTQUFPLEVBQUUsVUFWWDtBQVdFLE9BQUssRUFBRSxDQUFDLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLENBQUQsRUFBbUMsQ0FBQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBRCxFQUFpQjtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakIsQ0FBbkM7QUFYVCxDQXBRK0IsRUFpUi9CO0FBQ0UsUUFBTSxFQUFFLElBRFY7QUFFRSxVQUFRLEVBQUUsS0FGWjtBQUdFLE9BQUssRUFBRSxZQUhUO0FBSUUsTUFBSSxFQUFFLFFBSlI7QUFLRSxVQUFRLEVBQUUsa0RBTFo7QUFNRSxVQUFRLEVBQUUsa0RBTlo7QUFPRSxNQUFJLEVBQUUsR0FQUjtBQVFFLFNBQU8sRUFBRSxHQVJYO0FBU0UsU0FBTyxFQUFFLFVBVFg7QUFVRSxTQUFPLEVBQUUsVUFWWDtBQVdFLE9BQUssRUFBRSxDQUFDLENBQUM7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQUQsRUFBaUI7QUFBRSxLQUFDLEVBQUUsQ0FBTDtBQUFRLEtBQUMsRUFBRTtBQUFYLEdBQWpCLENBQUQsRUFBbUMsQ0FBQztBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBRCxFQUFpQjtBQUFFLEtBQUMsRUFBRSxDQUFMO0FBQVEsS0FBQyxFQUFFO0FBQVgsR0FBakIsQ0FBbkM7QUFYVCxDQWpSK0IsQ0FBMUIsQzs7Ozs7Ozs7Ozs7QUM1N0JQO0FBQVMsTUFBUSxLQUFSLENBQWMsZUFBZCxFQUE4QjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxDQUE5QixFQUE4QixDQUE5QjtBQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBR3ZDO0FBQ0EsTUFBTSxDQUFDLE9BQVAsQ0FBZSxZQUFmLEVBQTZCLE1BQU0sVUFBVSxDQUFDLElBQVgsRUFBbkMsRTs7Ozs7Ozs7Ozs7QUNKQTtBQUFTLE1BQVEsS0FBUixDQUFjLGVBQWQsRUFBOEI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsQ0FBOUIsRUFBOEIsQ0FBOUI7QUFBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUd2QztBQUNBLE1BQU0sQ0FBQyxPQUFQLENBQWUsU0FBZixFQUEwQixNQUFNLE9BQU8sQ0FBQyxJQUFSLEVBQWhDLEU7Ozs7Ozs7Ozs7O0FDSkE7QUFBUyxNQUFRLEtBQVIsQ0FBYyxlQUFkLEVBQThCO0FBQUE7QUFBQTtBQUFBOztBQUFBLENBQTlCLEVBQThCLENBQTlCO0FBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFJdkMsTUFBTSxDQUFDLE9BQVAsQ0FBZSxNQUFLO0FBQ2xCO0FBQ0Esa0JBQWdCO0FBQ2pCLENBSEQsRTs7Ozs7Ozs7Ozs7QUNKQSxPQUFPLE1BQVAsQ0FBUztBQUFNLFlBQVE7QUFBZCxDQUFUO0FBQXVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFNaEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsVUFBVixDQUFxQixZQUFyQixDQUFuQjtBQUVQLE1BQU0sQ0FBQyxPQUFQLENBQWU7QUFDYiw2QkFBMkIsQ0FBQyxLQUFELEVBQVEsTUFBUixLQUFrQjtBQUMzQyxTQUFLLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBTDtBQUNBLFNBQUssQ0FBQyxLQUFELEVBQVEsTUFBUixDQUFMO0FBRUEsY0FBVSxDQUFDLE1BQVgsQ0FBa0IsS0FBbEIsRUFBeUI7QUFBRSxVQUFJLEVBQUU7QUFBRTtBQUFGO0FBQVIsS0FBekI7QUFDRCxHQU5ZO0FBT2IsNEJBQTBCLFFBQVEsSUFBRztBQUNuQyxjQUFVLENBQUMsTUFBWCxDQUNFO0FBQUU7QUFBRixLQURGLEVBRUU7QUFBRSxVQUFJLEVBQUU7QUFBRSxjQUFNLEVBQUU7QUFBVjtBQUFSLEtBRkYsRUFHRTtBQUFFLFdBQUssRUFBRTtBQUFULEtBSEY7QUFLRCxHQWJZO0FBY2IsOEJBQTRCLFFBQVEsSUFBRztBQUNyQyxjQUFVLENBQUMsTUFBWCxDQUNFO0FBQUU7QUFBRixLQURGLEVBRUU7QUFBRSxVQUFJLEVBQUU7QUFBRSxjQUFNLEVBQUU7QUFBVjtBQUFSLEtBRkYsRUFHRTtBQUFFLFdBQUssRUFBRTtBQUFULEtBSEY7QUFLRCxHQXBCWTtBQXFCYix1QkFBcUIsVUFPaEI7QUFBQSxRQVBpQjtBQUNwQixjQURvQjtBQUVwQixXQUZvQjtBQUdwQixjQUhvQjtBQUlwQixjQUpvQjtBQUtwQixhQUxvQjtBQU1wQjtBQU5vQixLQU9qQjtBQUNILFVBQU0sQ0FBQyxRQUFELENBQU4sQ0FBaUIsRUFBakIsQ0FBb0IsRUFBcEIsQ0FBdUIsQ0FBdkIsQ0FBeUIsUUFBekI7QUFDQSxVQUFNLENBQUMsS0FBRCxDQUFOLENBQWMsRUFBZCxDQUFpQixFQUFqQixDQUFvQixDQUFwQixDQUFzQixRQUF0QjtBQUNBLFVBQU0sQ0FBQyxRQUFELENBQU4sQ0FBaUIsRUFBakIsQ0FBb0IsRUFBcEIsQ0FBdUIsQ0FBdkIsQ0FBeUIsUUFBekI7QUFDQSxVQUFNLENBQUMsUUFBRCxDQUFOLENBQWlCLEVBQWpCLENBQW9CLEVBQXBCLENBQXVCLENBQXZCLENBQXlCLFFBQXpCO0FBQ0EsVUFBTSxDQUFDLE9BQUQsQ0FBTixDQUFnQixFQUFoQixDQUFtQixFQUFuQixDQUFzQixDQUF0QixDQUF3QixRQUF4QjtBQUNBLFVBQU0sQ0FBQyxJQUFELENBQU4sQ0FBYSxFQUFiLENBQWdCLEVBQWhCLENBQW1CLENBQW5CLENBQXFCLFFBQXJCLEVBTkcsQ0FRSDs7QUFDQTs7OztBQUlBLFVBQU0sR0FBRyxHQUFHO0FBQ1YsZUFBUyxFQUFFLElBQUksSUFBSixFQUREO0FBRVYsY0FGVTtBQUdWLFdBSFU7QUFJVixjQUpVO0FBS1YsY0FMVTtBQU1WLGFBTlU7QUFPVjtBQVBVLEtBQVo7QUFVQSxjQUFVLENBQUMsTUFBWCxDQUFrQixHQUFsQjtBQUNELEdBcERZOztBQXFEYixzQkFBb0IsSUFBcEIsRUFBd0I7QUFDdEIsU0FBSyxDQUFDLElBQUQsRUFBTyxNQUFQLENBQUw7QUFFQSxXQUFPLFVBQVUsQ0FBQyxJQUFYLEVBQVA7QUFDRCxHQXpEWTs7QUEwRGIsc0JBQW9CLFdBQXBCLEVBQStCO0FBQzdCLFNBQUssQ0FBQyxXQUFELEVBQWMsTUFBZCxDQUFMO0FBRUE7Ozs7OztBQU1BLGNBQVUsQ0FBQyxNQUFYLENBQWtCLFdBQWxCO0FBQ0Q7QUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFwRVcsQ0FBZixFOzs7Ozs7Ozs7OztBQ1JBLE9BQU8sTUFBUCxDQUFTO0FBQU0sU0FBRSxFQUFNO0FBQWQsQ0FBVDtBQUF1QixJQUFnQixNQUFoQjtBQUFnQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBSWhDLE1BQU0sT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLFVBQVYsQ0FBcUIsU0FBckIsQ0FBaEI7QUFFUCxNQUFNLENBQUMsT0FBUCxDQUFlO0FBQ2Isb0JBQWtCLFVBQThDO0FBQUEsUUFBN0M7QUFBRSxpQkFBRjtBQUFlLGNBQWY7QUFBeUIsY0FBekI7QUFBbUM7QUFBbkMsS0FBNkM7QUFDOUQsU0FBSyxDQUFDLFFBQUQsRUFBVyxNQUFYLENBQUw7QUFDQSxTQUFLLENBQUMsSUFBRCxFQUFPLE1BQVAsQ0FBTDs7QUFFQSxRQUFJLFFBQVEsS0FBSyxLQUFiLElBQXNCLFFBQVEsS0FBSyxLQUFuQyxJQUE0QyxRQUFRLEtBQUssT0FBN0QsRUFBc0U7QUFDcEUsV0FBSyxDQUFDLFFBQUQsRUFBVyxNQUFYLENBQUw7QUFDRDs7QUFFRCxRQUFJLFFBQVEsS0FBSyxLQUFiLElBQXNCLFFBQVEsS0FBSyxLQUF2QyxFQUE4QztBQUM1QyxXQUFLLENBQUMsV0FBRCxFQUFjLE1BQWQsQ0FBTDtBQUNELEtBVjZELENBWTlEOztBQUNBOzs7OztBQUlBLFVBQU0sR0FBRyxHQUFHO0FBQ1YsaUJBRFU7QUFFVixjQUZVO0FBR1YsZUFBUyxFQUFFLElBQUksSUFBSixFQUhEO0FBSVYsY0FKVTtBQUtWO0FBTFUsS0FBWjtBQVFBLFdBQU8sQ0FBQyxNQUFSLENBQWUsR0FBZjtBQUNELEdBM0JZO0FBNEJiLG9CQUFrQixJQUFJLElBQUc7QUFDdkIsU0FBSyxDQUFDLElBQUQsRUFBTyxNQUFQLENBQUw7QUFFQSxXQUFPLE9BQU8sQ0FBQyxJQUFSLEVBQVA7QUFDRCxHQWhDWTtBQWlDYixvQkFBa0IsUUFBUSxJQUFHO0FBQzNCLFNBQUssQ0FBQyxRQUFELEVBQVcsTUFBWCxDQUFMO0FBRUE7Ozs7OztBQU1BLFdBQU8sQ0FBQyxNQUFSLENBQWUsUUFBZjtBQUNEO0FBM0NZLENBQWYsRSIsImZpbGUiOiIvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidHlwZSBhbGxvd2VkTW92ZSA9XG4gIHwgJ0YnXG4gIHwgXCJGJ1wiXG4gIHwgJ0YyJ1xuICB8ICdCJ1xuICB8IFwiQidcIlxuICB8ICdCMidcbiAgfCAnUidcbiAgfCBcIlInXCJcbiAgfCAnUjInXG4gIHwgJ0wnXG4gIHwgXCJMJ1wiXG4gIHwgJ0wyJ1xuICB8ICdVJ1xuICB8IFwiVSdcIlxuICB8ICdVMidcbiAgfCAnRCdcbiAgfCBcIkQnXCJcbiAgfCAnRDInO1xuXG5jb25zdCBhbGxvd2VkTW92ZXM6IGFsbG93ZWRNb3ZlW10gPSBbXG4gICdGJyxcbiAgXCJGJ1wiLFxuICAnRjInLFxuICAnQicsXG4gIFwiQidcIixcbiAgJ0IyJyxcbiAgJ1InLFxuICBcIlInXCIsXG4gICdSMicsXG4gICdMJyxcbiAgXCJMJ1wiLFxuICAnTDInLFxuICAnVScsXG4gIFwiVSdcIixcbiAgJ1UyJyxcbiAgJ0QnLFxuICBcIkQnXCIsXG4gICdEMidcbl07XG5cbmNvbnN0IGdldFJhbmRvbU1vdmUgPSAoKTogYWxsb3dlZE1vdmUgPT5cbiAgYWxsb3dlZE1vdmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsbG93ZWRNb3Zlcy5sZW5ndGgpXTtcblxuY29uc3QgbW92ZXNDb25mbGljdCA9IChtb3ZlQT86IHN0cmluZywgbW92ZUI/OiBzdHJpbmcpOiBib29sZWFuID0+XG4gIG1vdmVBICYmIG1vdmVCXG4gICAgPyBtb3ZlQS5zcGxpdCgnJykuc29tZShjaGFyYWN0ZXIgPT4gbW92ZUIuaW5jbHVkZXMoY2hhcmFjdGVyKSlcbiAgICA6IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tU2NyYW1ibGUgPSAobW92ZXNOcjogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgY29uc3QgbW92ZXMgPSBbXTtcblxuICBsZXQgbW92ZSA9ICcnO1xuICBsZXQgcHJldmlvdXNNb3ZlID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbW92ZXNOcjsgaSsrKSB7XG4gICAgbW92ZSA9IGdldFJhbmRvbU1vdmUoKTtcbiAgICB3aGlsZSAobW92ZXNDb25mbGljdChtb3ZlLCBwcmV2aW91c01vdmUpKSB7XG4gICAgICBtb3ZlID0gZ2V0UmFuZG9tTW92ZSgpO1xuICAgIH1cblxuICAgIHByZXZpb3VzTW92ZSA9IG1vdmU7XG4gICAgbW92ZXMucHVzaChtb3ZlKTtcbiAgfVxuXG4gIHJldHVybiBtb3Zlcy5qb2luKCcgJyk7XG59O1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBBbGdvcml0aG1zIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvYWxnb3JpdGhtcyc7XG5cbmltcG9ydCB7IE9MTHMsIFBMTHMgfSBmcm9tICcuL2NvbnN0JztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFsZ29yaXRobXMgPSAoKSA9PiB7XG4gIGNvbnN0IGlzT0xMID0gISFBbGdvcml0aG1zLmZpbmRPbmUoeyBjYXRlZ29yeTogJ09MTCcgfSk7XG4gIGNvbnN0IGlzUExMID0gISFBbGdvcml0aG1zLmZpbmRPbmUoeyBjYXRlZ29yeTogJ1BMTCcgfSk7XG5cbiAgIWlzT0xMICYmXG4gICAgT0xMcy5mb3JFYWNoKGFsZ29yaXRobSA9PiBNZXRlb3IuY2FsbCgnYWxnb3JpdGhtcy5pbnNlcnQnLCBhbGdvcml0aG0pKTtcbiAgIWlzUExMICYmXG4gICAgUExMcy5mb3JFYWNoKGFsZ29yaXRobSA9PiBNZXRlb3IuY2FsbCgnYWxnb3JpdGhtcy5pbnNlcnQnLCBhbGdvcml0aG0pKTtcbn07XG4iLCJleHBvcnQgdHlwZSBhbGdvcml0aG0gPSB7XG4gIF9pZD86IHN0cmluZztcbiAgYWN0aXZlOiBib29sZWFuO1xuICBjYXRlZ29yeTogJ09MTCcgfCAnUExMJztcbiAgbmFtZTogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xuICBzY3JhbWJsZTogc3RyaW5nO1xuICBzb2x1dGlvbjogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHN1YnR5cGU6IHN0cmluZztcbiAgc3F1YXJlczogc3F1YXJlc1R5cGU7XG4gIHN0cmlrZXM6IHN0cmlrZXNUeXBlO1xuICBsaW5lcz86IGxpbmVbXTtcbn07XG5cbmV4cG9ydCB0eXBlIGxpbmUgPSBwb2ludFtdO1xuZXhwb3J0IHR5cGUgcG9pbnQgPSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG5cbnR5cGUgc3F1YXJlc1R5cGUgPSBbXG4gIFswIHwgMSwgMCB8IDEsIDAgfCAxXSwgLy8gdG9wIHJvdywgbGVmdCB0byByaWdodFxuICBbMCB8IDEsIDAgfCAxLCAwIHwgMV0sIC8vIG1pZGRsZSByb3csIGxlZnQgdG8gcmlnaHRcbiAgWzAgfCAxLCAwIHwgMSwgMCB8IDFdIC8vIGJvdHRvbSByb3csIGxlZnQgdG8gcmlnaHRcbl07XG5cbnR5cGUgc3RyaWtlc1R5cGUgPVxuICB8IFtcbiAgICAgIFswIHwgMSwgMCB8IDEsIDAgfCAxXSwgLy8gdG9wIGdyb3VwLCBsZWZ0IHRvIHJpZ2h0XG4gICAgICBbMCB8IDEsIDAgfCAxLCAwIHwgMV0sIC8vIHJpZ2h0IGdyb3VwLCB0b3AgdG8gYm90dG9tXG4gICAgICBbMCB8IDEsIDAgfCAxLCAwIHwgMV0sIC8vIGJvdHRvbSBncm91cCwgbGVmdCB0byByaWdodFxuICAgICAgWzAgfCAxLCAwIHwgMSwgMCB8IDFdIC8vIGxlZnQgZ3JvdXAsIHRvcCB0byBib3R0b21cbiAgICBdXG4gIHwgW107XG5cbmNvbnN0IHNxdXJlc0Z1bGw6IHNxdWFyZXNUeXBlID0gWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgWzEsIDEsIDFdLFxuICBbMSwgMSwgMV0sXG4gIFsxLCAxLCAxXVxuXTtcblxuY29uc3Qgc3Jpa2VzTm9uZTogc3RyaWtlc1R5cGUgPSBbXTtcblxuZXhwb3J0IGNvbnN0IE9MTHM6IGFsZ29yaXRobVtdID0gW1xuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xLnN2ZycsXG4gICAgbmFtZTogJ29sbF8xJyxcbiAgICBzY3JhbWJsZTogXCJSVTIgUicgVScgUlVSJyBVJyBSVScgUicgVSdcIixcbiAgICBzb2x1dGlvbjogXCJSVTIgUicgVScgUlVSJyBVJyBSVScgUidcIixcbiAgICB0eXBlOiAnQ3Jvc3MnLFxuICAgIHN1YnR5cGU6ICdDcm9zcycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1sxLCAwLCAxXSwgWzAsIDAsIDBdLCBbMSwgMCwgMV0sIFswLCAwLCAwXV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMicsXG4gICAgc2NyYW1ibGU6IFwiUlUyIFIyIFUnIFIyVScgUjJVMlJcIixcbiAgICBzb2x1dGlvbjogXCIoUlUyIFIyIFUnKSAoUjJVJykgKFIyVTJSKVwiLFxuICAgIHR5cGU6ICdDcm9zcycsXG4gICAgc3VidHlwZTogJ0Nyb3NzJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzAsIDAsIDFdLCBbMCwgMCwgMF0sIFswLCAwLCAxXSwgWzEsIDAsIDFdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zLnN2ZycsXG4gICAgbmFtZTogJ29sbF8zJyxcbiAgICBzY3JhbWJsZTogXCJ4JyAoUlVSJyBEUlUnIFInIEQnIEYpXCIsXG4gICAgc29sdXRpb246IFwieCcgKFJVJyBSJyBEUlVSJyBEJylcIixcbiAgICB0eXBlOiAnQ3Jvc3MnLFxuICAgIHN1YnR5cGU6ICdDcm9zcycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1sxLCAwLCAwXSwgWzAsIDAsIDFdLCBbMCwgMCwgMF0sIFswLCAwLCAwXV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNCcsXG4gICAgc2NyYW1ibGU6IFwiUlUyUkRSJyBVMlJEJyBSMiBVMlwiLFxuICAgIHNvbHV0aW9uOiBcIlIyRCcgUlUyUidEUlUyUlwiLFxuICAgIHR5cGU6ICdDcm9zcycsXG4gICAgc3VidHlwZTogJ0Nyb3NzJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzEsIDAsIDFdLCBbMCwgMCwgMF0sIFswLCAwLCAwXSwgWzAsIDAsIDBdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF81LnN2ZycsXG4gICAgbmFtZTogJ29sbF81JyxcbiAgICBzY3JhbWJsZTogXCJ4JyAoUlUnIFInIERSVVInIEQnKVwiLFxuICAgIHNvbHV0aW9uOiBcIngnIChSVVInIERSVScgUicgRCcpXCIsXG4gICAgdHlwZTogJ0Nyb3NzJyxcbiAgICBzdWJ0eXBlOiAnQ3Jvc3MnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMCwgMCwgMF0sIFswLCAwLCAxXSwgWzAsIDAsIDBdLCBbMCwgMCwgMV1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzYuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzYnLFxuICAgIHNjcmFtYmxlOiBcIlJVUicgVVJVMlInIFVcIixcbiAgICBzb2x1dGlvbjogXCJMJyBVJyBMVScgTCcgVTJMXCIsXG4gICAgdHlwZTogJ0Nyb3NzJyxcbiAgICBzdWJ0eXBlOiAnQ3Jvc3MnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMSwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMCwgMCwgMV0sIFswLCAwLCAwXSwgWzEsIDAsIDBdLCBbMSwgMCwgMF1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzcuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzcnLFxuICAgIHNjcmFtYmxlOiBcIkwnIFUnIExVJyBMJyBVMkxVJ1wiLFxuICAgIHNvbHV0aW9uOiBcIlJVUicgVVJVMlInXCIsXG4gICAgdHlwZTogJ0Nyb3NzJyxcbiAgICBzdWJ0eXBlOiAnQ3Jvc3MnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMSwgMCwgMF0sIFsxLCAwLCAwXSwgWzAsIDAsIDFdLCBbMCwgMCwgMF1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzguc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzgnLFxuICAgIHNjcmFtYmxlOiBcIkZSJyBGJyBSVVIyQicgUicgQlUnIFInXCIsXG4gICAgc29sdXRpb246IFwiKFJVMlIyRlIpIChGJyBVMlInIEZSRicpXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0RvdCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1swLCAxLCAwXSwgWzEsIDEsIDFdLCBbMCwgMSwgMF0sIFsxLCAxLCAxXV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfOS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfOScsXG4gICAgc2NyYW1ibGU6IFwiRlInIEYnIFJVMkZSJyBGJyBSVScgUlUnIFInIFUyXCIsXG4gICAgc29sdXRpb246IFwiTEYnIEwnIEZVMkZVJyBSVScgUicgRidcIixcbiAgICB0eXBlOiAnRG90JyxcbiAgICBzdWJ0eXBlOiAnRG90JyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzAsIDEsIDBdLCBbMSwgMSwgMF0sIFsxLCAxLCAwXSwgWzAsIDEsIDBdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xMC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTAnLFxuICAgIHNjcmFtYmxlOiBcIkZSJyBGJyBSVTJSIGQnIFJVJyBSJyBGJyBVJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihSVTJSMkZSRicgVTIpIE0nIFVSVScgTCdcIixcbiAgICB0eXBlOiAnRG90JyxcbiAgICBzdWJ0eXBlOiAnRG90JyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzAsIDEsIDBdLCBbMCwgMSwgMF0sIFswLCAxLCAwXSwgWzEsIDEsIDFdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xMS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTEnLFxuICAgIHNjcmFtYmxlOiBcIlJVMlIyRlJGJyBVMlInIEZSRicgVTJcIixcbiAgICBzb2x1dGlvbjogXCIoRlJVUicgVScgRicpIChmUlVSJyBVJyBmJylcIixcbiAgICB0eXBlOiAnRG90JyxcbiAgICBzdWJ0eXBlOiAnRG90JyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzAsIDEsIDFdLCBbMCwgMSwgMF0sIFswLCAxLCAxXSwgWzEsIDEsIDFdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xMi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTInLFxuICAgIHNjcmFtYmxlOiBcIlInIEYnIFUyRjJVUlUnIFInIEYnIFUyUlwiLFxuICAgIHNvbHV0aW9uOiBcIlInIFUyRlJVUicgVScgRjJVMkZSXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0RvdCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAwLCAxXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1swLCAxLCAwXSwgWzAsIDEsIDFdLCBbMCwgMSwgMF0sIFswLCAxLCAxXV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTMuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzEzJyxcbiAgICBzY3JhbWJsZTogXCJNVScgTEYyTCcgVScgUlUnIFIyIHJcIixcbiAgICBzb2x1dGlvbjogXCJNVVInIEYyUlVMJyBVIEwyIGwnXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0RvdCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1sxLCAxLCAwXSwgWzEsIDEsIDBdLCBbMCwgMSwgMV0sIFswLCAxLCAwXV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTQuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzE0JyxcbiAgICBzY3JhbWJsZTogXCJNVVInIEYyUlVMJyBVIEwyIGwnXCIsXG4gICAgc29sdXRpb246IFwiTVUnIExGMkwnIFUnIFJVJyBSMiByXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0RvdCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1swLCAxLCAxXSwgWzAsIDEsIDBdLCBbMSwgMSwgMF0sIFsxLCAxLCAwXV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMTUuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzE1JyxcbiAgICBzY3JhbWJsZTogXCIoTVVNVU1VTVUpIChNJyBVTScgVU0nIFVNJyBVKVwiLFxuICAgIHNvbHV0aW9uOiBcIk0gKFVSVVInIFUnKSBNMiAoVSBSVScgcicpXCIsXG4gICAgdHlwZTogJ0RvdCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBYJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzAsIDEsIDBdLCBbMCwgMSwgMF0sIFswLCAxLCAwXSwgWzAsIDEsIDBdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xNi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTYnLFxuICAgIHNjcmFtYmxlOiBcIihSJyBGUlVSJyBVJykgKEYnIFVSKVwiLFxuICAgIHNvbHV0aW9uOiBcIlInIFUnIEZVUlUnIFInIEYnIFJcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBQJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzEsIDAsIDBdLCBbMCwgMCwgMF0sIFsxLCAxLCAwXSwgWzAsIDEsIDBdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8xNy5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMTcnLFxuICAgIHNjcmFtYmxlOiBcIihMIEYnIEwnIFUnIEwgVSkgKEYgVScgTCcpXCIsXG4gICAgc29sdXRpb246IFwiTFVGJyBVJyBMJyBVTEZMJ1wiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFAnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMCwgMCwgMV0sIFswLCAxLCAwXSwgWzAsIDEsIDFdLCBbMCwgMCwgMF1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzE4LnN2ZycsXG4gICAgbmFtZTogJ29sbF8xOCcsXG4gICAgc2NyYW1ibGU6IFwiRiAoUlVSJyBVJykgRidcIixcbiAgICBzb2x1dGlvbjogXCJGVVJVJyBSJyBGJ1wiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFAnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMCwgMCwgMF0sIFsxLCAxLCAxXSwgWzAsIDEsIDBdLCBbMCwgMCwgMF1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzE5LnN2ZycsXG4gICAgbmFtZTogJ29sbF8xOScsXG4gICAgc2NyYW1ibGU6IFwiRicgKEwnIFUnIExVKSBGXCIsXG4gICAgc29sdXRpb246IFwiRicgVScgTCcgVUxGXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgUCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1swLCAwLCAwXSwgWzAsIDAsIDBdLCBbMCwgMSwgMF0sIFsxLCAxLCAxXV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjAuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzIwJyxcbiAgICBzY3JhbWJsZTogXCJCJyBSQlInIFUnIFInIFUnIFJVUicgVVJVMlwiLFxuICAgIHNvbHV0aW9uOiBcIihMJyBVJyBMVScgTCcgVSkgKExVTEYnIEwnIEYpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgVycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1swLCAwLCAxXSwgWzAsIDAsIDBdLCBbMCwgMSwgMF0sIFswLCAxLCAxXV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjEuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzIxJyxcbiAgICBzY3JhbWJsZTogXCJGUicgRicgUlVSVVInIFUnIFJVJyBSJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihSVVInIFVSVScpIChSJyBVJyBSJyBGUkYnKVwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFcnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMSwgMCwgMF0sIFswLCAxLCAxXSwgWzAsIDEsIDBdLCBbMCwgMCwgMF1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzIyLnN2ZycsXG4gICAgbmFtZTogJ29sbF8yMicsXG4gICAgc2NyYW1ibGU6IFwiUicgRicgTEYnIEwnIEZMRicgTCcgRjJSVSdcIixcbiAgICBzb2x1dGlvbjogXCIoUicgRicgTEYnKSAoIEwnIEZMRicgTCcgRjJSKVwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnRGFzaCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1swLCAwLCAwXSwgWzEsIDEsIDFdLCBbMCwgMSwgMF0sIFsxLCAwLCAxXV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjMuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzIzJyxcbiAgICBzY3JhbWJsZTogXCJMRlInIEZSRicgUicgRlJGMkwnIFVcIixcbiAgICBzb2x1dGlvbjogXCJMRlInIEZSRicgUicgRlJGMkwnXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzAsIDAsIDBdLCBbMSwgMCwgMV0sIFswLCAxLCAwXSwgWzEsIDEsIDFdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8yNC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMjQnLFxuICAgIHNjcmFtYmxlOiBcIkYnIFUnIEwnIFVMVScgTCcgVUxGXCIsXG4gICAgc29sdXRpb246IFwiRicgKEwnIFUnIExVKSAoTCcgVScgTFUpIEZcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0Rhc2gnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMSwgMCwgMF0sIFsxLCAwLCAxXSwgWzEsIDEsIDBdLCBbMCwgMSwgMF1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzI1LnN2ZycsXG4gICAgbmFtZTogJ29sbF8yNScsXG4gICAgc2NyYW1ibGU6IFwiRiBVUlUnIFInIFVSVScgUicgRidcIixcbiAgICBzb2x1dGlvbjogXCJGIChSVVInIFUnKSAoUlVSJyBVJykgRidcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0Rhc2gnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMCwgMCwgMV0sIFswLCAxLCAwXSwgWzAsIDEsIDFdLCBbMSwgMCwgMV1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzI2LnN2ZycsXG4gICAgbmFtZTogJ29sbF8yNicsXG4gICAgc2NyYW1ibGU6IFwiKHIgVScpIChyMiBVKSAocjIgVSByMiBVJyByKVwiLFxuICAgIHNvbHV0aW9uOiBcIihyJyBVKSAocjJVJykgKHIyVScpIChyMlVyJylcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0Rhc2gnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMCwgMSwgMV0sIFswLCAwLCAwXSwgWzAsIDAsIDFdLCBbMSwgMSwgMV1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzI3LnN2ZycsXG4gICAgbmFtZTogJ29sbF8yNycsXG4gICAgc2NyYW1ibGU6IFwiKHInIFUpIChyMlUnKSAocjJVJykgKHIyVXInKVUyXCIsXG4gICAgc29sdXRpb246IFwiKGxVJykgKGwyVSkgKGwyVSkgKGwyVScgbClcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0Rhc2gnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMSwgMSwgMF0sIFsxLCAxLCAxXSwgWzEsIDAsIDBdLCBbMCwgMCwgMF1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzI4LnN2ZycsXG4gICAgbmFtZTogJ29sbF8yOCcsXG4gICAgc2NyYW1ibGU6IFwiTCBGJyBMJyBVJyBMIEYgTCcgeSBMJyBVIExcIixcbiAgICBzb2x1dGlvbjogXCJMJyBVJyBMIHknIExGJyBMJyBVTEZMJ1wiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnRGFzaCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1swLCAxLCAxXSwgWzAsIDAsIDFdLCBbMSwgMCwgMF0sIFswLCAxLCAwXV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfMjkuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzI5JyxcbiAgICBzY3JhbWJsZTogXCJSJyBGIFIgVSBSJyBGJyBSIHknIFIgVScgUidcIixcbiAgICBzb2x1dGlvbjogXCJSVVInIHkgUicgRlJVJyBSJyBGJyBSXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdEYXNoJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzEsIDEsIDBdLCBbMCwgMSwgMF0sIFswLCAwLCAxXSwgWzAsIDAsIDFdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zMC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzAnLFxuICAgIHNjcmFtYmxlOiBcIkInIEZSJyBGJyBSQlVSVScgUicgVTJcIixcbiAgICBzb2x1dGlvbjogXCIoUicgVScgUlUgRikgeCcgKFIgVScgUicgVUQnKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIEMnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMCwgMSwgMF0sIFswLCAwLCAxXSwgWzAsIDEsIDBdLCBbMCwgMCwgMV1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzMxLnN2ZycsXG4gICAgbmFtZTogJ29sbF8zMScsXG4gICAgc2NyYW1ibGU6IFwiUlVCJyBSQlInIFUnIFInXCIsXG4gICAgc29sdXRpb246IFwiKFInIFUnIFInIEYpIChSRicgVSkgUlwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIEMnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMSwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMCwgMCwgMF0sIFsxLCAxLCAxXSwgWzAsIDAsIDBdLCBbMCwgMSwgMF1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzMyLnN2ZycsXG4gICAgbmFtZTogJ29sbF8zMicsXG4gICAgc2NyYW1ibGU6IFwiRlInIEYnIFJVUlUnIFInXCIsXG4gICAgc29sdXRpb246IFwiKFJVUicgVScpIChSJyBGUkYnKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFQnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMSwgMSwgMF0sIFswLCAwLCAwXSwgWzEsIDEsIDBdLCBbMCwgMCwgMF1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzMzLnN2ZycsXG4gICAgbmFtZTogJ29sbF8zMycsXG4gICAgc2NyYW1ibGU6IFwiRlVSVScgUicgRidcIixcbiAgICBzb2x1dGlvbjogXCJGIChSVVInIFUnKSBGJ1wiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFQnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMCwgMSwgMF0sIFswLCAwLCAwXSwgWzAsIDEsIDBdLCBbMSwgMCwgMV1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzM0LnN2ZycsXG4gICAgbmFtZTogJ29sbF8zNCcsXG4gICAgc2NyYW1ibGU6IFwiQicgUkJVMlInIFUnIFJVJyBSMlUyUlwiLFxuICAgIHNvbHV0aW9uOiBcIihSVTJSMlUnIFJVJyBSJyBVMikgKEYgUiBGJylcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBJJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzAsIDAsIDBdLCBbMSwgMSwgMV0sIFswLCAwLCAwXSwgWzEsIDEsIDFdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zNS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzUnLFxuICAgIHNjcmFtYmxlOiBcIkYgKFJVUicgVScpIChSVVInIFUnKSBGJ1wiLFxuICAgIHNvbHV0aW9uOiBcIkYgKFVSVScgUicgVVJVJyBSJykgRidcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBJJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzEsIDEsIDBdLCBbMSwgMCwgMV0sIFsxLCAxLCAwXSwgWzAsIDAsIDBdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zNi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzYnLFxuICAgIHNjcmFtYmxlOiBcIkwnIEInIExSJyBVJyBSVVInIFUnIFJVTCcgQkxcIixcbiAgICBzb2x1dGlvbjogXCIoTCcgQicgTFUnKSAoUicgVVJVJyBSJyBVUkwnIEJMKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIEknLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMCwgMSwgMF0sIFsxLCAwLCAxXSwgWzAsIDEsIDBdLCBbMSwgMCwgMV1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzM3LnN2ZycsXG4gICAgbmFtZTogJ29sbF8zNycsXG4gICAgc2NyYW1ibGU6IFwiKFInIFUnIFJVJyBSJyBVKSB5JyAoUicgVVJCKVUnXCIsXG4gICAgc29sdXRpb246IFwiKFInIFUnIFJVJyBSJyBVKSB5JyAoUicgVVJCKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIEknLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMSwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMSwgMCwgMF0sIFsxLCAxLCAxXSwgWzEsIDAsIDBdLCBbMCwgMSwgMF1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzM4LnN2ZycsXG4gICAgbmFtZTogJ29sbF8zOCcsXG4gICAgc2NyYW1ibGU6IFwiUicgRicgTEYnIEwnIEYyUiBVMlwiLFxuICAgIHNvbHV0aW9uOiBcInInIFUyUlVSJ1UgclwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnU3F1YXJlJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzEsIDEsIDBdLCBbMSwgMCwgMF0sIFswLCAwLCAwXSwgWzAsIDEsIDFdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF8zOS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfMzknLFxuICAgIHNjcmFtYmxlOiBcIkxGUicgRlJGMkwnIFUyXCIsXG4gICAgc29sdXRpb246IFwibCBVMkwnVSdMVScgbCdcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ1NxdWFyZScsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1swLCAxLCAxXSwgWzAsIDEsIDFdLCBbMCwgMCwgMF0sIFsxLCAwLCAwXV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNDAuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQwJyxcbiAgICBzY3JhbWJsZTogXCJSJyBVMiBsIFUnIFJVUicgbCcgVTJSXCIsXG4gICAgc29sdXRpb246IFwieCcgKFInIEYyUjJVJyBSJyBVUicgRjJSKVwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnU3F1YXJlJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDAsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzEsIDAsIDBdLCBbMCwgMCwgMV0sIFswLCAxLCAwXSwgWzAsIDEsIDBdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80MS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDEnLFxuICAgIHNjcmFtYmxlOiBcIihSVVInIFUnKSAoUicgRlJGJylcIixcbiAgICBzb2x1dGlvbjogXCJGUicgRicgUlVSVScgUidcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ1NxdWFyZScsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1swLCAwLCAwXSwgWzEsIDEsIDBdLCBbMSwgMSwgMF0sIFswLCAwLCAwXV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNDIuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQyJyxcbiAgICBzY3JhbWJsZTogXCJMIEYyIFInIEYnIFIgRicgTCcgVTJcIixcbiAgICBzb2x1dGlvbjogXCJsIFVMJ1VMVTIgbCdcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzEsIDEsIDBdLCBbMCwgMCwgMF0sIFswLCAwLCAxXSwgWzAsIDEsIDFdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80My5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDMnLFxuICAgIHNjcmFtYmxlOiBcIlInIEYyTEZMJyBGUiBVMlwiLFxuICAgIHNvbHV0aW9uOiBcInInIFUnUlUnUidVMiByXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgUycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFsxLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAxLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1swLCAxLCAxXSwgWzAsIDEsIDFdLCBbMSwgMCwgMF0sIFswLCAwLCAwXV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNDQuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQ0JyxcbiAgICBzY3JhbWJsZTogXCJNVScgUlUyUicgVScgUlUnIFIyclVcIixcbiAgICBzb2x1dGlvbjogXCJGJ0wnVSdMVUYgVSBGUlVSJ1UnRidcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzAsIDEsIDBdLCBbMSwgMSwgMF0sIFswLCAwLCAxXSwgWzAsIDAsIDFdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80NS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDUnLFxuICAgIHNjcmFtYmxlOiBcIk0nIFVSJyBVMlJVUicgVVIyIHInIFVcIixcbiAgICBzb2x1dGlvbjogXCJGUlVSJ1UnRicgVSBGUlVSJ1UnRidcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDEsIDBdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzAsIDEsIDBdLCBbMCwgMCwgMV0sIFsxLCAwLCAwXSwgWzEsIDEsIDBdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80Ni5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDYnLFxuICAgIHNjcmFtYmxlOiBcIkIyUicgVVJVJyBSJyBVJyBSMkJSJyBCVTJcIixcbiAgICBzb2x1dGlvbjogXCJGJyBMRicgTDJVTFVMJyBVJyBMRjJcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzAsIDAsIDBdLCBbMSwgMCwgMF0sIFswLCAxLCAwXSwgWzEsIDAsIDBdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80Ny5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDcnLFxuICAgIHNjcmFtYmxlOiBcImwgVScgbCcgVScgUjJVUicgQlJVJyBSMlUyXCIsXG4gICAgc29sdXRpb246IFwiRlInIEZSMlUnIFInIFUnIFJVUicgRjJcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBTJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzEsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzAsIDAsIDBdLCBbMSwgMSwgMF0sIFswLCAxLCAwXSwgWzEsIDAsIDBdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF80OC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNDgnLFxuICAgIHNjcmFtYmxlOiBcIkInIFUnIFInIFUnIFIgeSBVUlUyUicgVScgUlUnXCIsXG4gICAgc29sdXRpb246IFwiKFInIEZSRicgUicgRlJGJykgKFJVIFInIFUnIFJVUicpXCIsXG4gICAgdHlwZTogJ0Rhc2gnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgUycsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAxLCAxXSxcbiAgICAgIFsxLCAxLCAwXSxcbiAgICAgIFswLCAwLCAxXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1swLCAwLCAwXSwgWzAsIDEsIDBdLCBbMCwgMSwgMF0sIFsxLCAwLCAxXV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNDkuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzQ5JyxcbiAgICBzY3JhbWJsZTogXCJGVVJVUicgeScgVScgUicgVTJSVVInIFUnXCIsXG4gICAgc29sdXRpb246IFwiKExGJyBMJyBGTEYnIEwnIEYpIChMJyBVJyBMIFVMJyBVJyBMKVwiLFxuICAgIHR5cGU6ICdEYXNoJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIFMnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMSwgMF0sXG4gICAgICBbMCwgMSwgMV0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMCwgMCwgMF0sIFsxLCAwLCAxXSwgWzAsIDEsIDBdLCBbMCwgMSwgMF1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzUwLnN2ZycsXG4gICAgbmFtZTogJ29sbF81MCcsXG4gICAgc2NyYW1ibGU6IFwiTFVGJyBVJyBMJyBVTEZMJ1wiLFxuICAgIHNvbHV0aW9uOiBcIihMIEYnIEwnIFUnIEwgVSkgKEYgVScgTCcpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMaWdodG5pbmcnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMSwgMSwgMF0sIFswLCAwLCAxXSwgWzAsIDEsIDBdLCBbMCwgMCwgMF1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzUxLnN2ZycsXG4gICAgbmFtZTogJ29sbF81MScsXG4gICAgc2NyYW1ibGU6IFwiUicgVScgRlVSVScgUicgRicgUlwiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBGUlVSJyBVJykgKEYnIFVSKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGlnaHRuaW5nJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzAsIDEsIDFdLCBbMCwgMCwgMF0sIFswLCAxLCAwXSwgWzAsIDAsIDFdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF81Mi5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNTInLFxuICAgIHNjcmFtYmxlOiBcIkwnIFUnIEwgeScgTEYnIEwnIFVMRkwnXCIsXG4gICAgc29sdXRpb246IFwiKExGJyBMJyBVJyBMRkwnKSB5JyAoUicgVVIpXCIsXG4gICAgdHlwZTogJ0xpbmUnLFxuICAgIHN1YnR5cGU6ICdMZXR0ZXIgTCcsXG4gICAgc3F1YXJlczogWy8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cbiAgICAgIFswLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxXSxcbiAgICAgIFsxLCAwLCAwXVxuICAgIF0sXG4gICAgc3RyaWtlczogW1sxLCAxLCAwXSwgWzEsIDAsIDBdLCBbMCwgMSwgMV0sIFswLCAwLCAwXV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ09MTCcsXG4gICAgaW1hZ2U6ICdvbGxfNTMuc3ZnJyxcbiAgICBuYW1lOiAnb2xsXzUzJyxcbiAgICBzY3JhbWJsZTogXCJSVVInIHkgUicgRlJVJyBSJyBGJyBSXCIsXG4gICAgc29sdXRpb246IFwiKFInIEZSVVInIEYnIFIpIHkgKExVJyBMJylcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBMJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzAsIDEsIDFdLCBbMCwgMCwgMF0sIFsxLCAxLCAwXSwgWzEsIDAsIDBdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF81NC5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNTQnLFxuICAgIHNjcmFtYmxlOiBcIkwnIEInIEwgVScgUicgVSBSIEwnIEIgTFwiLFxuICAgIHNvbHV0aW9uOiBcIihMJyBCJyBMKSAoUicgVScgUlUpIChMJyBCTClcIixcbiAgICB0eXBlOiAnTGluZScsXG4gICAgc3VidHlwZTogJ0xldHRlciBMJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzEsIDEsIDBdLCBbMSwgMCwgMF0sIFswLCAxLCAwXSwgWzAsIDAsIDFdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF81NS5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNTUnLFxuICAgIHNjcmFtYmxlOiBcIkwgRiBMJyBVIFIgVScgUicgTEYnIEwnIFUyXCIsXG4gICAgc29sdXRpb246IFwiKFJCUicpIChMVUwnIFUnKSAoUkInIFInKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIEwnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMCwgMF1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMCwgMSwgMV0sIFswLCAwLCAxXSwgWzAsIDEsIDBdLCBbMSwgMCwgMF1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdPTEwnLFxuICAgIGltYWdlOiAnb2xsXzU2LnN2ZycsXG4gICAgbmFtZTogJ29sbF81NicsXG4gICAgc2NyYW1ibGU6IFwiKFJMJyBCTFInKSBVMiAoUkwnIEJMUicpVSdcIixcbiAgICBzb2x1dGlvbjogXCIoUkwnIEJMUicpIFUyIChSTCcgQkxSJylcIixcbiAgICB0eXBlOiAnRGFzaCcsXG4gICAgc3VidHlwZTogJ0xldHRlciBGJyxcbiAgICBzcXVhcmVzOiBbLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuICAgICAgWzEsIDAsIDFdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDFdXG4gICAgXSxcbiAgICBzdHJpa2VzOiBbWzAsIDEsIDBdLCBbMCwgMCwgMF0sIFswLCAwLCAwXSwgWzAsIDEsIDBdXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnT0xMJyxcbiAgICBpbWFnZTogJ29sbF81Ny5zdmcnLFxuICAgIG5hbWU6ICdvbGxfNTcnLFxuICAgIHNjcmFtYmxlOiBcIkYgUicgRicgUiBMJyBVIFIgVScgUicgTFwiLFxuICAgIHNvbHV0aW9uOiBcIihSVVInIFUnKSByIChSJyBVUlUnIHInKVwiLFxuICAgIHR5cGU6ICdMaW5lJyxcbiAgICBzdWJ0eXBlOiAnTGV0dGVyIEgnLFxuICAgIHNxdWFyZXM6IFsvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG4gICAgICBbMSwgMCwgMV0sXG4gICAgICBbMSwgMSwgMV0sXG4gICAgICBbMSwgMCwgMV1cbiAgICBdLFxuICAgIHN0cmlrZXM6IFtbMCwgMSwgMF0sIFswLCAwLCAwXSwgWzAsIDEsIDBdLCBbMCwgMCwgMF1dXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBQTExzOiBhbGdvcml0aG1bXSA9IFtcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMS5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMScsXG4gICAgc2NyYW1ibGU6IFwieCcgKFUgTCcgVSBSMiBVJykgKEwgVSBSMiBVMilcIixcbiAgICBzb2x1dGlvbjogXCJ4JyAoUicgRCBSJykgVTIgKFIgRCcgUicgVTIgUjIpXCIsXG4gICAgdHlwZTogJ0EnLFxuICAgIHN1YnR5cGU6ICdBJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtbeyB4OiAwLCB5OiAwIH0sIHsgeDogMiwgeTogMCB9LCB7IHg6IDIsIHk6IDIgfV1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzIuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzInLFxuICAgIHNjcmFtYmxlOiBcIngnIChVJyBSIFUnIEwyVSkgKFInIFUnIEwyIFUyKVwiLFxuICAgIHNvbHV0aW9uOiBcIngnIChMIEQnIEwpIFUyIChMJyBEIEwpIFUyIEwyXCIsXG4gICAgdHlwZTogJ0EnLFxuICAgIHN1YnR5cGU6ICdBJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtbeyB4OiAwLCB5OiAwIH0sIHsgeDogMCwgeTogMiB9LCB7IHg6IDIsIHk6IDAgfV1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzMuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzMnLFxuICAgIHNjcmFtYmxlOiBcIngnIChSIFUnIFInIEQgUiBVIFInIEQnKSAoUiBVIFInIEQgUiBVJyBSJyBEJylcIixcbiAgICBzb2x1dGlvbjogXCJ4JyAoUiBVJyBSJyBEIFIgVSBSJyBEJykgKFIgVSBSJyBEIFIgVScgUicgRCcpXCIsXG4gICAgdHlwZTogJ0UnLFxuICAgIHN1YnR5cGU6ICdFJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtbeyB4OiAwLCB5OiAwIH0sIHsgeDogMCwgeTogMiB9XSwgW3sgeDogMiwgeTogMCB9LCB7IHg6IDIsIHk6IDIgfV1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzQuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzQnLFxuICAgIHNjcmFtYmxlOiBcIihSJyBVUlUnIFIyKSB5JyAoUicgVScgUlUpIChCUkInIFInIEIyVScpXCIsXG4gICAgc29sdXRpb246IFwiKFInIFVSVScgUjIpIHknIChSJyBVJyBSVSkgKEJSQicgUicgQjJVJylcIixcbiAgICB0eXBlOiAnRScsXG4gICAgc3VidHlwZTogJ0UnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1t7IHg6IDAsIHk6IDAgfSwgeyB4OiAyLCB5OiAwIH1dLCBbeyB4OiAwLCB5OiAxIH0sIHsgeDogMiwgeTogMSB9XV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfNS5zdmcnLFxuICAgIG5hbWU6ICdwbGxfNScsXG4gICAgc2NyYW1ibGU6IFwiKE0yIFUnKSAoTTIgVTIpIChNMiBVJykgTTJcIixcbiAgICBzb2x1dGlvbjogXCIoTTIgVScpIChNMiBVMikgKE0yIFUnKSBNMlwiLFxuICAgIHR5cGU6ICdIJyxcbiAgICBzdWJ0eXBlOiAnSCcsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbW3sgeDogMSwgeTogMCB9LCB7IHg6IDEsIHk6IDIgfV0sIFt7IHg6IDAsIHk6IDEgfSwgeyB4OiAyLCB5OiAxIH1dXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF82LnN2ZycsXG4gICAgbmFtZTogJ3BsbF82JyxcbiAgICBzY3JhbWJsZTogXCIoUicgVVInIFUnKSAoUicgVScpIChSJyBVIFIgVSBSMilcIixcbiAgICBzb2x1dGlvbjogXCIoUjIgVScpIChSJyBVJyBSVSkgKFIgVSBSIFUnIFIpXCIsXG4gICAgdHlwZTogJ1UnLFxuICAgIHN1YnR5cGU6ICdVJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtbeyB4OiAwLCB5OiAxIH0sIHsgeDogMiwgeTogMSB9LCB7IHg6IDEsIHk6IDAgfV1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzcuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzcnLFxuICAgIHNjcmFtYmxlOiBcIihSMiBVJykgKFInIFUnIFJVKSAoUiBVIFIgVScgUilcIixcbiAgICBzb2x1dGlvbjogXCIoUicgVVInIFUnKSAoUicgVScpIChSJyBVIFIgVSBSMilcIixcbiAgICB0eXBlOiAnVScsXG4gICAgc3VidHlwZTogJ1UnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1t7IHg6IDAsIHk6IDEgfSwgeyB4OiAxLCB5OiAwIH0sIHsgeDogMiwgeTogMSB9XV1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfOC5zdmcnLFxuICAgIG5hbWU6ICdwbGxfOCcsXG4gICAgc2NyYW1ibGU6IFwiTCBVJyBSJyBVTCcgVTIgUiBVJyBSJyBVMiBSIHgyXCIsXG4gICAgc29sdXRpb246IFwiQjIgKFInIFUnIFIpIEIyIChMJyBEIEwnIEQnKSBMMlwiLFxuICAgIHR5cGU6ICdKJyxcbiAgICBzdWJ0eXBlOiAnSicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbW3sgeDogMCwgeTogMCB9LCB7IHg6IDAsIHk6IDIgfV0sIFt7IHg6IDAsIHk6IDEgfSwgeyB4OiAxLCB5OiAyIH1dXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF85LnN2ZycsXG4gICAgbmFtZTogJ3BsbF85JyxcbiAgICBzY3JhbWJsZTogXCIoUicgVSBMIFUnIFIpIChVMiBMJyBVIEwgVTIgTCcpIHgyXCIsXG4gICAgc29sdXRpb246IFwiQjIgKEwgVSBMJykgQjIgKFIgRCcgUiBEKSBSMlwiLFxuICAgIHR5cGU6ICdKJyxcbiAgICBzdWJ0eXBlOiAnSicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbW3sgeDogMiwgeTogMCB9LCB7IHg6IDIsIHk6IDIgfV0sIFt7IHg6IDIsIHk6IDEgfSwgeyB4OiAxLCB5OiAyIH1dXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xMC5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTAnLFxuICAgIHNjcmFtYmxlOiBcIihSIFUgUicgVScpIChSJyBGIFIyIFUnKSAoUicgVScgUiBVIFInIEYnKVwiLFxuICAgIHNvbHV0aW9uOiBcIihSIFUgUicgVScpIChSJyBGIFIyIFUnKSAoUicgVScgUiBVIFInIEYnKVwiLFxuICAgIHR5cGU6ICdUJyxcbiAgICBzdWJ0eXBlOiAnVCcsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbW3sgeDogMiwgeTogMCB9LCB7IHg6IDIsIHk6IDIgfV0sIFt7IHg6IDAsIHk6IDEgfSwgeyB4OiAyLCB5OiAxIH1dXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xMS5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTEnLFxuICAgIHNjcmFtYmxlOiBcIihMJyBVIEwnIFUnKSB5JyhSJyBGJykgKFIyIFUnIFInIFUgUicgRiBSIEYpIHlcIixcbiAgICBzb2x1dGlvbjogXCIoTCcgVSBMJyBVJykgeScoUicgRicpIChSMiBVJyBSJyBVIFInIEYgUiBGKVwiLFxuICAgIHR5cGU6ICdWJyxcbiAgICBzdWJ0eXBlOiAnVicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbW3sgeDogMCwgeTogMCB9LCB7IHg6IDIsIHk6IDIgfV0sIFt7IHg6IDAsIHk6IDEgfSwgeyB4OiAxLCB5OiAyIH1dXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xMi5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTInLFxuICAgIHNjcmFtYmxlOiBcIihMIFUyIEwnIFUyKSAoTCBGJyBMJyBVJyBMVSkgKEwgRiBMMiBVKVwiLFxuICAgIHNvbHV0aW9uOiBcIihMIFUyIEwnIFUyKSAoTCBGJyBMJyBVJyBMVSkgKEwgRiBMMiBVKVwiLFxuICAgIHR5cGU6ICdSJyxcbiAgICBzdWJ0eXBlOiAnUicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbW3sgeDogMCwgeTogMCB9LCB7IHg6IDIsIHk6IDAgfV0sIFt7IHg6IDAsIHk6IDEgfSwgeyB4OiAxLCB5OiAyIH1dXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xMy5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTMnLFxuICAgIHNjcmFtYmxlOiBcIihSJyBVMiBSIFUyKSAoUicgRiBSIFUgUicgVScpIChSJyBGJyBSMiBVJylcIixcbiAgICBzb2x1dGlvbjogXCIoUicgVTIgUiBVMikgKFInIEYgUiBVIFInIFUnKSAoUicgRicgUjIgVScpXCIsXG4gICAgdHlwZTogJ1InLFxuICAgIHN1YnR5cGU6ICdSJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtbeyB4OiAwLCB5OiAwIH0sIHsgeDogMiwgeTogMCB9XSwgW3sgeDogMiwgeTogMSB9LCB7IHg6IDEsIHk6IDIgfV1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzE0LnN2ZycsXG4gICAgbmFtZTogJ3BsbF8xNCcsXG4gICAgc2NyYW1ibGU6IFwiKEwgVSBMJyBCMikgeicgKFInIFUgTCcgVScgTCkgKFUnIFIgQjIpIHpcIixcbiAgICBzb2x1dGlvbjogXCJ6IHgnIChVMiByJyBVIFInIFUgUiBVJyByIFUyKSB5IChMIEYnIEwnKSB4XCIsXG4gICAgdHlwZTogJ0cnLFxuICAgIHN1YnR5cGU6ICdHJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFt7IHg6IDEsIHk6IDAgfSwgeyB4OiAyLCB5OiAxIH0sIHsgeDogMSwgeTogMiB9XSxcbiAgICAgIFt7IHg6IDIsIHk6IDAgfSwgeyB4OiAwLCB5OiAyIH0sIHsgeDogMiwgeTogMiB9XVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMTUuc3ZnJyxcbiAgICBuYW1lOiAncGxsXzE1JyxcbiAgICBzY3JhbWJsZTogXCIoUicgVScgUiBCMikgeiAoTCBVJyBSIFUgUicpIChVIHInIFUyKSB6JyB4XCIsXG4gICAgc29sdXRpb246IFwieicgeCcgKFUyIGwgVScgTFUnIEwnIFUgbCcgVTIpIHknIChSJyBGIFIpIHhcIixcbiAgICB0eXBlOiAnRycsXG4gICAgc3VidHlwZTogJ0cnLFxuICAgIHNxdWFyZXM6IHNxdXJlc0Z1bGwsXG4gICAgc3RyaWtlczogc3Jpa2VzTm9uZSxcbiAgICBsaW5lczogW1xuICAgICAgW3sgeDogMCwgeTogMCB9LCB7IHg6IDIsIHk6IDIgfSwgeyB4OiAwLCB5OiAyIH1dLFxuICAgICAgW3sgeDogMSwgeTogMCB9LCB7IHg6IDAsIHk6IDEgfSwgeyB4OiAxLCB5OiAyIH1dXG4gICAgXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8xNi5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMTYnLFxuICAgIHNjcmFtYmxlOiBcInonIChVMiBsIFUnIExVJyBMJyBVIGwnIFUyKSB5JyAoUicgRiBSKSB4XCIsXG4gICAgc29sdXRpb246IFwiKFInIFUnIFIgQjIpIHogKEwgVScgUiBVIFInKSAoVSByJyBVMikgeicgeFwiLFxuICAgIHR5cGU6ICdHJyxcbiAgICBzdWJ0eXBlOiAnRycsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbXG4gICAgICBbeyB4OiAwLCB5OiAwIH0sIHsgeDogMCwgeTogMiB9LCB7IHg6IDIsIHk6IDIgfV0sXG4gICAgICBbeyB4OiAxLCB5OiAwIH0sIHsgeDogMSwgeTogMiB9LCB7IHg6IDAsIHk6IDEgfV1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzE3LnN2ZycsXG4gICAgbmFtZTogJ3BsbF8xNycsXG4gICAgc2NyYW1ibGU6IFwieiAoVTIgcicgVSBSJyBVIFIgVScgciBVMikgeSAoTCBGJyBMJykgeFwiLFxuICAgIHNvbHV0aW9uOiBcIihMIFUgTCcgQjIpIHonIChSJyBVIEwnIFUnIEwpIChVJyBSIEIyKSB6XCIsXG4gICAgdHlwZTogJ0cnLFxuICAgIHN1YnR5cGU6ICdHJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtcbiAgICAgIFt7IHg6IDIsIHk6IDAgfSwgeyB4OiAyLCB5OiAyIH0sIHsgeDogMCwgeTogMiB9XSxcbiAgICAgIFt7IHg6IDEsIHk6IDAgfSwgeyB4OiAxLCB5OiAyIH0sIHsgeDogMiwgeTogMSB9XVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICBjYXRlZ29yeTogJ1BMTCcsXG4gICAgaW1hZ2U6ICdwbGxfMTguc3ZnJyxcbiAgICBuYW1lOiAncGxsXzE4JyxcbiAgICBzY3JhbWJsZTogXCIoVSBSJyBVJyBSIFUnKSAoUiBVIFIgVScgUicgVSkgKFIgVSBSMiBVJyBSJyBVKVwiLFxuICAgIHNvbHV0aW9uOiBcIihVIFInIFUnIFIgVScpIChSIFUgUiBVJyBSJyBVKSAoUiBVIFIyIFUnIFInIFUpXCIsXG4gICAgdHlwZTogJ1onLFxuICAgIHN1YnR5cGU6ICdaJyxcbiAgICBzcXVhcmVzOiBzcXVyZXNGdWxsLFxuICAgIHN0cmlrZXM6IHNyaWtlc05vbmUsXG4gICAgbGluZXM6IFtbeyB4OiAxLCB5OiAwIH0sIHsgeDogMCwgeTogMSB9XSwgW3sgeDogMiwgeTogMSB9LCB7IHg6IDEsIHk6IDIgfV1dXG4gIH0sXG4gIHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2F0ZWdvcnk6ICdQTEwnLFxuICAgIGltYWdlOiAncGxsXzE5LnN2ZycsXG4gICAgbmFtZTogJ3BsbF8xOScsXG4gICAgc2NyYW1ibGU6IFwiTCBVJyBSIFUyIEwnIFUgUicpIChMIFUnIFIgVTIgTCcgVSBSJykgVSdcIixcbiAgICBzb2x1dGlvbjogXCJMIFUnIFIgVTIgTCcgVSBSJykgKEwgVScgUiBVMiBMJyBVIFInKSBVJ1wiLFxuICAgIHR5cGU6ICdOJyxcbiAgICBzdWJ0eXBlOiAnTicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbW3sgeDogMiwgeTogMCB9LCB7IHg6IDAsIHk6IDIgfV0sIFt7IHg6IDAsIHk6IDEgfSwgeyB4OiAyLCB5OiAxIH1dXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8yMC5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMjAnLFxuICAgIHNjcmFtYmxlOiBcIihSJyBVTCcgVTIgUiBVJyBMKSAoUicgVUwnIFUyIFIgVScgTCkgVVwiLFxuICAgIHNvbHV0aW9uOiBcIihSJyBVTCcgVTIgUiBVJyBMKSAoUicgVUwnIFUyIFIgVScgTCkgVVwiLFxuICAgIHR5cGU6ICdOJyxcbiAgICBzdWJ0eXBlOiAnTicsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbW3sgeDogMCwgeTogMCB9LCB7IHg6IDIsIHk6IDIgfV0sIFt7IHg6IDAsIHk6IDEgfSwgeyB4OiAyLCB5OiAxIH1dXVxuICB9LFxuICB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIGNhdGVnb3J5OiAnUExMJyxcbiAgICBpbWFnZTogJ3BsbF8yMS5zdmcnLFxuICAgIG5hbWU6ICdwbGxfMjEnLFxuICAgIHNjcmFtYmxlOiBcIihGIFIgVScgUicgVScgUiBVIFInIEYnKSAoUiBVIFInIFUnKSAoUicgRiBSIEYnKVwiLFxuICAgIHNvbHV0aW9uOiBcIihGIFIgVScgUicgVScgUiBVIFInIEYnKSAoUiBVIFInIFUnKSAoUicgRiBSIEYnKVwiLFxuICAgIHR5cGU6ICdZJyxcbiAgICBzdWJ0eXBlOiAnWScsXG4gICAgc3F1YXJlczogc3F1cmVzRnVsbCxcbiAgICBzdHJpa2VzOiBzcmlrZXNOb25lLFxuICAgIGxpbmVzOiBbW3sgeDogMCwgeTogMCB9LCB7IHg6IDIsIHk6IDIgfV0sIFt7IHg6IDEsIHk6IDAgfSwgeyB4OiAwLCB5OiAxIH1dXVxuICB9XG5dO1xuIiwiaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBBbGdvcml0aG1zIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvYWxnb3JpdGhtcyc7XG5cbi8vIFRPRE8gT25seSBwdWJsaXNoIGFsZ29yaXRobXMgdGhhdCBhcmUgcHVibGljIG9yIGJlbG9uZyB0byB0aGUgY3VycmVudCB1c2VyXG5NZXRlb3IucHVibGlzaCgnYWxnb3JpdGhtcycsICgpID0+IEFsZ29yaXRobXMuZmluZCgpKTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgUmVzdWx0cyB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL3Jlc3VsdHMnO1xuXG4vLyBUT0RPIE9ubHkgcHVibGlzaCBhbGdvcml0aG1zIHRoYXQgYXJlIHB1YmxpYyBvciBiZWxvbmcgdG8gdGhlIGN1cnJlbnQgdXNlclxuTWV0ZW9yLnB1Ymxpc2goJ3Jlc3VsdHMnLCAoKSA9PiBSZXN1bHRzLmZpbmQoKSk7XG4iLCJpbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcblxuaW1wb3J0IHsgY3JlYXRlQWxnb3JpdGhtcyB9IGZyb20gJy4vaW1wb3J0cy9hbGdvcml0aG1zQ3JlYXRpb24nO1xuXG5NZXRlb3Iuc3RhcnR1cCgoKSA9PiB7XG4gIC8vVW5pQ29uZmlnLnByaXZhdGUucnVuT25jZSgnY3JlYXRlQWxnb3JpdGhtcycsIGNyZWF0ZUFsZ29yaXRobXMpO1xuICBjcmVhdGVBbGdvcml0aG1zKCk7XG59KTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuaW1wb3J0IHsgY2hlY2sgfSBmcm9tICdtZXRlb3IvY2hlY2snO1xuXG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJztcblxuZXhwb3J0IGNvbnN0IEFsZ29yaXRobXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbignYWxnb3JpdGhtcycpO1xuXG5NZXRlb3IubWV0aG9kcyh7XG4gICdhbGdvcml0aG1zLnRvZ2dsZUFjdGl2ZSc6IChhbGdJZCwgYWN0aXZlKSA9PiB7XG4gICAgY2hlY2soYWN0aXZlLCBCb29sZWFuKTtcbiAgICBjaGVjayhhbGdJZCwgU3RyaW5nKTtcblxuICAgIEFsZ29yaXRobXMudXBkYXRlKGFsZ0lkLCB7ICRzZXQ6IHsgYWN0aXZlIH0gfSk7XG4gIH0sXG4gICdhbGdvcml0aG1zLmFjdGl2YXRlQWxsJzogY2F0ZWdvcnkgPT4ge1xuICAgIEFsZ29yaXRobXMudXBkYXRlKFxuICAgICAgeyBjYXRlZ29yeSB9LFxuICAgICAgeyAkc2V0OiB7IGFjdGl2ZTogdHJ1ZSB9IH0sXG4gICAgICB7IG11bHRpOiB0cnVlIH1cbiAgICApO1xuICB9LFxuICAnYWxnb3JpdGhtcy5kZWFjdGl2YXRlQWxsJzogY2F0ZWdvcnkgPT4ge1xuICAgIEFsZ29yaXRobXMudXBkYXRlKFxuICAgICAgeyBjYXRlZ29yeSB9LFxuICAgICAgeyAkc2V0OiB7IGFjdGl2ZTogZmFsc2UgfSB9LFxuICAgICAgeyBtdWx0aTogdHJ1ZSB9XG4gICAgKTtcbiAgfSxcbiAgJ2FsZ29yaXRobXMuaW5zZXJ0JzogKHtcbiAgICBjYXRlZ29yeSxcbiAgICBpbWFnZSxcbiAgICBzY3JhbWJsZSxcbiAgICBzb2x1dGlvbixcbiAgICBzdWJ0eXBlLFxuICAgIHR5cGVcbiAgfSkgPT4ge1xuICAgIGV4cGVjdChjYXRlZ29yeSkudG8uYmUuYSgnc3RyaW5nJyk7XG4gICAgZXhwZWN0KGltYWdlKS50by5iZS5hKCdzdHJpbmcnKTtcbiAgICBleHBlY3Qoc2NyYW1ibGUpLnRvLmJlLmEoJ3N0cmluZycpO1xuICAgIGV4cGVjdChzb2x1dGlvbikudG8uYmUuYSgnc3RyaW5nJyk7XG4gICAgZXhwZWN0KHN1YnR5cGUpLnRvLmJlLmEoJ3N0cmluZycpO1xuICAgIGV4cGVjdCh0eXBlKS50by5iZS5hKCdzdHJpbmcnKTtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGUgdXNlciBpcyBsb2dnZWQgaW4gYmVmb3JlIGluc2VydGluZyBhIGFsZ29yaXRobVxuICAgIC8qIGlmICghIE1ldGVvci51c2VySWQoKSkge1xuICAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcignbm90LWF1dGhvcml6ZWQnKTtcbiAgICAgfSovXG5cbiAgICBjb25zdCBkb2MgPSB7XG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIGltYWdlLFxuICAgICAgc2NyYW1ibGUsXG4gICAgICBzb2x1dGlvbixcbiAgICAgIHN1YnR5cGUsXG4gICAgICB0eXBlXG4gICAgfTtcblxuICAgIEFsZ29yaXRobXMuaW5zZXJ0KGRvYyk7XG4gIH0sXG4gICdhbGdvcml0aG1zLnNlYXJjaCcodGV4dCkge1xuICAgIGNoZWNrKHRleHQsIFN0cmluZyk7XG5cbiAgICByZXR1cm4gQWxnb3JpdGhtcy5maW5kKCk7XG4gIH0sXG4gICdhbGdvcml0aG1zLnJlbW92ZScoYWxnb3JpdGhtSWQpIHtcbiAgICBjaGVjayhhbGdvcml0aG1JZCwgU3RyaW5nKTtcblxuICAgIC8qY29uc3QgYWxnb3JpdGhtID0gQWxnb3JpdGhtcy5maW5kT25lKGFsZ29yaXRobUlkKTtcbiAgICBpZiAoYWxnb3JpdGhtLnByaXZhdGUgJiYgYWxnb3JpdGhtLm93bmVyICE9PSBNZXRlb3IudXNlcklkKCkpIHtcbiAgICAgIC8vIElmIHRoZSBhbGdvcml0aG0gaXMgcHJpdmF0ZSwgbWFrZSBzdXJlIG9ubHkgdGhlIG93bmVyIGNhbiBkZWxldGUgaXRcbiAgICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdub3QtYXV0aG9yaXplZCcpO1xuICAgIH0qL1xuXG4gICAgQWxnb3JpdGhtcy5yZW1vdmUoYWxnb3JpdGhtSWQpO1xuICB9IC8qLFxuICAgICdhbGdvcml0aG1zLnNldENoZWNrZWQnKGFsZ29yaXRobUlkLCBzZXRDaGVja2VkKSB7XG4gICAgICAgIGNoZWNrKGFsZ29yaXRobUlkLCBTdHJpbmcpO1xuICAgICAgICBjaGVjayhzZXRDaGVja2VkLCBCb29sZWFuKTtcblxuICAgICAgICBjb25zdCBhbGdvcml0aG0gPSBBbGdvcml0aG1zLmZpbmRPbmUoYWxnb3JpdGhtSWQpO1xuICAgICAgICBpZiAoYWxnb3JpdGhtLnByaXZhdGUgJiYgYWxnb3JpdGhtLm93bmVyICE9PSBNZXRlb3IudXNlcklkKCkpIHtcbiAgICAgICAgICAgICAgLy8gSWYgdGhlIGFsZ29yaXRobSBpcyBwcml2YXRlLCBtYWtlIHN1cmUgb25seSB0aGUgb3duZXIgY2FuIGNoZWNrIGl0IG9mZlxuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcignbm90LWF1dGhvcml6ZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICBBbGdvcml0aG1zLnVwZGF0ZShhbGdvcml0aG1JZCwgeyAkc2V0OiB7IGNoZWNrZWQ6IHNldENoZWNrZWQgfSB9KTtcbiAgICB9LFxuICAgICdhbGdvcml0aG1zLnNldFByaXZhdGUnKGFsZ29yaXRobUlkLCBzZXRUb1ByaXZhdGUpIHtcbiAgICAgICAgY2hlY2soYWxnb3JpdGhtSWQsIFN0cmluZyk7XG4gICAgICAgIGNoZWNrKHNldFRvUHJpdmF0ZSwgQm9vbGVhbik7XG5cbiAgICAgICAgY29uc3QgYWxnb3JpdGhtID0gQWxnb3JpdGhtcy5maW5kT25lKGFsZ29yaXRobUlkKTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgb25seSB0aGUgYWxnb3JpdGhtIG93bmVyIGNhbiBtYWtlIGEgYWxnb3JpdGhtIHByaXZhdGVcbiAgICAgICAgaWYgKGFsZ29yaXRobS5vd25lciAhPT0gTWV0ZW9yLnVzZXJJZCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdub3QtYXV0aG9yaXplZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgQWxnb3JpdGhtcy51cGRhdGUoYWxnb3JpdGhtSWQsIHsgJHNldDogeyBwcml2YXRlOiBzZXRUb1ByaXZhdGUgfSB9KTtcbiAgICB9LCovXG59KTtcbiIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgTW9uZ28gfSBmcm9tICdtZXRlb3IvbW9uZ28nO1xuaW1wb3J0IHsgY2hlY2sgfSBmcm9tICdtZXRlb3IvY2hlY2snO1xuXG5leHBvcnQgY29uc3QgUmVzdWx0cyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCdyZXN1bHRzJyk7XG5cbk1ldGVvci5tZXRob2RzKHtcbiAgJ3Jlc3VsdHMuaW5zZXJ0JzogKHsgYWxnb3JpdGhtSWQsIGNhdGVnb3J5LCBzY3JhbWJsZSwgdGltZSB9KSA9PiB7XG4gICAgY2hlY2soY2F0ZWdvcnksIFN0cmluZyk7XG4gICAgY2hlY2sodGltZSwgTnVtYmVyKTtcblxuICAgIGlmIChjYXRlZ29yeSA9PT0gJ09MTCcgfHwgY2F0ZWdvcnkgPT09ICdQTEwnIHx8IGNhdGVnb3J5ID09PSAnM3gzeDMnKSB7XG4gICAgICBjaGVjayhzY3JhbWJsZSwgU3RyaW5nKTtcbiAgICB9XG5cbiAgICBpZiAoY2F0ZWdvcnkgPT09ICdPTEwnIHx8IGNhdGVnb3J5ID09PSAnUExMJykge1xuICAgICAgY2hlY2soYWxnb3JpdGhtSWQsIFN0cmluZyk7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbiBiZWZvcmUgaW5zZXJ0aW5nIGEgcmVzdWx0XG4gICAgLyogaWYgKCEgTWV0ZW9yLnVzZXJJZCgpKSB7XG4gICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ25vdC1hdXRob3JpemVkJyk7XG4gICAgIH0qL1xuXG4gICAgY29uc3QgZG9jID0ge1xuICAgICAgYWxnb3JpdGhtSWQsXG4gICAgICBjYXRlZ29yeSxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgIHNjcmFtYmxlLFxuICAgICAgdGltZVxuICAgIH07XG5cbiAgICBSZXN1bHRzLmluc2VydChkb2MpO1xuICB9LFxuICAncmVzdWx0cy5zZWFyY2gnOiB0ZXh0ID0+IHtcbiAgICBjaGVjayh0ZXh0LCBTdHJpbmcpO1xuXG4gICAgcmV0dXJuIFJlc3VsdHMuZmluZCgpO1xuICB9LFxuICAncmVzdWx0cy5yZW1vdmUnOiByZXN1bHRJZCA9PiB7XG4gICAgY2hlY2socmVzdWx0SWQsIFN0cmluZyk7XG5cbiAgICAvKmNvbnN0IHJlc3VsdCA9IFJlc3VsdHMuZmluZE9uZShyZXN1bHRJZCk7XG4gICAgIGlmIChyZXN1bHQucHJpdmF0ZSAmJiByZXN1bHQub3duZXIgIT09IE1ldGVvci51c2VySWQoKSkge1xuICAgICAvLyBJZiB0aGUgcmVzdWx0IGlzIHByaXZhdGUsIG1ha2Ugc3VyZSBvbmx5IHRoZSBvd25lciBjYW4gZGVsZXRlIGl0XG4gICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ25vdC1hdXRob3JpemVkJyk7XG4gICAgIH0qL1xuXG4gICAgUmVzdWx0cy5yZW1vdmUocmVzdWx0SWQpO1xuICB9XG59KTtcbiJdfQ==
