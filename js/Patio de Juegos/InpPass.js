function btnInpPass(){
    var btnInpPass = document.getElementById("btnInpPass");
    if(btnInpPass.value === "Revelar"){
        btnInpPass.value = "Ocultar";
        document.getElementById("inpPass").type="text";
    }else{
        btnInpPass.value = "Revelar";
        document.getElementById("inpPass").type="password";  
    }
}
function eventos(){
    document.getElementById("btnInpPass").addEventListener("click", btnInpPass);
}
window.addEventListener("load", eventos);