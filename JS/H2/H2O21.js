var cirkel = {
  diameter: 40,
  straal: null,
  x: null,
  y: null,
  alpha: 1.0,
  aantalRaak: 0,

  teken() {
    push();
    noStroke();
    fill(246, 181, 79,this.alpha);
    ellipse(this.x,this.y,this.diameter);
    pop();
  },

  kiesEenPlek() {
    cirkel.x = random(this.diameter,canvas.width - this.diameter);  // deze twee lijnen zorgen ervoor dat het rondje steeds ergens anders komt te staan, "random"
    cirkel.y = random(this.diameter + 40,canvas.height - this.diameter);
  },

  controleerRaak() {
    afstandMuisCirkel = dist(mouseX,mouseY,this.x,this.y);

    if (mouseIsPressed == true) {
      if (afstandMuisCirkel <= this.diameter) {
        this.alpha -= 0.025;
        this.diameter --;
        this.aantalRaak ++;
        this.kiesEenPlek();
      }
    }

  }
}

function preload() {
  achtergrond = loadImage("images/choco.jpg");
}

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  colorMode(RGB,255,255,255,1);
  frameRate(10);
  textFont("Verdana");
  textSize(30);
  cirkel.straal = cirkel.diameter / 2;
  cirkel.kiesEenPlek();
}

function draw() {
  background(achtergrond);

  if (keyIsPressed) {
    background('black');
  }

  cirkel.controleerRaak();
  cirkel.teken();

  push();
  fill(225,225,225);
  rect(0, 0, width, 40);
  pop();
  text(cirkel.aantalRaak + " keer raak geklikt!", 20, 30);
}