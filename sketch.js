const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
function setup() {
  createCanvas(1800,1400);
  engine = Engine.create()
  world = engine.world
  var ball_options = {
    isStatic: false,
    restitution : 2
  }

  ball = Bodies.circle(300,200,200,ball_options);
  World.add(world,ball)
  var ground_options = {
    isStatic:true
  }
ground = Bodies.rectangle(30,700,1800,20,ground_options);
World.add(world,ground);



}

function draw() {
  background("blue");  
 Engine.update(engine)
 fill("brown")
rect(ground.position.x,ground.position.y,1800,80)
 ellipse(ball.position.x,ball.position.y,200,200)

}