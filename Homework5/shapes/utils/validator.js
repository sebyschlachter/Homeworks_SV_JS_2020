
export class Validator {
    constructor(shape, cells) {
        this.shape = shape;
        this.cells = cells;
    }

    checkNext(shapeRow, shapeColumn, template) {
        for (let row = 0; row < template.length; row++) {
            for (let column = 0; column < template[row].length; column++) {
                let cell = this.cells[row + shapeRow] && this.cells[row + shapeRow][column + shapeColumn];
                //console.log(cell);
                if (!cell) {
                    return true;//nu se poate mai departe
                }
                let isEmpty = cell.isEmpty;
                if (template[row][column] === 1 && !isEmpty) {
                    return true;
                }
            }
        }
        return false;//merge mai departe
    }

    checkColumns(rowArray) {//verifica coloanele unui rand daca toate sunt pline(un rand e plin)
        let count = 0;
        for (let column = 0; column < 10; column++) {
            if (rowArray[column].isEmpty == false) {
                count++;
            }
        }
        return count;
    }

    clearRow(row) {
        for (let column = 0; column < 10; column++) {//elibereaza un rand
            this.cells[row][column].draw('#7facf5');
            this.cells[row][column].isEmpty = true;
            this.cells[row][column].color = '#7facf5';
        }
    }
    moveRowsDown(rowFound) {//muta randurile in jos dupa eliberarea unui rand
        for (let row = rowFound; row > 0; row--) {
            for (let column = 0; column < 10; column++) {
                this.cells[row][column].draw(this.cells[row - 1][column].color);
                this.cells[row][column].isEmpty = this.cells[row - 1][column].isEmpty;
                this.cells[row][column].color = this.cells[row - 1][column].color;

                this.cells[row - 1][column].draw("#7facf5");
                this.cells[row - 1][column].isEmpty = true;
                this.cells[row - 1][column].color = '#7facf5';
            }
        }
    }

    checkFullRows(score) {
        for (let row = 0; row < 20; row++) {
            if (this.checkColumns(this.cells[row]) == 10) {
                this.clearRow(row);
                this.moveRowsDown(row);
                score.addScore(10);
            }
        }
    }
}