function setup()
{
	createCanvas(800, 800);
	fill(0);
	strokeWeight(6);
	c0 = color(255, 255, 255);
	c1 = color(0, 0, 0);
	c2 = color(255, 0, 255);
	c3 = color(0, 255, 255);
	canvas.style = "";

	//Line 1 (Horizontal)
	x = width/2 - 6;
	y = 0; //randomization	
	
	//Line 2 (Vertical)
	x1 = 0; //randomization
	y1 = height/2 - 6;
	
	//Ellipses radius
	r_1 = 100;
	
}

function randomization()
{
	if (mouseIsPressed)
	{
		x1 = random(-width/2 + 6, width/2 - 6);
		y = random(-height/2 + 6, height/2 - 6)
		c0 = color(random(0,255), random(0, 255), random(0,255));
		c1 = color(random(0,255), random(0, 255), random(0,255));
		c2 = color(random(0,255), random(0, 255), random(0,255));
		c3 = color(random(0,255), random(0, 255), random(0,255));
	} 
}


function draw()
{	
	background(255);
	translate(width/2, height/2);
	randomization();
	
	//Line 1 (Horizontal)
	stroke(random(0, 255), random(0, 255), random(0, 255));
	line(x, y, -x, y);

	//Line 2 (Vertical)
	line(x1, y1, x1, -y1);

	//1st Quadrant
	fill(c0);
	rect(x1, y, -x - x1, -y1 - y);
	filter(INVERT);
	circle((-x - x1)/2 + x1, (-y1 - y)/2 + y, random(0, 200));
	filter(INVERT);

	//2nd Quadrant
	fill(c1);
	rect(x1, y, x - x1, -y1 - y);
	filter(INVERT);
	circle((x - x1)/2 + x1, (-y1 - y)/2 + y, random(0, 200));
	filter(INVERT);

	//3rd Quadrant
	fill(c2);
	rect(x1, y, -x - x1, y1 - y)
	filter(INVERT);
	circle((-x - x1)/2 + x1, (y1 - y)/2 + y, random(0, 200));
	filter(INVERT);

	//4th Quadrant
	fill(c3);
	rect(x1, y, x - x1, y1 - y)
	filter(INVERT);
	circle((x - x1)/2 + x1, (y1 - y)/2 + y, random(0, 200));
	filter(INVERT);
}
