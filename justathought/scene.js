/**
 * @abstract class
 * @class Scene
 * for each consecutive scene in the "game" 
 */

class Scene {
    constructor(sn, ns) {
        /** @var 2D canvas graphics object */
        this.c = createGraphics(width, height);
        /** @var scene number for order */
        this.sn = sn;
        /** @var total number of scenes */
        this.ns = ns
        /** @var mouse counter number for global update */
        this.mc;
        /** @var canvas objects */
        this.co = [];
    }
    /** @method display scene */
    display() {throw new Error("implement Display() for this extension")}
    /** @method update anything in the scene in draw */
    update() {}
    /** @method load any preliminary objects for scene, like textures */
    load() {}
    /** @method audio manipulation method*/
    audio() {}
    /** @method activates when mouse is pressed on scene */
    pressed() {}
    /** @method logs framerate to console */
    logFrames() {console.log(frameRate())}
}