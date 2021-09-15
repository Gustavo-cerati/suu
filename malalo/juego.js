let canvas = document.querySelector("#canvas")
let ctx= canvas.getContext ("2d")
let nubes = []
let dT = 30
let dt = 0
let ptje = 0
let vx= 50
let Xc = 25
let Yc = 510
class Nube{
    constructor(xC, yC, vX, largo, altura){
        this.xC = xC;
        this.yC = yC;
        this.vX = vX;
        this.largo = largo;
        this.altura  = altura;
    }
    moverse(){
        let dX = dT/1000 *this.vX;
        this.xC = this.xC + dX;
        
    }
    dibujarse(){
        ctx.beginPath(); 
        ctx.strokeStyle = "darkgreen" 
        ctx.fillStyle = "darkgreen" 
        // console.log(ctx.strokeStyle)
        ctx.fillRect(0, 530 , 1200, 600)
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = "white"
        ctx.fillStyle = "white" 
        ctx.fillRect(this.xC, this.yC ,this.vX, this.largo, this.altura)
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = "red"
        ctx.fillStyle = "red"
        ctx.arc (Xc,Yc,20,0, 2*Math.PI)
        ctx.stroke();
        ctx.fill();
    }
}
function crearNube(){
    let x = 0;
    let y = 100*Math.random() ;
    let vX= vx;
    let ancho = 30
    let alto = 40
    let NubeNueva = new Nube(x, y, vX, ancho, alto);
    
    //añado la nueva pelota al array de pelotas
    nubes.push(NubeNueva);
  
}
function tiempo(params) {
    dt=dt+0.2
}
window.setInterval(crearNube, 2000);
window.setInterval(tiempo, 100);

function moverYDibujar(){
    ctx.clearRect(0,0, 1200, 600);
    window.onclick = function(event){
        pendiente= (510-(event.offsetY))/(25-(event.offsetX))
         b = event.offsetY - pendiente*event.offsetX 
         let dx = dT/1000 * 80
         let Xc = Xc + dx
         Yc = pendiente*Xc + b 
         alert ("kk")
         }
    for (nube of nubes){
        nube.moverse();
        nube.dibujarse();
        ctx.beginPath()
        ctx.stroke()
    }
}

window.setInterval(moverYDibujar, dT);