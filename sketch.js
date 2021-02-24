const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,object,ground,ball;
var box,box1,box2,box3,box4;
var pig1,pig2;
var log1,log2,log3,log4,log5;
var bird;


function setup() {
  var canvas= createCanvas(1200,400);
 engine=Engine.create();
  world=engine.world;
  
  ground=new Ground(600,height,1200,20);
box1=new Box(700,320);
box2=new Box(920,320);
pig1 =new Pig(810,350);
log1=new Log(810,260,300,PI/2);

box3=new Box(700,240);
box4=new Box(920,240);
pig2=new Pig(810,220);
log2=new Log(810,180,300,PI/2);

box5=new Box(810,160);
log4=new Log(760,120,150,PI/4);
log5=new Log(870,120,150,-PI/8);

bird=new Bird(200,200);
}
  


function draw() {
  background("black");  
 
  Engine.update(engine);
  fill("yellow");
  
  ground.display();
 box1.display();
 box2.display();
 pig1.display();
 log1.display();

 box3.display();
 box4.display();
 pig2.display();
 log2.display();

 box5.display();
 log4.display();
 log5.display();


 bird.display();
 

}