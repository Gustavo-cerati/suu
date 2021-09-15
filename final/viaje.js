let canvas = document.querySelector("#calva")
let puntuacion = document.querySelector ('#TxtPuntaje')
let ctx = canvas.getContext("2d")
dT=30
let vY = 0
let acd = 300
let cod = 500
let ptje = 0
let radio = 12
function cambioPuntaje (){
    ptje = ptje + radio/12
    console.log (ptje)
    }
function ambiente(params) {
    
    class Pelota{
        constructor(xC, yC, vX, anc, alt, color){
            this.xC = xC;
            this.yC = yC;
            this.vX = vX;
            this.anc = anc;
            this.alt  = alt;
            this.color = color;
        }
        moverse(){
            let dX = dT/1000 *this.vX;
            this.xC = this.xC + dX;
        }
        dibujarse(){
        
        if (ptje>100) {
            alert("ganaste")
            window.location.reload()
            
        }
            if ((cod-radio)-(this.xC+this.anc)<0) {
                if (this.xC -(cod+radio)<0 && (((acd-radio)-(this.yC+this.alt)<0)&&(this.yC-(acd+radio)<0))) {
                    alert("game over")   
                    window.location.reload ()
            }}
            if (acd<0||acd>550) {
                alert("game over")   
                    window.location.reload ()
            }
            ctx.beginPath();
            ctx.moveTo (0,0)
            ctx.lineTo (1300,0)
            ctx.stroke ()
            ctx.beginPath();
            ctx.moveTo (0,550)
            ctx.lineTo (1300,550)
            ctx.stroke ()
            ctx.strokeStyle = "#" + Math.floor(Math.random()*16777215).toString(16);
            ctx.fillStyle = "#" + Math.floor(Math.random()*16777215).toString(16);
            // console.log(ctx.strokeStyle)
            ctx.fillRect(this.xC, this.yC , this.anc, this.alt)
            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle = "purple"
            ctx.fillStyle = "purple" 
            ctx.arc(cod, acd, radio, 0, 2*Math.PI);
            ctx.stroke();
            ctx.fill();
        }
    }
    
    let cici= -60
    let pelotas = []
    
    function crearPelota(){
        let x = 1350;
        let y = 600*Math.random() ;
        let vX = cici;
        let anc = 10*Math.random() + 35;
        let alt = 100*Math.random() + 50;
        let color = "#" + Math.floor(Math.random()*16777215).toString(16);
        let pelotaNueva = new Pelota(x, y, vX, anc, alt, color);
        
        //añado la nueva pelota al array de pelotas
        pelotas.push(pelotaNueva);
    }
    function cambiocici(params) {
        cici = cici-5
        
    }
    window.setInterval(crearPelota, 1000);
    window.setInterval(cambiocici, 5000);
    function moverYDibujar(){
        ctx.clearRect(0,0, 1350, 600);
        
        for (pelota of pelotas){
            pelota.moverse();
            pelota.dibujarse();
            
            ctx.beginPath()
    

    ctx.stroke()
        }
    }

    window.setInterval(moverYDibujar, dT);
    
}
function movimientos(params) {
function parriba(params) {
        vY = -400
        let dY = dT/1000 *vY
        acd = acd + dY
}
 function pabajo(params) {
           vY =400
           let dY = dT/1000 *vY
        acd = acd + dY
}
 function masGrande(params) {
     radio = radio + 1
} 
 function masChiqui(params) {
     radio = radio -1
     if (radio<1) {
         alert ("game over")
        window.location.reload()
    }
}  
 window.onkeydown = function(event){
    if (event.which == "38"){
        parriba()
    }
    if (event.which == "40") {
              pabajo()
    }
    if (event.which =="65") {
        masChiqui()
    }
    if (event.which == "83") {
        masGrande()
    }
       }        
}
function cambbioopuntaje(params) {
    cambioPuntaje()
    puntuacion.innerHTML = ptje 
    
 }
function cambbiopuntaje(params) {
  window.setInterval(cambbioopuntaje,1000)
    
}
setTimeout(cambbiopuntaje,14000) 
ambiente ()
movimientos()

