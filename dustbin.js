class dustbin
{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.w = 200;
        this.h = 100;
        this.t = 20;
        this.a = 0;
        var options = {isStatic: true}
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.w, this.t, options)
        this.leftBody = Bodies.rectangle(this.x-this.w/2, this.y-this.h/2, this.t, this.h, options)
        this.rightBody = Bodies.rectangle(this.x+this.w/2, this.y-this.h/2, this.t, this.h, options)
        World.add(world, this.bottomeBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
    }
    display(){
        push()
        translate(this.leftBody.position.x, this.leftBody.position.y);
        rectMode(CENTER)
        strokeWeight(4);
        fill(255,255,0)
        rect(0,0,this.t, this.h);
        pop()
        push()
        translate(this.rightBody.position.x, this.rightBody.position.y);
        rectMode(CENTER)
        strokeWeight(4);
        fill(255,255,0)
        rect(0,0,this.t, this.h);
        pop()
        push()
        translate(this.bottomBody.position.x, this.bottomBody.position.y);
        rectMode(CENTER)
        strokeWeight(4);
        fill(255,255,0)
        rect(0,0,this.w, this.t);
        pop()
    }
}