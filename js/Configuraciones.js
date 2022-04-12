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
function efectoMatrix(){
    var separadores = document.getElementsByClassName("E_20px")
    for(var i=0; i<separadores.length; i++){
        separadores[i].style.display="none"
    }
    var body = document.querySelector("body");
    body.style.position="relative";
    var contenedorAll = document.getElementById("ContenedorAll");
    contenedorAll.style.position="absolute";
    contenedorAll.style.top="0";  
    contenedorAll.style.left="50%"; 
    contenedorAll.style.transform="translate(-50%, 30px)"; 
    contenedorAll.style.zIndex="0";
    var canvas = document.getElementById("canvas");
    canvas.style.display="block";
    canvas.height = $(document).height();
    canvas.width = document.body.clientWidth;
    var columns = []
    for (i = 0; i < 256; columns[i++] = 1);
        function step() {
            canvas.getContext('2d').fillStyle = 'rgba(0,0,0,0.05)';
            canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);
            canvas.getContext('2d').fillStyle = '#0F0';
            columns.map(function (value, index) {
                var character = String.fromCharCode(3e4 + Math.random() * 33);
                canvas.getContext('2d').fillText(character, index * 10, value);
                columns[index] = value > 758 + Math.random() * 1e4 ? 0 : value + 10
        })
    }
    setInterval(step, 33)
}
function efectoMatrixnt(){
    var separadores = document.getElementsByClassName("E_20px")
    for(var i=0; i<separadores.length; i++){
        separadores[i].style.display="block"
    }
    var body = document.querySelector("body");
    body.style.position="static";
    var contenedorAll = document.getElementById("ContenedorAll");
    contenedorAll.style.position="static";
    contenedorAll.style.top="0";  
    contenedorAll.style.left="0"; 
    contenedorAll.style.transform="translate(0, 0)"; 
    contenedorAll.style.zIndex="0";
    var canvas = document.getElementById("canvas");
    canvas.style.display="none";
}
function chkbxMatrix(){
    if(document.getElementById("chkbxMatrix").checked){
        efectoMatrix()
        document.cookie="fxMatrix="+encodeURIComponent("10")+"; expires="+new Date(2068, 1, 02, 11, 20).toUTCString;
    }else{
        efectoMatrixnt();
        document.cookie="fxMatrix="+encodeURIComponent("cero")+"; max-age=0; path=/";
    }
}
function botonMandarCS(){
    document.cookie="inicio="+encodeURIComponent("cero")+"; max-age=0; path=/";
    location.replace("../../index.html");
}

