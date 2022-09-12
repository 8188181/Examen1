// utiliza todos los metodos que creaste en las clases del archivo 02_class.js
import {Uno,Dos} from "./02_class.js";

let consultar = document.getElementById("consultar");
function guardar(){
    let Par1  = new Uno()
    let Par2  = new Dos()
    Par1.guardar();              
    Par2.guardar();          
    consultar.innerHTML = Par1.anuncio;
    consultar.innerHTML = Par2.anuncio2;
}

window.guardar = guardar;



