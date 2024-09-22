import { calculateControlPoint } from "../utils/calculateControlPoit";
import { deCasteljauQuadratic } from "../utils/deCasteljuaQuadratic";

export class Missile {
    constructor(initialPoint, finalPoint) {
        this.initialPoint = initialPoint;
        this.finalPoint = finalPoint;
        this.controlPoint = calculateControlPoint(initialPoint, finalPoint);
        this.image = new Image();
        this.time = 0;
        this.duration = 200;
        this.loaded = false;
    }

    draw() {

        if (!this.loaded) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.save();


        const { x, y } = deCasteljauQuadratic(this.time, this.initialPoint, this.controlPoint, this.finalPoint);


        ctx.drawImage(this.image, x - 10, y - 10, 50, 20);


        ctx.restore();

        this.t += 1 / this.duration;

        if (this.t <= 1) {
            requestAnimationFrame(() => this.draw());
        }
    }

    init() {
        this.image.src = './assets/img/Missile.png';
        this.image.onload = () => {
            this.loaded = true;
            this.draw();
        };
    }
}