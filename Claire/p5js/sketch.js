function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
    circle(circleX,circleY,50); 
    if (circleY > height - 30) {
        speed = -5;
    }
    if(circleY < 30) {
      speed = 5;
    }
    if(circleX > width - 30) {
      circleY += speed;
      circleX -= speed;
      speed = -5;
    }
    if(circleX < 30) {
      speed = 5;
    }
    circleY += speed;
    circleX += speed;
  background(220);
  circle(200,200,200);
  fill(30,30,30)
  circle(120,100,100);
  fill(30,30,30)
  circle(275,100,100);
  fill(30,30,30)
  circle(200,230,25);
  fill(30,30,30)
  circle(150,175,50);
  fill(255,255,255)
  circle(150,175,25);
  fill(30,30,30)
  circle(245,175,50);
  circle(245,175,25);
  fill(250,250,250)  
}
