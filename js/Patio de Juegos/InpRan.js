function InpRan(){
    var tamaño = document.getElementById("inpRan").value;
    document.getElementById("imgInpRan").style.height = tamaño + "%";
}
function eventos(){
    document.getElementById("inpRan").addEventListener("input", InpRan);
}
window.addEventListener("load", eventos);