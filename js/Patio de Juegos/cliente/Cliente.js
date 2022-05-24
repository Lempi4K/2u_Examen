var datosPago = Class_DatosPago();

function PagarAct(){
    var descuento = parseFloat(document.getElementById("slctDescuento").value);
    console.log();
    var precio = parseFloat(document.getElementById("inpTxtPrecio").value);
    var envio = 0;
    if(document.getElementById("inpCkbxEnvio").checked){
        envio = 100;
    }
    document.getElementById("inpTxtTotal").value = ((precio * (1 - descuento)) + envio).toFixed(2) + " pesos";
}
function Cancelar(){
    document.getElementById("inpTxtTotalO").style.display = "none";
    var elementosForm = document.querySelectorAll("input[type='text'], input[type='radio'], input[type='checkbox'], select, #inpBtnPagar, #inpBtnRestablecer, textarea");
    for(var i = 0; i < elementosForm.length; i++){
        elementosForm[i].disabled = false;
    }
}
function MostrarInpTxtTarjeta(){
    if(document.getElementById("inpRdbtnTarjeta").checked){
        document.getElementById("inpTxtTotalO").style.display = "none";
        document.getElementById("inpBtnPagar").disabled = true;
    }else{
        document.getElementById("inpTxtNumTarjeta").value = "";
        document.getElementById("inpBtnPagar").disabled = false;
        CamposVacios();
    }
}
function MostrarInpTxtEnvio(){
    if(document.getElementById("inpCkbxEnvio").checked){
        document.getElementById("inpTxtTotalO").style.display = "none";
        document.getElementById("inpBtnPagar").disabled = true;
    }else{
        document.getElementById("inpTxtEnvio").value = "";
        document.getElementById("inpBtnPagar").disabled = false;
        CamposVacios();
    }
}
function CamposVacios(){
    var precio = document.getElementById("inpTxtPrecio").value == "";
    //var tarjeta = (document.getElementById("inpRdbtnTarjeta").checked && document.getElementById("inpTxtNumTarjeta").value == "____-____-____-____");
    var tarjeta = (document.getElementById("inpRdbtnTarjeta").checked && (((new String(document.getElementById("inpTxtNumTarjeta").value)).substring(18) == "_") || document.getElementById("inpTxtNumTarjeta").value == ""));
    var producto = document.getElementById("inpTxtProducto").value == "";
    var envio = (document.getElementById("inpCkbxEnvio").checked && document.getElementById("inpTxtEnvio").value == "");
    var inpTxtTotalO =  document.getElementById("inpTxtTotalO");
    if(precio){
        inpTxtTotalO.style.display = "none";
    }
    
    if(producto){
        inpTxtTotalO.style.display = "none";
    }

    if(envio){
        inpTxtTotalO.style.display = "none";
    }

    if(tarjeta){
        inpTxtTotalO.style.display = "none";
    }

    if(!precio && !producto && !envio && !tarjeta){
        document.getElementById("inpBtnPagar").disabled = false;
    }else{
        document.getElementById("inpBtnPagar").disabled = true;
    }
}
function Restablecer(){
    var sumAltura = 0;
    if(document.getElementById("inpRdbtnTarjeta").checked){
        altura = document.getElementById("inpTxtNumTarjetaO").offsetHeight;
        AAlturaGenericoN(altura, document.getElementById("inpTxtNumTarjetaO"))
        sumAltura += altura;
    }
    if(document.getElementById("inpCkbxEnvio").checked){
        altura = document.getElementById("inpTxtEnvioO").offsetHeight;
        AAlturaGenericoN(altura, document.getElementById("inpTxtEnvioO"))
        sumAltura += altura;
    }
    AAlturaBody(-1*sumAltura);

    document.getElementById("inpTxtCliente").value = "";
    document.getElementById("inpTxtProducto").value = "";
    document.getElementById("inpTxtNumTarjeta").value = "";
    document.getElementById("inpTxtEnvio").value = "";
    document.getElementById("slctDescuento").selectedIndex = 0;
    document.getElementById("inpTxtPrecio").value = "";
    document.getElementById("inpCkbxEnvio").checked = false
    document.getElementById("inpTxtTotal").value = "";
    datosPago.Resetear();
    document.getElementById("inpTxtTotalO").style.display = "none";
     document.getElementById("inpRdbtnEfectivo").checked = true;
    document.getElementById("inpBtnPagar").disabled = true;

    document.getElementById("inpTxtNumTarjeta").style.border = "none";
    document.getElementById("inpTxtNumTarjeta").style.boxShadow = "none";

    document.getElementById("inpTxtEnvio").style.border = "none";
    document.getElementById("inpTxtEnvio").style.boxShadow = "none";

    document.getElementById("inpTxtProducto").style.border = "none";
    document.getElementById("inpTxtProducto").style.boxShadow = "none";

    document.getElementById("inpTxtPrecio").style.border = "none";
    document.getElementById("inpTxtPrecio").style.boxShadow = "none";
}
function MostrarInpTxtTotal(){
    document.getElementById("inpTxtTotalO").style.display = "block";
    var elementosForm = document.querySelectorAll("input[type='text'], input[type='radio'], input[type='checkbox'], select, #inpBtnPagar, #inpBtnRestablecer, textarea");
    for(var i = 0; i < elementosForm.length; i++){
        elementosForm[i].disabled = true;
    }
}

function eventos(){
    document.getElementById("inpBtnPagar").addEventListener("click", PagarAct);
    document.getElementById("inpTxtPrecio").addEventListener("keyup", PagarAct);
    document.getElementById("inpCkbxEnvio").addEventListener("change", PagarAct);
    document.getElementById("slctDescuento").addEventListener("change", PagarAct);
    document.getElementById("inpBtnCancelar").addEventListener("click", Cancelar);

    document.getElementById("inpRdbtnTarjeta").addEventListener("change", MostrarInpTxtTarjeta);
    document.getElementById("inpRdbtnEfectivo").addEventListener("change", MostrarInpTxtTarjeta);

    document.getElementById("inpBtnPagar").addEventListener("click", MostrarInpTxtTotal);
    document.getElementById("inpCkbxEnvio").addEventListener("change", MostrarInpTxtEnvio);

    document.getElementById("inpTxtNumTarjeta").addEventListener("keyup", CamposVacios);
    document.getElementById("inpTxtEnvio").addEventListener("input", CamposVacios);
    document.getElementById("inpTxtProducto").addEventListener("input", CamposVacios);
    document.getElementById("inpTxtPrecio").addEventListener("keyup", CamposVacios);

    document.getElementById("inpBtnRestablecer").addEventListener("click", Restablecer)

    $("#inpTxtNumTarjeta").mask("9999-9999-9999-9999")
    document.getElementById("inpTxtPrecio").addEventListener("input", function(){jQuery(this).val(jQuery(this).val().replace(/[^0-9 .]/g, ''));});
}
window.addEventListener("load", eventos);