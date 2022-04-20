// Circuit

function setup() {

  createCanvas(2000, 2000);
  background(0);

  translate(width/2, height/2);
  ellipseMode(CENTER);

  fermatSpiral();
  addMoreRandom();
  //saveCanvas('neo', 'png');
}

function fermatSpiral() {
  let x;
  let sizeW;
  let sizeL;

  let density = width/2;
  let scaleMultiplier = 4;
  let a = random(20, 300)*noise(100, 20);
  let iVal = random(2, 200)*noise(width, height);
  let jVal = random(2, 20)*noise(width, height);

  if(iVal < 20 || jVal < 20) {
    sizeW = random(1,3);
    sizeL = random(1,3);
  } else {
    sizeW = random(20, 400);
    sizeL = random(20, 400);
  }

  push();
  noStroke();
  // Uncomment fills if you want to color it
  //fill(0);
  for(let i = 0; i < density; i+=iVal) {
    x = i;
    translate(noise(x)*50);
    fill(0, 255, 255);
    for(let j = 0; j < density; j+=jVal) {
      ellipse(x, spiralEquation(x, j, a, scaleMultiplier), sizeW, tan(random(50))*3);
    }
  }
  
  for(let i = 0; i < density; i+=iVal) {
    x = -1*i;
    fill(0, 255, 255);
    for(let j = 0; j < density; j+=jVal) {
      ellipse(x, spiralEquation(x, j, a, scaleMultiplier), sizeW, tan(random(50))*3);
    }
  }
  
  for(let i = 0; i < density; i+=iVal) {
    y = i;
    fill(255, 0, 255);
    for(let j = 0; j < density; j+=jVal) {
      ellipse(spiralEquation(j, y, a, scaleMultiplier), y, tan(random(50))*5, sizeW);
    }
  }

  for(let i = 0; i < density; i+=iVal) {
    y = i;
    fill(255, 0, 255);
    for(let j = 0; j < density; j+=jVal) {
      ellipse(spiralEquation(j, y, a, scaleMultiplier), -1*y, tan(random(50))*2, sizeW);
    }
  }
  pop();

}

// Return spiral in terms of y - based off Fermat Spiral Equation. Not exact replica.
function spiralEquation(x, y, a, multiplier) {
  let value;
  value = x*tan((x**2 + y**2)/a**2);
  return value*multiplier;
}

// Add more randomness to the grid
function addMoreRandom() {
  push();
  translate(random(-300, 53), random(-500, 500));
  fermatSpiral();
  translate(random(30, 53), random(-500, 500));
  fermatSpiral();
  pop();
  fermatSpiral();
}