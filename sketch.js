// You could have multiple flags like: start, launch to indicate the state of the game.

//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.



/*const {Engine} = Matter 
is the same as c*/
 const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;




function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas= createCanvas(900,550);

    engine=Engine.create();
    world=engine.world;

    ground = new Ground(450, 530, 900, 50); 
  cannon = new Tanker(75,height-125,60,30);
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
Engine.update(engine);

ground.display();
cannon.display();
}


//function keyReleased() {
    // Call the shoot method for the cannon.
