import { Shape } from "../shape.js";

export class O extends Shape {
    constructor(row, column, cells) {
        super(row, column, cells);
        this.template = [
            [1, 1],
            [1, 1]
        ];
        this.color = "yellow";
    }
}