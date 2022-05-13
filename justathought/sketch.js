const windowDim = 700;

let mc; // counts presses of the mouse
let ns; // number of scenes in total
let a, b, c, d; // declare scenes
let scenes;
let rainSound;
let fastClicking;
let pass1;
let pass2x1;
let pass2x2;
let pass3x1;
let pass3x2;
let vo_downer, vo_goout, vo3, vo4x1, vo4x2, vo4x3;

function preload() {
  soundFormats('mp3');
  rainSound = loadSound('sounds/rain.mp3');
  rainSound.setVolume(0.4);
  fastClicking = loadSound('sounds/fastclicking.mp3');
  fastClicking.setVolume(0.3);
  pass1 = loadSound('sounds/pass1.mp3');
  pass1.setVolume(0.5);
  pass2x1 = loadSound('sounds/pass2.1.mp3');
  pass2x1.setVolume(0.7);
  pass2x2 = loadSound('sounds/pass2.mp3');
  pass2x2.setVolume(0.8);
  pass3x1 = loadSound('sounds/pass3.1.mp3')
  pass3x1.setVolume(0.5);
  pass3x2 = loadSound('sounds/pass3.2.mp3');
  pass3x2.setVolume(0.7);
  vo_downer = loadSound('sounds/vo_downer.mp3');
  vo_goout = loadSound('sounds/vo_goout.mp3');
  vo3 = loadSound('sounds/vo3.mp3');
  vo4x1 = loadSound('sounds/vo4.1.mp3');
  vo4x2 = loadSound('sounds/vo4.2.mp3');
  vo4x3 = loadSound('sounds/vo4.3.mp3');
}
function setup() {
  let canvas = createCanvas(windowDim, windowDim, WEBGL);
  canvas.parent("jsscript");
  ps = false;
  mc = 0;
  ns = 4;
  scenes = [
    a = new A(ns), 
    b = new B(ns, rainSound), 
    c = new C(ns), 
    d = new D(ns)
  ];
  for(let i = 0; i < scenes.length; i++) {scenes[i].load();}
}
function draw() {
  scenes[mc%ns].mc = mc;
  scenes[mc%ns].display();
}
function doot(mc, s, sound) { // Play sound function
  if(mc == s) {
    sound.loop();
  } else {
    sound.stop();
  }
}
function soundtrack(mc, s, sound) {
  if(mc == s) {
    sound.loop();
  } else if (mc == s+(ns-1)) {
    sound.stop();
  }
}
function playOnce(mc, s, sound) {
  if(mc == s) {
    sound.play();
  } else {
    sound.stop();
  }
}
function mousePressed() {
  mc += 1;
  console.log(mc);
  soundtrack(mc, 1, pass1);
  playOnce(mc, 1, vo_downer);
  doot(mc, 2, fastClicking);
  playOnce(mc, 2, vo_goout);
  playOnce(mc, 3, vo3);
  doot(mc, 4, pass2x1);
  soundtrack(mc, 5, pass2x2);
  doot(mc, 5, rainSound);
  playOnce(mc, 9, vo4x1);
  soundtrack(mc, 9, pass3x2);
  playOnce(mc, 10, vo4x2);
  playOnce(mc, 11, vo4x3);
  
  if(mc==12) {
    frameCount = 0;
    mc = 0;

  }
}

