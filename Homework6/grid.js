import { Cell } from './cell.js';

export class Grid {
    // constructor(rows, columns, canvasId) {
    //     this.rows = rows;
    //     this.columns = columns;
    //     this.canvasId = canvasId;
    //     this.cells = [];
    // }
    constructor(...args) {
        [this.rows, this.columns, this.canvasId] = [...args];
        this.cells = [];
    }

    create() {
        for (let row = 0; row < this.rows; row++) {
            this.cells[row] = [];
            for (let column = 0; column < this.columns; column++) {
                this.cells[row][column] = new Cell(row, column, '#7facf5', this.canvasId);
            }
        }
    }

    recreate() {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                let cell = this.cells[row][column];
                this.cells[row][column] = new Cell(row, column, cell.color, this.canvasId);
                this.cells[row][column].isEmpty = cell.isEmpty;
            }
        }
    }

    draw() {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                this.cells[row][column].draw();
            }
        }
    }

    score() {
        //get full rows
        let fullRows = []
        for (let row = 0; row < this.rows; row++) {
            if (this.isFullRow(row)) {
                fullRows.push(row);
            }
        }
        //if have,delete them
        const fullRowsLength = fullRows.length;
        if (fullRowsLength) {
            for (let row = 0; row < fullRows.length; row++) {
                this.deleteRow(fullRows[row]);
            }
            //add empty rows on top
            this.cells = this.attachGridRows(fullRowsLength);
            //redraw recreate grid
            this.recreate();
            //return score
            return fullRowsLength * 10;
        }

        return 0;
    }

    isFullRow(rowIndex) {
        return this.cells[rowIndex].every(cell => !cell.isEmpty);
    }

    deleteRow(rowIndex) {
        this.cells.splice(rowIndex, 1);
    }

    attachGridRows(rowsNumber) {
        const newRows = this.generateNewRows(rowsNumber);
        for (let row = 0; row < newRows.length; row++) {
            this.cells.unshift(newRows[row]);
        }

        return this.cells;
    }

    generateNewRows(rowsNumber) {
        const newRows = [];
        for (let row = 0; row < rowsNumber; row++) {
            newRows[row] = [];
            for (let column = 0; column < this.columns; column++) {
                newRows[row][column] = new Cell(row, column, '#7facf5', this.canvasId);
            }
        }
        return newRows;
    }

    drawNextShape() {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                this.cells[row][column].draw();
            }
        }
    }
}