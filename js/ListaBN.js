function MenuBNAlg(op){
    var url = new String(window.location);
    for(var i = 0; i < op.options.length; i++){
        if(url.endsWith(op.options[i].value)){
            return i;
        }
    }
}
function MenuBN(){
    var op = document.getElementById("ListaBN");
    var seleccion = op.options[op.selectedIndex].value;
    window.open(seleccion, op.options[op.selectedIndex].id == "OBNBlank"?"_blank":"_self")
    op.options[MenuBNAlg(op)].selected = true;
}

var op = document.getElementById("ListaBN");
op.options[MenuBNAlg(op)].selected = true;

