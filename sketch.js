let leftPaddle,
    rightPaddle;

let paddleMargin = 20;

let ball;

let leftScore,
    rightScore;

let gameRunning = false;

let colorRed = '#da0f22';
let colorBlue = '#150be3';
let colorGreen = '#09c706';

function setup() {
    createCanvas(windowWidth, windowHeight);

    let paddleCenter = height / 2 - (150 / 2);

    leftPaddle = new Paddle(paddleMargin, paddleCenter, "left");
    rightPaddle = new Paddle(width - paddleMargin - 10, paddleCenter, "right");

    ball = new Ball();
    ball.spawn();

    leftScore = new Score();
    rightScore = new Score();

    // frameRate(10);
}

function draw() {
    background(0);

    for (let lineY = 0; lineY < height; lineY += 20) {
        strokeWeight(5);
        stroke(255);
        line(width / 2, lineY, width / 2, lineY + 10);
    }

    leftPaddle.show(colorRed);
    rightPaddle.show(colorBlue);

    ball.show();
    if (gameRunning) {
        ball.update();
    } else {
        showMessage("Press any key to play!", 255, 'rgb(0, 100, 200)', width / 2, height / 2 - 100);
    }

    ball.check_edges();
    ball.hits_paddle(leftPaddle);
    ball.hits_paddle(rightPaddle);

    leftPaddle.move();
    // if (self_playing) {
    //     leftPaddle.follow_ball(ball);
    //
    // }
    leftPaddle.check_edges();

    // rightPaddle.follow_ball(ball);
    rightPaddle.self_moving();
    rightPaddle.check_edges();

    leftScore.show(width / 3, height / 10);
    rightScore.show(width - (width / 3), height / 10);

    if (ball.pos.x - ball.radius < 0) {
        rightScore.update(1);
        ball.spawn();

    } else if (ball.pos.x + ball.radius > width) {
        leftScore.update(1);
        ball.spawn();
    }

    if (leftScore.gameWon()) {
        showMessage("You Won!", 0, colorGreen, width / 4, height / 2);
        noLoop();
    } else if (rightScore.gameWon()) {
        showMessage("You Lost!", 0, colorRed, width / 4, height / 2);
        noLoop();
    }

    showFramerate();
}

function keyPressed() {
    gameRunning = true;
}
