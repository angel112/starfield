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
        ctx.beginPath()
        ctx.fillStyle = "white";
        ctx.arc(x, y, this.radius * this.vx * 0.3, 0,Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
    }
    
    update() {
        let d = this.bounds.depth;
        if (Math.abs(this.x) > this.bounds.width / 2 || Math.abs(this.y) > this.bounds.height / 2) { 
            this.x = this.sx;
            this.y = this.sy;
            this.vx = 1;
            this.cd = (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
        } else {
            const h = (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
            const sin = this.x / h;
            const cos = this.y / h;
            this.cd = h + this.vx;
            this.x = this.cd * sin;
            this.y = this.cd * cos;
            this.vx += 0.05;
        }
            this.draw();

    }
}
