export function validateShip(positions, ships) {
    return positions.some((position) =>
      ships.some((ship) => position.x === ship.x && position.y === ship.y)
    );
  }