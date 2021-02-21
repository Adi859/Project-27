
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var bob1,bob2, bob3, bob4, bob5 ; 
var roof ;
var sling1,sling2,sling3,sling4,sling5 ;  


function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(300,600,50) ;
	bob2 = new Bob(350,600,50)  ; 
	bob3 = new Bob(400,600,50) ; 
	bob4 = new Bob(450,600,50) ;
	bob5 = new Bob(500,600,50) ; 
	 
	
	roof = new Roof(400, 300, 500, 20) ; 

	sling1 = new Rope(bob1.body,{x:300,y:300}) ; 
	sling2 = new Rope(bob2.body,{x:350,y:300}) ; 
	sling3= new Rope(bob3.body,{x:400,y:300}) ;
	sling4 = new Rope(bob4.body,{x:450,y:300}) ;
	sling5 = new Rope(bob5.body,{x:500,y:300}) ; 
	
	



	Engine.run(engine);
  
}


function draw() {
  background("white");
  rectMode(CENTER);
  Engine.update(engine) ;  



  roof.display () ;

  bob1.display () ;
  bob2.display ()  ;
  bob3.display () ; 
  bob4.display ()  ;
  bob5.display () ; 
  

  sling1.display() ; 
  sling2.display () ; 
  sling3.display () ; 
  sling4.display () ;
  sling5.display () ; 
  
  keyPressed(); 
  drawSprites();
 
}


function keyPressed() { 
	if (keyCode === 32) 
	{ 
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:0.1,y:0.1}); 
  } 
} 











  




	







