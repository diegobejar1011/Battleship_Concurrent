export function validatePositionShip(positionsOfShip, boardSlected) {
  let bandera = false;
  positionsOfShip.forEach((position) => {
    if (position.x < boardSlected.maxWidth && position.y < boardSlected.maxHeight) {
      bandera = true;
    } else {
      bandera = false;
    }
  })

  return bandera;

}
