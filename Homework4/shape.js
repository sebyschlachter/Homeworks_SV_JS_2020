export class Shape {
    constructor(row, column, cells) {
        this.row = row;
        this.column = column;
        this.cells = cells;
    }
    draw() {
        for (let row = 0; row < this.template.length; row++) {
            for (let column = 0; column < this.template[row].length; column++) {
                if (this.template[row][column] === 1) {
                    this.cells[this.row + row][this.column + column].draw(this.color);
                }
            }
        }
    }
    moveUp() {
        this.row--;
    }
    moveDown() {
        this.row++;
    }
    moveLeft() {
        this.column--;
    }
    moveRight() {
        this.column++;
    }
    getRandom(min, max) {
        return min + Math.floor(Math.random() * (max - min));
    }
    changeColor() {
        let colors = ["blue", "red", "yellow", "black", "white", "green", "#24f2ef", "#ed79b5", "orange", "#bd2cc7"];
        this.color = colors[this.getRandom(0, colors.length)];
        this.draw();
    }
}