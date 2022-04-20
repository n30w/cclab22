let deltaX;
let deltaY;
let speedY = 1;

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent("jsscript");
  background(200, 200, 160);
  background(0, 0, 40, random(2,10));
  frameCount = 120;
}

function draw() {
  deltaX = noise(1000)*400*tan(frameCount*10);
  deltaY = noise(frameCount)*random(300,500)*tan(noise(width)*40*sin(2*cos(frameCount*10)));
  
  let ranColorX = random(100,240);
  let ranColorY = random(150,240);
  let ranColorZ = random(150,240);

  speedY += random(-1, 1);
  noStroke();
  push();
  fill(ranColorX, ranColorY, ranColorZ, 200*tan(frameCount));
  rect(width/2+deltaX, height/2+deltaY, 8*sin(frameCount), random(5)*cos(frameCount));
  rect(width/2+deltaX, height/2+deltaY+deltaY, 20*sin(random(noise(frameCount%100)*50,100)), -100);
  pop();
  
  push();
  fill(255, 3);
  rect(width/2+deltaX, height/2+deltaY, random(50,200));
  pop();

}
