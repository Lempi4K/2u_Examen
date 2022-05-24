function inpBtn(){
    document.location.replace("#InpTbutton");
}
function eventos(){
    document.getElementById("inpBtn").addEventListener("click", inpBtn);
}
window.addEventListener("load", eventos);