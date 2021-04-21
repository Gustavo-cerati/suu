let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

// Escoger los colores
ctx.fillStyle = "purple"
ctx.strokeStyle = "purple"

// dibujo un rectángulo

function lapiz(x,y) {
    ctx.arc(x,y-34,6, 0, 2*Math.PI)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x,y-20,8, 0, 2*Math.PI)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x,y, 12, Math.PI,0)
    ctx.lineTo(x-12,y)
    ctx.stroke()
    ctx.beginPath()     
}
for(let x = 24; x < 400; x= x+30){
    let y = 300
    lapiz(x,y)
    
}
function lapiz(a,b) {
    ctx.arc(a,b-34,6, 0, 2*Math.PI)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(a,b-20,8, 0, 2*Math.PI)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(a,b, 12, Math.PI,0)
    ctx.lineTo(a-12,b)
    ctx.stroke()
    ctx.beginPath()     
}
for(let a = 24; a < 400; a= a+30){
    let b = 200
    lapiz(a,b)
    
}
