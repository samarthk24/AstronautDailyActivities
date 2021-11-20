var bg,sleep, brush, gym, eat, bath, move;
var astronaut;

function preload(){
  bg= loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym1.png","gym2.png","gym2.png");
  eat = loadAnimation("eat1.png","eat1.png","eat1.png","eat2.png","eat2.png","eat2.png");
  bath = loadAnimation("bath1.png","bath1.png","bath1.png","bath2.png","bath2.png","bath2.png");
 move = loadAnimation("move1.png","move1.png","move2.png","move2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  astronaut = createSprite(width/2,height/2);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.125;
  
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  text("Space key = Sleeping",20, 130);

  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("space")){
    astronaut.changeAnimation("sleeping", sleep);
    astronaut.x = width/2;
    astronaut.y = height/2;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyWentDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = height-225;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyWentDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = height-225;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyWentDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = width/4;
    astronaut.y = height-225;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  if(keyWentDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = width/2;
    astronaut.y = height-225;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyWentDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

}