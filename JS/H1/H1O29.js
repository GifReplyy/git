var aantal = 5;
var schaal = 1; // Declareer de schaal buiten de draw-functie.
var Nbloemen = 2;
var breedte;

function setup() {
  canvas = createCanvas(1000, 450);
  canvas.parent('processing');
  frameRate(10);
  colorMode(RGB, 255, 255, 255, 1);
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background('lavender');
  fill('black');
  text("aantal = " + aantal, 10, 20);
  breedte = width / Nbloemen;

  push();
  scale(schaal);
  translate(0.5*breedte,225);

  for (var n = 0; n < Nbloemen;n++) {
    tekenBloem();
    translate(width/Nbloemen, 0);
  }
  pop();

  if (keyIsDown(LEFT_ARROW) && aantal >= 2) {
    aantal--;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    aantal++;
  }
  if (keyIsDown(UP_ARROW)) {
    schaal += 0.05; // Pas de schaalfactor aan om te vergroten.
  }
  if (keyIsDown(DOWN_ARROW)) {
    schaal -= 0.05; // Pas de schaalfactor aan om te vergroten.
  }
  if (keyIsDown(68)) {
    Nbloemen += 1; // Pas de schaalfactor aan om te vergroten.
  }
  if (keyIsDown(65)) {
    Nbloemen -= 1; // Pas de schaalfactor aan om te vergroten.
  }
}

function tekenBloem() {
  fill(178, 34, 34, 0.7);
  for (var n = 0; n < aantal; n++) {
    ellipse(0, 0, 400, 50);
    rotate(360 / aantal);
  }

  fill(255, 195, 0, 0.5);
  for (var n = 0; n < aantal; n++) {
    rect(0, 0, 75, 75);
    rotate(360 / aantal);
  }
}