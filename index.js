import { drawBoard } from "./src/visuals/drawBoard.js";
import { Drawer } from "./src/entities/Drawer.js";

//Importaciones para handlers;
import { setShip } from "./src/rules/setShip.js";
import { validateClick } from "./src/utils/validateClickPosition.js";
import { setMissile } from "./src/rules/setMissile.js";

const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

// Constants
const cellSize = 50;
const board = { width: canvas.width, height: canvas.height };
const boardPlayer = { maxWidth: canvas.width / 2, minWidth: 0, maxHeight: canvas.height, minHeight: 0 };
const boardComputer = { maxWidth: canvas.width, minWidth: canvas.width / 2, maxHeight: canvas.height, minHeight: 0 };

let cellsOfPlayer = [];
let shipsOfPlayer = [];

let cellsOfComputer = [];
let shipsOfComputer = [];

let positionsMisilesPlayer = [];
let positionsMisilesComputer = [];

let gameOver = false;

// Workers
//Generar barcos aleatoriamente
let setShipsWorker;
if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
      setShipsWorker = new Worker("./src/tasks/setShipsWorker.js", { type: 'module' });
      setShipsWorker.onmessage = (e) => {
        cellsOfComputer = [...e.data.cellsOfComputer];
        shipsOfComputer = [...e.data.shipsOfComputer];
      }
    }
};

//Determinar quien es el ganador
let setWinnerWorker;
if (typeof(Worker) !== "undefined") {
  if (typeof(w) == "undefined") {
    setWinnerWorker = new Worker("./src/tasks/setWinnerWorker.js", { type: 'module' });
    setWinnerWorker.onmessage = (e) => {
      console.log("Worker de winner");
      console.log(setWinnerWorker);
      const { winner } = e.data;
      if (winner === "player") {
          console.log("¡El jugador ha ganado!");
          gameOver = true;
          alert("¡Has ganado!");
      } else if (winner === "computer") {
          console.log("¡La computadora ha ganado!");
          gameOver = true;
          alert("¡La computadora ha ganado!");
      }
    }
  }
};



//Generar misiles aleatoriamente
let setMissilesWorker;
if (typeof(Worker) !== "undefined") {
  if (typeof(w) == "undefined") {
    setMissilesWorker = new Worker("./src/tasks/setMissilesWorker.js", { type: 'module' });
    setMissilesWorker.onmessage = (e) => {
      console.log(e.data);
      positionsMisilesComputer = [...e.data.positionsMissiles];
      cellsOfPlayer = [...e.data.cellsOfShips];
    }
  }
};

//Handlers
export function setMissiles(e) {
    const position = validateClick(e, boardComputer, board, canvas, cellSize);
    console.log("Posicion", position);
    if(position){
        const {cellsOfShips, positionsMissiles} = setMissile(position, positionsMisilesPlayer, cellsOfComputer);
        positionsMisilesPlayer = [...positionsMissiles];
        cellsOfComputer = [...cellsOfShips];
        setMissilesWorker.postMessage({positionsMisilesComputer, cellsOfPlayer, cellSize, boardPlayer});
    }
  }

export function setShips(e) {
    if(shipsOfPlayer.length == 4){
      alert("Coloca tus misiles");
      removeEventListener("click", setShips);
      addEventListener("click", setMissiles);
    } else {
      const position = validateClick(e, boardPlayer, board, canvas, cellSize);
      console.log(position);
      setShip(position, cellsOfPlayer, shipsOfPlayer, 0, boardPlayer, cellSize);
  }
}

drawBoard(board, boardPlayer, cellSize, ctx);

let animationId;

function update() {
    ctx.clearRect(0, 0, board.width, board.height);
    drawBoard(board, boardPlayer, cellSize, ctx);
    shipsOfPlayer.forEach((ship) => {
        Drawer.drawShip(ctx, ship);
    });
    if(gameOver){
        shipsOfComputer.forEach((ship) => {
            Drawer.drawShip(ctx,ship);
        })

        cancelAnimationFrame(animationId);
        ctx.clearRect(0, 0, board.width, board.height);
        drawBoard(board, boardPlayer, cellSize, ctx);
        removeEventListener("click", setMissiles);
        return; 
    }
    positionsMisilesPlayer.forEach((missile) => {
        Drawer.drawExplosion(ctx, missile);
    });
    positionsMisilesComputer.forEach((missile) => {
      Drawer.drawExplosion(ctx,missile);
    });

    if (shipsOfPlayer.length > 0 && shipsOfComputer.length > 0) {
      setWinnerWorker.postMessage({ cellsOfPlayer, cellsOfComputer });
    }

    animationId = requestAnimationFrame(update); 
}

function startGame(){
  alert("Coloca tus barcos en tu espacio del tablero.");
  animationId = requestAnimationFrame(update);
  addEventListener("click", setShips);
  setShipsWorker.postMessage({shipsOfComputer, cellSize, boardComputer, cellsOfComputer, typeOfShip: 1});
}

window.startGame = startGame;

document.getElementById("start-button").addEventListener("click", startGame);

//Configuración de modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];   


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; 
  }}