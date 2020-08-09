const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var backgroundcolor = prompt("Choose your background color");

function setup() {
	createCanvas(1300, 700);

 	engine = Engine.create();
	world = engine.world;

	ground = createSprite(650,695,1300,20);

	//Create the Bodies Here.
	paper = new Paper(150,665,40);
	trashpart1 = new Trash(980,640,20,120);
	trashpart2 = new Trash(1230,640,20,120);
	trashpart3 = new Trash(1105,680,250,20);
    chain = new Chain(trashpart1.body,trashpart2.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundcolor);

  ground.shapeColor = rgb(random(255), random(255), random(255));
  
  paper.display();
  trashpart1.display();
  trashpart2.display();
  trashpart3.display();
  chain.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.setStatic(paper.body,false);
		Matter.Body.applyForce(paper.body,paper.body.position,{x:350,y:-350});
	}
}