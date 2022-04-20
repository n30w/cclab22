/**
 * Creates a ray
 */

class Ray {

    /**
     * This class' construction and draw function
     * are modifications to the code in the aforementioned
     * video in the sketch.js class. All credit go toward
     * Dan from The Coding Train YouTube channel for basis and implementation
     */

    constructor(x, y) {
        this.position = createVector(x, y);
        this.direction = createVector();
    }

    draw() {
        push();
        stroke(255);
        translate(this.position.x, this.position.y);
        line(0, 0, this.direction.x * 10, this.direction.y * 10);
        pop();
    }

    lightShow() {
        this.direction.x = sin(frameCount % 150);
        this.direction.y = cos(frameCount % 360);
    }

    /**
     * This following function is also an implemention of the
     * one in the video, however I did some editing
     * to it to arrays.
     * 
     * Furthermore, this implementation uses the calculation of
     * line-to-line interesction formulas presented in this
     * wikipedia article:
     * - https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection 
     */

    cast(wall) {

        /**
         * The point of this algorithm is to find
         * the values of t and u, which helps determine
         * where the ray and boundary intersect, but also
         * whether they even intersect at all.
         */
        
        const wallCoords = [
            wall.startingPoint.x, // x1
            wall.startingPoint.y, // y1
            wall.endingPoint.x, // x2
            wall.endingPoint.y  // y2
        ];

        const rayCoords = [
            this.position.x, // x3
            this.position.y, // y3
            this.position.x + this.direction.x, // x4
            this.position.y + this.direction.y // y4
        ];

        /**
         * The determinant of the two matricies used which are wallCoords and rayCoords
         * If the determinant = 0, that means the two lines are parallel
         * If the determinant != 0 there is a point at which the ray intersects the boundary
         */

        const denominatorDeterminant = ((wallCoords[0] - wallCoords[2]) * (rayCoords[1] - rayCoords[3])) - ((wallCoords[1] - wallCoords[3]) * (rayCoords[0] - rayCoords[2]));

        if(this.denominatorDeterminant == 0) {
            return;
        }
        
        const t = (((wallCoords[0] - rayCoords[0]) * (rayCoords[1] - rayCoords[3])) - ((wallCoords[1] - rayCoords[1]) * (rayCoords[0] - rayCoords[2]))) / denominatorDeterminant;

        const u = (((wallCoords[0] - rayCoords[0]) * (wallCoords[1] - wallCoords[3])) - ((wallCoords[1] - rayCoords[1]) * (wallCoords[0] - wallCoords[2]))) / denominatorDeterminant;

        if(t > 0 && t < 1 && u > 0) {
            const pt = createVector();
            pt.x = wallCoords[0] + (t * (wallCoords[2] - wallCoords[0]));
            pt.y = wallCoords[1] + (t * (wallCoords[3] - wallCoords[1]));
            return pt;
        } else {
            return;
        }

    }
}