var wrap = document.getElementById("wrap") ;
var a_list = wrap.getElementsByTagName("a") ;
for(var i=0; i<a_list.length; i++)
{
    a_list.checked = false ;
    a_list[i].onclick = function(){
        if(!this.checked)
        {
            this.classList.add("checked") ;
            this.checked = true ;
        }
        else
        {
            this.classList.remove("checked");
            this.checked = false ;
        }
    }
}