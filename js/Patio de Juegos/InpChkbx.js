function inpChkbx(){
    var txtInpChkbx = document.getElementById("txtInpChkbx");
    if(document.getElementById("inpChkbxItalic").checked){
        txtInpChkbx.style.fontStyle = "italic";
    } else{txtInpChkbx.style.fontStyle = "normal"}

    if(document.getElementById("inpChkbxBold").checked){
        txtInpChkbx.style.fontWeight = "bold";
    } else{txtInpChkbx.style.fontWeight = "normal"}

    if(document.getElementById("inpChkbxSub").checked){
        txtInpChkbx.style.textDecoration = "underline";
    } else{txtInpChkbx.style.textDecoration = "none"}
}
function eventos(){
    document.getElementById("inpChkbxItalic").addEventListener("click", inpChkbx);
    document.getElementById("inpChkbxBold").addEventListener("click", inpChkbx);
    document.getElementById("inpChkbxSub").addEventListener("click", inpChkbx);
}
window.addEventListener("load", eventos);