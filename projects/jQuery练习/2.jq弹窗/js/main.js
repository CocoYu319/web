$("#input1").click(function(){
    //动态生成弹窗
    var message = null ;
    message = $('<div id="mes"><p>用户名：<input type="text"> </p><p>密码：<input type="text"> </p><p id="close">X</p></div>'); 
    $('body').append(message) ;

    message.css('left', ($(window).width() - message.outerWidth())/2 ) ;
    message.css('top', ($(window).height() - message.outerHeight())/2 ) ;
    
    $('#close').click(function(){
        message.remove() ;
    });

    $(window).on("resize scroll", function(){
        message.css('left', ($(window).width() - message.outerWidth())/2 ) ;
        message.css('top', ($(window).height() - message.outerHeight())/2 + $(window).scrollTop()) ;
    });
    
    
    
}) ;