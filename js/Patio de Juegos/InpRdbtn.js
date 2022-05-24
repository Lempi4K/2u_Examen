function inpRdbtn(){
    var imgInpRdbtn = document.getElementById("imgInpRdbtn");
    if(document.getElementById("inpRdbtnCPP").checked){
        imgInpRdbtn.src = "../../../recursos/img/1200px-ISO_C++_Logo.svg.png";
    }else{
        imgInpRdbtn.src = "../../../recursos/img/PHP-logo.svg.png";
    }
}
function eventos(){
    document.getElementById("inpRdbtnCPP").addEventListener("click", inpRdbtn);
    document.getElementById("inpRdbtnPHP").addEventListener("click", inpRdbtn);
}
window.addEventListener("load", eventos);