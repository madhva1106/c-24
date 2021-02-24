class Log{

        constructor(x,y,height,angle){
        
            var options={
                restitution:0.8,
                friction:1.0,
                density:2.0
              }
            this.box=Bodies.rectangle(x,y,20,height,options);
            World.add(world,this.box);
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.box,angle);
        }
        
        display(){
        
            var pos=this.box.position;
            var angle=this.box.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            fill("red");
        rectMode(CENTER);
            rect(0,0,this.width,this.height);
        
            pop();
        }
        
        
        }

