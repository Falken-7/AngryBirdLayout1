const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;
var pig1,pig2;
var Ground1 ;
var bird;
var log1,log2,log3,log4;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    bird = new Bird(200,350);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box (700,240,70,70);
    box4 = new Box (920,240,70,70);
    box5 = new Box (810,160,70,70);
    Ground1 = new Ground(600,380,1200,20);
    pig1 = new Pig (810,350);
    pig2 = new Pig (810,220);
    log1 = new Log (810,260,300,PI/2);
    log2 = new Log (810,180,300,PI/2);
    log3 = new Log (760,120,150,PI/5);
    log4 = new Log (870,120,150,-PI/5);

}

function draw(){
    background(0);
    Engine.update(engine);
console.log(this.box1);
console.log(this.box2);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    Ground1.display();
    pig1.display();
    pig2.display();
   bird.display();
   log1.display();
   log2.display();
   log3.display();
log4.display();
}