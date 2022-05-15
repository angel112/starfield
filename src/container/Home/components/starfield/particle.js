/**
 * @class Particle
 */

 function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

export default class Particle {
    constructor(x, y, bounds, cd) {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.ux = this.x;
        this.uy = this.y;
        this.radius = 1;
        this.sx = this.x;
        this.sy = this.y;
        this.bounds = bounds
        this.vx = 1;
        this.cd = 0;
    }
    
    draw() {
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext("2d");
      
        const x = Math.floor((this.bounds.width / 2) + this.x);
        const y = Math.floor((this.bounds.height / 2) + this.y);
        const ux = Math.floor((this.bounds.width / 2) + this.ux);
        const uy = Math.floor((this.bounds.height / 2) + this.uy);
        ctx.beginPath()
        ctx.fillStyle = "white";
        ctx.arc(x, y, this.radius * this.vx * 0.2, 0,Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = "#ffe";
        ctx.lineWidth = this.radius * this.vx * 0.2;
        ctx.moveTo(x, y);
        ctx.lineTo(ux, uy);
        ctx.stroke();
        ctx.closePath();

    }
    
    update() {
        if (Math.abs(this.x) > this.bounds.width / 2 || Math.abs(this.y) > this.bounds.height / 2) { 
            this.x = randomIntFromInterval((-1) * (this.bounds.width / 2 - 20), this.bounds.width / 2 - 20);
            this.y = randomIntFromInterval((-1) * (this.bounds.height / 2 - 20), this.bounds.height / 2 - 20);
            this.ux = this.x;
            this.uy = this.y;
            this.vx = 1;
            this.cd = (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
        } else {
            const h = (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
            const sin = this.x / h;
            const cos = this.y / h;
            this.cd = h + this.vx;
            this.ud = h - 0.5 * this.vx;
            this.ux = sin * this.ud;
            this.uy = cos * this.ud;
            this.x = this.cd * sin;
            this.y = this.cd * cos;
            this.vx += 0.1;
        }
            this.draw();

    }
}
