function txt1(){
    var tarjeta = (document.getElementById("inpRdbtnTarjeta").checked && (((new String(document.getElementById("inpTxtNumTarjeta").value)).substring(18) == "_") || document.getElementById("inpTxtNumTarjeta").value == ""));
    var inpTxtNumTarjeta = document.getElementById("inpTxtNumTarjeta");
    if(tarjeta){
        inpTxtNumTarjeta.style.border = "#e42c2c 2px solid"
        inpTxtNumTarjeta.style.boxShadow = "#e42c2c 0 0 5px 5px"

    }else{
        inpTxtNumTarjeta.style.border = "none";
        inpTxtNumTarjeta.style.boxShadow = "none"
    }
    inpTxtNumTarjeta.addEventListener("reset", function(){
        this.style.border = "none";
        this.style.boxShadow = "none";
    })
}
function txt2(){
    var envio = (document.getElementById("inpCkbxEnvio").checked && document.getElementById("inpTxtEnvio").value == "");
    var inpTxtEnvio = document.getElementById("inpTxtEnvio");
    if(envio){
        inpTxtEnvio.style.border = "#e42c2c 2px solid"
        inpTxtEnvio.style.boxShadow = "#e42c2c 0 0 5px 5px"

    }else{
        inpTxtEnvio.style.border = "none";
        inpTxtEnvio.style.boxShadow = "none"
    }
}
function txt3(){
    var producto = document.getElementById("inpTxtProducto").value == "";
    var inpTxtProducto = document.getElementById("inpTxtProducto");
    if(producto){
        inpTxtProducto.style.border = "#e42c2c 2px solid"
        inpTxtProducto.style.boxShadow = "#e42c2c 0 0 5px 5px"

    }else{
        inpTxtProducto.style.border = "none";
        inpTxtProducto.style.boxShadow = "none"
    }
}
function txt4(){
    var precio = document.getElementById("inpTxtPrecio").value == "";
    var inpTxtPrecio = document.getElementById("inpTxtPrecio");
    if(precio){
        inpTxtPrecio.style.border = "#e42c2c 2px solid"
        inpTxtPrecio.style.boxShadow = "#e42c2c 0 0 5px 5px"

    }else{
        inpTxtPrecio.style.border = "none";
        inpTxtPrecio.style.boxShadow = "none"
    }
}

function animacionFocus(evento, lbl){
    lbl.style.width= "0px";
}
function animacionBlur(evento, lbl){
    lbl.style.width= "30%";
}

function AAlturaBody(altura){
    var nuevaAltura = altura;
    var altura = document.getElementById("escena1").offsetHeight;
    $("#escena1").animate({
        height: altura + nuevaAltura,
    }, 500, function (){
        //document.getElementById("escena1").style.height = "auto"
    });
}
function AAlturaGenerico(altura, elemento){
    var nuevaAltura = altura;
    var altura = elemento.offsetHeight;
    $("#"+ (elemento.id)).animate({
        height: altura + nuevaAltura,
    }, 500);
}
function AAlturaGenericoN(altura, elemento){
    $("#"+ (elemento.id)).animate({
        height: 0,
    }, 500, function(){
        elemento.style.height = altura+"px";
        elemento.style.display = "none";
    });
}
function MostrarOcultarA(elemento, condicion){
    elemento.style.display = "block";
    var altura = elemento.offsetHeight;
    if(condicion){
        AAlturaBody(altura);
        elemento.style.height = "0px";
        AAlturaGenerico(altura, elemento);
        elemento.style.height = (altura)+"px";
    }else{
        AAlturaGenericoN(altura, elemento);
        AAlturaBody(-1*altura);
    }
}
function AnimacionIn(){
    $("#escena1").animate({
        opacity: "0",
    }, 500, function (){
        $("#escena1").css("display", "none");
        $("#escena2").css("display", "block");
        $("#escena2").animate({
            opacity: "1",
        }, 500);
    });
}
function AnimacionOut(){
    $("#escena2").animate({
        opacity: "0",
    }, 500, function (){
        $("#escena2").css("display", "none");
        $("#escena1").css("display", "block");
        $("#escena1").animate({
            opacity: "1",
        }, 500);
    });
}

function eventos(){
    var txts = document.querySelectorAll(".inpTxt > input, .inpTxt > textarea");
    var lbls = document.getElementsByClassName("lblInpTxt");
    for(var i = 0; i < txts.length; i++){
        txts[i].addEventListener("focus", function(x){
            return function (evento){
                var lbl = lbls[x];
                animacionFocus(evento, lbl);
            }
        }(i));

        txts[i].addEventListener("blur", function(x){
            return function (evento){
                var lbl = lbls[x];
                animacionBlur(evento, lbl);
            }
        }(i));
    }
    document.getElementById("inpTxtNumTarjeta").addEventListener("keyup", txt1);
    document.getElementById("inpTxtEnvio").addEventListener("input", txt2);
    document.getElementById("inpTxtProducto").addEventListener("input", txt3);
    document.getElementById("inpTxtPrecio").addEventListener("keyup", txt4);

    document.getElementById("inpRdbtnTarjeta").addEventListener("change", function (){
        var condicion = document.getElementById("inpRdbtnTarjeta").checked;
        var elemento = document.getElementById("inpTxtNumTarjetaO");
        MostrarOcultarA(elemento, condicion);
    });
    document.getElementById("inpRdbtnEfectivo").addEventListener("change", function (){
        var condicion = document.getElementById("inpRdbtnTarjeta").checked;
        var elemento = document.getElementById("inpTxtNumTarjetaO");
        MostrarOcultarA(elemento, condicion);
    });

    document.getElementById("inpCkbxEnvio").addEventListener("change", function (){
        var condicion = document.getElementById("inpCkbxEnvio").checked;
        var elemento = document.getElementById("inpTxtEnvioO");
        MostrarOcultarA(elemento, condicion);
    });

    document.getElementById("inpBtnPagar").addEventListener("click", function (){
        var elemento = document.getElementById("inpTxtTotalO");
        elemento.style.display = "block";
        var altura = elemento.offsetHeight;
        AAlturaBody(altura);
        elemento.style.height = "0px";
        AAlturaGenerico(altura, elemento);
        elemento.style.height = (altura)+"px";
    });

    document.getElementById("inpBtnCancelar").addEventListener("click", function (){
        var elemento = document.getElementById("inpTxtTotalO");
        elemento.style.display = "block";
        var altura = elemento.offsetHeight;
        AAlturaGenericoN(altura, elemento);
        AAlturaBody(-1*altura);
    });

    document.getElementById("inpBtnConfirmar").addEventListener("click", AnimacionIn)

}
window.addEventListener("load", eventos);