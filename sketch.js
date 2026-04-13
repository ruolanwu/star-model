let model3D;
let angleX = 0;
let angleY = 0;

function preload() {
  model3D = loadModel("star.obj", true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(0);
  ambientLight(120);
  directionalLight(255, 255, 255, 0.5, 1, -0.5);

  rotateX(angleX);
  rotateY(angleY);
  rotateZ(HALF_PI);

  scale(1);
  model(model3D);
}

function mouseDragged() {
  angleY += movedX * 0.01;
  angleX += movedY * 0.01;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
