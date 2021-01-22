var fairy , fairyImg , fairyStanding;
var star , starImg;
var scene , sceneImg;
var music;


function preload()
{
   fairyImg = loadAnimation("fairy1.png","fairy2.png");
   fairyStanding = loadImage("fairy.png");
   


   starImg = loadImage("star.png");
   sceneImg = loadImage("starnight.png");

   music = loadSound("JoyMusic.mp3");
}

function setup() {
  createCanvas(1800,800);

  scene = createSprite(0,0,2000,800);
  scene.addImage(sceneImg);
  
  
  fairy = createSprite(200,300,50,50);
  fairy.addImage(fairyStanding);
  fairy.scale=0.1;
 
  star = createSprite(800,50,20,20);
  star.addImage(starImg);
  star.scale=0.3
}

 function draw() {

  

  if(keyDown(RIGHT_ARROW)){
   fairy.velocityX  = 2;

   fairy.addAnimation("fairyMoving" , fairyImg);
   fairy.changeAnimation("fairyMoving");

  }

  if(keyDown(RIGHT_ARROW)){

   star.velocityY = 1;

   
  }

  if(fairy.isTouching(star)){


   star.velocityY = 0;
   fairy.velocity = 0;

  }
   drawSprites();
}


