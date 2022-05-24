function chkbxMatrix(){
    if(document.getElementById("chkbxMatrix").checked){
        efectoMatrix()
        document.cookie="fxMatrix="+encodeURIComponent("10")+"; expires="+new Date(2068, 1, 02, 11, 20).toUTCString+"; path=/";
    }else{
        efectoMatrixnt();
        document.cookie="fxMatrix="+encodeURIComponent("cero")+"; max-age=0; path=/";
        document.cookie="fxMatrix="+encodeURIComponent("cero")+"; max-age=0;";
    }
}
function botonMandarCS(){
    document.cookie="inicio="+encodeURIComponent("cero")+"; max-age=0; path=/";
    document.cookie="fxMatrix="+encodeURIComponent("cero")+"; max-age=0; path=/";
    document.cookie="fxMatrix="+encodeURIComponent("cero")+"; max-age=0;";
    location.replace("../../index.html");
}

function eventos(){
    document.getElementById("chkbxMatrix").addEventListener("change", chkbxMatrix);
    
    if(readCookie("fxMatrix")=="10"){
        document.getElementById("chkbxMatrix").checked=true;
        efectoMatrix()
    }
}

window.addEventListener("load", eventos);
