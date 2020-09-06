var wrap = document.getElementById("wrap");
for(var i=0; i<10; i++){
    height = 60 * i ;
    for(var j=0; j<10; j++){
        left = 60 *j;
        wrap.innerHTML += '<div class="div_img" style="position:absolute; left:'+ left +'px; top:'+ height +'px; \
        background-position:-'+ 50*j +'px -'+ 50*i +'px; " /></div>';
    }
}

var img_list = wrap.getElementsByTagName("div") ;
for( var i=0; i<img_list.length; i++){
    img_list[i].showImg = false ;
    img_list[i].onmouseover = function(){
        console.log(this) ;
        if(this.showImg){
            console.log("什么都不做") ;
        }
        else{    //这样省的每次都加载
            this.style.backgroundImage = "url(./img/img.jpg)";
            this.showImg = true ;
        }
        

    }
}