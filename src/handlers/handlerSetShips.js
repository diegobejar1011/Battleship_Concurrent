import { setMissiles } from "./handlerSetMissile";
import { setShip } from "../rules/setShip";
import { validateClick } from "../utils/validateClickPosition";

export function setShips(e) {
    if(shipsOfPlayer.length == 4){
      removeEventListener("click", setShip);
      addEventListener("click", setMissiles);
    } else {
      const position = validateClick(e, boardPlayer, board);
      console.log(position);
      setShip(position, cellsOfPlayer, shipsOfPlayer, 0);
}}