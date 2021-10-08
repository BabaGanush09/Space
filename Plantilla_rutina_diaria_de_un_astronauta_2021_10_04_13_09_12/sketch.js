var bg,bgImg;
var sleep,sleepAnimation;
var brush,brushAnimation;
var gym,gymAnimation;
var eat,eatAnimation;
var drink,drinkAnimation;
var move,moveAnimation;
var astronaut;


function preload(){
bgImg=loadImage("images/iss.png");
sleepAnimation=loadAnimation("images/sleep.png");
brushAnimation=loadAnimation("images/brush.png");
gymAnimation=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
eatAnimation=loadAnimation("images/eat1.png","images/eat2.png");
drinkAnimation=loadAnimation("images/drink1.png","images/drink2.png");
moveAnimation=loadAnimation("images/move.png","images/move1.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);


  astronaut=createSprite(200,200,10,10);
  astronaut.addAnimation("sleep",sleepAnimation);
  astronaut.scale= 0.1;

}

function draw() {
  background("black");

  if(keyDown("UP_ARROW")){
astronaut.addAnimation("brush", brushAnimation);
astronaut.changeAnimation("brushing");
astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;
  }




drawSprites();
}