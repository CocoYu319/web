var img = document.getElementById("img") ;
var send = document.getElementById("send") ;
var text = document.getElementById("txt") ;
var pic = document.getElementById("pic") ;
var mes = document.getElementById("mes") ;
list = document.getElementById("list") ;
var isClick = true ;
img.onclick = function(){
    if(isClick == true)
    {
        img.src = "./img/monster2.png" ;
        isClick = false;
    }
    else
    {
        img.src = "./img/monster.png" ;
        isClick = true ;
    }
    console.log(isClick) ;
}
send.onclick = function(){
    var content = text.value ;
    if(isClick == true)
    {
        list.innerHTML +='<li class=" right"> <img src="./img/monster.png" id="pic"/> <p id="mes">'+ content +'</p></li>' ;
        console.log(img,isClick) ;
    }
    else
    {
        list.innerHTML +='<li class=" left"> <img src="./img/monster2.png" id="pic"/> <p id="mes">'+ content +'</p></li>' ;
        console.log(img,isClick) ;
    }
}








