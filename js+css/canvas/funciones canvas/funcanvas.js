let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

// Escoger los colores


// dibujo un rectángulo

function lapiz(x,y,z,h) {
    ctx.arc(x,y-34,z/2, 0, 2*Math.PI)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x,y-20,z/1.5, 0, 2*Math.PI)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x,y, z, Math.PI,0)
    ctx.lineTo(x-12,y)
    ctx.stroke()
    ctx.beginPath()     
}
for(let x = 24; x < 400; x= x+30){
    let y = 300
    let z 
    lapiz(x,y,12)
    
}
function lapiz(a,b,c,d) {
    ctx.strokeStyle = d
    ctx.arc(a,b-34,c/2, 0, 2*Math.PI)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(a,b-20,c/1.5, 0, 2*Math.PI)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(a,b, c, Math.PI,0)
    ctx.lineTo(a-12,b)
    ctx.stroke()
    ctx.beginPath()     
}
for(let a = 24; a < 400; a= a+30){
    let b = 200
let d = "blue"
    lapiz(a,b,12)
    
}
