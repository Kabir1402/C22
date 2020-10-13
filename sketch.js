//Engine,World,Bodies
const Engine = Matter.Engine; //nameSpacing
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ground,ball;

function setup() {
  createCanvas(400,400);

  // to create a Physics Engine
  engine = Engine.create();
  
  //to create physical world
  world = engine.world;

  var ground_options ={

      isStatic: true

  }

  var ball_options = {

    restitution:1

  }

  //create the physical bodies
  ground = Bodies.rectangle(200,390,width,20,ground_options);
  ball = Bodies.circle(200,100,20,ball_options)

  //to add the bodies inside the world
  World.add(world,ground)
  World.add(world,ball)
  }

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,50,50)
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 20, 20)
  
}