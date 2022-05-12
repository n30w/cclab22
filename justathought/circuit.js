/**
 * @class Circuit
 * used for textures and other scene effects
 */

class Circuit {
    /** @var graphics object */
    #c;
    /** @var is dense */
    #id;
    /** @var render background*/ 
    #rb;
    constructor(c, id, rb) {
        this.#c = c;
        this.#id = id;
        this.#rb = rb;
    }
    update(id, rb) {
        this.#id = id;
        this.#rb = rb;
        if(rb) this.#c.background(255);
        this.#c.noStroke();
        this.#c.noFill();
        this.#fermatSpiral(id);
        this.#addMoreRandom();
    }
    /**@method create texture and return graphics object */
    createTexture() {
        this.update(this.#id, this.#rb);
        return this.#c;
    }
    /**@method creates fermat spiral based off of graphics object */
    #fermatSpiral(id) {
        let x, y;
        let sizeW;
        let sizeL;
        let density;
        let scaleMultiplier = 2;
        let a = random(10, 30)*noise(10, 20);
        let iVal = random(2, 200)*noise(width, height);
        let jVal = random(2, 10)*noise(width, height);
        if(id) {
            density = width/4;
        } else {
            density = 20;
        }
        if(iVal < 20 || jVal < 20) {
            sizeW = random(1, 2);
            sizeL = random(1, 2);
        } else {
            sizeW = random(20, 100);
            sizeL = random(20, 100);
        }
        this.#c.push();
        for(let i = 0; i < density; i+=iVal) {
            x = i;
            this.#c.translate(noise(x)*5);
            this.#c.fill(0)
            for(let j = 0; j < density; j+=jVal) {
              this.#c.ellipse(x, this.#spiralEquation(x, j, a, scaleMultiplier), sizeW, tan(random(10))*3);
            }
        }
        for(let i = 0; i < density; i+=iVal) {
        x = -1*i;
        this.#c.fill(0)
        for(let j = 0; j < density; j+=jVal) {
            this.#c.ellipse(x, this.#spiralEquation(x, j, a, scaleMultiplier), sizeW, tan(random(20))*3);
        }
        }
        for(let i = 0; i < density; i+=iVal) {
        y = i;
        this.#c.fill(0)
        for(let j = 0; j < density; j+=jVal) {
            this.#c.ellipse(this.#spiralEquation(j, y, a, scaleMultiplier), y, tan(random(30,40))*5, sizeW);
        }
        }
        for(let i = 0; i < density; i+=iVal) {
        y = i;
        this.#c.fill(0)
        for(let j = 0; j < density; j+=jVal) {
            this.#c.ellipse(this.#spiralEquation(j, y, a, scaleMultiplier), -1*y, tan(random(50))*2, sizeW);
        }
        }
        this.#c.pop();
    }
    /**@method Return spiral in terms of y - based off Fermat Spiral Equation. Not exact replica */
    #spiralEquation(x, y, a, multiplier) {
        let value = x*tan((x**2 + y**2)/a**2);
        return value*multiplier;
    }
    /**@method add more randomness to circuit grid */
    #addMoreRandom() {
        this.#c.push();
        this.#c.translate(random(0, 200), random(0, 500));
        this.#fermatSpiral();
        this.#c.translate(random(0, 500), random(0, height/2));
        this.#fermatSpiral();
        this.#c.pop();
        this.#fermatSpiral();
    }
}