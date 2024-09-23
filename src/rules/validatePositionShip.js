export function validatePositionShip(positionsOfShip) {

  let maxWidth = canvas.width / 2;

  let maxHeight = canvas.height;

  let bandera = false;
  positionsOfShip.forEach((position) => {
    if (position.x < maxWidth && position.y < maxHeight) {
      bandera = true;
    } else {
      bandera = false;
    }
  })

  return bandera;

}
