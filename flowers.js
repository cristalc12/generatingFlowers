let flowers = [];

function setup() {
  createCanvas(400, 400);
  
  // frameRate(10);
  
  flowerPower(20);
  
}

function draw() {
  background('rgb(170,112,170)')
  
  updateAndDrawFlowers();
  
}

function createFlower() {
  
 let flower = {
  x: random(20, 380),
  y: random(20, 380),
  size: random(20, 75),
  lifeSpan: random(255, 300),
  flowerColor: color(random(255), random(255), random(255)),
};
  
  return flower;
}

function drawFlower (flower) {
  
  noStroke();
  fill(flower.flowerColor);
  
  //petals
  ellipse(flower.x, flower.y, flower.size*2, flower.size); 
  ellipse(flower.x, flower.y, flower.size, flower.size*2);
  

// Draw a yellow center.
  
  fill(255, 204, 0);
  circle(flower.x, flower.y, flower.size/2);
  
}

function flowerPower(flowerNum) {
  
  for (let i = 0; i < flowerNum ; i++) {
    let flower = createFlower();
    flowers.push(flower);
  }
  
}

function updateAndDrawFlowers() {
  
  for (let flower of flowers) {
    drawFlower(flower);
    
    flower.size *= 0.99;
    flower.lifeSpan -= 1;
    
    if (flower.lifeSpan <= 0) {
      let i = flowers.indexOf(flower);
      flowers.splice(i, 1);
    }
  
  }
}

function mousePressed() {
  let flower = createFlower();
  
  flower.x = mouseX;
  flower.y = mouseY;
  
  flowers.push(flower);
}
