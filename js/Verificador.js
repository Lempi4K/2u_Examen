$.getScript("otro-archivo.js", function(){
    alert("Archivo cargado!");
 });
function readCookie(name) {
    var nameEQ = name + "="; 
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) {
        return decodeURIComponent( c.substring(nameEQ.length,c.length) );
      }
    }
    return null;
}
function efectoMatrix(){
    var separadores = document.getElementsByClassName("E_20px")
    for(var i=0; i<separadores.length; i++){
        separadores[i].style.display="none"
    }
    var body = document.querySelector("body");
    body.style.position="relative";
    body.style.backgroundColor="rgb(0,0,0)"
    var contenedorAll = document.getElementById("ContenedorAll");
    contenedorAll.style.position="absolute";
    contenedorAll.style.top="0";  
    contenedorAll.style.left="50%"; 
    contenedorAll.style.transform="translate(-50%, 30px)"; 
    contenedorAll.style.zIndex="0";
    var canvas = document.getElementById("canvas");
    canvas.style.display="block";
    canvas.height = (document.getElementById("ContenedorAll").offsetHeight > 900)?(document.getElementById("ContenedorAll").offsetHeight+60) : ($(document).height());
    canvas.width = document.body.clientWidth;
    var columns = []
    for (i = 0; i < 256; columns[i++] = 1);
        function step() {
            canvas.getContext('2d').fillStyle = 'rgba(0,0,0,0.05)';
            canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);
            canvas.getContext('2d').fillStyle = '#0F0';
            columns.map(function (value, index) {
                var character = String.fromCharCode(3e4 + Math.random() * 33);
                canvas.getContext('2d').fillText(character, index * 10, value);
                columns[index] = value > 758 + Math.random() * 1e6 ? 0 : value + 10;
        })
    }
    setInterval(step, 33)
}
function verificador(){
    var pestaña = document.getElementById("conf");
    var inicioSesion = document.getElementById("IS");
    //alert(readCookie("inicio")=="10")
    if(window.location=="http://127.0.0.1:5500/index.html"){
        if(readCookie("inicio")=="10"){
            pestaña.style.display="block";
            inicioSesion.style.display="none";
        }else{
            pestaña.style.display="none";
            inicioSesion.style.display="block";
        }
    }

    if(readCookie("fxMatrix")=="10"){
        efectoMatrix();
    }else{
    }
}
document.onload=verificador();
