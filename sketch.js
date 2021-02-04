const Engine = Matter.Engine; 
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var  package , helicopter ,  package1 , helicopter1 , ground , PackageBody , helicopter2 , helicopter3 , groudSprite , ground1;

function preload() {
 package1=loadImage("package.png");
 helicopter1=loadImage("helicopter.png");
}

function setup(){
    createCanvas(400,400);
    engine=Engine.create();
    world=engine.world;
    var ground_options={
        isStatic:true
    }

    var package_options={
       restitution:1.0          
	}

	var helicopter_options={
		restitution:1.0          
	 }

    PackageBody=Bodies.circle(200,100,20,package_options);
	World.add(world,PackageBody);
	
	helicopter2=Bodies.circle(200,100,20,helicopter_options);
    World.add(world,helicopter2);

    ground1=Bodies.rectangle(200,390,200,20,ground_options);
	World.add(world,ground1);
	
	packageSprite=createSprite(width/2,200,20,20);
	packageSprite.addImage(package1);
	packageSprite.scale=0.2;

	helicopter3=createSprite(width/2,200,20,20);
	helicopter3.addImage(helicopter1);
	helicopter3.scale=0.2;

    groundSprite=createSprite(width/2,height-35,width,10);
    groundSprite.shapeColor="grey";

    console.log(groundSprite);
    Engine.run(engine);
}
function draw(){
rectMode(CENTER);
background(0);
 packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
 Matter. Body.setStatic(packageBody,false);
    
  }
}
}
