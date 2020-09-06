var btn = document.getElementById("btn") ;
btn.onclick = function(){
    var mask = document.getElementById("mask") ;
    var mask_box = document.getElementById("mask_box") ;

    mask.style.display = "block" ;
    mask_box.style.display = "block" ;

    var s = mask.id;
    console.log(s.split("a")) ;
}

var red = document.getElementById("red") ;
var yel = document.getElementById("yellow") ;
var blue = document.getElementById("blue") ;
red.onclick = function(){
    ChangeColor(red) ;
}
yel.onclick = function(){
    ChangeColor(yel) ;
}
blue.onclick = function(){
    ChangeColor(blue) ;
}

var w200 = document.getElementById("w_200") ;
var w300 = document.getElementById("w_300") ;
var w400 = document.getElementById("w_400") ;
var h200 = document.getElementById("h_200") ;
var h300 = document.getElementById("h_300") ;
var h400 = document.getElementById("h_400") ;
w200.onclick = function(){
    ChangeSize(w200) ;
}
w300.onclick = function(){
    ChangeSize(w300) ;
}
w400.onclick = function(){
    ChangeSize(w400) ;
}
h200.onclick = function(){
    ChangeSize(h200) ;
}
h300.onclick = function(){
    ChangeSize(h300) ;
}
h400.onclick = function(){
    ChangeSize(h400) ;
}

function ChangeColor(btn)
{
    var color = btn.id ;
    var div = document.getElementById("CBox") ;
    div.style.background = color  ;
}
function ChangeSize(btn)
{
    var div = document.getElementById("CBox") ;
    var size = btn.id ;
    var judge = size.split("_") ;
    if(judge[0] == "w")
    {
        console.log(judge[1]) ;
        div.style.width = judge[1] + "px";
    }
    else if(judge[0] == "h")
    {
        console.log(judge[1]) ;
        div.style.height = judge[1] + "px";
    }
}

var sure = document.getElementById("sure") ;
sure.onclick = function(){
    var mask = document.getElementById("mask") ;
    var mask_box = document.getElementById("mask_box") ;

    mask.style.display = "none" ;
    mask_box.style.display = "none" ;
}

var back = document.getElementById("back") ;
back.onclick = function(){
    var mask = document.getElementById("mask") ;
    var mask_box = document.getElementById("mask_box") ;
    var div = document.getElementById("CBox") ;

    div.style.cssText = "width:100px; height:100px; background:#fffff; " ;
    mask.style.display = "none" ;
    mask_box.style.display = "none" ;
}












