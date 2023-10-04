var x = 50;
var y = 50;

function setup() {
  canvas = createCanvas(1000,400);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  frameRate(50);
}

function draw() {
  background('olive');
  
  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  y = constrain(y,0,height - 100);
  x = constrain(x,0,width - 100);

  if (rectIntersect(x, y, 100, 100, 800, 175, 75, 50)) {
    fill('chartreuse');
  } else {
    fill('darkkhaki');
  }

  // if (y >= 75 && y <= 225) {
  //   fill('chartreuse');
  // }
  // else {
  //   fill('darkkhaki');
  // }
  
  rect(800,175,75,50);
  
  fill('moccasin');
  rect(x,y,100,100);   
}


function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
  return (
    x1 < x2 + w2 &&
    x1 + w1 > x2 &&
    y1 < y2 + h2 &&
    y1 + h1 > y2
  );
}
