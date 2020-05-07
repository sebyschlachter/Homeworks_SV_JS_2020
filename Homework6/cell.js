export class Cell {
    // constructor(x, y, color, canvasId) {
    //     this.x = x;
    //     this.y = y;
    //     this.color = color;
    //     this.canvas = document.getElementById(canvasId);
    //     this.context = this.canvas.getContext("2d");
    //     this.width = 30;
    //     this.height = 30;
    //     this.isEmpty = true;
    // }
    constructor(...args) {
        [this.x, this.y, this.color, this.canvasId] = [...args];
        this.canvas = document.getElementById(this.canvasId);
        this.context = this.canvas.getContext("2d");
        this.width = 30;
        this.height = 30;
        this.isEmpty = true;
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = this.color;
        this.context.rect(this.y * this.height, this.x * this.width, this.width, this.height);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }


}