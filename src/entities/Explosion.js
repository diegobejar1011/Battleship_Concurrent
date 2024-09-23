export class Explosion {
    static typesOfExplosions = ["./assets/img/ExplosionFalse.png","./assets/img/ExplosionTrue.png"].map((src) => {
        const img = new Image();
        img.src = src;
        return img;
      })
  
    constructor({x, y}, type) {
      this.x = x,
      this.y = y;
      this.type = type;
      this.width = type ? 96 : 32 ;
      this.height = type ? 96 : 32;
      
    }
  
    draw(ctx){
      console.log(this.type)
      ctx.drawImage(Explosion.typesOfExplosions[this.type], this.x, this.y, this.width, this.height);
    }
  }