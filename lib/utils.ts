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
] as const;

const getRandomMove = (): typeof allowedMoves[number] =>
  allowedMoves[Math.floor(Math.random() * allowedMoves.length)];

const movesConflict = (moveA?: string, moveB?: string): boolean =>
  moveA && moveB
    ? moveA.split('').some(character => moveB.includes(character))
    : false;

export const getRandomScramble = (movesNr: number): string => {
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

export const getAverage = (results?: number[]): number => {
  if (!results || results.length === 0) {
    return 0;
  }

  return Math.round(
    results.reduce((sum, result) => sum + result, 0) / results.length
  );
};
