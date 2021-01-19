let anch;
let alt;
do {
  anch = parseFloat(prompt("Ingrese el ancho"));
} while (isNaN(anch) || anch < 1);

do {
  alt = parseFloat(prompt("Ingrese el alto"));
} while (isNaN(alt) || alt < 1);

let nLine = 0;
while (nLine <= alt) {
  let line = "";
  let nColumn = 0;
  while (nColumn <= anch ) {
    if ((nColumn + nLine == anch+1)||(nColumn==anch)||(nLine==alt))  {
      line = line + "*";
    } else {
      line = line + " ";
    } 
    nColumn = nColumn + 1;
  }
  console.log(line);
  nLine = nLine + 1;
}