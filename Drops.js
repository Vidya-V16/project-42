class Drops{
    constructor(x,y){
        var options={
            restitution:0.1,
            friction:1.0
        }
        this.rain=Bodies.circle(x,y,5,options);
        this.x=x;
        this.y=y;
        World.add(world,this.rain);
    }
    update(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
    display(){
        var pos=this.rain.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,5,5);
    }
}