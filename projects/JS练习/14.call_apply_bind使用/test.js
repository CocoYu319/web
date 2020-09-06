function fn(a,b){
    console.log(a,b)
    console.log(a+b) ;
    console.log(this) ;
}

var box = document.getElementById("box") ;
var box1 = document.getElementById("box1") ;
var box2 = document.getElementById("box2") ;
var box3 = document.getElementById("box3") ;
//call ;
fn.call(box, 12, 3) ;

//apply
fn.apply(box1, [12,2])

//bind
fn.bind(box2)(2,3) ;

//bind封装
function bind(fn, obj){   //需要修改this指向的函数fn，以及指向的obj
    return function(){
        fn.call(obj,...arguments) ;
    }

}

console.log(bind(fn, box3)) ;

//你要用匿名函数吧，匿名咋用呢？就是要像正常调用一个函数那样啊，加个()，
//那又是因为是匿名函数，所以用这样的方式  (function(){}) ,然后后面再加个() .....

(function b(a){
    console.log(a) ;
})(13)