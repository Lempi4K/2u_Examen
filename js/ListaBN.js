function MenuBNAlg(op){
    var url = new String(window.location);
    for(var i = 0; i < op.options.length; i++){
        if(url.includes(op.options[i].value, 0)){
            return i;
        }
    }
}
function MenuBN(){
    var op = document.getElementById("ListaBN");
    var seleccion = op.options[op.selectedIndex].value;
    window.open(seleccion, op.options[op.selectedIndex].id == "OBNBlank"?"_blank":"_self")
}

function eventos(){
    var op = document.getElementById("ListaBN");
    op.addEventListener("input", MenuBN);
    console.log(MenuBNAlg(op))
    op.options[MenuBNAlg(op)].selected = true;
}
window.addEventListener("load", eventos);

