function InpNum(){
    var num1 = parseInt(document.getElementById("inpNum1").value);
    var num2 = parseInt(document.getElementById("inpNum2").value);
    document.getElementById("lblInpNumP").innerHTML = (num1*num2);
}
function eventos(){
    document.getElementById("inpNum1").addEventListener("input", InpNum);
    document.getElementById("inpNum2").addEventListener("input", InpNum);
    InpNum();
}
window.addEventListener("load", eventos);