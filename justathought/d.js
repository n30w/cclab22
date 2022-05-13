/**
 * @class D
 * @extends Scene
 */
class D extends Scene {
    /** @var private flower for display */
    #f;
    constructor(ns) {
        super(3, ns);
        this.#f;
    }
    display() {
        frameRate(24);
        this.update();
        background(255);
        push();
        angleMode(DEGREES);
        this.#f.display();
        pop();
    }
    update() {
        if(this.mc == this.sn) {
            this.#f.div = 100;
        }
        if(this.mc == this.sn+(this.ns)) {
            this.#f.div = 30;
            this.#f.drawCircle();
            this.#f.clear = false;
        }
        if(this.mc == this.sn+(this.ns*2)) {
            this.#f.clear = true;
            this.#f.div = 6;
            scale(1.6);
            this.#f.drawCircle();
        }
    }
    load() {this.#f = new PerlinFlower(this.c);}
}