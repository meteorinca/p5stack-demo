/*
Based on Rectangles 2 by @b2renger:
https://github.com/b2renger/p5js_patterns/blob/master/rectangles_2/sketch.js
*/

let size;
let randomVal;
let round;
let step = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // rectMode(CENTER);
  randomVal = random(100);
  size = min(width / 30, height / 30);
  
  //Calculates the integer closest to the n parameter. For example, round(133.8) returns the value 134. Maps to Math.round().
  round = random(size / 2);
}

function draw() {
  background(0);
  randomVal += 0.01 ;
  fill(255);
  for (let x = size; x < windowWidth - size; x += size) {
    for (let y = size; y < windowHeight - size; y += size) {
      let n = noise(randomVal, x / 120, y / 40) * size;
      let round = noise(randomVal / 2, x / 50, y / 100) * (size / 4);
      rect(x, y, n, n,round);
    }
  }
}

function mouseReleased() {
  randomVal = random(1000);
  step = random(100) / 1000;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  size = min(width / 20, height / 20);
}
