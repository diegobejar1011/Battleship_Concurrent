import { setMissiles } from "./handlerSetMissile.js";
import { setShip } from "../rules/setShip.js";
import { validateClick } from "../utils/validateClickPosition.js";

export function setShips(e) {
    if(shipsOfPlayer.length == 4){
      removeEventListener("click", setShip);
      addEventListener("click", setMissiles);
    } else {
      const position = validateClick(e, boardPlayer, board);
      console.log(position);
      setShip(position, cellsOfPlayer, shipsOfPlayer, 0);
}}