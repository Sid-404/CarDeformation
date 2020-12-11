var wall;
var car;
var speed;
var weight;
var def;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor="blue";
  car.velocityX=speed;
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="white";
}

function draw() {
  background(0);  
  if (wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  def=0.5*weight*speed*speed/22500;
    if (def<100){
      car.shapeColor="green";
    }
      else if (def>=100 && def<=180){
        car.shapeColor="yellow";
      }
      else if (def>180){
        car.shapeColor="red";
    }
  }
  drawSprites();
}