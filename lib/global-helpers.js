const allowedMoves = [
  'F',
  "F'",
  'F2',
  'B',
  "B'",
  'B2',
  'R',
  "R'",
  'R2',
  'L',
  "L'",
  'L2',
  'U',
  "U'",
  'U2',
  'D',
  "D'",
  'D2'
];

const getRandomMove = () =>
  allowedMoves[Math.floor(Math.random() * allowedMoves.length)];
const movesConflict = (moveA, moveB) =>
  moveA &&
  moveB &&
  moveA.split('').some(character => moveB.includes(character));

export const getRandomScramble = movesNr => {
  const moves = [];

  let move;
  let previousMove;
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
