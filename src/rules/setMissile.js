import { Explosion } from "../entities/Explosion.js";
import { validatePositionMissile } from "./validatePositionMissile.js";
import { validatePositionMissileColision } from "./validatePositionMissileColision.js";
import { deletePointAttacked } from "./deletePointAttacked.js";

export function setMissile(position, positionsMissiles, cellsOfShips) {
    if(validatePositionMissile(position, positionsMissiles)){
        if(validatePositionMissileColision(position, cellsOfShips)){
            const explosion = new Explosion(position, 1);
            positionsMissiles.push(explosion);
  
            cellsOfShips = deletePointAttacked(position, cellsOfShips);
        } else {
            const explosion = new Explosion(position, 0);
            positionsMissiles.push(explosion);
        }
    } else {
      console.log("Misil en la misma posicion");
    }
  
    return {cellsOfShips, positionsMissiles};
  }