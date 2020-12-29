
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5;
var ground;
var Roof,roof2,roof3,roof4;
var rop,rop2,rop3,rop4,rop5;
function preload()
{
	
}

function setup() {
	createCanvas(2800, 2700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new bob(510,500,30);
	bob2 = new bob(570,500,30);
	bob3 = new bob(630,500,30);
	bob4 = new bob(690,500,30);
	bob5 = new bob(750,500,30);
	Roof = new rof(630,200,60,50);
	roof2 = new rof(570,200,60,50);
	roof3 = new rof(510,200,60,50);
	roof4 = new rof(690,200,60,50);
	roof5 = new rof(750,200,60,50);
	rop = new rope(bob3.body,Roof.body,0,0);
	rop2 = new rope(bob2.body,roof2.body,0,0);
	rop3 = new rope(bob1.body,roof3.body,0,0);
	rop4 = new rope(bob4.body,roof4.body,0,0);
	rop5 = new rope(bob5.body,roof5.body,0,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150,0,255);
  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rop.display();
	rop2.display();
	rop3.display();
	rop4.display();
	rop5.display();
	Roof.display();
	roof2.display();
	roof3.display();
	roof4.display();
	roof5.display();

  drawSprites();
 
}

function keyPressed(){
	
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-18 ,y:-18});
		
	}
}

//pointB:{x: this.offSetX, y: this.offSetY} 