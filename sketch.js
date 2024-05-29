//size of moon
var wide = 100;
var high = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //maps one range to another range
  //in this case, maps the location of the mouse to the colour of bg/moon

  // for background, original value is set to X location of mouse (1st argument in map())
  // original range is from 0-width (2nd and 3rd arguments in map())
  // map that original range from 0-255 (RGB colour space) (4th and 5th arguments in map())
  // thus, if mouse is at far left, RGB == 0 (black); if mouse is at far right, RGB == 255 (white)
  var bgCol = map(mouseX, 0, windowWidth, 0, 255);

  // for moon, original value is set to Y location of mouse (1st argument in map())
  // original range is from 0-height (2nd and 3rd arguments in map())
  // map that original range from 255-0 (RGB colour space) (4th and 5th arguments in map())
  // thus, if mouse is at far top, RGB == 255 (white); if mouse is at far bottom, RGB == 0 (white)
  var moonCol = map(mouseY, 0, windowHeight, 255, 0);

  background(bgCol);
  fill(moonCol);
  noStroke();
  ellipse(mouseX, mouseY, wide, high);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
