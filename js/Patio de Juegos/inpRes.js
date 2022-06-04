function inpRes(){
    document.body.style.backgroundColor = "#fffdc9";
    document.getElementById("imgInpRdbtn").src = "../../../recursos/img/1200px-ISO_C++_Logo.svg.png";
    document.getElementById("txtInpChkbx").style.fontStyle = "normal";
    document.getElementById("txtInpChkbx").style.fontWeight = "normal";
    document.getElementById("txtInpChkbx").style.textDecoration = "none";
    document.getElementById("inpPass").type="password";
    document.getElementById("imgInpRan").style.height = "50%";
    document.getElementById("lblInpNumP").innerHTML = "0";
    document.getElementById("slctOp").selectedIndex= -1;
    document.getElementById("btnResu").innerHTML = "Resultado";
    document.getElementById("otptResultado").innerHTML = "";
    document.getElementById("mtrBar").value = "50";

}
function eventos(){
    document.getElementById("inpRes").addEventListener("click", inpRes);
}
window.addEventListener("load", eventos);