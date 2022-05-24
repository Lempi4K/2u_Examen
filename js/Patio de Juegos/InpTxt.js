function btnMayusTxt(){
    var inpTxt = document.getElementById("inpTxt");
    inpTxt.value = (new String(inpTxt.value)).toUpperCase();

}
function btnMinusTxt(){
    var inpTxt = document.getElementById("inpTxt");
    inpTxt.value = (new String(inpTxt.value)).toLowerCase();
}
function eventos(){
document.getElementById("btnMayusTxt").addEventListener("click", btnMayusTxt);
document.getElementById("btnMinusTxt").addEventListener("click", btnMinusTxt);
}
window.addEventListener("load", eventos);