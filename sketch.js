const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherimage = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {

 isStatic: true

  };

 playerBase = Bodies.rectangle(200,350,180,150, options);
 World.add(world, playerBase);

 player = Bodies.rectangle(250, playerBase.position.y - 160,50,180, options);
 World.add(world, player)

 playerArcher = Bodies.rectangle(280,player.position.y,50,90,options);
 World.add(world, playerArcher);


}

function draw() {
  background(backgroundImg);


  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)
  image(playerArcherimage,playerArcher.position.x,playerArcher.position.y,50,90)
}
