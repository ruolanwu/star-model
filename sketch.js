let model3D;

function preload() {
  model3D = loadModel("star.obj", true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(0);

  let rotY = map(mouseX, 0, width, -PI, PI);
  let rotX = map(mouseY, 0, height, PI, -PI);

  rotateX(rotX);
  rotateY(rotY + HALF_PI);

  ambientLight(255);
  ambientMaterial(255);

  model(model3D);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
