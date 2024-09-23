import { Explosion } from "../entities/Explosion";
import { validatePositionMissile } from "./validatePositionMissile";
import { validatePositionMissileColision } from "./validatePositionMissileColision";

export function setMissile(position, possitionsMissiles, cellsOfShips) {
    if(validatePositionMissile(position, possitionsMissiles)){
        if(validatePositionMissileColision(position, cellsOfShips)){
            const explosion = new Explosion(position, 1);
            possitionsMissiles.push(explosion);
  
            cellsOfShips = deletePointAttacked(position, cellsOfShips);
        } else {
            const explosion = new Explosion(position, 0);
            possitionsMissiles.push(explosion);
        }
    } else {
      console.log("Misil en la misma posicion");
    }
  
    return {cellsOfShips, possitionsMissiles};
  }