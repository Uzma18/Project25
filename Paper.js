class Paper{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2
        }
               

        this.body=Bodies.circle(x,y,(radius-20)/2,options);
        this.radius=radius;
        
        this.image=loadImage("paper.png");
        
        World.add(world,this.body);
        //console.log(this.body);
        //console.log(this.radius);
    }

    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    fill("white");
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,70,70); 
    pop();
    //console.log(image);    
    }
}