/**
 * @class a (intro)
 * @extends Scene
 */

class A extends Scene {
     /** @var list of titles for each new entry */
    #titles;
    constructor(ns) {
        super(0, ns);
        /** @var title for updating in methods */
        this.title;
        this.#titles = [
            "just a thought",
            "view from the inside",
            "a conclusion",
            "the end"
        ];
    }
    display() {
        if(this.mc == 0) this.update(this.#titles[0]);
        if(this.mc == this.sn+(this.ns)) this.update(this.#titles[1]);
        if(this.mc == this.sn+(this.ns * 2)) this.update(this.#titles[2]);
        if(this.mc == this.sn+(this.ns * 3)) this.update(this.#titles[3]);
        push();
        noStroke();
        texture(this.c);
        plane(width, height);
        pop();
    }
    update(title) {
        this.title = title;
        this.c.background(0);
        this.c.textFont("BIZ UDGothic");
        this.c.textSize(15);
        this.c.fill(255);
        this.c.textAlign(CENTER);
        this.c.text(this.title, width/2, height/2);
    }
    load() {
        this.update(this.#titles[0]);
    }
}