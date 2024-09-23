import { setMissile } from "../rules/setMissile";
import { validateClick } from "../utils/validateClickPosition";

export function setMissiles(e) {
    console.log("Estoy poniendo misiles");
    const position = validateClick(e, boardComputer, board);
    if(position){
        const {cellsOfShips, possitionsMissiles} = setMissile(position, possitionsMisilesPlayer, cellsOfComputer);
        possitionsMisilesPlayer = [...possitionsMissiles];
        cellsOfComputer = [...cellsOfShips];
    }
  }