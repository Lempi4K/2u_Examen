function btnMtrR10(){
    var mtrBar = document.getElementById("mtrBar")
    if(parseInt(mtrBar.value) > 0){
        mtrBar.value = parseInt(mtrBar.value) - 10;
    }
}
function btnMtrS10(){
    var mtrBar = document.getElementById("mtrBar")
    if(parseInt(mtrBar.value) < 100){
        mtrBar.value = parseInt(mtrBar.value) + 10;
    }
}
function eventos(){
    document.getElementById("btnMtrR10").addEventListener("click", btnMtrR10);
    document.getElementById("btnMtrS10").addEventListener("click", btnMtrS10);
}
window.addEventListener("load", eventos);