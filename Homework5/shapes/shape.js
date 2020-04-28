import { Validator } from "./utils/validator.js";

export class Shape {
    constructor(row, column, cells, color) {
        this.row = row;
        this.column = column;
        this.cells = cells;
        this.color = color;
        this.templateIndex = 0;
        this.validator = new Validator(this, this.cells);
    }
    draw() {
        for (let row = 0; row < this.template.length; row++) {
            for (let column = 0; column < this.template[row].length; column++) {
                if (this.template[row][column] === 1) {
                    this.cells[this.row + row][this.column + column].draw(this.color);
                    this.cells[this.row + row][this.column + column].isEmpty = false;
                    this.cells[this.row + row][this.column + column].color = this.color;
                }
            }
        }
    }

    clear() {
        for (let row = 0; row < this.template.length; row++) {
            for (let column = 0; column < this.template[row].length; column++) {
                if (this.template[row][column] === 1) {
                    this.cells[this.row + row][this.column + column].draw('#7facf5');
                    this.cells[this.row + row][this.column + column].isEmpty = true;
                    this.cells[this.row + row][this.column + column].color = '#7facf5';
                }
            }
        }
    }

    rotate() {
        this.clear();
        const length = this.getTemplates().length;

        const oldTemplate = this.template;

        this.templateIndex++;
        this.template = this.getTemplates()[this.templateIndex % length];

        if (this.validator.checkNext(this.row, this.column, this.template)) {
            console.log("nu se poate");
            this.template = oldTemplate;
            this.draw();
            this.templateIndex++;
            return;
        }
        console.log("se poate");
        this.draw();
    }
}