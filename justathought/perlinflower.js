/**
 * @class creates a flower figure based off of perlin algorithm
 */
class PerlinFlower {
    #c; // graphics object
    #t; // counter
    #pv; // petal verticies
    constructor(c) {
        this.div = 100;
        this.#c = c
        this.#t = 0;
        this.#pv;
        this.clear = true;
      }
    display() {
        push();
        background(255);
        this.#drawFlower();
        //this.drawCircle();
        texture(this.#c);
        noStroke();
        plane(width, height);
        pop();
        if(this.clear) this.#c.clear();
        this.#c.reset();
    }
    #drawFlower() {
        /*
        * This code is an edited version of a draw function from:
        * https://genekogan.com/code/p5js-perlin-noise/
        */
        this.#pv = width/this.div;
        //let nc = color(5, 21, 71, 1);
        //nc.setAlpha(0.3);
        this.#c.push();
        //this.#c.fill(100, 100, 200, 1);
        this.#c.noFill();
        //this.#c.fill(nc);
        this.#c.translate(width/2, height/2);
        //this.#c.strokeWeight(1);
        this.#c.stroke(0, 140);
        this.#c.beginShape();
        for (var i = 0; i < this.#pv; i++) {
            let ang = map(i, 0, this.#pv, 0, 360);
            let rad = 300 * noise(i * 0.5, this.#t * 0.5);
            let x = rad * sin(ang);
            let y = rad * cos(ang);
            this.#c.curveVertex(x, y);
        }
        this.#c.endShape(CLOSE);
        this.#c.pop();
        this.#t += 0.01;
    }
    drawCircle() {
        this.#c.push();
        this.#c.fill(0);
        this.#c.stroke(0, 6);
        this.#c.strokeWeight(5);
        this.#c.ellipse(width/2, height/2, 20, 20);
        this.#c.pop();
    }
}