/**
 * @class Pbox
 * for procedural box generation based using Circuit.js texture
 */

class Pbox {
    constructor(x, y, z, dim, t) {
        this.bv = createVector(x, y, z); // box position vector
        this.dim = dim; // box dimension to manipulate
        this.t = t; // texture for sides of box
        this.dt = true; // draw texture boolean
    }
    static create(x, y, z, dim, st) {
        return new this(x, y, z, dim, st); // st is side texture
    }
    display() {
        push();
        noStroke();
        if(this.dt) texture(this.t);
        translate(this.bv.x, this.bv.y, this.bv.z);
        box(width/2, this.dim, width/2);
        pop();
    }
}