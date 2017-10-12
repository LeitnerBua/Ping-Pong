class Score {

    constructor() {
        this.score = 0;
    }

    show(x, y) {

        noStroke();
        fill(255);
        textSize(48);
        text(this.score, x, y);
    }

    update(value) {
        this.score += value;
    }
}