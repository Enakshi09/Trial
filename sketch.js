var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor="yellow"

}

function draw() {
  background(black);  

  drawSprites();

  if(wall.x-car.x<(car.width+wall.widt)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22500;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    } 
    if(deformation<180 && deformation>80)
    {
      car.shapeColor=color(230,230,0);
    } 
    if(deformation<80)
    {
      car.shapeColor=color(0,255,0);
    } 
  }
}