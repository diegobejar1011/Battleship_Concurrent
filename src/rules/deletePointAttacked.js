export function deletePointAttacked(attack, cellsOfShips) {
    cellsOfShips = cellsOfShips.filter(position => !(position.x === attack.x && position.y === attack.y));
    return cellsOfShips;
  }