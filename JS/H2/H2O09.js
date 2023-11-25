var foto;
var pixelKleur;
var rood, groen, blauw;
var raster = 30;

function preload() {
  foto = loadImage('images/brieck.jpg');
}

function setup() {
  var canvas = createCanvas(540, 540);
  canvas.parent('processing');
  noStroke();
  foto.loadPixels();
  noLoop();
}

function draw() {
  background(foto);

  for (var k = 0; k < foto.width; k += raster) {
    for (var r = 0; r < foto.height; r += raster) {
      pixelKleur = foto.get(k, r);
      fill(pixelKleur);
      rect(k, r, raster, raster);
    }
  }
}
