class Paddle {

	constructor(x, y, side) {
		this.width = 10;
		this.height = height / 5;
		this.pos = createVector(x, y);

        this.side = side;

        this.speed = 16;
	}

	show(color) {
		// stroke(255);
        noStroke();
		fill(color);
		rect(this.pos.x, this.pos.y, this.width, this.height);
	}

    move() {
        this.pos.y = mouseY;
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
