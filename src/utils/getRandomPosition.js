export function getRandomPositions (cellSize, boardSelected) {

    let maxWidth = boardSelected.maxWidth - cellSize;
    let minWidth = boardSelected.minWidth;

    let maxHeight = boardSelected.maxHeight - cellSize;
    let minHeight = boardSelected.minHeight;

    let positionValid = false;

    let x, y;

    x =
        Math.floor(Math.random() * ((maxWidth - minWidth) / cellSize + 1)) *
        cellSize +
        minWidth;
    y =
        Math.floor(Math.random() * ((maxHeight - minHeight) / cellSize + 1)) *
        cellSize;

    return { x, y };
};