const { createCanvas, registerFont, loadImage } = require('canvas');
const path = require('path');
const { mapRange } = require('./functions');

const _size = {
    width : 600,
    height : 400,
    yOffset : 20,
    xOffset : 30,
    img : '../../src/assets/images/shares/peoples-share-square.jpg'
  };

const createBaseCanvas = function() {
  const canvas = createCanvas(_size.width, _size.height);
  const ctx = canvas.getContext('2d');
  registerFont(path.resolve(__dirname, '../assets/Pavanam-Regular.ttf'), { family : 'Pavanam' });
  ctx.fillStyle = '#fff';
  return { canvas, ctx };
}

const addText = function(ctx, string, size, position, textAlign = 'left') {
  const fontString = `${size}px "Pavanam"`;
  ctx.font = fontString;
  ctx.textAlign = textAlign;
  ctx.fillText(string, position.x, position.y);
}

const drawLine = function(ctx, x, y, x2, y2, lineWidth = 1, color = '#fff') {
  const tempWidth = ctx.lineWidth;
  const tempStyle = ctx.strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.closePath();
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.lineWidth = tempWidth;
  ctx.strokeStyle = tempStyle;
}

const drawRectangle = function(ctx, { x, y, w, h, colour }) {
  const tempStyle = ctx.fillStyle;
  ctx.fillStyle = colour;
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = tempStyle;
}

const createPVPStatsCanvas = async function ({ name = '', matchResults = [], heading = '', rating = 1000, profIcons }) {

  const { canvas, ctx } = createBaseCanvas();

  const { xOffset, yOffset, width, height } = _size;

  const professionIcons = {};
  for (const [key, value] of Object.entries(profIcons)) {
    professionIcons[key] = await loadImage(value);
  }


  drawRectangle(ctx, { x : 0, y : 0, w : width, h : height, colour : '#747CF8' });

  const bottom = height - 35;
  const topY = 100;
  const graphWidth = width - xOffset;

  // DEBUG
  // drawLine(ctx, xOffset, 0, xOffset, height, 1, '#fff4');
  // drawLine(ctx, width - xOffset, 0, width - xOffset, height, 1, '#fff4');
  // drawLine(ctx, 0, yOffset, width, yOffset, 1, '#fff4');
  // drawLine(ctx, 0, height - yOffset, width, height - yOffset, 1, '#fff4');

  // HEADER TEXT
  addText(ctx, name, 18, { x : xOffset, y : yOffset + 24 });
  addText(ctx, heading, 25, { x : width / 2, y : yOffset + 24 + 30 }, 'center');
  addText(ctx, 'last ten games', 18, { x : width / 2, y : bottom + 24 }, 'center');

  ctx.rotate(-Math.PI / 2);
  addText(
    ctx,
    'rating',
    18,
    {
      // x : -(bottom - topY) + topY/2,
      x : -((bottom - topY) / 2 + topY),
      y : xOffset - 10
    },
    'center'
  );
  ctx.rotate(Math.PI / 2);



  // Graph Lines
  drawLine(ctx, xOffset, bottom, graphWidth, bottom, 2);
  drawLine(ctx, xOffset, topY, xOffset, bottom, 2);




  // so start with rating
  // go backwards through the matches
  // mark highest / lowest
  // then scale accordingly to that range

  // rating = 1324
  //

  let highest = rating;
  let lowest = rating;
  let trackedRating = rating;
  const ratings = [];
  matchResults.reverse().forEach(({ rating_change, profession }, i) => {
    ratings[i] =  {
      trackedRating,
      rating_change,
      profession
    };
    trackedRating -= rating_change;
    if (trackedRating > highest) highest = trackedRating;
    else if (trackedRating < lowest) lowest = trackedRating;
  });

  const typedRatings = ratings.reverse().map((match, i) => {
    if (i >= matchResults.length - 1 || i === 0){
      return { ...match, type : 'line' };
    }

    const previous = ratings[i - 1].trackedRating;
    const current = match.trackedRating;
    const next = ratings[i + 1].trackedRating;

    let type;

    if (current > previous && current < next) type = 'line'; // straight up
    else if (previous < current && current > next) type = 'peak'; // peak
    else if (previous > current && current < previous) type = 'valley'; // valley
    else type = 'line'; // straight down

    return {
      ...match,
      type
    }
  });

  const xBuffer = (graphWidth - 15) / ratings.length;

  const getRatingPosition = function(rating, index) {
    const adjustedRating = mapRange(rating, lowest, highest, bottom - 30, topY + 10);
    return {
      x : (xOffset + 30) + (index * xBuffer),
      y : adjustedRating + 15
    }
  };

  const xCurve = 15;
  const yCurve = 0;


  const positions = typedRatings.map(({ trackedRating : rating, rating_change : rChange, type, profession }, i) => {

    const { x : x1, y : y1 } = getRatingPosition(rating, i);

    // ctx.beginPath();
    // ctx.arc(x1, y1, 5, 0, 2 * Math.PI);
    // ctx.fill();

    if (i < typedRatings.length - 1) {
      const { x : x2, y : y2 } = getRatingPosition(typedRatings[i + 1].trackedRating, i + 1);

      const controlPoint1 = { x: x1 + (x2 - x1) / 2 - 10, y: y1 + (y2 - y1) / 2 - 10 };
      const controlPoint2 = { x: x1 + (x2 - x1) / 2 + 10, y: y1 + (y2 - y1) / 2 + 10 };


      switch (type) {
        default:
        case 'line' :
          controlPoint1.x = x1;
          controlPoint1.y = y1;
          controlPoint2.x = x2;
          controlPoint2.y = y2;
          break;
        case 'valley' :
          controlPoint1.x = x1 + xCurve;
          controlPoint1.y = y1 + yCurve;
          break;
        case 'peak' :
          controlPoint1.x = x1 + xCurve;
          controlPoint1.y = y1 - yCurve;
          break;
      }

      const nextType = typedRatings[i + 1].type;
      const isNextValley = nextType === 'valley';

      if (nextType === 'peak' || isNextValley) {
        controlPoint2.x = x2 - xCurve;
        controlPoint2.y = y2 + (isNextValley ? yCurve : -yCurve);
      }
      if (nextType === 'line') {
        controlPoint2.x = x2;
        controlPoint2.y = y2;
      }

      // ctx.fillStyle = 'blue';
      // ctx.beginPath();
      // ctx.arc(controlPoint1.x, controlPoint1.y, 2, 0, 2 * Math.PI);
      // ctx.fill();
      // ctx.fillStyle = 'red';
      // ctx.beginPath();
      // ctx.arc(controlPoint2.x, controlPoint2.y, 2, 0, 2 * Math.PI);
      // ctx.fill();
      // ctx.fillStyle = '#fff';

      ctx.strokeStyle = '#fff';
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineWidth = 2;
      ctx.bezierCurveTo(
        controlPoint1.x, controlPoint1.y ,
        controlPoint2.x, controlPoint2.y,
        x2, y2
      );
      ctx.stroke();
    }
    return { x1, y1, profession };
  });

  positions.forEach(({ x1 : x, y1 : y, profession }) => {
    const icon = professionIcons[profession];
    ctx.drawImage(icon, x - icon.width/2, y - icon.height/2);
  })


  const change = matchResults.reduce((total, match) => total + match.rating_change, 0);
  addText(ctx, `${rating} (${change >=0 ? '+' : '-'}${change})`, 18, { x : width - xOffset, y : yOffset + 20 }, 'right');

  return canvas;
}

module.exports =  {
  createPVPStatsCanvas
};
