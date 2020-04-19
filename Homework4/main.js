/*
1.Implementati shape-urile ramase si afisati-le pe grid.
    Am facut clase pt fiecare si le-am afisat toate pe grid.
2.Schimbati culoarea formei la ficare apasare de "ENTER".
    La apasarea butonului enter toate formele afisate pe grid isi schimba culoarea.
3.Mutati logica de movment intro clasa separata numita Movement si folositi-o pentru formele voastre.
    Am creat o clasa Movement unde am mutat logica de movement intr-o functie.
4.Adaugati clasa Shape si folositi-o ca base class pentru formele create, mutati logica comuna in base class.
    Am creat clasa de baza Shape care e mostenita in toate cele 7 clase pt formele din tetris.
*/ 

import {Grid} from './grid.js';
import { L } from './shapes/l-shape.js';
import { O } from './shapes/o-shape.js';
import { I } from './shapes/i-shape.js';
import { S } from './shapes/s-shape.js';
import { Z } from './shapes/z-shape.js';
import { J } from './shapes/j-shape.js';
import { T } from './shapes/t-shape.js';
import { Movement } from './movement.js';

const rows = 20;
const columns = 10;

const grid = new Grid(rows,columns);
grid.create();
grid.draw(); 

const lShape = new L(0,3,grid.cells);
lShape.draw();

const oShape = new O(5,3,grid.cells);
oShape.draw();

const iShape = new I(0,7,grid.cells);
iShape.draw();

const sShape = new S(5,6,grid.cells);
sShape.draw();

const zShape = new Z(8,3,grid.cells);
zShape.draw();

const jShape = new J(8,7,grid.cells);
jShape.draw();

const tShape = new T(11,3,grid.cells);
tShape.draw();

const moveShape = new Movement(grid);

document.addEventListener("keydown", event =>{
    if(event.key == "Enter"){
        lShape.changeColor();
        oShape.changeColor();
        iShape.changeColor();
        sShape.changeColor();
        zShape.changeColor();
        jShape.changeColor();
        tShape.changeColor();
    }else{
        moveShape.clearGrid();
        moveShape.move(event.key, lShape);
        moveShape.move(event.key, oShape);
        moveShape.move(event.key, iShape);
        moveShape.move(event.key, sShape);
        moveShape.move(event.key, zShape);
        moveShape.move(event.key, jShape);
        moveShape.move(event.key, tShape);
    }
});

/*setInterval(() =>{
    grid.draw();
    lShape.moveDown();
    lShape.draw();
},500)*/