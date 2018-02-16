function showFramerate() {
    textSize(16);
    fill(255);
    noStroke();
    let fr = floor(frameRate());
    let textW = textWidth(fr);
    text("FPS: " + fr, 0, 0 + 16);
}

function showMessage(message, color, border, x, y) {
    textSize(48);
    fill(color);
    stroke(border);
    let textW = textWidth(message);
    text(message, x-(textW / 2), y);
}
