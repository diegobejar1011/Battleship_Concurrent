import { Ship } from "../entities/Ship.js";
import { validatePositionShip } from "./validatePositionShip.js";
import { validateShip } from "./validateShip.js";
import { calculateLargeShip } from "../utils/calculateLargeShip.js"; 

export function setShip(position, cellsOfShips, shipsOf, type, boardSelected, cellSize) {
  if (position) {

    const ship = new Ship (position, type);

    const largeOfShip = calculateLargeShip(ship, cellSize);
    
    if (validatePositionShip(largeOfShip, boardSelected)) {
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