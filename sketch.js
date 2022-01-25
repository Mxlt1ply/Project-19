//player is square
let player;
//blob is triangles
let blobs = [];
let score = 0;
//controls when new triangles/blobs are spawned
let minimumScore = 0;

function setup() {
  createCanvas(800, 250);
  player = new Player();
}

function keyPressed() {
  if (key == ' ') {
    player.jump();
  }
}

function draw() {

  background(220);

  score += .03;
  fill(0, 105, 150);

  textSize(30);
  text("Score: " + round(score), 10, 32);

  player.show();
  player.move();

  if (random(1) < 0.03) {
    if (score > minimumScore) {
      blobs.push(new Blob());
      minimumScore = score + 1 + random(1);
    }
  }

  for (blob of blobs) {
    blob.setSpeed(8 + sqrt(score) / 5);
    blob.move();
    blob.show();

    if (player.hits(blob)) {
      fill(252,0,0)
      text("GAME OVER!", 350, 100)
      noLoop();
    }

    if (blob.getX() < -50) {
      blobs.shift();
      print("Destroyed Triangle!");
    }
  }

}