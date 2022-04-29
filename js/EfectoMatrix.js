function efectoMatrix(){
    var separadores = document.getElementsByClassName("E_20px");
    var espacioExtra = 0;
    for(var i=0; i<separadores.length; i++){
        espacioExtra += separadores[i].offsetHeight;
        separadores[i].style.display="none"
    }
    var body = document.querySelector("body");
    body.style.position="relative";
    var contenedorAll = document.getElementById("ContenedorAll");
    contenedorAll.style.position="absolute";
    contenedorAll.style.top="0";  
    contenedorAll.style.left="50%"; 
    contenedorAll.style.transform="translate(-50%, " + (espacioExtra/2) + "px)"; 
    contenedorAll.style.zIndex="0";
    var canvas = document.getElementById("canvas");
    canvas.style.display="block";
    canvas.height = (document.getElementById("ContenedorAll").offsetHeight+espacioExtra > window.innerHeight)?(document.getElementById("ContenedorAll").offsetHeight+espacioExtra) : (window.innerHeight);
    canvas.width = window.innerWidth;
    var columns = []
    for (i = 0; i < 600; columns[i++] = 1);
        function step() {
            canvas.getContext('2d').fillStyle = 'rgba(0,0,0,0.05)';
            canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);
            canvas.getContext('2d').fillStyle = '#0F0';
            columns.map(function (value, index) {
                var character = String.fromCharCode(3e4 + Math.random() * 33);
                canvas.getContext('2d').fillText(character, index * 10, value);
                columns[index] = value > 758 + Math.random() * 1e6 ? 0 : value + 10;
        })
    }
    setInterval(step, 33);
    window.addEventListener("resize", function(){
        espacioExtra = 0;
        for(var i=0; i<separadores.length; i++){
            separadores[i].style.display="block"
            espacioExtra += separadores[i].offsetHeight;
            separadores[i].style.display="none"
        }
        canvas.height = (document.getElementById("ContenedorAll").offsetHeight+espacioExtra > window.innerHeight)?(document.getElementById("ContenedorAll").offsetHeight+espacioExtra) : (window.innerHeight);
        canvas.width = document.body.clientWidth;
        contenedorAll.style.transform="translate(-50%, " + (espacioExtra/2) + "px)"; 
    });
}

function efectoMatrixnt(){
    var separadores = document.getElementsByClassName("E_20px")
    for(var i=0; i<separadores.length; i++){
        separadores[i].style.display="block"
    }
    var body = document.querySelector("body");
    body.style.position="static";
    body.style.backgroundColor="rgb(255, 253, 201)";
    var contenedorAll = document.getElementById("ContenedorAll");
    contenedorAll.style.position="static";
    contenedorAll.style.top="0";  
    contenedorAll.style.left="0"; 
    contenedorAll.style.transform="translate(0, 0)"; 
    contenedorAll.style.zIndex="0";
    var canvas = document.getElementById("canvas");
    canvas.style.display="none";
}