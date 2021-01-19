let su= 0
let b= 15
while (b<=10000) {
    if (b%5==0 && b%3==0) {
       su= su + b 
    }
   b= b+3  
}
console.log(su)
