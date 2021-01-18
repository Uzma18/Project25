class Dustbin{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.leftBody = Bodies.rectangle(x-76,y,15, 150, options);
        this.leftBody.width=15;
        this.leftBody.height=150;
        World.add(world,this.leftBody);
        this.rightBody = Bodies.rectangle(x+76,y,15, 150, options);
        this.rightBody.width=15;
        this.rightBody.height=150;
        World.add(world,this.rightBody);
        this.baseBody = Bodies.rectangle(x,y,150, 15, options);
        this.baseBody.width=150;
        this.baseBody.height=15;
        this.image=loadImage("dustbingreen.png")
        World.add(world,this.baseBody);

    }

    display(){
        var pos1=this.leftBody.position;
        rectMode(CENTER);
        fill("white");
        rect(pos1.x,pos1.y,this.leftBody.width,this.leftBody.height);
        var pos2=this.rightBody.position;
        rectMode(CENTER);
        fill("white");
        rect(pos2.x,pos2.y,this.rightBody.width,this.rightBody.height);
        var pos3=this.baseBody.position;
        imageMode(CENTER);
        fill("white");
        image(this.image,pos3.x,pos3.y,150,150);
        rectMode(CENTER);
        fill("white");
        rect(pos3.x,pos3.y+80,150,15);
    }
}