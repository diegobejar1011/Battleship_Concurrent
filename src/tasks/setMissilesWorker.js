import { getRandomPositions } from "../utils/getRandomPosition.js";
import { setMissile } from "../rules/setMissile.js";

self.addEventListener("message", (e)=>{
    const positionsMisilesComputer = e.data.positionsMisilesComputer;
    const cellsOfPlayer = e.data.cellsOfPlayer;
    const cellSize = e.data.cellSize;
    const boardPlayer = e.data.boardPlayer;
    const position = getRandomPositions(cellSize, boardPlayer);
    const {cellsOfShips, positionsMissiles} = setMissile(position, positionsMisilesComputer, cellsOfPlayer);
    self.postMessage({cellsOfShips, positionsMissiles});
})
