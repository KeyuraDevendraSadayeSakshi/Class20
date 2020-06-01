var fixedRect;
var movingRect;


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(100, 200, 50, 50);
  fixedRect = createSprite(400,200,50,50);
}

function draw() {
  background(255,255,255);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
   
      fixedRect.shapeColor = 'black'
      movingRect.shapeColor = 'black'
  }else {
    fixedRect.shapeColor = 'blue'
      movingRect.shapeColor = 'blue'
  }
  drawSprites();
}