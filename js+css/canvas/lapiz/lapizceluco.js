let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

// Escoger los colores
ctx.fillStyle = "purple"
ctx.strokeStyle = "purple"

// dibujo un rectángulo

ctx.fillRect(200, 250 , 26, 100)
ctx.lineWidth= 1
ctx.beginPath()
ctx.moveTo(200,250)
ctx.lineTo(213,225)
ctx.lineTo(226,250)
ctx.arc(213,350,13,-Math.PI/2, Math.PI)
ctx.stroke()

// debo iniciar un camino

// ctx.endPath()

// camino compuesto de lineas rectas y curvas

ctx.fillStyle = "green"
ctx.beginPath()
ctx.fillRect(270, 250,70,100)// muevo el cursor a esa posicion
ctx.fillStyle = "white"
ctx.fillRect(280, 260,50,80)
ctx.strokeStyle= "white"
ctx.arc(305, 345, 5, -Math.PI, Math.PI)
// ctx.lineTo(140, 400)
ctx.stroke()
