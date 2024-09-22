const canvas = document.getElementById("board");
const ctx = document.getContext("2d");

// Constants
const cellSize = 50;
const board = { width: canvas.width, height: canvas.height };
const boardPlayer = { maxWidth: canvas.width / 2, minWidth: 0, maxHeight: canvas.height, minHeight: 0 };
const boardComputer = { maxWidth: canvas.width, minWidth: canvas.width / 2, maxHeight: canvas.height, minHeight: 0 };

const typesOfShips = [
    {
      img: "./assets/img/ShipOne.png",
      width: 8,
      height: 50,
      cell: 1,
    },
    {
      img: "./assets/img/ShipTwo.png",
      width: 10,
      height: 80,
      cell: 2,
    },
    {
      img: "./assets/img/ShipThree.png",
      width: 12,
      height: 120,
      cell: 3,
    },
    {
      img: "./assets/img/ShipFour.png",
      width: 25,
      height: 180,
      cell: 4,
    },
];