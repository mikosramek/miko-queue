const { createCanvas, registerFont, loadImage } = require('canvas');
const path = require('path');
const { mapRange } = require('./functions');

const _size = {
    width : 600,
    height : 400,
    yOffset : 20,
    xOffset : 30,
    lineHeight : 1.2,
    img : '../../src/assets/images/shares/peoples-share-square.jpg'
  };

const createBaseCanvas = function() {
  const canvas = createCanvas(_size.width, _size.height);
  const ctx = canvas.getContext('2d');

  registerFont(path.resolve(__dirname, '../assets/Pavanam-Regular.ttf'), { family : 'Pavanam' });

  ctx.fillStyle = '#0e0e0e';

  return { canvas, ctx };


    // registerFont(path.resolve(__dirname, '../../src/assets/fonts/DomaineDispMedium.ttf'), { family : 'DomaineDispMedium' });

    // const bgImage = await loadImage(path.resolve(__dirname, _size.img));
    // ctx.drawImage(bgImage, 0, 0);

}

const addText = function(ctx, string, size, position, textAlign = 'left') {
  const fontString = `${size}px "Pavanam"`;
  ctx.font = fontString;
  ctx.textAlign = textAlign;
  ctx.fillText(string, position.x, position.y);
}

const drawLine = function(ctx, x, y, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.closePath();
  ctx.strokeStyle = '#000';
  ctx.stroke();
}

const drawRectangle = function(ctx, { x, y, w, h, colour }) {
  const tempStyle = ctx.fillStyle;
  ctx.fillStyle = colour;
  ctx.fillRect(x, y, w, h);
  ctx.fillStyle = tempStyle;
}

const createPVPStatsCanvas = function ({ name = '', matchResults = []}) {

  const { canvas, ctx } = createBaseCanvas();

  const { xOffset, yOffset, lineHeight, width, height } = _size;

  drawRectangle(ctx, { x : 0, y : 0, w : width, h : height, colour : '#E3E3E3' });

  addText(ctx, name, 26, { x : xOffset, y : yOffset + 24 });
  drawLine(ctx, xOffset, 0, xOffset, height);
  drawLine(ctx, width - xOffset, 0, width - xOffset, height);
  drawLine(ctx, 0, yOffset, width, yOffset);
  drawLine(ctx, 0, height - yOffset, width, height - yOffset);


  let highest = -1000;
  let lowest = 1000;
  matchResults.forEach(({ rating_change }) => {
    if (rating_change > highest) highest = rating_change;
    else if (rating_change < lowest) lowest = rating_change;
  });



  const midPoint = 200;

  drawLine(ctx, xOffset, midPoint, width - xOffset, midPoint);

  const matchBuffer = 10;
  const mCount = matchResults.length;
  const matchSlice = (width - xOffset * 2) / mCount;
  matchResults.forEach((match, i) => {
    const { rating_change : ratingChange } = match;
    const positionChange = ratingChange >= 0;
    const change =
      positionChange ?
        mapRange(ratingChange, lowest, highest, 0, 100) :
        mapRange(ratingChange, lowest, highest, -100, 0);
    const position = {
      x : i * matchSlice + xOffset + matchSlice / 2 - 5,
      y : midPoint - change + (positionChange ? 0 : 10)
    }
    const colour = positionChange ? '#6FE582' : '#E56F6F';
    const barOptions = {
      x : position.x - matchSlice / 2 + 5 + matchBuffer / 2,
      y : position.y + (positionChange ? 5 : -15),
      w : matchSlice - matchBuffer,
      h : change - (positionChange ? 5 : -5),
      colour
    }
    drawRectangle(ctx, barOptions);
    addText(ctx, ratingChange, 14, position, 'left');
  });

  const change = matchResults.reduce((total, match) => total + match.rating_change, 0);
  addText(ctx, `${change >=0 ? '+' : '-'}${change}`, 22, { x : width - xOffset, y : yOffset + 20 }, 'right');

  return canvas;
}

module.exports =  {
  createPVPStatsCanvas
};
