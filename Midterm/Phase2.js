function setup() {
  createCanvas(150, 150);
  //background(204);
  noStroke();
}


function draw() {
  fill(0);
  ellipse(30, 50, 50, 50);
  ellipse(70, 50, 50, 50);
  push();
  translate (50, 35)
  rotate(PI / 4);
  rect(0, 0, 50, 50);
  pop();  
}
