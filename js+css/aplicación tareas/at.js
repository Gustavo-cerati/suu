let tareas = JSON.parse(localStorage.getItem("tareas"));
if (tareas == null) tareas = [];

let tabla = document.querySelector('#tareas')
function llenar() {
    let contenidoTabla = '<tr><th>Materia</th><th>Descripción</th><th>Fecha</th><th> tarea numero:</th></tr>'
    for (tarea of tareas){
        contenidoTabla = contenidoTabla + `<tr><td>${tarea.Materia}</td><td>${tarea.Descripción}</td>
        <td>${tarea.fecha}</td><td onclick="borrae()">${tarea.boto}<td></tr>`
    }
    
    tabla.innerHTML = contenidoTabla;
       
}
llenar();
let forme = document.querySelector("#pontarea")
function addTarea(){
    let materian = document.querySelector("input[name=materia]").value
    let descrip = document.querySelector("input[name=Descripción]").value
    let fechaa = document.querySelector("input[name=fecha]").value
    let botton = document.querySelector("input[name=demo]").value
 

  
console.log (fechaa)
    let nuevatarea = {Materia:materian, Descripción:descrip, fecha:fechaa, boto:botton}
    console.log(nuevatarea)

    tareas.push(nuevatarea)
    localStorage.setItem("tareas", JSON.stringify(tareas));

    llenar() 
     
}
let forr = document.querySelector("#quitatarea")
function borraa() {
let tareab = document.querySelector("input[name=tareakk]").value
    console.log (tareab)
    let aquien = tareas.findIndex(tarea => tarea.Materia==tareab)
   console.log (aquien)
    console.log("hhknj")
    tareas.splice(aquien,1)
    llenar()
    return false
}
forme.onsubmit = addTarea
forr.onsubmit = borraa 

function borrae() {
    alert ("sisa")
}