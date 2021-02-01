
let jugadores = [
    {nombre:"LIONEL", apellido:"MESSI",goles: 710 ,imagen:"https://as.com/futbol/imagenes/2020/09/04/primera/1599244616_143980_1599246026_noticia_normal_recorte1.jpg" },
    {nombre:"CÉSAR", apellido:"RODRÍGUEZ",goles:232,imagen:"https://i.pinimg.com/originals/6f/d4/b6/6fd4b6282f9c6ae9e5fe12ebe74a4dec.jpg" },
    {nombre:"LUIS", apellido:"SUÁREZ",goles:198,imagen:"https://elintra.com.ar/wp-content/uploads/2020/09/Luis-Suarez-Atletico.jpg" },
    {nombre:"LADISLAO", apellido:"KUBALA",goles:194,imagen:"https://m.media-amazon.com/images/M/MV5BOThkOTk1NzEtYzE5ZC00ZDQ5LTg3ZDYtYWNkYzM4MTYyY2RhXkEyXkFqcGdeQXVyNTUyMTMyMDg@._V1_UY1200_CR131,0,630,1200_AL_.jpg" },
    {nombre:"JOSEP", apellido:"SAMITIER",goles:184,imagen:"https://estaticos-cdn.sport.es/clip/d47763a1-b330-47aa-81ad-f88ab515f99c_baja-libre-aspect-ratio_default_0.jpg" },
    {nombre:"JOSEP", apellido:"ESCOLÀ",goles:158,imagen:"https://www.fcbarcelona.com/fcbarcelona/photo/2018/03/19/7bf5e902-7c76-4c55-818b-1dde37afd8df/15267790.jpg" },
]

let tabla = document.querySelector('#jugadores')



let contenidoTabla = '<tr><th>Nombre</th><th>Apellido</th><th>Goles</th><th>Imagen</th></tr>'
for (jugador of jugadores){
    contenidoTabla = contenidoTabla + `<tr><td>${jugador.nombre}</td><td>${jugador.apellido}
    </td><td>${jugador.goles}</td><td><img width="500px" src="${jugador.imagen}" alt=""></td></tr>`
}

tabla.innerHTML = contenidoTabla; 