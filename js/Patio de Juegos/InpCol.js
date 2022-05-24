function inpCol(){
    document.body.style.backgroundColor = document.getElementById("inpCol").value;
}
function eventos(){
    document.getElementById("inpCol").addEventListener("input", inpCol);
}
window.addEventListener("load", eventos);