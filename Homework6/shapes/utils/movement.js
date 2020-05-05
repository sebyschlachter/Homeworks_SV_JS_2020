import { Validator } from "./validator.js";

export class Movement {
    constructor(shape, cells) {
        this.shape = shape;
        this.cells = cells;
        this.validator = new Validator(this.shape, this.cells);
        this.canMove = true;
        this.gameOver = false;
    }

    up() {
        this.shape.row--;
    }

    down(intervalId, nextShapeLength) {
        const { row, column } = this.shape;
        //const row = this.shape.row;
        //const column = this.shape.column;

        this.shape.clear();
        const nextNotAvailable = this.validator.checkNext(row + 1, column);
        if (nextNotAvailable) {
            console.log("notavaialble");
            this.shape.draw();
            this.canMove = false;
            if (row < nextShapeLength) {
                console.log('Game Over!');
                clearInterval(intervalId);
                document.getElementById("startGame").disabled = false;
                this.gameOver = true;
                document.getElementById('gameOver').style.visibility = "visible";
            }
            return;
        }
        this.shape.row++;
        this.shape.draw();
    }

    left() {
        // const row = this.shape.row;
        // const column = this.shape.column;
        const { row, column } = this.shape;
        this.shape.clear();

        const nextNotAvailable = this.validator.checkNext(row, column - 1);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }
        if (this.gameOver == false) {
            this.shape.column--;
        }
        this.shape.draw();

    }

    right() {
        // const row = this.shape.row;
        // const column = this.shape.column;
        const { row, column } = this.shape;
        this.shape.clear();

        const nextNotAvailable = this.validator.checkNext(row, column + 1);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }
        if (this.gameOver == false) {
            this.shape.column++;
        }
        this.shape.draw();
    }

    rotate() {
        // const row = this.shape.row;
        // const column = this.shape.column;
        const { row, column } = this.shape;

        this.shape.clear();
        const nextTemplate = this.shape.getTemplate(this.shape.templateIndex + 1);
        const nextNotAvailable = this.validator.checkNext(row, column, nextTemplate);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }
        if (this.gameOver == false) {
            this.shape.rotate();
        }
        this.shape.draw();
    }
}