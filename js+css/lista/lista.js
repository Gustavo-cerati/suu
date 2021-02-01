let desayuno = ["pan", "arroz","huevos","carne","pescado"]
let lista = document.querySelector ('#desayuno')
a = 0
let contenidolista = ''
 
for (const parte of desayuno) {
    contenidolista = contenidolista + desayuno[a] + " "
    a = a +1
}
lista.innerHTML = contenidolista