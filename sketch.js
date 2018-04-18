let leftPaddle,
    rightPaddle;

let paddleMargin = 5;

let ball;

let leftScore,
    rightScore;

let gameRunning = false;


let particles = [];
let amountParticles = 20;

hitRightPaddle = false;
hitLeftPaddle = false;


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

    //frameRate(10);
}

function draw() {
    background(0);

    // vertical line
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
    hitLeftPaddle = ball.hits_paddle(leftPaddle);
    hitRightPaddle = ball.hits_paddle(rightPaddle);

    leftPaddle.move();
    leftPaddle.check_edges();

    rightPaddle.self_moving(ball);
    rightPaddle.check_edges();

    leftScore.show(width / 3, height / 10);
    rightScore.show(width - (width / 3), height / 10);

    if (ball.pos.x - ball.radius > width) {
        leftScore.update(1);
        ball.spawn();
    }

    if (ball.pos.x + ball.radius < 0) {
        rightScore.update(1);
        ball.spawn();
    }

    if(hitRightPaddle) {
        createParticles(ball.pos.x + ball.radius, ball.pos.y, -1);
        hitRightPaddle = !hitRightPaddle;
    } else if(hitLeftPaddle) {
        createParticles(ball.pos.x - ball.radius, ball.pos.y, 1);
        hitLeftPaddle = !hitLeftPaddle;
    }

    if(particles.length > 0) {
        showParticles();
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

function mousePressed() {
    gameRunning = true;
}

function createParticles(x, y, multi) {
     for(let i = 0; i < amountParticles; i++) {
        particles.push(new Particle(x, y, multi));
    }
}


function showParticles() {
    for(let i = 0; i < particles.length; i++) {
        particles[i].show();
        if(particles[i].radius <= 0) {
            particles.splice(i, 1);
        }
    }
}
