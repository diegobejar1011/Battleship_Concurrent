export class Ship {
    constructor({x, y}, type) {
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 50;
        this.cell = 3;
        this.type = type;
    }
  }