let bot1 = document.querySelector ("#b1")
let bot2 = document.querySelector ("#b2")
let bot3 = document.querySelector ("#b3")
let par1 = document.querySelector ("#p1")
let par2 = document.querySelector ("#p2")
let par3 = document.querySelector ("#p3")
let cale = [(Math.random()*239).toFixed(0),(Math.random()*239).toFixed(0),(Math.random()*239).toFixed(0)]
let color
let a = 1

bot2.onclick = ayd

function sefue() {
    par2.style.display = "none"   
}    
function semetioo(){
    par2.style.display = "block"      
}
function colortexto() {
    console.log("hey")
    console.log (cale)
    color= "rgb("+cale[0]+"," +cale[1]+"," +cale[2]+")"
    console.log (color)
    par1.style.color = `${color}` }
function ayd() {
 if (a%2==0) {
   semetioo()  
 } else {
    console.log("hey")
    sefue ()   
 } 
 a=a+1  
}
function aydet (){
sefue()

setTimeout (semetioo,3000)
}
bot2.onclick = ayd
bot1.onclick = colortexto
bot3.onclick = aydet