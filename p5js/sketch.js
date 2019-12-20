function setup()
{
	createCanvas(800, 800);
	stroke(0);
	fill(0);
	strokeWeight(6);
	
	//Line 1 (Horizontal)
	x = width/2 - 6;
	y = 0; //randomization	
	
	//Line 2 (Vertical)
	x1 = 0; //randomization
	y1 = height/2 - 6;
	
	//Ellipses radius
	r_1 = 50;
}


function draw()
{	
	background(255);
	translate(width/2, height/2);
	
	//Line 1 (Horizontal)
	line(x, y, -x, y);

	//Line 2 (Vertical)
	line(x1, y1, x1, -y1);

	//1st Quadrant
	fill(255, 0, 0);
	rect(x1, y, -x - x1, -y1 - y);
	circle((-x - x1)/2 + x1, (-y1 - y)/2 + y, r_1);

	//2nd Quadrant
	fill(0, 255, 0);
	rect(x1, y, x - x1, -y1 - y);
	circle((x - x1)/2 + x1, (-y1 - y)/2 + y, r_1);
	
	//3rd Quadrant
	fill(0, 0, 255);
	rect(x1, y, -x - x1, y1 - y)
	circle((-x - x1)/2 + x1, (y1 - y)/2 + y, r_1);

	//4th Quadrant
	fill(255, 255, 0);
	rect(x1, y, x - x1, y1 - y)
	circle((x - x1)/2 + x1, (y1 - y)/2 + y, r_1);

	if (mouseIsPressed)
	{
		x1 = random(-width/2 + 6, width/2 - 6);
		y = random(-height/2 + 6, height/2 - 6)
	} 
}
