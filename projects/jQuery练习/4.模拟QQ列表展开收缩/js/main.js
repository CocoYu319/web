var list = [4,4,6] ;

$(function(){
    var div_list = $("#wrap").find("div") ;
    div_list.children("span").hover(function(){
        $(this).css("background", "red") ;
        $(this).next("ul").slideDown(300);
        
        // console.log(list[$(this).index()]) ;

    }, function(){
        $(this).css("background", "yellow") ;
        $(this).next("ul").slideUp(300);
    })

});