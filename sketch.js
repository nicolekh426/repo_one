let speed_yellow = 1;
let speed_green = 1;
let x_yellow = 50;
let y_green = 350;
let color_yellow="yellow"
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
fill("orange");
  
  fill("green");
  circle(350, y_green, 50); // Green circle
  y_green = y_green - speed_green;

  // Reflection logic
  if (y_green < 0 || y_green > 400) {
    speed_green = -speed_green;
  }
  // if condition  not met else  to do another action 
  //else {console.log("do nothing")}

  fill(color_yellow);
  circle(x_yellow, 50, 50); // Yellow circle
  x_yellow = x_yellow + speed_yellow;
  
  if (x_yellow > 400 || x_yellow < 0) {
    x_yellow = 50;
   }
}
//Event Handling: The computer notices the click and does something, like changing the background color.

function mousePressed() {
  console.log("mouse is pressed");
  speed_yellow = 2;
}
