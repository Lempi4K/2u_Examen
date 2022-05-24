function slct(){
    var slctOp =  document.getElementById("slctOp");
    var btnResu = document.getElementById("btnResu");
    if(slctOp.selectedIndex == 0){
        btnResu.innerHTML = "Sumar";
    }else if(slctOp.selectedIndex == 1){
        btnResu.innerHTML = "Restar";
    }else if(slctOp.selectedIndex == 2){
        btnResu.innerHTML = "Multiplicar";
    }else if(slctOp.selectedIndex == 3){
        btnResu.innerHTML = "Dividir";
    }
}
function btn(){
    var slctOp =  document.getElementById("slctOp");
    var optNum1 = parseInt(document.getElementById("optNum1").value);
    var optNum2 = parseInt(document.getElementById("optNum2").value);
    var otptResultado = document.getElementById("otptResultado");
    if(slctOp.selectedIndex == 0){
        otptResultado.innerHTML = (optNum1 + optNum2);
    }else if(slctOp.selectedIndex == 1){
        otptResultado.innerHTML = (optNum1 - optNum2);
    }else if(slctOp.selectedIndex == 2){
        otptResultado.innerHTML = (optNum1 * optNum2);
    }else if(slctOp.selectedIndex == 3){
        if(optNum1 == 0 && optNum2 == 0){
            otptResultado.innerHTML = "Indefinido";
        }else if(optNum1 != 0 && optNum2 == 0){
            otptResultado.innerHTML = "∞";
        }else{
            otptResultado.innerHTML = (optNum1 / optNum2);
        }
    }
}
function eventos(){
    document.getElementById("slctOp").selectedIndex= -1;
    document.getElementById("slctOp").addEventListener("change", slct);
    document.getElementById("btnResu").addEventListener("click", btn)
}
window.addEventListener("load", eventos);