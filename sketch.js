var ground, paper, box;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(1600, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.

  ground = new Ground (width/2,670,width,20);

  paper = new Paper (200,450,70);

  box = new Box (1200,650);




  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  paper.display();
  box.display();
 
  
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.postion,{x:230,y:-350});
    }
}