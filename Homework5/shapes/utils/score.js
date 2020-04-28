export class Score {
    constructor() {
        this.score = 0;
        this.canvasScore = document.getElementById('canvasId');
        this.contextScore = this.canvasScore.getContext('2d');
    }

    showScore() {
        this.contextScore.beginPath();
        this.contextScore.clearRect(310, 20, 200, 200);
        this.contextScore.font = "Bold 20px Arial";
        this.contextScore.fillStyle = "red";
        this.contextScore.fillText("Score: " + this.score, 320, 50);
        this.contextScore.closePath();
    }

    addScore(addPoints) {
        this.score += addPoints;
    }
}