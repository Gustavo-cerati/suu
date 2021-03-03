localStorage.setItem("nombre", "Pedro")
let nombre = localStorage.getItem("nombre")
console.log(nombre)
let a = 0
let contado = localStorage.getItem("ah")
console.log(contado)
if (contado == null) {
    localStorage.setItem("ah",1)
    console.log("hey")

}
else{a = parseFloat(contado) + 1
    console.log(a)
    localStorage.setItem("ah",a)}
let b = parseFloat(localStorage.getItem("ah"))
console.log(b) 
let par = document.querySelector('#mjm')

alert( `has visitado esta pagina ${b} veces `)