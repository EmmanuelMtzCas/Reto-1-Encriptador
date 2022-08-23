const inputTexto = document.querySelector(".txtnor"); //pasando lo que tiene el textarea usamos class
const mensaje =  document.querySelector(".txtenc");
//const imagen = document.getElementById(".txtimgc");

var mensajeNormal     = "";  //---> cadena que entra
var mensajeEncriptado ="";  //---> salida
var mensajeDesencriptado="";
var guardaMensaje     ="";  //--> sirve para convertir a minusculas y despues guardarla para recorrerla




function btnEncriptar(){

    const textEncrip = encriptarMensaje(inputTexto.value); //llamanos el metodo encriptarMensaje y le pasamos el texto del input
    mensaje.value= textEncrip;  //mostramos el texto ya encriptado al txtarea
    //alert("xd");
  
}

function btnDesencriptar(){

    const textEncrip = desencriptarMensaje(inputTexto.value);
    mensaje.value= textEncrip;
}

function copiarText(){
   
    var contenidoCopiado = document.getElementById('txtencrip');
    contenidoCopiado.select();
    document.execCommand('copy');

}

function encriptarMensaje(mensajeNormal) {

  guardaMensaje = mensajeNormal.toLowerCase();  
                                              
  mensajeEncriptado =  guardaMensaje.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat"); 

  return mensajeEncriptado;   
}


function desencriptarMensaje(mensajeEncriptado) {

    guardaMensaje = mensajeEncriptado.toLowerCase(); 

    mensajeDesencriptado =guardaMensaje.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    return mensajeDesencriptado;

}



