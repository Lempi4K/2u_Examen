function botonMandar(){
    var usuario = document.getElementById("txtUsuario").value;
    var pass = document.getElementById("txtPass").value;
    if((usuario=="Lempi4K" && pass=="morenopinto23") || (usuario=="root" && pass=="")){
        document.cookie="inicio="+encodeURIComponent("10")+"; expires="+new Date(2068, 1, 02, 11, 20).toUTCString+"; path=/";
        location.reload();
    }
    else{
        if(document.getElementById("textoIS") === null){
          var parrafo = document.createElement("p");
          parrafo.appendChild(document.createTextNode("Usuario o contraseña incorrectos"));
          parrafo.id = "textoIS";
          var divu = document.getElementById("udiv");
          divu.parentNode.insertBefore(parrafo, divu.nextSibling);
          //$("#udiv").after("<p id='textoIS'>Usuario o contraseña incorrectos</p>");
        }
        document.getElementById("txtPass").value="";
    }
}


