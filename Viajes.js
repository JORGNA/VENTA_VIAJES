import { barcelona,roma, paris, londres } from "./ciudades.js";

// dom= representacion pagina html para modificar de manera dinamica

// obtener elementos del dom=document object model 

let enlaces = document.querySelectorAll('a');       //permite recuperar # cantidad de elementos del Dom, usando un selector
let tituloelemento = document.getElementById('titulo');
let subtituloelemento = document.getElementById('subtitulo');
let parrafoelemento = document.getElementById('parrafo');
let precioelemento= document.getElementById('precio')
  
console.log(enlaces);
 
// Agregar evento click a cada enlace
enlaces.forEach(function(enlace){     //Cada vez que recorre es un enlace
    enlace.addEventListener ('click', function(){
        // Remover clase "active para todos los enlaces"
        enlaces.forEach(function(enlace){       //recorre los 4 enlaces de nuevo para recorrer activo
            enlace.classList.remove('active')   // de los 4 si hubiese "active se lo remueve"
        });

        //Agregar clase "active" al enlace actual
        this.classList.add('active')        //this es para el elemento que se trabaja en esa funcion

        //OBTENER CONTENIDO CORRESPONDIENTE SEGUN EL ENLACE
        let contenido=obtenerContenido(this.textContent)        //----this es uno de los objetos sea: barcelona, londres

        //MOSTRAR EL CONTENIDO EN EL DOM

        tituloelemento.innerHTML=contenido.titulo
        subtituloelemento.innerHTML=contenido.subtitulo
        parrafoelemento.innerHTML=contenido.parrafo 
        precioelemento.innerHTML=contenido.precio


    })
})
    

//FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE ciudades.js
function obtenerContenido(enlace){
    let contenido={
        'Barcelona': barcelona,
        'Roma':roma, 
        'París':paris,
        'Londres':londres
    }
    return contenido[enlace];   //------del contenido trae el enlace, que es cualquiera de contenido
}
























