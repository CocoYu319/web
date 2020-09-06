$("#div1").click(function(){
    alert($(this).html()) ;
}) ;

//1.attr()
$("#div1").attr('title', "123") ;
$("#div1").attr('class', "box1") ;

//filter() not()
// $("div").filter("#div1").css("background","red") ;
// $("div").not("#div1").css("background","red") ;

//has() has是针对选中标签下 是否包含某个属性或者标签 属性判断的话不能是该标签自己的属性
//$("#div1").has("span").css("background","red") ;    //div1下有span
$("#div1").has(".box").css("background","red") ;        //div1下的span有class=‘box’
$("#div2").has(".box").css("background","red") ;     //class=‘box’ 属于div2本身的属性，所以不生效

//find()
$("#div3").find(".box").css("background", "red") ;    //class = "box"的样式改变
$("#div3").find("h2").css("background", "red") ;      //标签h2都样式改变


//选项卡
//原生js
// window.onload = function(){
//     var oDiv = document.getElementById("div4") ;
//     var btn = oDiv.getElementsByTagName("input") ;
//     var divs = oDiv.getElementsByTagName("div") ;


//     for(var i=0; i<btn.length; i++){
//         btn[i].index = i ;
//         btn[i].onclick = function(){

//             for(var j=0; j<btn.length; j++){
//                 divs[j].style.display = "none" ;
//                 btn[j].className = "" ;
//             }
//             divs[this.index].style.display = "block" ;
//             this.className = "active" ;
//         }
//     }
// }


//JQ
$(function(){

    $("#div4").find("input").click(function(){
        $("#div4").find("input").attr("class", "") ;
        $(this).attr("class", "active") ;
        
        $("#div4").find("div").css("display", "none") ;
        $("#div4").find("div").eq($(this).index()).css("display", "block") ;
    }) ;
    
}) ;