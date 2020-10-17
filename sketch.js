var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

var survival = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(30, 350, 10, 10);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(200, 385, 400, 10);
  ground.x = ground.width / 2;
  ground.velocityX = -3;

  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("lightblue");

  stroke("black");
  textSize(20);
  survival = Math.ceil(frameCount / frameRate());
  text("Survival Time: " + survival, 150, 50);

  if (keyDown("space")) {
    monkey.velocityY = -12;
  }

  monkey.velocityY = monkey.velocityY + 0.8;

  if (ground.x < ground.width / 2) {
    ground.x = ground.width / 2;
  }

  monkey.collide(ground);

  food();
  obstacles();

  drawSprites();

}

function food() {
  if (frameCount % 80 === 0) {
    banana = createSprite(200, Math.round(random(120, 200)), 10, 10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    banana.lifetime = 150;

    FoodGroup.add(banana);
  }
}

function obstacles() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(400, 360, 10, 10);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -6;
    obstacle.lifetime = 150;

    obstacleGroup.add(obstacle);
  }
}