var diameter = 300;

var Yellipse1 = -50;
var Yellipse2 = 500;

var stop1 = false; // Variable om beweging ellips 1 te stoppen
var stop2 = false; // Variable om beweging ellips 2 te stoppen

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  colorMode(RGB, 255, 255, 255, 1);
  noStroke();
}

function draw() {
  background(255, 255, 255, 1);

  fill(255, 0, 0, 0.5);
  ellipse(width / 2, height / 2, diameter);

  if (!stop1) {
    Yellipse1 += 3;
    if (Yellipse1 >= 225) {
      stop1 = true;
    }
  }

  fill(50, 205, 50, 0.5);
  ellipse(width / 2, Yellipse1, diameter);

  if (!stop2) {
    Yellipse2 -= 3;
    if (Yellipse2 <= 225) {
      stop2 = true;
    }
  }

  fill(175, 0, 130, 0.5);
  ellipse(width / 2, Yellipse2, diameter);
}
