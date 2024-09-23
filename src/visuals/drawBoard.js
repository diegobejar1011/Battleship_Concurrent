export const drawBoard = (board, boardPlayer, cellSize, ctx) => {
  let widthBoard = board.width;
  let heightBoard = board.height;
  let widthBoardPlayer = boardPlayer.maxWidth;

  let numCols = widthBoardPlayer / cellSize;
  let numFils = heightBoard / cellSize;

  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 1;
  let x = 0;
  for (let i = 0; i < numCols; i++) {
    x += cellSize;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, heightBoard);
  }

  x = widthBoardPlayer;
  for (let i = 0; i < numCols; i++) {
    x += cellSize;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, heightBoard);
  }

  let y = 0;
  for (let i = 0; i < numFils; i++) {
    y += cellSize;
    ctx.moveTo(0, y);
    ctx.lineTo(widthBoard, y);
  }

  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.moveTo(widthBoard / 2, 0);
  ctx.lineTo(widthBoard / 2, heightBoard);
  ctx.stroke();
};