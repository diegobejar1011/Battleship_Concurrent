export class Ship {
    static typesOfShips = ["./assets/img/player.png", "./assets/img/enemy.png"].map((src) => {
      const img = new Image ();
      img.src = src;
      return img;
    })
  
    static largeShip(ship) {
      let positionsOfShips = [];
    
      let xP = ship.x;
      let yP = ship.y;
    
      console.log(ship);
    
      positionsOfShips.push({ x: xP, y: yP });
    
      for (let i = 1; i < ship.cell; i++) {
          xP += cellSize;
        positionsOfShips.push({ x: xP, y: yP });
      }
    
      console.log("Largo:")
      console.log(positionsOfShips);
      return positionsOfShips;
    }
  
    constructor({x, y}, type) {
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 50;
        this.cell = 3;
        this.type = type;
    }
  
    draw() {
      ctx.drawImage(Ship.typesOfShips[this.type], this.x, this.y, this.width, this.height);
    }
  }