window.onload = function(){    

    var aImg = document.getElementsByTagName("img") ;
    
    for(var i=0; i<aImg.length; i++){
        aImg[i].style.left = 80 + i*115 + "px" ;
        aImg[i].index = i ;
        aImg[i].onmouseover = function(){
            this.style.left = 80 + this.index*115 + "px" ;
            shake(this, "left", 20) ; 
        }
        
    }

    //封装
    function shake(obj, attr, speed){
        var arr = [] ;
        var num = 0 ;
        // var oldPos = parseInt(getStyle(obj, attr)) ;
        
        for(var i=speed; i>0; i-=3){
            arr.push(i,-i) ;
        }
        arr.push(0) ;

       
        clearInterval(obj.timer) ;
        obj.timer = setInterval(function(){
            var newPos = parseInt(getStyle(obj, attr)) + arr[num] ;
            obj.style[attr] = newPos + "px" ;
            num++ ;
            if(num == arr.length){
                clearInterval(obj.timer);
                num = 0 ;
            } 
        },50) ;
        
    }


    function getStyle(obj, attr){
        return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr] ;
    }


}