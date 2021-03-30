class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
		'density':1,
		'friction':5,
		'restitution':0.3
	
		
	}
		this.body = Bodies.circle(x, y, (r-20)/2, options);
		
		this.x=x;
		this.y=y;
		this.r=r;
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
		ellipse(0,0,this.r,this.r);
			pop()
	}

}