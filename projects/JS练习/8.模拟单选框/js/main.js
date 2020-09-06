var wrap = document.getElementById("wrap") ;
var a_List = wrap.getElementsByTagName("a") ;
var pre_a = null;

for(var i=0; i<a_List.length; i++)
{
    a_List[i].checked = false ;
    a_List[i].onclick = function(){
        //首先要把上一个去除checked  
        if(this.checked)
        {
            console.log("在checked这里");
            this.classList.remove("checked") ;
            this.checked = true ;
            pre_a = null;
        }
        else
        {
            console.log("在!checked这里");
            if(pre_a != null)
            {
                a_List[pre_a].classList.remove("checked") ;
            }
            this.classList.add("checked") ;
            this.checked = false ;
            pre_a = i ;
        }
        console.log(pre_a) ;
    }
}