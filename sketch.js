var PLAY= 1
var END = 0
var gameState = PLAY
var msound,jump
var oGroup,cGroup

var mario,marioanim
var ground
var clouds,cloudima
var obstacles,obanim
function preload() {
  marioanim=loadAnimation("sprite_mario0.png","sprite_mario1.png","sprite_mario2.png")
  cloudima=loadImage("sprite_clouds0.png")
  obanim=loadAnimation("e1.png","e2.png")
  msound=loadSound("1 01 Main Theme Overworld.mp3")
  jump=loadSound("Mario-jump-sound.mp3")
}
function setup() {
  createCanvas(800,400);
  mario=createSprite(400, 200, 50, 50);
  mario.addAnimation("m1",marioanim)
  mario.scale=0.1
  oGroup=createGroup()
  cGroup=createGroup()
 ground=createSprite(400,380,800,10)
 msound.play()
}

function draw() {
  background(255,255,255);  
  drawSprites();
 console.log(mario.y)
  
  mario.velocityY=mario.velocityY+1

  mario.collide(ground)
  

if(gameState===PLAY){
  if(keyDown(UP_ARROW)&&mario.y>=351)
  {
    mario.velocityY=-10
    jump.play()
  }
  spawnClouds()
  spawnObstacles()
  if(mario.isTouching(oGroup)) {
    gameState=END
  }
}
 
 else if(gameState===END){
  oGroup.setVelocityXEach(0)
  cGroup.setVelocityXEach(0)
  
  }


} 








function spawnClouds()
{
    if(frameCount%60===0){
  clouds=createSprite(800,100,20,20)
  clouds.addImage(cloudima)
  clouds.velocityX=-10
  clouds.scale=0.2
  cGroup.add(clouds)
  }

}

function spawnObstacles()
{
if(frameCount%60===0)
{
obstacles=createSprite(800,351,20,20)
obstacles.addAnimation("o1",obanim)
obstacles.velocityX=-3
oGroup.add(obstacles)

}

}