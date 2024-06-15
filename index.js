let array = [
    {
        titulo: "Taller",
        enlace: "https://github.com/brobolo11/taller"
    },
    {
        titulo: "Practica 4 nueva",
        enlace: "https://github.com/brobolo11/practica4nueva"
    },
    {
        titulo: "Practica 4",
        enlace: "https://github.com/brobolo11/practica4"
    },
    {
        titulo: "3 en raya",
        enlace: "https://github.com/brobolo11/3enralla"
    },
    {
        titulo: "Lista tareas",
        enlace: "https://github.com/brobolo11/lista_tareas"
    },
    {
        titulo: "Biblioteca",
        enlace: "https://github.com/brobolo11/biblioteca"
    }
]

$(function(){
    for(let cadaTarjeta of array){
        $(".contenido").append(`<div class = "tarjeta"><div class = "titulo">${cadaTarjeta.titulo}</div><div class = "enlace"><a href=${cadaTarjeta.enlace}><p>Pulsa aqui para ir al proyecto</p></a></div></div>`)
    }
})