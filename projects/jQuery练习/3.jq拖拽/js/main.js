//两个事件    1.div 鼠标按下    2.document 鼠标移动
// 鼠标按下时获取鼠标的 X Y ev.pageX ev.pageY         
//算出鼠标到div左边和上边的距离 disX disY
//鼠标移动时  用鼠标到屏幕的距离 - disX 

$('#div1').mousedown(function(ev){
    var disX = ev.pageX - $(this).offset().left ;   //鼠标到边框的距离
    var disY = ev.pageY - $(this).offset().top;     

    $(document).mousemove(function(ev){
        $("#div1").css('left', ev.pageX - disX );
        $("#div1").css('top', ev.pageY - disY );
    });

    $(document).mouseup(function(){
        $(document).off() ;
    })
   
    return false ;
});
