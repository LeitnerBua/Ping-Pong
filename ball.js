class Ball {
    constructor() {
        this.radius = 10;
        this.direction = createVector(1, 1);
    }

    spawn() {
        this.speed = createVector(1, 1).mult(8);
         this.pos = createVector(width / 2, height / 2);
         this.r = random();
    }

    update() {
        //start randomly to the right or the left
        if(this.r < 0.5) {
            this.pos.x += this.speed.x * this.direction.x;
            this.pos.y += this.speed.y * this.direction.y;
        } else {
            this.pos.x -= this.speed.x * this.direction.x;
            this.pos.y -= this.speed.y * this.direction.y;
        }
    }

    accelerate() {
        if(this.speed.x < 30) {
            this.speed.x += 1;
            this.speed.y += 1;
        }
    }

    show() {
        stroke(255);
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.radius * 2);
    }

    check_edges() {
        if(this.pos.y + this.radius * 2 > height || this.pos.y - this.radius * 2 < 0) {
            this.direction.y *= -1;
        }
    }

    hits_paddle(paddle) {
        if(this.pos.x + this.radius > paddle.pos.x &&
            this.pos.x - this.radius < paddle.pos.x + paddle.width &&
            this.pos.y + this.radius > paddle.pos.y &&
            this.pos.y - this.radius < paddle.pos.y + paddle.height) {

            this.direction.x *= -1;
            this.accelerate();

            return true;
        }
        return false;

    }
}
