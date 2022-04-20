class MouseCoords {
  constructor(w, h) {
      this.w = w;
      this.h = h;
      this.mouseCoordinateArray = [[]];
  }
  
  // Get mouse click coordinates and return mouseGrid array
  get(mouseGrid) {
    this.xyCouple = [];
    this.mouseGridLength = mouseGrid.length - 1;

    if(mouseIsPressed && mouseX !== mouseGrid[this.mouseGridLength][0] && mouseY !== mouseGrid[this.mouseGridLength][1] && mouseX <= this.w && mouseY <= this.h) {
      let mx = map(mouseX, 0, this.w, -this.w/2, this.w/2);
      let my = map(mouseY, 0, this.h, -this.h/2, this.h/2);

      this.xyCouple.push(mx, my);
      mouseGrid.push(this.xyCouple);
    }
    return mouseGrid;
  }
}