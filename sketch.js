
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new RoofObg (width/2, height/2, 250, 20);

	bob1 = new Bob(width/2, height/2+150, 20);	
	bob2 = new Bob(width/2+40, height/2+150, 20);
	bob3 = new Bob(width/2+80, height/2+150, 20);
	bob4 = new Bob(width/2-40, height/2+150, 20);
	bob5 = new Bob(width/2-80, height/2+150, 20);

	rope1 = new Chain(bob1.body, roof.body, width/2, height/2);
	rope2 = new Chain(bob2.body, roof.body, width/2+40, height/2);
	rope3 = new Chain(bob3.body, roof.body, width/2+80, height/2);
	rope4 = new Chain(bob4.body, roof.body, width/2-40, height/2);
	rope5 = new Chain(bob5.body, roof.body, width/2-80, height/2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(bob3.body, bob3.body.position,{x:0,y:-80});
	}
}



