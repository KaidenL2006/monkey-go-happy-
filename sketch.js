
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,invisibleGround
var FoodGroup, obstacleGroup
var score, ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(70,520,20,20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.15;
  
  obstacleGroup = new Group();

  foodGroup = new Group();
  
  score = 0;
  
  invisibleGround = createSprite(300,540,600,10);
  invisibleGround.visible = false;
   
  ground = createSprite(300,550,1200,15);
  ground.velocityX = -4;
  ground.x= ground.width/2;
  
  
  
}


function draw() {
  background("white");
  
  monkey.velocityY = monkey.velocityY + .8;
  
  if(keyDown("space") && monkey.y >= 480 ){
    monkey.velocityY = -17;

  }
  
  if(ground.x<0){
      ground.x= ground.width/2;
     }
  
 monkey.collide(invisibleGround);
  
  spawnObstacle();
  
  
  drawSprites();
  

}





function spawnFood(){
  
}


function spawnObstacle(){
   if(frameCount % 100 === 0) {
    var obstacle = createSprite(600,500,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
     
    
    
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
    case 1: obstacle.addImage(obstacleImage);
              break;
    case 2: obstacle.addImage(obstacleImage);
              break;
    default: break;
    }
     
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.3;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}