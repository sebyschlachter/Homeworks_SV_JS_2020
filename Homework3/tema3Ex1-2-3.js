/*Tema curs 3
Repository: https://github.com/sebyschlachter/Homeworks_SV_JS_2020
*/
/*Exercitiul 1
Desenati o forma geometrica, folosind canvas. Umpleti forma geometrica cu o culoare la alegere.*/
const canvasEx1 = document.getElementById("canvasEx1");
const contextEx1 = canvasEx1.getContext("2d");

contextEx1.beginPath();
contextEx1.rect(50,50,60,60);
contextEx1.fillStyle = "blue";
contextEx1.fill();
contextEx1.stroke();
contextEx1.closePath();

contextEx1.beginPath();
contextEx1.fillStyle = "black";
contextEx1.fill();
contextEx1.fillText("Exercitiul 1.", 5, 10);
contextEx1.closePath();

/*Exercitiul 2
Create o metoda draw, care sa deseneze una din formele create la tema din saptamana precedenta (EX 5).*/
const canvasEx2 = document.getElementById("canvasEx2");
const contextEx2 = canvasEx2.getContext("2d");

function draw(latura, xCenter, yCenter, borderColor, fillColor){
    contextEx2.beginPath();
    contextEx2.moveTo (xCenter +  latura * Math.cos(0), yCenter +  latura *  Math.sin(0));
    for (let i = 0; i <= 6; i++) {
        contextEx2.lineTo (xCenter + latura * Math.cos(i * 2 * Math.PI / 6),
        yCenter + latura * Math.sin(i * 2 * Math.PI / 6));
    }
     
    contextEx2.strokeStyle = borderColor;
    contextEx2.fillStyle = fillColor;
    contextEx2.fill();
    contextEx2.stroke();
    contextEx2.closePath();
}

contextEx2.beginPath();
contextEx2.fillStyle = "black";
contextEx2.fill();
contextEx2.fillText("Exercitiul 2. Hexagon regulat", 5, 10);
contextEx2.closePath();
draw(50, 100, 100, "black", "blue");

/*Exercitiul 3
Desenati un cerc. Animati cercul dupa urmatoarele reguli:

incepeti deplasarea cercul de la stanga la dreapta, schimbati pozitia acestuia la fiecare 0.5 secunde.
la deplaserea spre dreapta setati o culoare, iar la fiecare pas mariti diametrul.
cand cercul loveste marginea din dreapta a canvas-ului, schimbati directia de deplasare spre stanga.
la deplaserea spre stanga setati o alta culoare culoare, iar la fiecare pas micsorati diametrul.
cand cercul loveste marginea din stanga a canvas-ului, schimbati directia de deplasare spre dreapta.
Nota: Puteti folosi cod din exemplul de la cursul 3: https://github.com/alexcicioc/canvas-playground/tree/master/bubbles-webinar*/
const canvasEx3 = document.getElementById("canvasEx3");
const contextEx3 = canvasEx3.getContext("2d");

class Circle {
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = 1;
    }
    drawEx3(){
        contextEx3.beginPath();
        contextEx3.arc(this.x, this.y, this.radius,0, 2 * Math.PI);
        contextEx3.stroke();
        contextEx3.fillStyle = this.color;
        contextEx3.fill();
        contextEx3.closePath();
    }
    moveEx3(stepX){
        this.x+=stepX * this.dx;
        this.changeDiameter();
        this.changeDirectionIfExceededBounds(stepX);
        this.drawEx3();
    }
    changeDiameter(){
        if(this.dx==1){
            this.radius +=4;
        }else{
            this.radius -=4;
        }
    }
    changeDirectionIfExceededBounds(stepX) {
        if (this.x > canvasEx3.width - this.radius - stepX + 4) {
            this.x = canvasEx3.width - this.radius;
            this.dx = -1;
            this.color = this.getRandomColor(); 
        }
        if (this.x < this.radius + stepX - 4) {
            this.x = this.radius;
            this.dx = 1;
            this.color = this.getRandomColor(); 
        }
    }
    getRandom(min, max){
        return  min + Math.floor(Math.random() * (max - min));
    }
    getRandomColor(){
        let colors = ["blue", "red", "yellow", "black", "white", "green"];
        return colors[this.getRandom(0,colors.length)];
    }
}


function titluEx3(){
    contextEx3.clearRect(0, 0, canvasEx3.width, canvasEx3.height);
    contextEx3.beginPath();
    contextEx3.fillStyle = "black";
    contextEx3.fill();
    contextEx3.fillText("Exercitiul 3.", 5, 10);
    contextEx3.closePath();
}

const cerc = new Circle(20,100,20,"blue");

function animate(){
    titluEx3();
    cerc.moveEx3(20);   
}
setInterval(animate,500)