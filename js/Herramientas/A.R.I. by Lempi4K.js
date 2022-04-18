/*
    A.R.I (Algoritmo de Redimension de Imagenes) por: Lempi4K
        -Este algoritmo redimensiona imagenes para evitar el Layout Shifting producido por
         dejar que CSS recalcule las dimensiones de las imagenes. Este algoritmo obtiene lo
         que mide el contenedor padre de la imagen y hace calculos con las dimensiones 
         originales de la imagen, poniendo "height" y "width" en los atributos del elemento
         en el HTML. Las imagenes deben de estar de hijas de un div, ". BLImg > img" es una 
         adaptacion para mi codigo (se puede eliminar) 
*/
var imagenes = document.querySelectorAll("div > img, .BLImg > img");
for(var i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener("load", function(){
        console.log(this.src);
        var textoan = new String((window.getComputedStyle(this.parentNode).getPropertyValue("width")));
        textoan= textoan.substring(0, textoan.length-2);
        var anchura = parseInt(textoan);
        console.log("imgO Anchura: " + (anchura));
        var relacion = anchura/this.naturalWidth;
        this.width = anchura;
        console.log("anchura: " + this.width);
        this.height = relacion * this.naturalHeight;
        console.log("altura: " + this.height);
    });
}