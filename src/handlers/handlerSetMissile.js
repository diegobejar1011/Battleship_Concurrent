import { setMissile } from "../rules/setMissile.js";
import { validateClick } from "../utils/validateClickPosition.js";

export function setMissiles(e) {
    console.log("Estoy poniendo misiles");
    const position = validateClick(e, boardComputer, board);
    if(position){
        const {cellsOfShips, possitionsMissiles} = setMissile(position, possitionsMisilesPlayer, cellsOfComputer);
        possitionsMisilesPlayer = [...possitionsMissiles];
        cellsOfComputer = [...cellsOfShips];
    }
  }