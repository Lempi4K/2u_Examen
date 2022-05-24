function pgrBar(){
    var pgrBar =  document.getElementById("pgrBar");
    if(pgrBar.value < 100){
        pgrBar.value = pgrBar.value + 1;
    }else {
        pgrBar.value = 0;
    }
}
function eventos(){
    document.getElementById("pgrBar").addEventListener("change", slct);
    setInterval(pgrBar, 10);
}
window.addEventListener("load", eventos);