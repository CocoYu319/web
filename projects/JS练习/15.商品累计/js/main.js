var list = document.getElementById("content") ;
var content = "dd";
for(var i=0; i<5; i++){
    list.innerHTML += '<li><button class="minus">-</button><input class="input" type="text" value="0"/><button class="plus">+</button>\
    <div>\
        <span>单价：</span>\
        <em class="unitPrice">0 </em> \
        <span>元。小计：</span>\
        <em class="sub">0</em> \
        <span>元</span>\
    </div></li>';
}

var plusList = list.getElementsByClassName("plus") ; //+
var minusList = list.getElementsByClassName("minus") ;  //-
var inputList = list.getElementsByTagName("input") ;  //商品数量
var unitPrice = list.getElementsByClassName("unitPrice") ; //商品单价
var total = list.getElementsByClassName("sub") ;  //商品小计 

var count1 = document.getElementById("count1") ;
var count2 = document.getElementById("count2") ;
var count3 = document.getElementById("count3") ;

var price = [12.5, 13, 24, 23, 14.5] ;
var notZero = [];
var goodsNum = 0 ;
var totalPrice = 0 ;
for(var i=0; i<plusList.length; i++){
    
    plusList[i].index = i ;
    minusList[i].index = i ;

    unitPrice[i].innerHTML = price[i] ;    //设置商品单价

    plusList[i].onclick = function(){      //+
        notZero = [];
        goodsNum = parseInt(inputList[this.index].value) + 1 ;
        inputList[this.index].value = String(goodsNum) ;
        totalPrice = Number(unitPrice[this.index].innerHTML) * goodsNum ;
        total[this.index].innerHTML = String(totalPrice) ;
        GetTotal(inputList) ;
        count(notZero) ;
        GetMostExpensive(notZero) ;
    }

    minusList[i].onclick = function(){   //-
        notZero = [];
        goodsNum = parseInt(inputList[this.index].value) ;
        if(goodsNum > 0)
        {
            goodsNum = goodsNum - 1 ;
            inputList[this.index].value = String(goodsNum) ;
            totalPrice = Number(unitPrice[this.index].innerHTML) * goodsNum ;
            total[this.index].innerHTML = String(totalPrice) ;
            
        }
        if(goodsNum == 0){
            total[this.index].innerHTML = "0" ;
        }
        GetTotal(inputList) ;
        count(notZero) ;
        GetMostExpensive(notZero) ;
    }
    //总计   商品数量不是0的选出来 
    
}

//选出不是0的 
function GetTotal(inputList){
    for(var i=0; i<inputList.length; i++){
        if (inputList[i].value != "0") {
            if(!isInArr(i, notZero))
            {
                notZero.push(i) ;
            }
        }
    }
}

//判断元素是否在数组里
function isInArr(ele,arr)
{
    for(var i=0; i<arr.length; i++){
        if(ele == arr[i])
        {
            return true ;
        }
    }
    return false ;
}

//判断商品数量不是0的那几个那个最大

//把商品数量不是0的那几个的 商品数量以 及小计 加起来
function count(arr){
    //inputList,total
    var num = 0 ;
    var totals = 0 ;
    var allGoods = 0 ;
    if(arr.length != 0){
        for(var i=0; i<arr.length; i++){
            num += parseInt(inputList[arr[i]].value) ;
            
            totals += Number(total[arr[i]].innerHTML) ;
        }
        count1.value = String(num) ;
        count2.value = String(totals) ;
        console.log(num) ;
    }
}

//最贵的
function GetMostExpensive(arr){
    var priceArr = [] ;
    var max = 0  ;
    if(arr.length != 0)
    {
        for(var i=0; i<arr.length; i++){
            priceArr[i] = price[arr[i]]  ;
        }
        max = getMax(priceArr) ;
        count3.value = String(max) ;
    }
    
}
//找出最大的数
function getMax(arr){
    var max = 0 ;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > max)
        {
            max = arr[i] ;
        }
    }
    console.log(max);
    return max ;
}









