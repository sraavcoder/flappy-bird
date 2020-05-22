var bird;
var pipes = [];

var score = 0;

var gameOver = false;

var Instructions = true;

var gameStart = false;

var j = true;

var x = 180;
function setup(){
  createCanvas(500,600);

  bird = new Bird();

  pipes.push(new Pipe());
  
}
function draw(){
  if(keyDown("space")){
    gameStart = true;
  }
 
 background(0);
 bird.show();
if(gameStart == true){


j = false;
 
 bird.move();
 

 if(frameCount%35==0){
   pipes.push(new Pipe());
 }

 for(var i = pipes.length-1;i>=0;i--){
   pipes[i].show();
   pipes[i].move();

  
     //pipes.splice(2,1)
  
   if(pipes[i].hits(bird)){
     pipes[i].speed = 0;
     gameOver = true;
   }
   if(pipes[i].offscreen()){
     pipes.splice(i,1)
   }
 }

 fill("white");
 textSize(80);
 text(''+score,220,150);
 if(gameOver == true){
   textSize(15);
   text('GAME OVER!! hope you like the game',120,190);
   text('press Ctrl+R to replay the game',140,220)
   Instructions = false;
 }
}
 if(Instructions == true){
   fill('white');
   textSize(18);
   text('Make your bird fly by pressing space bar and do not ',30,30);
   text('touch the pipes and the top and bottom of the canvas',30,60);
 }

if(j == true){
fill('pink');
textSize(25);
text('Press space bar to start the game',70,90);
}

 

}
function keyPressed(){
  if(keyCode == 32){
    bird.up();
   
    }
  
}