window.onload = function(){
    
    mv.app.showPanel() ;
}

var mv = {

}
var Timer = null ;
mv.ui = {} ;
mv.ui.allPanelHide = function(){
    var index_menu = document.getElementById("menu") ;
    var about_menu = document.getElementById("about-menu") ;
    var works_menu = document.getElementById("works-menu") ;
    var blog_menu = document.getElementById("blog-menu") ;
    
    index_menu.style.display = about_menu.style.display = works_menu.style.display = blog_menu.style.display = "none" ;

}
mv.ui.toPanel = function(obj, panel){
    
    obj.onmouseover = function(){
        clearTimeout(Timer) ;
        mv.ui.allPanelHide() ;
        panel.style.display = "block" ;
    }
    obj.onmouseout = function(){
        Timer = setTimeout(function(){
            panel.style.display = "none" ;
        }, 1500) ;
        
    }
   
}
mv.app = {} ;
mv.app.showPanel = function(){
    var index = document.getElementById("index") ;
    var index_menu = document.getElementById("menu") ;
    var about = document.getElementById("about") ;
    var about_menu = document.getElementById("about-menu") ;
    var works = document.getElementById("works") ;
    var works_menu = document.getElementById("works-menu") ;
    var blog = document.getElementById("blog") ;
    var blog_menu = document.getElementById("blog-menu") ;
    
    mv.ui.toPanel(index, index_menu) ;
    mv.ui.toPanel(about, about_menu) ;
    mv.ui.toPanel(works, works_menu) ;
    mv.ui.toPanel(blog, blog_menu) ;

    mv.ui.toPanel(index_menu, index_menu) ;
    mv.ui.toPanel(about_menu, about_menu) ;
    mv.ui.toPanel(works_menu, works_menu) ;
    mv.ui.toPanel(blog_menu, blog_menu) ;

}