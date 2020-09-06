window.onload = function(){
    var str="" ;
    document.state = 0 ;
    for(var i=0; i<20; i++){
        str += '<div style=" width:50px; height:50px; background:red; position:absolute; top:10px; left:'+i*60+'px; "></div>' ;
    }
    document.body.innerHTML = str ;

    var aDiv = document.getElementsByTagName('div') ;
    var len = aDiv.length ;
    var num = 0 ;
    var timer = null ;
    document.onclick = function(){
        console.log("clear") ;
        clearInterval(timer) ;
            timer = setInterval(function(){
                if(document.state == 0){
                    doMove(aDiv[num],"top",12,400) ;
                    num++ ;
                    if(num == len){
                        clearInterval(timer) ;
                        document.state = 1 ;  //在下面
                        num = 0 ;
                    }
                }else if(document.state == 1){
                    doMove(aDiv[num],"top",12,10) ;
                    num++ ;
                    if(num == len){
                        clearInterval(timer) ;
                        document.state = 0 ;  //在上面
                        num = 0 ;
                    }
                }
            } ,100);
    }
}  

function getStyle(obj, attr){
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr] ;
}

function doMove(obj, attr, speed, target){
    var dir = 0;
    speed = parseInt(getStyle(obj, attr)) < target?speed:-speed ;
    
    clearInterval(obj.timer) ;
    obj.timer = setInterval(function(){
        dir = parseInt(getStyle(obj, attr)) + speed ;   //位置
        if(dir > target && speed > 0 || dir < target && speed < 0){
            dir = target ;
        }
        obj.style[attr] = dir + "px" ;
        if(dir == target){
            clearInterval(obj.timer) ;
        }

    }, 30) ;
}

