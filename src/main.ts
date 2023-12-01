let angle = 0;
let angleOffset = 0;

window.setup = () => {
	createCanvas(windowWidth, windowHeight);
	angleOffset = random(-0.1, 0.1);
}

window.draw = () => {
	colorMode(HSB, 255);
	background(frameCount % 255, 255, 255);
	translate(width / 2, height / 2);
	rectMode(CENTER);
	noStroke();

	if(frameCount % 30 == 0) angleOffset = random(-0.1, 0.1);
	angle += angleOffset;
	rotate(angle);
	rect(0, 0, 50, 50);
}
