import { Grid } from './grid.js';
import { Movement } from './shapes/utils/movement.js';
import { generateNewShape, getRandomInt } from './shapes/utils/shape-generator.js';
import { Shape } from './shapes/shape.js';

const [rows, columns] = [20, 10];
let [tetrisScore, intervalId] = [0, null];

const grid = new Grid(rows, columns, 'canvasId'); //grid1
grid.create();
grid.draw();

const gridNextShape = new Grid(4, 4, 'canvasIdNextShape'); //grid for next shape
gridNextShape.create();
gridNextShape.draw();

let shapeNumber = getRandomInt(7);
let nextShapeNumber = getRandomInt(7);
let shape = generateNewShape(grid.cells, shapeNumber, 4); //shape1
let nextShape = generateNewShape(gridNextShape.cells, nextShapeNumber, 0); //nextshape
let movement = new Movement(shape, grid.cells);

//shape.draw();//shape1
//nextShape.draw();//shape2

document.addEventListener("keydown", event => {
    switch (event.key) {
        case 'ArrowUp':
            movement.rotate();
            break;
        case 'ArrowDown':
            movement.down();
            break;
        case 'ArrowLeft':
            movement.left();
            console.log('left');
            break;
        case 'ArrowRight':
            movement.right();
            console.log('right');
            break;
        case 'Enter':
            const colors = ['blue', 'green', 'red'];
            console.log(getRandomInt(colors.length - 1));
            shape.color = colors[getRandomInt(colors.length - 1)];
            shape.draw();
            break;
    }
});


const animate = () => {
    if (movement.canMove) {
        movement.down(intervalId, nextShape.getTemplate().length, tetrisScore);
        console.log('Moving');
    } else {
        console.log('Stopped');
        clearInterval(intervalId);
        //score
        let score = grid.score();
        if (score > 0) {
            tetrisScore += score;
            document.getElementById('score').innerText = tetrisScore;
            document.getElementById('linesNumber').innerText = tetrisScore / 10;
            grid.draw();
        }
        shape = generateNewShape(grid.cells, nextShapeNumber, 4);

        nextShape.clear();
        nextShapeNumber = getRandomInt(7);
        nextShape = generateNewShape(gridNextShape.cells, nextShapeNumber, 0);
        nextShape.draw();

        document.body.style.background = `radial-gradient(${shape.color}, transparent)`;
        movement = new Movement(shape, grid.cells);
        intervalId = setInterval(animate, 200);
    }
}

//let intervalId = setInterval(animate, 200);

document.getElementById('startGame').addEventListener('click', () => {
    tetrisScore = 0;
    document.getElementById('score').innerText = tetrisScore;
    document.getElementById('linesNumber').innerText = tetrisScore / 10;
    document.getElementById('gameOver').style.visibility = "hidden";
    nextShape.draw();
    document.getElementById("startGame").disabled = true;
    grid.create();
    grid.draw();
    intervalId = setInterval(animate, 200);
})