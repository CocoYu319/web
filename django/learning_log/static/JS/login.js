var username_is_OK = false ;
var password_is_OK = false ;

function Login()
{
	var username = $(".in_username").val();
	var password = $(".in_password").val();
	var content = {username:username,password:password};
	data_is_null(username, password);
	//判断用户名和密码不为空
	if(username_is_OK&&password_is_OK)
	{
		send_data(content);
	}
}

//判断数据是否为空
function data_is_null(username, password)
{
	if(username==""){
		$('#tip-username').show() ;
		document.getElementById('name_tip').innerText='请输入用户名';
		username_is_OK = false ;
	}else if(password==""){
		$('#tip-password').show() ;
		document.getElementById('pass_tip').innerText='请输入密码';
		password_is_OK = false ;
	}else if(username!=""&&password!=""){
		username_is_OK = true ;
		password_is_OK = true ;
	}
}
function send_data(content){
	$.ajax({
		type:"POST",
		data:content,
		url:'/user/login/' ,
		cache:false,
		success:function(result){
			if(result=='login')
			{
				window.location.href='/topics/';  //'/'
			}else if(result=='not active')
			{
				alert("您的账户还未激活，请前往邮箱激活");
			}else if(result=='username_err')
			{
				alert("用户名或密码错误，请重新输入");
			}
		},
		error:function(){
			alert("发送失败");
		}
	});
}

function mouseFocus(str)
{
	if(str == 'username'){
		$('#tip-username').hide() ;
	}else if(str == 'password'){
		$('#tip-password').hide() ;
		//document.getElementById('tip-password').style.display = 'none' ;
	}
}
