window.onload = function() {
    mv.app.toPanel();
    mv.app.changeSearchTexrColor();
    mv.app.changeOpacity();
    mv.app.sideBar() ;
    mv.app.refresh();
    mv.app.market() ;
    mv.app.GuessYouLike() ;
    mv.app.setSideLeft() ;
    mv.app.sideLeftChange();
    // window.scrollTo(0,0);
}

var mv = {

}; //命名空间

mv.tools = {};

mv.ui = {};
//a背景发生变化
mv.ui.panelShow = function(obj, panel, a_Obj) {
    obj.hover(
        function() { //鼠标移入
            panel.css("display", "block");
            a_Obj.css("color", "#ff0036");
            a_Obj.addClass("bg");
        },
        function() { //鼠标移出
            panel.css("display", "none");
            a_Obj.css("color", "#999");
            a_Obj.removeClass("bg");
        }
    );
};
//a背景没有变化
mv.ui.panelShow1 = function(obj, panel) {
    obj.hover(
        function() { //鼠标移入
            panel.css("display", "block");
        },
        function() { //鼠标移出
            panel.css("display", "none");
        }
    );
}

mv.ui.changeFont = function(obj, str) {
    obj.focus(function() {
        if (obj.val() == str) {
            obj.css("color", "#000000");
            obj.val("");
        }
    });
    obj.blur(function() {
        if (obj.val() == "") {
            obj.css("color", "#cccccc");
            obj.val(str);
        }
    });
}
//淡出
mv.ui.fadeOut = function(obj){
    var speed = -20 ;
    var opacity = 100 ;
    clearInterval(obj.timer) ;
    obj.timer = setInterval(function(){
        opacity += speed ;
        obj.css("opacity", opacity/100) ;
        obj.css("display", "none") ;
        if(opacity < 0){
            clearInterval(obj.timer) ;
        }
    }, 40) ;
}
//淡入
mv.ui.fadeIn = function(obj){
    var speed = 20 ;
    var opacity = 0 ;
    clearInterval(obj.timer) ;
    obj.timer = setInterval(function(){
        opacity += speed ;
        if(opacity > 100){
            clearInterval(obj.timer) ;
        }
        else{
            obj.css("opacity", opacity/100) ;
            obj.css("display", "block") ;
        }
    }, 40) ;
}
//侧边栏鼠标悬浮效果
mv.ui.sideBarStyle = function(obj){
    obj.css("backgroundColor","#ffffff") ;
    if(obj.index() == 0 || obj.index() == 3 ||obj.index() == 10 ||obj.index() == 14 ){
        obj.css("color","#e5408c") ;
        obj.find("a").css("color", "#e5408c") ; 
    }else if(obj.index() == 1 || obj.index() == 5 ||obj.index() == 9 ||obj.index() == 11 ){
        obj.css("color","#427def") ;
        obj.find("a").css("color", "#427def") ;
    }else if(obj.index() == 2 || obj.index() == 4 ){
        obj.css("color","#6347ed") ;
        obj.find("a").css("color", "#6347ed") ;
    }else if(obj.index() == 6){
        obj.css("color","#fa5c5c") ;
        obj.find("a").css("color", "#fa5c5c") ;
    }else if(obj.index() == 7 || obj.index() == 8 ||obj.index() == 12 ){
        obj.css("color","#f7a866") ;
        obj.find("a").css("color", "#f7a866") ;
    }else if(obj.index() == 13 || obj.index() == 15){
        obj.css("color","#3bc7b0") ;
        obj.find("a").css("color", "#3bc7b0") ;
    }
}

//天猫超市块的效果
//tab切换
mv.ui.checkLi = function(oli, odiv){ 
    odiv.css("display", "block") ;
    oli.find("a").css("backgroundColor", "#00b262");
    oli.find("a").css("color", "#ffffff") ;
}
mv.ui.noCheckLi = function(oli, odiv){
    odiv.css("display", "none") ;
    oli.find("a").css("backgroundColor", "#f1f1f1");
    oli.find("a").css("color", "#000000") ;
}
// 改变侧边导航栏的背景色
mv.ui.changeSideColor = function(obj,num){
    if(num == 0){
        obj.css("background", "#64c333");
    }else if(num == 1){
        obj.css("background", "#ff0036");
    }else if(num == 2){
        obj.css("background", "#f15453");
    }else if(num == 3){
        obj.css("background", "#64c333");
    }else if(num == 4){
        obj.css("background", "#ea5f8d");
    }else if(num == 5){
        obj.css("background", "#0aa6e8");
    }else if(num == 6){
        obj.css("background", "#19c8a9");
    }else if(num == 7){
        obj.css("background", "#ff0036");
    }
}
//还原侧边导航栏的背景色
mv.ui.returnBKcolor = function(objList){
    for(var i=0; i<objList.length; i++){
        objList.eq(i).css("background", "");
    }
}
mv.app = {};
//导航栏
mv.app.toPanel = function() {
    //我的淘宝
    var myTB = $("#myTB"); //li
    var myTB_panel = $("#myTB-div-child"); //panel
    var myTB_a = $("#myTB-a"); //a
    //收藏夹
    var favorite = $("#myFavorite");
    var myFavorite_panel = $("#MyFavorite-div-child");
    var myFavorite_a = $("#MyFavorite-a");
    //手机版
    var phoneTB = $("#phoneTB");
    var phoneTB_panel = $("#phoneTB-div-img");
    //商家支持
    var support = $("#support");
    var support_panel = $("#support-div-child");
    var support_a = $("#support-a");
    //网站导航
    var website = $("#website");
    var website_panel = $("#website-div-child");
    var website_a = $("#website-a");


    mv.ui.panelShow(myTB, myTB_panel, myTB_a);
    mv.ui.panelShow(favorite, myFavorite_panel, myFavorite_a);
    mv.ui.panelShow1(phoneTB, phoneTB_panel);
    mv.ui.panelShow(support, support_panel, support_a);
    mv.ui.panelShow(website, website_panel, website_a);
};
//搜索框
mv.app.changeSearchTexrColor = function() {
    var input_text = $("#search").find("input").eq(0);
    mv.ui.changeFont(input_text, "搜索 天猫 商品/品牌/店铺");

}

//大图片淡入淡出
mv.app.changeOpacity = function() {
    var aLi = $("#big-img").find(".img");
    var aImg = $("#big-img").find(".a-content");
    var aDiv = $("#big-img").find(".btn_div") ;
    var timer= null ;
    var num = 0 ;
    var now = 0 ;
    clearInterval(timer) ;
    timer = setInterval(auto, 3000) ;
    aDiv.eq(0).css("backgroundColor", "#ffffff") ;
    function auto(){
        

        if(num == aLi.length - 1){
            num = 0 ;
        }
        else{
            num++ ;
        }
        //首先淡出上一次的li
        mv.ui.fadeOut(aLi.eq(now)) ;  
        aDiv.eq(now).css("backgroundColor", "") ;
        //然后淡入下一个
        mv.ui.fadeIn(aLi.eq(num)) ;
        aDiv.eq(num).css("backgroundColor", "#ffffff") ;
        now = num ;
    }

    
    for(var i=0; i<aImg.length; i++){
        aImg.eq(i).mouseover(function(){
            clearInterval(timer) ;
        }) ;
        aImg.eq(i).mouseout(function(){
            timer = setInterval(auto, 5000) ;
        }) ;
    }

   for(var i=0; i<aDiv.length; i++){
       aDiv.eq(i).mouseenter(function(){
            var index = aDiv.index(this) ;
            if(index == num){
                return false;
            }
            clearInterval(timer) ;
            mv.ui.fadeOut(aLi.eq(now)) ;
            aDiv.eq(now).css("backgroundColor", "") ;
            mv.ui.fadeIn(aLi.eq(index)) ;
            aDiv.eq(index).css("backgroundColor", "#ffffff") ;
            num = index ;
            now = num ;
            timer = setInterval(auto, 3000) ;
        }) ;
   }
}

//侧边栏鼠标效果   //需封装一下
mv.app.sideBar = function(){
    var aLi = $("#sideList").find("li") ;
    var barContent = $("#barContent");
    var aPanel = barContent.find(".sideContent") ;
    var num = -1 ;
    var sideList = $("#sideList") ;
  
    for(var i=0; i<aLi.length; i++){
        aLi.eq(i).hover(
            function(){
                mv.ui.sideBarStyle($(this)) ;
                barContent.css("display","block") ;
                aPanel.eq($(this).index()).css("display","block");
                num = $(this).index() ;
            },
            function(){
                barContent.css("display","none") ;
                aPanel.eq($(this).index()).css("display","none");
                $(this).css("color","#ffffff") ;
                $(this).css("backgroundColor","") ; 
                $(this).find("a").css("color", "#ffffff") ;
            }
        ) ;
        
    }
    barContent.hover(
        function(){
            mv.ui.sideBarStyle(aLi.eq(num)) ;
            barContent.css("display","block") ;
            aPanel.eq(num).css("display","block");
            // console.log(num);
        },
        function(){
            barContent.css("display","none") ;
                aPanel.eq(num).css("display","none");
                aLi.eq(num).css("color","#ffffff") ;
                aLi.eq(num).css("backgroundColor","") ; 
                aLi.eq(num).find("a").css("color", "#ffffff") ;
        }
    );
}
//翻牌子
mv.app.refresh = function(){
    var refresh_a = $("#refresh") ;
    var refresh_img = refresh_a.find(".refresh-img") ;
    var aDiv = $("#part3").find(".part3-div") ;

    var div_len = aDiv.length ;
    var clickTimes = 1 ;
    var num = 0 ;
    var page = 1 ;
    refresh_a.hover(
        function(){
            num++ ;
            refresh_img.css("background", "url(./img/part3/refresh_white.png) no-repeat center center") ;
            refresh_img.css("transform", "rotate("+360*num+"deg)");
        },
        function(){
            refresh_img.css("background", "url(./img/part3/refresh.png) no-repeat center center") ;
        }
    );

    refresh_a.click(function(){
        num++;
        page++ ;
        if(page == 4){
            page = 1;
        }
        refresh_img.css("transform", "rotate("+360*num+"deg)");
        //翻牌子
        for(var i=0; i<div_len; i++){
            var colNum = parseInt(i/10) ;
            var rowNum = i%10 ;
            var delayTime = (colNum+rowNum)*100 ;
    
            aDiv.eq(i).css("transition","0.3s "+delayTime+"ms linear") ;
            aDiv.eq(i).css("transform","rotateY("+180*clickTimes+"deg)") ;
            //aDiv.eq(i).find("img").attr("src","./img/part3/"+page+"/1.jpg") ;    //转过之后再设置图片？？
        }
        clickTimes++;   
    });
}

//天猫超市tab的效果
mv.app.market = function(){
    var aLi = $("#part4-1-tab").find('li') ;
    var aDiv = $("#part4-1-tab").find('.tab') ;
    // console.log(aDiv.length);
    var timer = null ;
    var num = 0 ;
    var now = 0 ;
    clearInterval(timer) ;
    timer = setInterval(function(){
        now = num ;
        num++ ;
        if(num == 2){
            num = 0 ;
        }
        mv.ui.noCheckLi(aLi.eq(now), aDiv.eq(now));
        mv.ui.checkLi(aLi.eq(num), aDiv.eq(num)) ;
    }, 3000) ;
    
}

//生成猜你喜欢
mv.app.GuessYouLike = function(){
    var content = $("#guess").find(".guess-content") ;
    var num = 95 ;
    var str = "";
    var imgNum = 5 ;
    for(var i=1; i<=num; i++){
        if(i%5 == 0){
            str += '<a href="#" class="list-panel" style = "margin-right:0px;">\
                    <img src="./img/part5/'+i+'.png">\
                    <p class="introduce">霸蛮苗家酸汤脆骨粉283.6g湖南米粉干米</p>\
                    <p class="price">￥7.9</p>\
                    </a>' ;
        }else{
            str += '<a href="#" class="list-panel" >\
                    <img src="./img/part5/'+i+'.png">\
                    <p class="introduce">霸蛮苗家酸汤脆骨粉283.6g湖南米粉干米</p>\
                    <p class="price">￥7.9</p>\
                    </a>' ;
        }
        
        
    }
    content.html(str) ;
}

//设置侧边导航栏的left值 一直变化的
mv.app.setSideLeft = function(){
    var twoSide = ($(document).width() - 1230)/2 ;
    var sideLeft = twoSide - 10 -37 ;
    $("#side-nav").css("left", ""+sideLeft+"px") ;
}
//侧边导航栏滑动变化效果
mv.app.sideLeftChange = function(){
    var part4_child = $("#part4").find(".part4-child") ;
    var aLi = $("#side-nav").find("li");
    var num = 0 ;
    $(window).scroll(function(){
        for(var i=0; i<part4_child.length; i++){
            if((part4_child.eq(i).offset().top - $(window).scrollTop()) <= $(window).height()*0.36 
                && (part4_child.eq(i).offset().top - $(window).scrollTop())>0){  //在 >0&&<36%这个区域
                    mv.ui.returnBKcolor(aLi) ;
                    mv.ui.changeSideColor(aLi.eq(i), i) ;
                    num = i ;
            }
        }
    }); 
    //点击效果
    for(var i=0; i<aLi.length; i++){
        aLi.eq(i).click(function() {
            var index = aLi.index(this) ;
            $('html,body').animate({ scrollTop: part4_child.eq(index).offset().top - 60 }, 200) ;
            mv.ui.changeSideColor($(this), index) ;
        });
        aLi.eq(i).hover(function(){
            var index = aLi.index(this) ;
            mv.ui.changeSideColor($(this), index) ;
        },function(){
            $(this).css("backgroundColor", "") ;
            mv.ui.changeSideColor(aLi.eq(num), num) ;
            
        })
    }
}


mv.ui.changeRefresh = function(obj, obj1, obj2){
    
}