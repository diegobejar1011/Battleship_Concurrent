import { Ship } from "../entities/Ship";
import { validatePositionShip } from "./validatePositionShip";
import { validateShip } from "./validateShip";

export function setShip(position, cellsOfShips, shipsOf, type) {
  if (position) {

    const ship = new Ship (position, type);

    const largeOfShip = Ship.largeShip(ship);

    if (validatePositionShip(largeOfShip)) {
      if (!validateShip(largeOfShip, cellsOfShips)) {

        cellsOfShips.push(...largeOfShip);
        shipsOf.push(ship);

      } else {
        console.log("Estas sobreponiendo barcos");
      }
    } else {
      console.log("Esta fuera de los bordes");
    }
  }
}