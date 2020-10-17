
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var dustbin1Sprite, dustbin2Sprite, dustbin3Sprite;
var paper;


function setup(){
	var canvas = createCanvas(1150,700);
	rectMode(CENTER);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
  
    dustbin1Sprite = new dustbin(900,570,20,200);
	dustbin2Sprite = new dustbin(1100,570,20,200);
	dustbin3Sprite = new dustbin(990,660,200,20)
	paper = new Paper(100,100,20);

	Engine.run(engine);

       
}

function draw(){
   	
  background(0);
  Engine.update(engine);   
  //strokeWeight(4);

  ground.display();

 
  dustbin1Sprite.display();
  dustbin2Sprite.display();
  dustbin3Sprite.display();
   
  paper.display();

}


function keyPressed (){

if (keyCode === UP_ARROW){

Matter.Body.applyForce (paper.body,paper.body.position,{x:85, y:-85})
}
}


