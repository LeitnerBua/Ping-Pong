class Ball {
    constructor() {
        this.radius = 10;
       
        this.speed = createVector(1, 1).mult(8);
        this.direction = createVector(1, 1);
    }

    spawn() {
         this.pos = createVector(width / 2, height / 2);
         this.r = random();
    }

    update() {
        if(this.r < 0.5) {
            this.pos.x += this.speed.x * this.direction.x;
            this.pos.y += this.speed.y * this.direction.y;
        } else {
            this.pos.x -= this.speed.x * this.direction.x;
            this.pos.y -= this.speed.y * this.direction.y;
        }
    }

    show() {
        stroke(255);
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.radius * 2);
    }

    check_edges() {
        if(this.pos.y + this.radius * 2 > height) {
            // this.direction.x *= -1;
            this.direction.y *= -1;
        } else if (this.pos.y - this.radius *2 < 0) {
            // this.direction.x *= -1;
            this.direction.y *= -1;
        }
    }

    hits_paddle(paddle) {
        if(paddle.side == "left" &&
            this.pos.x - this.radius <= paddle.pos.x + paddle.width &&
            this.pos.x + this.radius >= paddle.pos.x &&
            this.pos.y + this.radius >= paddle.pos.y &&
            this.pos.y  - this.radius <= paddle.pos.y + paddle.height)
            this.direction.x *= -1;
        else if(paddle.side == "right" &&
            this.pos.x + this.radius >= paddle.pos.x &&
            this.pos.x - this.radius <= paddle.pos.x - paddle.width &&
            this.pos.y + this.radius >= paddle.pos.y &&
            this.pos.y  - this.radius <= paddle.pos.y + paddle.height)
            this.direction.x *= -1;

    }
}