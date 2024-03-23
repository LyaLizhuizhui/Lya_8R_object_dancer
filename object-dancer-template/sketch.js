/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new bruhDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class bruhDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    // add properties for your dancer here:
    this.bodyX = 0;
    this.bodyY = 30;
    this.bodyamp = 10;
    this.bodyfreq = 10;
    this.headX = 0;
    this.headY = -50;
    this.headfreq = 10;
    this.headamp = 10;
    this.mouthX = 0;
    this.mouthY = -20;
    this.mouthamp = 5;
    this.mouthfreq = 10;
    this.degree = 0;
    this.handfreq = 20;
    this.handamp = 0.4;
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.headX = this.headamp * sin(frameCount / this.headfreq);
    this.mouthX = this.mouthamp * sin(frameCount / this.mouthfreq + 1);
    this.degree = this.handamp * sin(frameCount / this.handfreq);

  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️




    //hand
    push();
    translate(20, -10);
    rotate(this.degree);
    stroke(255, 127, 80);
    strokeWeight(3);
    line(0, 0, 60, 0)
    pop();
    push();
    translate(-20, -10);
    rotate(this.degree);
    stroke(255, 127, 80);
    strokeWeight(3);
    line(-60, 0, 0, 0)
    pop();
    //body
    push();
    translate(0, -70);
    stroke(10, 117, 173);
    fill(58, 144, 189, 200);
    for (let i = 0; i < 23; i++) {
      this.bodyX = this.bodyamp * sin(frameCount / this.bodyfreq + i / 4);
      ellipse(this.bodyX, this.bodyY + i * 5, 40 + i * 5, 10);
    }
    pop();
    //mouth
    strokeWeight(3);
    stroke(224, 102, 102);
    fill(234, 153, 153);
    ellipse(this.mouthX, this.mouthY, 10, 15);
    fill(255);
    //head
    strokeWeight(5);
    stroke(255, 127, 80);
    ellipse(this.headX - 20, this.headY, 35, 20);
    ellipse(this.headX + 20, this.headY, 35, 20);
    fill(229, 114, 72);
    noStroke();
    circle(this.headX - 20, this.headY, 15, 15);
    circle(this.headX + 20, this.headY, 15, 15);
    stroke(229, 114, 72);
    strokeWeight(3);
    line(this.headX - 20, this.headY - 20, this.headX - 20, this.headY - 15);
    line(this.headX + 20, this.headY - 20, this.headX + 20, this.headY - 15);
    line(this.headX - 33, this.headY - 17, this.headX - 30, this.headY - 13);
    line(this.headX + 33, this.headY - 17, this.headX + 30, this.headY - 13);
    line(this.headX - 7, this.headY - 17, this.headX - 10, this.headY - 13);
    line(this.headX + 7, this.headY - 17, this.headX + 10, this.headY - 13);
    noStroke();
    fill(255);
    circle(this.headX - 18, this.headY - 4, 3);
    circle(this.headX + 22, this.headY - 4, 3);





    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/