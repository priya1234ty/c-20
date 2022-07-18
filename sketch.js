var pyramid
var mummy

function preload(){
 pyramidImg=loadImage("egypt.jpeg")
 mummyImg=loadImage("mummy.png")

 
}

function setup() {
    createCanvas(600,330)
    pyramid=createSprite(width/2,150);
    pyramid.addImage(pyramidImg);
    pyramid.velocityX = -7;
    pyramid.x=pyramid.width/2


    mummy=createSprite(400,250,20,10)
    mummy.addImage(mummyImg)
    mummy.velocityX=8
    mummy.scale=0.3
    
 


}

function draw() {
background(0)


  if(pyramid.x < 0){
    pyramid.x = pyramid.width/2;
   
  }
 drawSprites()
}