function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  background('lavender');
  textFont("Verdana");
  textSize(14);
  noStroke();
  //noLoop();
}

function draw() {
  
  fill('black');
  text("mouseX:" + round(mouseX) + " mouseY:"+round(mouseY),10,20);
  fill('indianred');
  ellipse(mouseX,height/2,10);
}
