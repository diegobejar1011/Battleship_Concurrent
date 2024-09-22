export class Ship {
    constructor({ x, y }, { width, height, img, cell }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
        this.cell = cell;
        this.deg = 0;
    }

    draw() {
        const img = new Image();
        img.addEventListener("load", () => {
            ctx.save();
            ctx.translate(this.x + 25, this.y + 25);
            ctx.rotate(degToRad(this.deg));
            ctx.drawImage(img, -25, -25, this.width + 25, this.height + 25);
            ctx.restore();
        });
        img.src = this.img;
    }

    moveUp() {
        this.deg += 90;
        if (this.deg >= 360) {
          this.deg = 0;
        }
      }

      moveDown() {
        this.deg -= 90;
        if (this.deg < 0) {
          this.deg = 270; 
        }
      }
}