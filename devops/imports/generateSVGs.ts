import * as fs from 'fs';
import { algorithm, line, OLLs, PLLs, point } from '../../server/imports/const';

type strikeFormatted = {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
};

type squareFormatted = strikeFormatted & {
  stroke: string;
  strokeWidth: number;
};

type marker = {
  angle: number;
  margin: number;
  svgPoints: string;
  x: number;
  y: number;
};

const filesPath: string = 'public/images/';

const getSVGcontent = (
  { squares, strikes, lines = [] }: algorithm,
  squareLength: number,
  spacingLength: number = squareLength / 10
): string => {
  const cubeSize = squares[0].length;

  const colorPrimary = '#ffff45';
  const colorSecondary = 'gray';
  const colorBackground = 'black';
  const colorLine = 'cornflowerblue';
  const colorLineTip = '#FF5722';

  const squaresFormatted: squareFormatted[][] = squares.map(
    (row: number[], rowIndex: number) =>
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

  const getStrikePosition = (index: number): number => {
    if (index === 0) {
      return 0.5 * spacingLength;
    }

    if (index - 1 === cubeSize) {
      return 1.5 * spacingLength + (index - 1) * (spacingLength + squareLength);
    }

    return spacingLength * 2 + (index - 1) * (spacingLength + squareLength);
  };

  const strikesTop: strikeFormatted[] = strikes[0]
    ? strikes[0].map((strike: number, strikeIndex: number) => ({
        x: getStrikePosition(strikeIndex + 1),
        y: getStrikePosition(0),
        width: squareLength,
        height: spacingLength,
        fill: strike ? colorPrimary : ''
      }))
    : [];

  const strikesRight: strikeFormatted[] = strikes[1]
    ? strikes[1].map((strike: number, strikeIndex: number) => ({
        x: getStrikePosition(cubeSize + 1),
        y: getStrikePosition(strikeIndex + 1),
        width: spacingLength,
        height: squareLength,
        fill: strike ? colorPrimary : ''
      }))
    : [];

  const strikesBottom: strikeFormatted[] = strikes[2]
    ? strikes[2].map((strike: number, strikeIndex: number) => ({
        x: getStrikePosition(strikeIndex + 1),
        y: getStrikePosition(cubeSize + 1),
        width: squareLength,
        height: spacingLength,
        fill: strike ? colorPrimary : ''
      }))
    : [];

  const strikesLeft: strikeFormatted[] = strikes[3]
    ? strikes[3].map((strike: number, strikeIndex: number) => ({
        x: getStrikePosition(0),
        y: getStrikePosition(strikeIndex + 1),
        width: spacingLength,
        height: squareLength,
        fill: strike ? colorPrimary : ''
      }))
    : [];

  const strikesFormatted: strikeFormatted[][] = [
    strikesTop,
    strikesRight,
    strikesBottom,
    strikesLeft
  ];

  const getSquareCenter = ({ x: squareX, y: squareY }: point) => {
    const x =
      2 * spacingLength +
      0.5 * squareLength +
      (spacingLength + squareLength) * squareX;
    const y =
      2 * spacingLength +
      0.5 * squareLength +
      (spacingLength + squareLength) * squareY;

    return { x, y };
  };

  const getSVGPoints = (line: line): string =>
    line.reduce((points, point) => `${points} ${point.x},${point.y}`, '') +
    ` ${line[0].x},${line[0].y}`;

  const lineToMarker = (pointA: point, pointB: point): marker => {
    const pointC = {
      x: pointA.x + Math.abs(pointB.x - pointA.x),
      y: pointA.y
    };

    const rotationAngle =
      (Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) * 180) / Math.PI -
      Math.atan2(pointC.y - pointA.y, pointC.x - pointA.x);

    const leftBackPoint = {
      x: pointB.x - 0.3 * squareLength,
      y: pointB.y - 0.3 * squareLength
    };

    const rightBackPoint = {
      x: pointB.x - 0.3 * squareLength,
      y: pointB.y + 0.3 * squareLength
    };

    const margin = 0.2 * squareLength;

    // TODO getSVGPoints returns one point more than needed
    return {
      svgPoints: getSVGPoints([leftBackPoint, pointB, rightBackPoint]),
      angle: rotationAngle,
      x: pointB.x,
      y: pointB.y,
      margin
    };
  };

  const getMarkers = (line: line): marker[] => {
    const markers = [];

    for (let i = 0; i < line.length; i++) {
      if (i > 0) {
        markers.push(lineToMarker(line[i - 1], line[i]));
      }
    }

    markers.push(lineToMarker(line[line.length - 1], line[0]));

    return markers;
  };

  const linesFormatted: line[] = lines.map(line =>
    line.map(point => getSquareCenter(point))
  );

  const boardSize: number =
    spacingLength * 3 + cubeSize * (squareLength + spacingLength);

  const content: string = `
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
      
      <!-- LINES -->
      ${linesFormatted.map(
        line => `
          <polyline 
          points="${getSVGPoints(line)}"
          fill="none" 
          stroke="${colorLine}"
          stroke-width="3"
          />
        `
      )}
      
      <!-- MARKERS -->
      ${linesFormatted
        .map((line: line) =>
          getMarkers(line)
            .map(
              ({ angle, margin, svgPoints, x, y }: marker) => `
                <polygon 
                  points="${svgPoints}"
                  fill="${colorLineTip}" 
                  transform="rotate(${angle} ${x} ${y}) translate(${margin})"
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
  fs.writeFile(`${path}${name}${extension}`, content, err => {
    if (err) {
      throw err;
    }

    console.info(`File ${name} created successfully`);
  });
};

/* write files */
OLLs.forEach((scramble: algorithm) => {
  const content = getSVGcontent(scramble, 25, 3);
  writeFile(filesPath, scramble.name, '.svg', content);
});

PLLs.filter((PLL: algorithm) => PLL.lines && PLL.lines.length).forEach(
  // TODO remove filter when done
  (scramble: algorithm) => {
    const content = getSVGcontent(scramble, 25, 3);
    writeFile(filesPath, scramble.name, '.svg', content);
  }
);
