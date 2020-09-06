window.onload = function(){
    //自动轮播
    toLunbo() ;
}

//淡出
function picFadeOut(li){
    // console.log(li) ;
    var value = 100 ;
    clearInterval(li.timer) ;
    
    li.timer = setInterval(function(){
        var speed = -5;
        if(value <= 0)
        {
            clearInterval(li.timer) ;
        }
        else
        {
            value += speed ;
            li.style.opacity = value/100 ;
        }
    },30);
}

//淡入
function picFadeIN(li){
    var value = 0 ;
    clearInterval(li.timer) ; 
    li.timer = setInterval(
        function(){
            var speed = 5 ;
            if(value >= 100)
            {
                clearInterval(li.timer) ;
            }
            else
            {
                value += speed ;
                li.style.opacity = value/100 ;
            }
        },30);

}

function toLunbo(){
    var ul = document.getElementById("list") ;
    var aLi = ul.getElementsByTagName("li") ;

    var right = document.getElementById("right") ;
    var left = document.getElementById("left") ;

    var corver = document.getElementById("corver") ;
    var picNow = 0;
    var iNow = 0;
    //没3秒钟换一张图片
    timer = setInterval(auto,3000);
    function auto()
    {
        picNow = iNow ;
        if(iNow == aLi.length-1)   //到最后一张就归0
        {
            iNow = 0 ;
        }
        else
        {
            iNow++;
        }
        
        //淡出picNow
        picFadeOut(aLi[picNow]) ;
        //淡入iNow
        picFadeIN(aLi[iNow]) ;
    }

    ul.onmouseover = function(){
        clearInterval(timer) ;
    }
    ul.onmouseout = function(){
        timer = setInterval(auto, 3000) ;
    }
    right.onmouseover = left.onmouseover = function(){
        clearInterval(timer) ;
    }
    right.onmouseout = left.onmouseout = function(){
        timer = setInterval(auto, 3000) ;
    }
    
    function picBack()
    {
        picNow = iNow ;
        if(iNow == 0)
        {
            iNow=aLi.length - 1 ;
        }
        else
        {
            iNow--;
        }
        picFadeOut(aLi[picNow]);
        picFadeIN(aLi[iNow]) ;
        console.log(picNow) ;
        console.log(iNow) ;
    }

    left.onclick = function(){
        picBack() ;   
    }
    right.onclick = function(){
        auto() ;
    }
}

