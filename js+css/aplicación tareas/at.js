let tareas = [
    {Materia:"", Descripción:"",fecha:""},
  
]
let tabla = document.querySelector('#tareas')
function llenar() {
    let contenidoTabla = '<tr><th>Materia</th><th>Descripción</th><th>Fecha</th></tr>'
    for (tarea of tareas){
        contenidoTabla = contenidoTabla + `<tr><td>${tarea.Materia}</td><td>${tarea.Descripción}</td>
        <td>${tarea.fecha}</td></tr>`
    }
    
    tabla.innerHTML = contenidoTabla;
       
}
llenar();
let forme = document.querySelector("#pontarea")
function addTarea(){
    let materian = document.querySelector("input[name=materia]").value
    let descrip = document.querySelector("input[name=Descripción]").value
    let fechaa = document.querySelector("input[name=fecha]").value

    let nuevatarea = {Materia:materian, Descripción:descrip, fecha:fechaa}
    console.log(nuevatarea)

    tareas.push(nuevatarea)
  llenar()
    return false;
}
forme.onsubmit = addTarea