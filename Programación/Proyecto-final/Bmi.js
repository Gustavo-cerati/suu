let masa;
let altura;
do {
 masa = parseFloat(prompt("Escriba su masa en Kilogramos"))
altura = parseFloat(prompt("Escriba su altura en metros"))     
} while (isNaN (masa) || isNaN (altura) || masa<0 ||altura < 0);
let Bmi= masa/Math.pow (altura,2)
console.log(Bmi)
if (Bmi <= 18.5) {
    alert ("underweight" )
}
if (18.5<Bmi<24.99) {
    alert("normal")
}
if (Bmi>=25) {
    alert("overweight")
} 
if (Bmi >=30) {
    alert("obese")
}