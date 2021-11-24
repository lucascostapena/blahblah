function setup() {
  createCanvas(1920, 1080);
  frameRate (30);
  }
  function draw() {
  background(0);
  fill (0,255,255);
  circle (random(0, 1920), random(0,1080), 50);
  circle (random(0, 1920), random(0,1080), 100);
  circle (random(0, 1920), random(0,1080), 200);
  circle (random(0, 1920), random(0,1080), 300);
  circle (random(0, 1920), random(0,1080), 50);
  circle (random(0, 1920), random(0,1080), 400);
  }