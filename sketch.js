var boy
function preload(){
    boyimg = loadImage("unnamed.gif");

}
function setup() {
    createCanvas(500,500);
    boy = createSprite(250,250,50,50);
    boy.addImage("boy1", boyimg)
}
function draw(){
    drawSprites();
}