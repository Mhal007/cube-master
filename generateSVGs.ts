import * as fs from 'fs';
// @ts-ignore
import { OLLs } from './server/const';

// const testCases= [{
//   name: 'OLL_test',
//   squares: [
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1],
//   ],
//   strikes: [
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1],
//   ]
// }, {
//   name: 'OLL_test2',
//   squares: [
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//   ],
//   strikes: [
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//   ]
// };

const filesPath = 'public/images/';

const getSVGcontent = (
  { squares, strikes }: { squares?: any; strikes?: any }, // TODO change when done
  squareLength,
  spacingLength = squareLength / 10
) => {
  const cubeSize = squares[0].length;

  const colorPrimary = '#ffff45';
  const colorSecondary = 'gray';
  const colorBackground = 'black';

  const squaresFormatted = squares.map((row, rowIndex) =>
    row.map((face, columnIndex) => ({
      x: spacingLength * 2 + columnIndex * (squareLength + spacingLength),
      y: spacingLength * 2 + rowIndex * (squareLength + spacingLength),
      width: squareLength,
      height: squareLength,
      fill: face ? colorPrimary : colorSecondary,
      stroke: colorBackground,
      strokeWidth: spacingLength
    }))
  );

  const getStrikePosition = index => {
    if (index === 0) {
      return 0.5 * spacingLength;
    }

    if (index - 1 === cubeSize) {
      return 1.5 * spacingLength + (index - 1) * (spacingLength + squareLength);
    }

    return spacingLength * 2 + (index - 1) * (spacingLength + squareLength);
  };

  const strikesTop: any[] = strikes[0].map((strike, strikeIndex) => ({
    x: getStrikePosition(strikeIndex + 1),
    y: getStrikePosition(0),
    width: squareLength,
    height: spacingLength,
    fill: strike && colorPrimary
  }));

  const strikesRight: any[] = strikes[1].map((strike, strikeIndex) => ({
    x: getStrikePosition(cubeSize + 1),
    y: getStrikePosition(strikeIndex + 1),
    width: spacingLength,
    height: squareLength,
    fill: strike && colorPrimary
  }));

  const strikesBottom: any[] = strikes[2].map((strike, strikeIndex) => ({
    x: getStrikePosition(strikeIndex + 1),
    y: getStrikePosition(cubeSize + 1),
    width: squareLength,
    height: spacingLength,
    fill: strike && colorPrimary
  }));

  const strikesLeft: any[] = strikes[3].map((strike, strikeIndex) => ({
    x: getStrikePosition(0),
    y: getStrikePosition(strikeIndex + 1),
    width: spacingLength,
    height: squareLength,
    fill: strike && colorPrimary
  }));

  const strikesFormatted = [
    strikesTop,
    strikesRight,
    strikesBottom,
    strikesLeft
  ];

  const boardSize =
    spacingLength * 3 + cubeSize * (squareLength + spacingLength);

  const content = `
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="${boardSize}"
      height="${boardSize}"
    >
      <!-- BACKGROUND -->
      <rect 
        width="${boardSize}"
        height="${boardSize}"
        fill="${colorBackground}"  
      />
      
      <!-- SQUARES -->
      ${squaresFormatted
        .map(row =>
          row
            .map(
              square => `
                <rect 
                  x="${square.x}" 
                  y="${square.y}" 
                  width="${square.width}"
                  height="${square.height}"
                  fill="${square.fill}"
                />
              `
            )
            .join('')
        )
        .join('')}
      
          
      <!-- STRIKES -->
      ${strikesFormatted
        .map(strikeGroup =>
          strikeGroup
            .filter(strike => strike.fill)
            .map(
              strike => `
                <rect 
                  x="${strike.x}" 
                  y="${strike.y}" 
                  width="${strike.width}"
                  height="${strike.height}"
                  fill="${strike.fill}"
                />
              `
            )
            .join('')
        )
        .join('')}
    </svg>
  `;

  return content;
};

const writeFile = (
  path: string,
  name: string,
  extension: string,
  content: string
) => {
  return new Promise(resolve => {
    fs.writeFile(`${path}${name}${extension}`, content, err => {
      if (err) {
        throw err;
      }

      resolve(`File ${name} created successfully`);
    });
  });
};

/* write files */
OLLs.filter(OLL => OLL.squares).forEach(async scramble => {
  const content = getSVGcontent(scramble, 25, 3);
  const result = await writeFile(filesPath, scramble.name, '.svg', content);
  console.info(result);
});
