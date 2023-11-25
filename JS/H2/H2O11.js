var animatie = [];
var aantalBeeldjes = 30;
var nummer = 0;
var breedte,hoogte;

function preload() {
  for (var b = 0;b < aantalBeeldjes;b++) {
    nieuw_beeldje = loadImage("images/sprites/wizard/opdracht_11B/frame("+ b +").png");
    animatie.push(nieuw_beeldje);
  }
}

function setup() {
  canvas = createCanvas(500,300);
  canvas.parent('processing');
  noStroke();
  frameRate(5);
  textFont("Georgia");
  textSize(18);
  breedte = animatie[0].width;
  hoogte = animatie[0].height;
}

// function draw() {
//   background('lavender');

//   image(animatie[nummer],150,0,5*breedte,5*hoogte); // de plaatjes zijn nu 2 keer groter 2^breedte.. etc
//   nummer++;

//   if (nummer == aantalBeeldjes) {
//     nummer = 0;
//   }

//   text("frameCount=" + frameCount,5,40);
//   text("nummer=" + nummer,5,70);
// }

function draw() {
  background('lavender');
  nummer = frameCount % aantalBeeldjes;
  image(animatie[nummer],150,0,5*breedte,5*hoogte);
  text("frameCount=" + frameCount,5,40);
  text("nummer=" + nummer,5,70);
 }