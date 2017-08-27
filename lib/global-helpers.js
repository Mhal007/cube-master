const allowedMoves = ["F", "F'", "F2", "B", "B'", "B2", "R", "R'", "R2", "L", "L'", "L2", "U", "U'", "U2", "D", "D'", "D2"];

export const getRandomScramble = (movesNr) => {
    let scramble = '';
    let random = -1;

    for (let i = 0; i < movesNr; i++) {
        const randomBefore = random;
        random = -1;

        while (random === -1 || random === randomBefore) {
            random = Math.floor(Math.random() * allowedMoves.length);
        }

        scramble += allowedMoves[random] + " ";
    }

    return scramble;
};