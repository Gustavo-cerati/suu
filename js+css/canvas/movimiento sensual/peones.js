let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

function lapiz(x,y,color) {
    ctx.fillStyle = color
    ctx.arc(x,y-34,8, 0, 2*Math.PI)
    ctx.stroke()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(x,y-20,12, 0, 2*Math.PI)
    ctx.stroke()
    ctx.fill()
    ctx.beginPath()
    ctx.arc(x,y, 16, Math.PI,0)
    ctx.stroke()
    ctx.fill()

ctx.beginPath()     
}
let x = 0;// La coordenada x del lapiz
let y = 300;
let a = 300;// La coordenada x del lapiz
let b = 0;
let j = 600
let k = 0
let vx= 200; // en px/s
let vX = 40; // en px/s
let vXX= 100
let dT = 30; // en milisegundos
function moverYDibujar(){
    ctx.clearRect(0,0, 600, 600);
    let dX = (dT/1000) * vX;// desplazamiento
    x = x + dX;// se cambia el valor de la x
    y = 300
    lapiz(x, y, "purple");
    let dx = (dT/1000) * vx;// desplazamiento
    a = 300;// se cambia el valor de la x
    b = b + dx
    lapiz(a, b, "black");

    let dXX = (dT/1000) * vXX;// desplazamiento
    j = j - dXX;// se cambia el valor de la x
    k = k + dXX
    lapiz(j, k, "blue");

}
window.setInterval(moverYDibujar, dT);




