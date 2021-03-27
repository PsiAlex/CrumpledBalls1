class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}