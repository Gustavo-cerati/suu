let a = 0
let b = 0
var notas = []
let tot = 0
let e = 0
let x = parseFloat(prompt ("¿Cuantos notas vas a poner?"))
while (a<x) {
   b = parseFloat(prompt("Pon aqui una nota"))
    if (0<b<10 && Number.isInteger(b)) {
       notas.push (b)
       console.log (notas)
       a= a+1
       tot = tot + notas [e]
       console.log (tot)
       e = e+1
   } else {
       alert("La nota debe ser un numero entero entre 0 y 10")
   } 
}
console.log (tot/x)
alert (tot/x)