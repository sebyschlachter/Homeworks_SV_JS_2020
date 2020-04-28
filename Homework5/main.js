import { Grid } from './grid.js';
import { Movement } from './shapes/utils/movement.js';
import { generateNewShape, getRandomInt } from './shapes/utils/shape-generator.js';
import { Score } from './shapes/utils/score.js';

const rows = 20;
const columns = 10;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();

let shape = generateNewShape(grid.cells);
shape.draw();

let movement = new Movement(shape, grid.cells);

const score = new Score();
//score.showScore();

document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowUp":
            shape.rotate();
            break;
        case "ArrowDown":
            movement.down();
            break;
        case "ArrowLeft":
            movement.left();
            break;
        case "ArrowRight":
            movement.right();
            break;

        case "Enter":
            const colors = ["blue", "red", "yellow", "black", "white", "green", "#24f2ef", "#ed79b5", "orange", "#bd2cc7"];
            grid.draw();
            shape.color = colors[getRandomInt(colors.length - 1)];
            shape.draw();
            break;
    }
});

const animate = () => {
    if (movement.canMove) {
        movement.down();
        console.log("down");
        score.showScore();
    } else {
        clearInterval(intervalId);
        movement.validator.checkFullRows(score);
        shape = generateNewShape(grid.cells);
        shape.draw();
        movement = new Movement(shape, grid.cells);
        intervalId = setInterval(animate, 500);
    }
}
let intervalId = setInterval(animate, 500);