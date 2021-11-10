var ball;
function preload(){
    ludo=loadImage("background.jpg")
}
function setup(){
    createCanvas(500,500);
    ball=createSprite(200,200,100,100);
    ball.shapeColor= "red";
}

function draw(){
    background(ludo);
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
