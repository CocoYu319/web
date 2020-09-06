var btn = document.getElementById("btn") ;
btn.onclick = function(){
    var txt = document.getElementById("txt") ;
    var list = document.getElementById("list") ;
    var text = txt.value ;
    list.innerHTML += "<li>" + text +"</li>" ;
}