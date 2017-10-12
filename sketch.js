let leftPaddle, rightPaddle;

let paddleMargin = 20;

let ball;

let leftScore, rightScore;

function setup() {
	createCanvas(800, 500);
    
    let paddleCenter = height / 2 -(150 /2);

	leftPaddle = new Paddle(paddleMargin, paddleCenter, "left");
    rightPaddle = new Paddle(width - paddleMargin-10, paddleCenter, "right");

    ball = new Ball();
    ball.spawn();

    leftScore = new Score();
    rightScore = new Score();

    // frameRate(10);
}

function draw() {
	background(0);


    for(let lineY = 0; lineY < height; lineY+= 20) {
        strokeWeight(5);
        stroke(255);
        line(width / 2, lineY, width / 2, lineY+10);
    }

	leftPaddle.show();
    rightPaddle.show();


    ball.show();
    ball.update();
    ball.check_edges();
    ball.hits_paddle(leftPaddle);
    ball.hits_paddle(rightPaddle);

    leftPaddle.move();
    leftPaddle.follow_ball(ball);
    leftPaddle.check_edges();

    rightPaddle.follow_ball(ball);
    rightPaddle.check_edges();

    leftScore.show(width / 3, height / 10);
    rightScore.show(width - (width / 3), height / 10);

    if(ball.pos.x - ball.radius < 0) {
        rightScore.update(1);
        ball.spawn();

    } else if (ball.pos.x + ball.radius > width) {
        leftScore.update(1);
        ball.spawn();
    }
}

function keyPressed() {
    if(key === "w" || key === "W")
        leftPaddle.isMovingUp = true;
    else if(key === "s" || key === "S")
        leftPaddle.isMovingDown = true;
}

function keyReleased() {
    leftPaddle.isMovingUp = false;
    leftPaddle.isMovingDown = false;
}