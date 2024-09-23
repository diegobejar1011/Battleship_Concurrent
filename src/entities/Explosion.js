export class Explosion {
    constructor({x, y}, type) {
      this.x = x,
      this.y = y;
      this.type = type;
      this.width = type ? 32 : 32 ;
      this.height = type ? 32 : 32;
    }
  }