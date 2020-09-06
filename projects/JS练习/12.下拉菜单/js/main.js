var wrap =document.getElementById("wrap") ;
var title = document.getElementById("pp") ;
var list = document.getElementById("list") ;
var list_on = false ;
var a=[1,2,3] ;
var b = a ;
a[1] = 4 ;
console.log(b) ;
b[3] = 4 ;
console.log(b) ;
console.log(a) ;

title.onclick = function(){
    // console.log(list_on) ;
    if(list_on){
        list.style.display = "none" ;
        list_on = false ;
    }
    else{
        list.style.display = 'block' ;
        list_on = true ;
    }
}

var  li_list = list.getElementsByTagName("li") ;
for(var i=0; i<li_list.length; i++){
    
    li_list[i].onclick = function(){
        var txt = this.innerText ;
        title.innerText = txt ;
        list.style.display = "none" ;
        list_on = false ;
    }
}
