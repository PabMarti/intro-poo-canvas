const canvasOOP = document.getElementById("canvasOOP");
const ctx = canvasOOP.getContext("2d");
const window_height = window.innerHeight;
const window_width = window.innerWidth;


canvasOOP.height = "200"; //window_height;
canvasOOP.width = "300";//window_width;
canvasOOP.style.background = "#ff8";

class Circle { // carga los valores predeterminados del objeto

  constructor(x, y, radius, color, text) {

    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;

  }

//Metodo para renderizar el objeto
  draw(context) {

    context.beginPath();

    context.strokeStyle = this.color;
    context.textAlign = "center" ;//Alineacion horizontal
    context.textBaseline="middle";//Alineacion vertical
    context.font = "20px Arial";//Fuente y tamaño de letra
    context.fillText(this.text,this.posX, this.posY);//renderisa el texto en la posicion deseada

    context.lineWidth=2;
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI*2, false);

    context.stroke();
    context.closePath();
  }

}

let miCirculo = new Circle(canvasOOP.width/2, canvasOOP.height/2, 50, 'red', '=UwU=');
miCirculo.draw(ctx);

let randomX =  Math.random()* canvasOOP.width;
let randomY =  Math.random()* canvasOOP.height;
let randomRadius = Math.floor(Math.random()*100 + 30);
