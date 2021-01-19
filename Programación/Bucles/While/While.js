//hacer un rpograma que haga la operacion 1+2+3+4+5+6...100
// Inicio: total=0, sumando= 1
let total=0
let sumando= 1
// Es el resultado <== a 100?
while (sumando <= 100)
//en caso de ser asi 
 {total= total + sumando
  sumando= sumando + 1  
//se continua la suma el total pasa a ser 1, y el sumando 2,
//en la siguiente vuelta el total sera 3 y el sumando 3 etc...
}
console.log (`la suma es: ${total}`)
alert (total)
// escribe en la consola y advierte el resultado al momento de que el sumando supera el numero 100
