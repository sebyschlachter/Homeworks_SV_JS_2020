//ex5
/*Exercitiul 5
Folosind codul existent de la curs (https://github.com/rysk23/tetris), creati o forma Square cu proprietarile: row, column si metoda draw.
Scenariu de folosire:
in momentul instantieri unei noi forme const square = new Square(2,3); square.draw();. In gridul creat o sa avem un patrat desenat care incepe de la randul 2, coloana 3.
pentru o alta instanta const square2 = new Square(5,7); square.draw();. . In gridul creat o sa avem un patrat desenat care incepe de la randul 5, coloana 7.*/
const canvasEx5 = document.getElementById("canvasEx5");
const contextEx5 = canvasEx5.getContext("2d");

class Cell {
    constructor(row, column, color) {
        this.row = row-1;
        this.column = column-1;
        this.color = color;
    }

    draw() {//deseneaza patrate de dimensiune 2x2 de la randul si colana data in instanta.
        let maxRows = 12;
        let maxColumns = 12;
        for (let i = this.row; i < maxRows; i+=2) {
            for (let j = this.column; j < maxColumns; j+=2) {
                contextEx5.beginPath();
                contextEx5.fillStyle = this.color;
                //contextEx5.strokeStyle = this.color;
                contextEx5.rect(j * 50, i * 50, 50*2, 50*2);
                contextEx5.fill();
                contextEx5.stroke();
                contextEx5.closePath();
            }
        }
    }
    drawEmptyGrid1x1() {//deseneaza patrate de dimensiune 1x1 de la randul si coloana data in instanta.
        let maxRows = 12;
        let maxColumns = 12;
        for (let i = this.row; i < maxRows; i++) {
            for (let j = this.column; j < maxColumns; j++) {
                contextEx5.beginPath();
                contextEx5.fillStyle = this.color;
                //context5.strokeStyle = this.color;
                contextEx5.rect(j * 50, i * 50, 50, 50);
                contextEx5.fill();
                contextEx5.stroke();
                contextEx5.closePath();
            }
        }
    }
    drawOneRectangle(){//deseneaza un singur patrat de la randul si coloana data in instanta obiectului
                        //pana la capetele canvas-ului.
        contextEx5.beginPath();
        contextEx5.fillStyle = this.color;
        //context5.strokeStyle = this.color;
        contextEx5.rect(this.column*50, this.row*50, canvasEx5.width, canvasEx5.height);
        contextEx5.fill();
        contextEx5.stroke();
        contextEx5.closePath();
    }
}
const grid1x1 = new Cell(1,1,"white");
grid1x1.drawEmptyGrid1x1();//deseneaza un grid cu patrate de dimensiune 1x1 in tot canvas-ul.
const square = new Cell(2,3,"blue");
square.draw();//deseneaza un patrat format din celule 2x2 incepand de la randul si coloana definite
            // in instanta(radnurile si coloanele de dimensiune 1x1).
//square.drawOneRectangle();//deseneaza un singur patrat de la randul si coloana data in instanta
                            //obiectului pana la capetele canvas-ului.