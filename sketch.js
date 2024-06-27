function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    stroke("white");
    fill(255, 153, 204);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  