var huisNummers = new Array(23, 25, 27, 29, 31, 33);
var huisEigenaren = new Array("Smiers", "Dekker", "Den Hartog", "Tolboom", "Kremer", "Velthuizen");
var kleur = 'lightgray';

function setup() {
  canvas = createCanvas(1000, 300);
  canvas.parent('processing');
  background('cornflowerblue');
  textFont("Georgia");
  noStroke();
  noLoop();
}

function draw() {
  tekenAchtergrond();

  for (var teller = 0; teller < huisNummers.length; teller++) {
    if (kleur === 'lightgrey') {
      kleur = 'darkgrey';
    } else {
      kleur = 'lightgrey';
    }

    tekenHuis(kleur, huisNummers[teller], huisEigenaren[teller], 150 * (teller), 0);
  }
}

function tekenHuis(kleur, nr, naam, x, y) {
  push();
  fill(kleur);
  rect(x, 110, 150, 150);
  fill('gray');
  triangle(x, 110, x + 150, 110, x + 75, 20);
  rect(x + 20, 170, 50, 90);
  fill('indianred');
  textSize(30);
  text(nr, x + 75, 190);
  fill('black');
  textSize(15);
  text(naam, x + 20, 165);
  pop();
}

function tekenAchtergrond() {
  fill('wheat');
  rect(0, 220, width, height - 220);
  translate(50, 0);
}

// gemaakt door TDG TPS 251123