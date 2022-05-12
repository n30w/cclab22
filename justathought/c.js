/**
 * @class c (anxiety)
 * @extends Scene
 */

class C extends Scene {
    constructor(ns) {
        super(2, ns);
        this.boxList = [];
    }
    display() {
        frameRate(24);
        angleMode(RADIANS);
        this.update();
        push();
        this.#drawBoxes();
        this.#drawSphere();
        pop();
    }
    update() {
        if(this.mc == this.sn+this.ns) {
            frameRate(24);
            angleMode(RADIANS);
            for(let i = 0; i < this.boxList.length; i++) {
                this.boxList[i].dt = false;
            }
            push();
            translate(random(-width/2, width/2), random(-height/2, height/2), random(-40, -200));
            this.#drawSphere();
            this.#drawBoxes();
            pop();
        } 
    }
    load() {
        for(let i = 0; i < random(2, 5); i++) {
            this.boxList[i] = Pbox.create(0, 0, 0, 10, new Circuit(createGraphics(width, height), true, true).createTexture());
        }
    }
    #drawSphere() {
        push();
        fill(0);
        translate(0, 0, 0);
        sphere(width/9+(sin(frameCount/3)*2));
        pop();
    }
    #drawBoxes() {
        for(let i = 0; i < this.boxList.length; i++) {
          rotateX(frameCount*0.07);
          rotateY(frameCount*0.01);
          rotateZ(frameCount*0.05);
          translate((sin(frameCount/300))*random(-10, 10), (sin(frameCount/300))*random(-10, 10), (sin(frameCount/100))*random(-10, 10));
          this.boxList[i].dim = tan(frameCount/4)*(i+1)*20;
          this.boxList[i].display();
        }
    }
}