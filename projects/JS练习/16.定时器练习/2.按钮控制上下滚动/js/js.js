window.onload = function(){
    mv.app.down() ;
}

var mv = {

}

mv.ui = {} ;
mv.ui.moveDown = function(obj, to_stop, to_start){
    clearInterval(obj.Timer) ;
        obj.Timer = setInterval(function(){
            if(obj.style.top == to_stop){
                // console.log(obj.style.top+"stop") ;
                clearInterval(obj.Timer) ;
            }
            else{
                console.log("start") ;
                to_start = to_start - 1 ;
                obj.style.top = to_start + "px";
            }

        },30) ;
}
mv.app = {} ;
mv.app.down = function(){
    var btn_down = document.getElementById("btn-bottom") ;
    var btn_up = document.getElementById("btn") ;
    var ul = document.getElementById("contents-ul") ;
    var aLi = ul.getElementsByTagName('li') ;
    var ul_offsetheight = 0 ;

    var uuu = ul.style.top ;
    console.log(ul.style.top) ;
    var ul_top = ul.style.top ;

    for(var i=0; i<aLi.length; i++){
         ul_offsetheight += aLi[i].offsetHeight  ;
    }
    ul.style.height = ul_offsetheight + "px" ;
    var top_stop = -(ul_offsetheight - 380) + "px" ;

    btn_down.onmousedown = function(){   //ul的left值向上

        //mv.ui.moveDown(ul, top_stop, ul_top) ;

        clearTimeout(ul.Timer) ;
        ul.Timer = setInterval(function(){
            if(ul.style.top == top_stop){
                clearTimeout(ul.Timer) ;
            }
            else{
                ul_top = ul_top - 1 ;
                ul.style.top = ul_top + "px";
            }

        },30) ;
        
    }
    btn_down.onmouseup = function(){
        clearInterval(ul.Timer) ;
    }
    btn_up.onmousedown = function(){
        clearInterval(ul.Timer) ;
        ul.Timer = setInterval(function(){
            if(ul.style.top == "0px" || ul.style.top == ''){
                clearInterval(ul.Timer) ;
            }
            else{
                ul_top = ul_top - (-1) ;
                ul.style.top = ul_top + "px";
            }

        },30) ;
    }
    btn_up.onmouseup = function(){
        clearInterval(ul.Timer) ;
    }
}