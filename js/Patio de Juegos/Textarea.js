function txtArea(){
    var txtArea = document.getElementById("txtArea");
    txtArea.value = (new String(txtArea.value)).toUpperCase();

}
function eventos(){
document.getElementById("txtArea").addEventListener("keyup", txtArea);
}
window.addEventListener("load", eventos);