class Hero {
  constructor(x,y,w,h)
	{
		var options = { 
			density: 10, 
			frictionAir: 0
		};
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.image=loadImage("superhero1.png");
		this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0, this.w, this.h)
			pop()
			
	}
}
