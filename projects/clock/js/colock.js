window.onload = function(){
    var aImg = document.getElementById("clock").getElementsByTagName("img") ;      //获得img标签
    var now = new Date();
    var prevtime = toZero( now.getHours() ) + toZero( now.getMinutes() ) + toZero( now.getSeconds() );
    var changedNum = [] ;   //用来存放改变了的数据下标
    var timer = null ;
    var nextTime = "" ;

    for( var i=0; i<aImg.length; i++ ){
        aImg[i].src = "./img/" + prevtime.charAt(i) +".png";
    }

    setInterval(toChange, 1000) ;

    //在整数前面加 0
    function toZero( num ){
        if( num<10 ){
            return num = "0" + num;
        }else{
            return num = num + "";
        }
    }
    
    
    function toChange(){
        var date = new Date() ;
        nextTime = toZero(date.getHours()) + toZero(date.getMinutes()) + toZero(date.getSeconds()) ;
        recordChange(prevtime, nextTime) ;
        prevtime = nextTime ;
        
    }
    //记录改变的数值的下标
    function recordChange(str1, str2){
        changedNum = [] ;   //每次都要清空数组
        for(var i=0; i<str1.length; i++){
            if(str1.charAt(i) != str2.charAt(i)){
                changedNum.push(i) ;
            }
        }
        //翻转
        flip() 

    }

    function flip(){
        var speed = -4 ;

        timer = setInterval(function(){

            for( var i=0; i<changedNum.length; i++ ){
                console.log("---------------------------------------------")  ;
                console.log(i) ;
                if( aImg[changedNum[i]].offsetHeight == 0 ){
                    speed = 4;
                    aImg[changedNum[i]].src = "./img/" + nextTime.charAt( changedNum[i] ) + ".png"
                }
                //改变数字高度时默认向底线减少，所以手动改变数字的top向上移动
                aImg[changedNum[i]].style.height = aImg[changedNum[i]].offsetHeight + speed + "px";
                aImg[changedNum[i]].style.bottom = aImg[changedNum[i]].offsetHeight/2 - 18 + "px";
                
                
                 console.log("height"+aImg[changedNum[i]].style.height) ;
                 console.log("top"+aImg[changedNum[i]].style.top) ;

                if( aImg[changedNum[i]].offsetHeight ==36 ){
                    clearInterval( timer );
                }
            }
            console.log("一个for结束") ;
        },10);
        console.log("一个timer结束")  ;
    }
}