var wrap = document.getElementById("wrap") ;
var box = document.getElementById("box") ;
var a_list = wrap.getElementsByTagName("a") ;
var div_list = box.getElementsByTagName("div") ;

var now = 0 ;
for(var i=0; i<a_list.length; i++){
    a_list[i].index = i ;
    a_list[i].onclick = function(){
        console.log("前一个："+now) ;
        a_list[now].className = "" ;
        div_list[now].className = "" ;
        // for(var j=0; j<a_list.length; j++){
        //     a_list[j].className = "" ;
        //     div_list[j].className = "" ;
        // }
        this.className = "a_click" ;
        div_list[this.index].className = "active1" ;
        now = this.index ;
        console.log(now) ;
    }
}