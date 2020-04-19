export class Movement {
    constructor(grid){
        this.grid = grid;
    }
    clearGrid(){
        this.grid.draw();
    }
    move(direction, shape){
        switch(direction){
            case "ArrowUp":    
                shape.moveUp();
                shape.draw(); 
                break;
            case "ArrowDown":
                shape.moveDown();
                shape.draw();
                break;
            case "ArrowLeft":
                shape.moveLeft();
                shape.draw();
                break;
            case "ArrowRight":
                shape.moveRight();
                shape.draw();
                break;
        }
    }
}