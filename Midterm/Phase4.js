function setup() {
  createCanvas(400, 400);
  background(204);
  noStroke();
  repeat(400);
}


function drawObject(x,y,s) {
  push();
  translate(x, y);
  scale(s);
  fill(0);
  ellipse(25, 30, 50, 50);
  ellipse(65, 30, 50, 50);
  
  push();
  translate (45, 15)
  rotate(PI / 4);
  rect(0, 0, 50, 50);
  pop();  
  
  pop();
}

function repeat(n) {
  let x = 0;
  let y = 0;
  let s = 0.22;
  
  for (let i = 0; i <= n-1; i++) {
    drawObject(x, y, s); 
    x += 20;
    if ((i+1)%20 === 0 && i !== 0 ){
      y += 20;
      x = 0;
    }
  }
}