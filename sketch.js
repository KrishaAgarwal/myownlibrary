var fixedRect, movingRect;
var gameobject1, gameobject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameobject1 = createSprite(200,100,50,50);
  gameobject1.shapeColor = "white";

  gameobject2 = createSprite(400,100,50,50);
  gameobject2.shapeColor = "white";
}

function draw() {
  background(0,0,0);  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

//bounceOff(movingRect, fixedRect);

if(isTouching(movingRect, gameobject2)){
  movingRect.shapeColor = "red";
  gameobject2.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  gameobject2.shapeColor = "white";
}
  
  drawSprites();
}

