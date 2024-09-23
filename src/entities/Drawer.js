export class Drawer {
    static images = {
        explosions: ["src/assets/img/ExplosionFalse.png", "src/assets/img/ExplosionTrue.png"].map((src) => {
            const img = new Image();
            img.src = src;
            return img;
        }),
        ships: ["src/assets/img/player.png", "src/assets/img/enemy.png"].map((src) => {
            const img = new Image();
            img.src = src;
            return img;
        })
    };
  
    static drawExplosion(ctx, explosion) {
        const { x, y, width, height, type } = explosion;
        ctx.drawImage(Drawer.images.explosions[type], x, y, width, height);
    }
  
    static drawShip(ctx, ship) {
        const { x, y, width, height, type } = ship;
        ctx.drawImage(Drawer.images.ships[type], x, y, width, height);
    }
  }