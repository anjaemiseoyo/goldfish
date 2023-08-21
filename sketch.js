let texts = [];
let slider;
let img;

function preload() {
 img = loadImage('design.jpg');
}


function setup() {
  
  createCanvas(600, 600);
  topLayer = createGraphics(width, height);
  
  
  topLayer.image(img, 0, 0);
  
  //topLayer.strokeWeight(30);
  
        
  topLayer.blendMode(REMOVE);
  
  // 브러시 두께 조정을 위한 슬라이더 설정하기
  brushSizeSlider = createButton('굵기 조정하기');
  sizeSlider = createSlider(1, 32, 4, 0.1);
  
  setupTexts();
}

function setupTexts() {
  textSize(30);
  for (let i = 0; i < 10; i++) {
    texts.push(new MovingText(random(width), random(height)));
  }
}

function draw() {
  background(220);
  drawTexts();

  
  if(mouseIsPressed){
    //크기조절 관련 코드
    //let sw = sizeSlider.value();
        //strokeWeight(sw);
    let sw = sizeSlider.value();
  topLayer.strokeWeight(sw);
    topLayer.line(pmouseX, pmouseY, mouseX, mouseY);
    
  }
  
  image(topLayer, 0, 0);

  
}

function drawTexts() {
  for (let text of texts) {
    text.move();
    text.display();
  }
}

class MovingText {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(-7, 1);
    this.ySpeed = random(-1, 1);
    this.message = "금붕어";
    fill(255, 126, 25);
  }
  
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  }
  
  display() {
    text(this.message, this.x, this.y);
    text(this.message, this.x - 70, this.y - 300);
    text(this.message, this.x + 10, this.y + 500);
  }
}
