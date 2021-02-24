class Pig{

    constructor(x,y){

        var options={
            restitution:0.8,
            friction:0.3,
            density:1.0
          }
        this.box=Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.box);
    this.width=50;
    this.height=50;
    }
    
    display(){
    
        var pos=this.box.position;
        var angle=this.box.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("green");
    rectMode(CENTER);
        rect(0,0,this.width,this.height);
    
        pop();
    }
    

}