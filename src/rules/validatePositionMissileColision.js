export function validatePositionMissileColision(attack, cellsOfShips){
    if(!cellsOfShips) return false
    return cellsOfShips.some(position => position.x === attack.x && position.y === attack.y);
  }
  