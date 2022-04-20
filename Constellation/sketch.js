/**
 * Neo Alabastro - Project A
 * "Constellation"
 * Press SPACEBAR to add boundaries
 * Press C to change abstract figure algorithm
 * Click MOUSE on canvas to place points
 * Press BACKSPACE to remove rays 
 *
 * REFERENCES:
 * - https://www.youtube.com/watch?v=TOEi6T2mtHoionhttps://en.wikipedia.org/wiki/Intersection_(Euclidean_geometry)
 * 
 * I used the youtube video and the wikipedia article to implement a version ray tracing for the project. 
 * 
 */

let canvasDimH;
let canvasDimW;

let mc; // mouseCoords object
let mouseGrid; // array for mouse click positions
let boundaryList; // array for boundaries
let rayList; // array for rays
let colorList; // RGB color values
let changeBool; // used to check which algorithm to choose

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  canvasDimH = windowHeight;
  canvasDimW = windowWidth;
  mc = new MouseCoords(canvasDimW, canvasDimH);   
  
  mouseGrid = [[]];
  boundaryList = [];
  rayList = [];
  colorList = [random(30), random(30), random(30)];
  
  changeBool = false;
  
  colorMode(RGB);
  background(color(colorList[0], colorList[1], colorList[2]));
  
  // Create a random amount of boundaries at random positions
  for(let i = 0; i < random(3); i++) {
    boundaryList.push(new Boundary(random(-canvasDimW/2, canvasDimW/2), random(-canvasDimH/2, canvasDimH/2), random(-canvasDimW/2, canvasDimW/2), random(-canvasDimH/2, canvasDimH/2)));
  }
  
  // Create random amount of rays at random positions
  for(let i = 0; i < random(2, 3); i++) {
    rayList.push(new Ray(random(-canvasDimW/2, canvasDimW/2), random(-canvasDimH/2, canvasDimH/2)));
  }
}

function draw() {
  mouseGrid = mc.get(mouseGrid); // Get the position of the mouse click when mouse is clicked

  // Remapping of mouse positions to WEBGL coords
  let mx = map(mouseX, 0, canvasDimW, -canvasDimW/2, canvasDimW/2);
  let my = map(mouseY, 0, canvasDimH, -canvasDimH/2, canvasDimH/2);
  
  // Create a ray at user click point
  if(mouseIsPressed && mouseX <= canvasDimW && mouseY <= canvasDimH) {
    rayList.push(new Ray(mx, my));
  }

  // Draws lines from ray to boundary
  for(let i = 0; i < boundaryList.length; i++) {
    for(ray in rayList)
    {
      rayList[ray].lightShow();
      let pt = rayList[ray].cast(boundaryList[i]);
      if(pt) {
        stroke(255, sin(frameCount%255) * 2);
        line(rayList[ray].position.x, rayList[ray].position.y, pt.x, pt.y);
      }        
    }
  }
  
  // Render the cool shapes on the canvas (the spheres)
  renderAbstractions(mouseGrid);
}

// Helper function for renderAbstractions, translates spheres
function complexSphereTranslations(x, y) {
  if(frameCount % 300 > 150) {
    rotateY(log(frameCount%45)*10);
    if(changeBool) {
      rotateZ(frameCount%20 * 5);
    }
    translate(x, y, tan(frameCount%2000)*20);
  } else {
    if(changeBool) {
      rotateX(frameCount%100*20);
    } else {
      rotateZ(tan(frameCount%200)*20);
    }
    translate(x, y, cos(frameCount%2000)*200);
  }
}

function renderAbstractions(mouseGrid) {
  for (point in mouseGrid) {
    push();
    noFill();
    strokeWeight(1);
    stroke(255, frameCount%2);
    emissiveMaterial(130, 230, 0);
    translate(mouseGrid[point][0], mouseGrid[point][1], tan(frameCount%2000)*20);
    complexSphereTranslations(mouseGrid[point][0], mouseGrid[point][1]);
    scale((windowWidth*windowHeight)/400);
    sphere(sin(frameCount % 500)/500, 4, 2);
    pop();
  }
}

function keyPressed() {
  if (keyCode == 32) {
    boundaryList.push(new Boundary(random(-canvasDimW/2, canvasDimW/2), random(-canvasDimH/2, canvasDimH/2), random(-canvasDimW/2, canvasDimW/2), random(-canvasDimH/2, canvasDimH/2)));
  } else if(keyCode == BACKSPACE) {
    rayList = []
    background(color(colorList[0], colorList[1], colorList[2]));
  } else if (keyCode == 67) {
    if(changeBool) {
      changeBool = false;
    } else {
      changeBool = true;
    }
  }
}

