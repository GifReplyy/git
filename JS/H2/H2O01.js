var kater, bomen, kever;
var keverX;
var keverY;

function preload() {
  kater = loadImage("images/brieck.jpg");
  bomen = loadImage("images/bomen.jpg");
  kever = loadImage("images/sprites/kever.png");
}

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  keverX = 150;
  keverY = 100;
}

function draw() {
  background('grey');  // kater naam is, Brieck.
  image(kater,25,25,400,400); // 25 en 25 voor de padding en de 400 bij 400 is de x en y lengte 

  keverX += random(-5, 5); // kiest een random getal tussen -5 en 5
  keverY += random(-5, 5);
  image(kever, keverX, keverY, 30, 30);  // Verander de grootte van de kever naar 30x30 pixels
}
// gemaakt door TDG TPS 251123