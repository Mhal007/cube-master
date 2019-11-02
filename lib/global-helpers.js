"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomScramble = void 0;
var allowedMoves = ['F', "F'", 'F2', 'B', "B'", 'B2', 'R', "R'", 'R2', 'L', "L'", 'L2', 'U', "U'", 'U2', 'D', "D'", 'D2'];

var getRandomMove = function getRandomMove() {
  return allowedMoves[Math.floor(Math.random() * allowedMoves.length)];
};

var movesConflict = function movesConflict(moveA, moveB) {
  return moveA && moveB && moveA.split('').some(function (character) {
    return moveB.includes(character);
  });
};

var getRandomScramble = function getRandomScramble(movesNr) {
  var moves = [];
  var move;
  var previousMove;

  for (var i = 0; i < movesNr; i++) {
    move = getRandomMove();

    while (movesConflict(move, previousMove)) {
      move = getRandomMove();
    }

    previousMove = move;
    moves.push(move);
  }

  return moves.join(' ');
};

exports.getRandomScramble = getRandomScramble;