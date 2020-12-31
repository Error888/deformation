var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.depth = car.depth + 1
  wall = createSprite(1500,200,60,height/2);
  wall.depth = car.depth;

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
}

function draw() {
  background(0,0,0);  
  
  if(wall.x - car.x <= car.width/2 + wall.width/2){
    deformation = weight*speed*speed/45000
    
    if(defrmation > 180){
      car.shapecolor = "red";
    }
    if(100 < defrmation < 180){
      car.shapecolor = "yellow";
    }
    if(defrmation < 100){
      car.shapecolor = "green";
    }
  }
  text(deformation,800,200);
  drawSprites();
}