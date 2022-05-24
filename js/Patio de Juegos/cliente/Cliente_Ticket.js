function Class_DatosTicket(){
    var date = new Date();
    var obj = {
        fechaHora_s: date.toDateString() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
        cliente_s: (datosPago.getCliente() == ""?"No especificado":datosPago.getCliente()),
        producto_s: datosPago.getProducto(),
        precio_s: datosPago.getPrecio() + " peso(s)",
        descuento_s: datosPago.getDescuento()*100 + "%",
        tPago_s: ((datosPago.getTarjeta() == "") ? "Efectivo" : "Tarjeta"),
        tTarjeta_s: "XXXX-XXXX-XXXX-" + (new String(datosPago.getTarjeta())).substring(15),
        envio_s: ((datosPago.getEnvio() == 100) ? "Si (100 pesos)" : "No (0 pesos)"),
        eDomicilio_s: datosPago.getDireccionEnvio(),
        pTotal_s: datosPago.getTotal() + " peso(s)"
    };
    return obj
}

function ManejadorDatos(){
    var datos = Class_DatosTicket();
    var elementos = document.getElementsByClassName("Lineas");
    for(var i = 0; i < elementos.length; i++){
        var uElemento = elementos[i].lastChild;
        uElemento.previousSibling.innerHTML = datos[uElemento.previousSibling.id];
    }
    if(datosPago.getTarjeta() == ""){
        document.getElementById("oTarjeta").style.display = "none";
    }else{
        document.getElementById("oTarjeta").style.display = "block";
    }
    if(datosPago.getEnvio() != 100){
        document.getElementById("oDomicilio").style.display = "none";
    }else{
        document.getElementById("oDomicilio").style.display = "block";
    }
}

function Confirmar(){
    datosPago.setCliente(document.getElementById("inpTxtCliente").value)
    datosPago.setProducto(document.getElementById("inpTxtProducto").value)
    datosPago.setTarjeta(document.getElementById("inpTxtNumTarjeta").value)
    datosPago.setDireccionEnvio(document.getElementById("inpTxtEnvio").value)

    datosPago.setDescuento(parseFloat(document.getElementById("slctDescuento").value));
    datosPago.setPrecio(parseFloat(document.getElementById("inpTxtPrecio").value));
    if(document.getElementById("inpCkbxEnvio").checked){
        datosPago.setEnvio(100);
    }else{
        datosPago.setEnvio(0);
    }
    datosPago.PrecioTotal();
    console.log(datosPago.toString());

    //document.getElementById("escena1").style.display = "none";
    //document.getElementById("escena2").style.display = "block";

    ManejadorDatos()
}
function Volver(){
    AnimacionOut()
}
function ColTicket(){
    document.querySelector("#Ticket").style.backgroundColor = document.getElementById("inpColTicket").value;
}
function Imprimir(){
    ticket = document.getElementById("Ticket");
    var imprimir = window.open(' ', 'popimpr');
    imprimir.document.write( ticket.innerHTML );
    imprimir.document.close();
    imprimir.print( );
    imprimir.close();
}


function eventos(){
    document.getElementById("inpBtnConfirmar").addEventListener("click", Confirmar);
    document.getElementById("inpBtnVolver").addEventListener("click", Volver);
    document.getElementById("inpColTicket").addEventListener("input", ColTicket);
    document.getElementById("inpBtnImprimir").addEventListener("click", Imprimir);
}
window.addEventListener("load", eventos);