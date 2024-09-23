import { getRandomPositions } from "../utils/getRandomPosition.js";
import { setShip } from "../rules/setShip.js";

self.addEventListener("message", (e)=>{
    const shipsOfComputer = e.data.shipsOfComputer;
    const cellSize = e.data.cellSize;
    const boardComputer = e.data.boardComputer;
    const cellsOfComputer = e.data.cellsOfComputer;
    const type = e.data.typeOfShip;

    while(shipsOfComputer.length < 4){
        const position = getRandomPositions(cellSize, boardComputer);
        setShip(position, cellsOfComputer, shipsOfComputer, type, boardComputer, cellSize );
    }
    self.postMessage({shipsOfComputer, cellsOfComputer});
})

