import { drawBoard } from "./src/visuals/drawBoard";

const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

// Constants
const cellSize = 50;
const board = { width: canvas.width, height: canvas.height };
const boardPlayer = { maxWidth: canvas.width / 2, minWidth: 0, maxHeight: canvas.height, minHeight: 0 };
const boardComputer = { maxWidth: canvas.width, minWidth: canvas.width / 2, maxHeight: canvas.height, minHeight: 0 };

let cellsOfPlayer = [];
const shipsOfPlayer = [];

let cellsOfComputer = [];
const shipsOfComputer = [];

let possitionsMisilesPlayer = [];
let possitionsMisilesComputer = [];

const gameOver = false;



function update() {
    ctx.clearRect(0, 0, board.width, board.height);
    drawBoard(board, boardPlayer, cellSize, ctx);
    shipsOfPlayer.forEach((ship) => {
        ship.draw();
    });
    shipsOfComputer.forEach((ship) => {
        ship.draw();
    })
    possitionsMisilesPlayer.forEach((missile) => {
        missile.draw(ctx);
    })
    requestAnimationFrame(update); // Vuelve a llamar a update en el siguiente frame
}

// Inicia la animación
requestAnimationFrame(update);
