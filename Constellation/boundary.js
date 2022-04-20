/**
 * This creates a boundary for rays to detect.
 * This boundary class is taken from the youtube video:
 * - https://www.youtube.com/watch?v=TOEi6T2mtHo
 * Full credit goes to Dan at The Coding Train for this code.
 */

class Boundary {
    constructor(x1, y1, x2, y2) {
        this.startingPoint = createVector(x1, y1);
        this.endingPoint = createVector(x2, y2);
    }

    draw() {
        stroke(255);
        line(this.startingPoint.x, this.startingPoint.y, this.endingPoint.x, this.endingPoint.y);
    }

    
}