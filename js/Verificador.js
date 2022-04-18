function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
function verificador(){
    var pestaña = document.getElementById("conf");
    var inicioSesion = document.getElementById("IS");
    //alert(readCookie("inicio")=="10")
    var ipe = new String(window.location);
    //alert(ipe.endsWith("/index.html") + "\n" + ipe.endsWith("/"))
    if(ipe.endsWith("/index.html") || ipe.endsWith("/")){
        if(readCookie("inicio")=="10"){
            pestaña.style.display="block";
            inicioSesion.style.display="none";
        }else{
            pestaña.style.display="none";
            inicioSesion.style.display="block";
        }
    }

    if(readCookie("fxMatrix")=="10"){
        document.querySelector("body").style.backgroundColor="rgb(0,0,0)";
        var imagenes = document.querySelectorAll("div > img, .BLImg > img"); 
        if(imagenes.length > 0){
            imagenes[imagenes.length-1].addEventListener("load", function(){
                efectoMatrix();
            });
        }else{
            efectoMatrix();
        }
    }else{
    }
}
document.body.addEventListener("load", verificador());
