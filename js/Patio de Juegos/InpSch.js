function btnBuscarSch(){
    var busqueda = document.getElementById("inpSch").value;
    if(busqueda === ""){
        alert("Campo vacio")
    }else{
        window.open("https://www.google.com/search?q="+busqueda, "_blank");
    }
}
function eventos(){
document.getElementById("btnBuscarSch").addEventListener("click", btnBuscarSch);
}
window.addEventListener("load", eventos);