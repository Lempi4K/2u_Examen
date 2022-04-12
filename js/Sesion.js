function readCookie(name) {
    var nameEQ = name + "="; 
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) {
        return decodeURIComponent( c.substring(nameEQ.length,c.length) );
      }
    }
    return null;
  }

function botonMandar(){
    var usuario = document.getElementById("txtUsuario").value;
    var pass = document.getElementById("txtPass").value;
    if(usuario=="Lempi4K" && pass=="morenopinto23"){
        document.cookie="inicio="+encodeURIComponent("10")+"; expires="+new Date(2068, 1, 02, 11, 20).toUTCString+"; path=/"
        location.reload();
    }
    else{
        alert("Usuario o contraseña incorrectos");
        document.getElementById("txtPass").value="";
    }
}


