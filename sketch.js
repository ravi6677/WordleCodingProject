var trex, trex_running, trex_collided;
var ground, groundImage, invisibleGround;

function preload(){
  
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
  trex = createSprite(200,360,40,10);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,380,400,20);
  ground.addImage(groundImage);
  
  invisibleGround = createSprite(200,385,400,5);
  invisibleGround.visible = false;
  
}

function draw(){
  
  background("white");
  
  
  //console.log(trex.y);
  
  trex.collide(invisibleGround);
  
  if(keyDown("space")&& trex.y >= 327){
    trex.velocityY = -12;
  }
  
  trex.velocityY = trex.velocityY + 0.8;  
  
  ground.velocityX = -6;
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  
  drawSprites();
  
}