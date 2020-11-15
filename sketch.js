var gameState = "start";

function preload() {
  bg = loadImage("Graveyard/gravetileset.jpg")
  alanStand = loadAnimation("../Alan/Idle__000.png","../Alan/Idle__001.png");
  alanRun = loadAnimation("Alan/Run__000.png","Alan/Run__001.png","Alan/Run__002.png","Alan/Run__003.png","Alan/Run__004.png","Alan/Run__005.png","Alan/Run__006.png","Alan/Run__007.png","Alan/Run__008.png","Alan/Run__009.png");
  alanJump = loadAnimation("Alan/Jump__000.png","Alan/Jump__001.png","Alan/Jump__002.png","Alan/Jump__003.png","Alan/Jump__004.png","Alan/Jump__005.png","Alan/Jump__006.png","Alan/Jump__007.png","Alan/Jump__008.png","Alan/Jump__009.png");
  alanAttack = loadAnimation("Alan/Attack__000.png","Alan/Attack__001.png","Alan/Attack__002.png","Alan/Attack__003.png","Alan/Attack__004.png","Alan/Attack__005.png","Alan/Attack__006.png","Alan/Attack__007.png","Alan/Attack__008.png","Alan/Attack__009.png");
  alanDead = loadAnimation("Alan/Dead__000.png","Alan/Dead__001.png","Alan/Dead__002.png","Alan/Dead__003.png","Alan/Dead__004.png","Alan/Dead__005.png","Alan/Dead__006.png","Alan/Dead__007.png","Alan/Dead__008.png","Alan/Dead__009.png");
}

function setup() {
  createCanvas(1200,800);
  //rectMode(CENTER);
  block1 = createSprite(0,500,500,5);
  block2 = createSprite(0,200,500,5);
  block3 = createSprite(515,300,335,5);
  block4 = createSprite(730,500,250,5);
  block5 = createSprite(985,600,250,5);
  block6 = createSprite(475,700,250,5);
  block7 = createSprite(1075,200,250,5);
  alan = createSprite(50,460);
  alan.addAnimation("stand", alanStand);
  alan.addAnimation("run", alanRun);
  alan.addAnimation("jump", alanJump);
  alan.scale = 0.15;
  
  
}

function draw() {
  background(bg);
  if(keyDown("space")) {
    gameState = "play";
  }
  if(gameState = "play") {
    if(keyDown("RIGHT_ARROW")) {
      alan.x = alan.x + 3;
      //alan.mirrorX(alan.mirrorX() * -1);
      alan.changeAnimation("run", alanRun)
    }else {
      alan.changeAnimation("stand", alanStand);
    }
    if(keyDown("LEFT_ARROW")) {
      alan.x = alan.x - 3;
      alan.mirrorX*-1 ;
      alan.changeAnimation("run", alanRun)
    }else {
      alan.changeAnimation("stand", alanStand);
    }
    if(keyDown("UP_ARROW")) {
      alan.velocityY = -5;
      alan.changeAnimation("jump", alanJump);
    }
    alan.velocityY = alan.velocityY + 0.5;
    alan.collide(block1);
    alan.collide(block2);
    alan.collide(block3);
    alan.collide(block4);
    alan.collide(block5);
    alan.collide(block6);
    alan.collide(block7);

  }
  

  drawSprites();


}