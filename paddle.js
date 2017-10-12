class Paddle {

	constructor(x, y, side) {
		this.width = 10;
		this.height = 100;
		this.pos = createVector(x, y);

        this.side = side;

        this.speed = 8;

        this.isMovingUp = false;
        this.isMovingDown = false;
	}

	show() {
		stroke(255);
		fill(255);
		rect(this.pos.x, this.pos.y, this.width, this.height);
	}

    move() {
        if(this.isMovingUp)
            this.pos.y -= this.speed;
        else if(this.isMovingDown)
            this.pos.y += this.speed;

    }

    self_moving() {
        if(ball.pos.y < this.pos.y)
                this.pos.y -= this.speed;
            else if(ball.pos.y > this.pos.y + this.height)
                this.pos.y += this.speed;;
    }

    check_edges() {
        if(this.pos.y < 0) 
            this.pos.y = 0;
        else if(this.pos.y + this.height > height)
            this.pos.y = height-this.height;
    }

    follow_ball(ball) {
        if(ball.pos.x > (width/3) * 2 && this.side == "right")
        {
            this.self_moving();
        } else if(ball.pos.x < (width / 3) && this.side == "left")
        {

            this.self_moving();
        }
    }
}