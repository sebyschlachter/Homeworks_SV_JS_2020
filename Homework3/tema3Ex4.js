//ex4
/*Exercitiul 4
Folosind codul existent de la curs (https://github.com/rysk23/tetris), colorati grid-ul astfel in cat sa optineti o tabla de sah.*/
const canvasEx4 = document.getElementById("canvasEx4");
const contextEx4 = canvasEx4.getContext("2d");

class Cell {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw() {
        contextEx4.beginPath();
        contextEx4.fillStyle = this.color;
        contextEx4.rect(this.x * 50, this.y * 50, 50, 50);
        contextEx4.fill();
        contextEx4.stroke();
        contextEx4.closePath();
    }
}
const rows = 8;
const columns = 8;

let grid = [];

const createGrid = () => {
    for (let row = 0; row < rows; row++) {
        grid[row] = [];
        for (let column = 0; column < columns; column++) {
            grid[row][column] = new Cell(row, column, row % 2 == column % 2 ? 'black' : 'white');
        }
    }
}

const drawGrid = () => {
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            grid[row][column].draw();
        }
    }
}

createGrid();
drawGrid();