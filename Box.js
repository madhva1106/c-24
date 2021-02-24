class Box{

constructor(x,y){

    var options={
        restitution:0.8,
        friction:0.3,
        density:1.0
      }
    this.box=Bodies.rectangle(x,y,70,70,options);
    World.add(world,this.box);
this.width=70;
this.height=70;
}

display(){

    var pos=this.box.position;
    var angle=this.box.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
rectMode(CENTER);
    rect(0,0,this.width,this.height);

    pop();
}


}