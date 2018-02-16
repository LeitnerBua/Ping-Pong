class Particle {
    constructor(x, y, multiplier) {
        this.x = x || 0;
        this.y = y || 0;
        this.multiplier = multiplier || 0;

        this.radius = 2;

        this.vel = createVector(this.multiplier * random(1.5), -1.5 + random(3));
    }

    show() {
        fill(255);
        //arc(this.x, this.y, this.radius, this.radius, TWO_PI, CHORD);
        ellipse(this.x, this.y, this.radius);

        this.x += this.vel.x;
        this.y += this.vel.y;
        //if(this.radius > 0)
            this.radius -= 0.05;
    }
}