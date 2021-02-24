class Bird{

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
    
        this.box.position.x=mouseX;
        this.box.position.y=mouseY;

        var angle=this.box.angle;
        push();
        translate( this.box.position.x, this.box.position.y);
        rotate(angle);
        fill("blue");
    rectMode(CENTER);
        rect(0,0,this.width,this.height);
    
        pop();
    }

}