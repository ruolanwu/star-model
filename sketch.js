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

  ambientLight(120);
  directionalLight(255, 255, 255, 0.5, 1, -0.5);

  let rotY = map(mouseX, 0, width, -PI, PI);
  let rotX = map(mouseY, 0, height, -PI, PI);

  rotateX(rotX);
  rotateY(rotY + HALF_PI);

  model(model3D);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
