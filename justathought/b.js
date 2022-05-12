/**
 * @class B
 * @extends Scene
 */

class B extends Scene {
    /** @var scale factor*/
    #scale;
    constructor(ns) {
        super(1, ns);
        this.#scale = 0.8;
    }
    display() {
        background(255);
        push();
        scale(this.#scale);
        this.update();
        for(let i = 0; i < this.co.length; i++) {
            this.#drawPlane(this.co[i].canvas2D, this.co[i].position);
        }
        pop();
    }
    update() {
        if(this.mc == 1) {
            frameRate(6);
            angleMode(RADIANS);
        }
        if(this.mc == this.sn+this.ns) {
            frameRate(24);
            angleMode(DEGREES);
            background(0); 
            this.co[1].position.y = -width;
            for(let i = 0; i < this.co.length; i++) {
                this.co[i].renderBackground = false;
            }
            rotateX(46);
        }
        if(this.mc == this.sn+(this.ns*2)) {
            frameRate(6);
            angleMode(RADIANS);
            this.co[0].renderBackground = true;
            this.co[0].isDense = true;
            this.#scale = 1;
        }
        for(let i = 0; i < this.co.length; i++) {
            this.co[i].circuitTexture.update(this.co[i].isDense, this.co[i].renderBackground);
        }
    }
    load() { // Apply circuit to graphics texture
        for(let i = 0; i < 2; i++) {
            let nc = createGraphics(width, height);
            this.co.push(
                {
                    canvas2D: nc,
                    circuitTexture: new Circuit(nc, true, true),
                    position: new createVector(0, 0, 0),
                    isDense: false,
                    renderBackground: true,
                }
            )
        }
    }
    #drawPlane(c, v) { // Rotation will be handled globally
        push();
        texture(c);
        noStroke();
        translate(v.x, v.y, v.z);
        plane(width, height);
        pop();
    }
    audio() {}
}