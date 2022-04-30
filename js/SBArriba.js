var SBBtn = document.getElementById("SBArriba");
SBBtn.addEventListener("click", scrollArriba);
function scrollArriba(){
    var scrollActual = document.documentElement.scrollTop;
    if(scrollActual > 0){
        $("body, html").animate({
            scrollTop: "0px"
        }, 100)
    }
}

window.onscroll = function(){
    if(document.documentElement.scrollTop < 100){
        SBBtn.style.transform = "scale(0)";
    }
    else{
        SBBtn.style.transform = "scale(1)";
    }
};

