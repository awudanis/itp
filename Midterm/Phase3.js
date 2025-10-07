function setup() {
  createCanvas(400, 400);
  noStroke();
  drawObject(100,100,1);
}


function drawObject(x,y,s) {
  translate(x, y);
  scale(s);
  fill(0);
  ellipse(30, 50, 50, 50);
  ellipse(70, 50, 50, 50);
  push();
  translate (50, 35)
  rotate(PI / 4);
  rect(0, 0, 50, 50);
  pop();  
}

