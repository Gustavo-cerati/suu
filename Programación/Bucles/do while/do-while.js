//Bucle para hacer una acción por lo menos una vez pero posiblemente un numero de veces desconocido
let numero;
do {
numero =parseFloat(prompt("ingrese un numero"))     
} while (isNaN (numero) || numero< 0);
console.log (`la raiz cuadrada es: ${Math.sqrt (numero)}`)
