function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
function verificador(){
    var pestaña = document.getElementById("conf");
    var inicioSesion = document.getElementById("IS");
    var opcionListaBN = document.getElementById("OpcionBNC");
    //alert(readCookie("inicio")=="10")
    var ipe = new String(window.location);
    //alert(ipe.endsWith("/index.html") + "\n" + ipe.endsWith("/"))
    if(ipe.includes("/index.html") || ipe.endsWith("/")){
        if(readCookie("inicio")=="10"){
            pestaña.style.display="block";
            inicioSesion.style.display="none";
            opcionListaBN.style.display="block";
        }else{
            pestaña.style.display="none";
            inicioSesion.style.display="block";
            opcionListaBN.style.display="none";
        }
    }

    if(readCookie("fxMatrix")=="10"){
        efectoMatrix();
    }
}
window.addEventListener("load", verificador);
