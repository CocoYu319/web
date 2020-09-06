//全局变量
var username_is_unique = false ;    //判断用户名是否唯一
var username_is_OK = false ;
var email_is_OK = false ;   //判断邮箱格式
var email_is_unique = false ;   //邮箱是否唯一
var password_is_OK = false ;
//数据发送，符合条件发送，不符合条件不发送
function send_Data()
{
	var username = $(".in_username").val();
	var password = $(".in_password").val();
	var email = $(".in_email").val();

	var flag = data_is_none(username, password, email) ;
	
	//用户名为空，提示
	if(flag == false)   //数据都不为空
	{
		if(email_is_unique&&email_is_OK&&password_is_OK)  //邮箱格式正确且唯一，
		{
			content = {username:username,password:password,email:email};
			send(content,'/user/register/','/');     
		}
	}
}
//数据发送
function send(content,url,reverse_URL="")
{
	$.ajax({
		type:'POST',
		data:content,
		url: url,  //'/user/register/',
		cache:false,
		success:function(result){
			alert(result);
			if(result=='registed')
			{
				window.location.href=reverse_URL;  //'/'
			}
		},
		error:function(){
			alert("发送失败");
		}
	});
}
//数据为空判断
function data_is_none(username, password, email)
{
	username_is_none = false ;
	password_is_none = false ;
	email_is_none = false ;
	if(username == ""){   //用户名为空
		$('#tip-username').show() ;
		document.getElementById('name_tip').innerText='请输入用户名';
		username_is_none = true ;
	}else if(password == ""){  //密码是否为空
		$('#tip-password').show() ;
		document.getElementById('pass_tip').innerText='请输入密码';
		password_is_none = true ;
	}else if(email==""){ //邮箱为空
		$('#tip-email').show() ;
		document.getElementById('email_tip').innerText='请输入邮箱地址';
		email_is_none = true ;
	}
	if(username_is_none||password_is_none||email_is_none)  //如果有一个为空，就返回true
	{
		return true;
	}else{return false;}   //都不为空，返回false
}

//判断用户名是否唯一
function check_email(email)
{
	/******发送用户名给后台，对比数据库******/
	$.ajax({
		type:'POST',
		data:{email:email},
		url: '/user/check_email/',
		cache:false,

		success:function(result){
			if(result=='false')
			{
				$('#tip-email').show() ;
				document.getElementById('email_tip').innerText='该邮箱地址已被注册';
				email_is_unique = false ;
			}
			else if(result=='true'){
				email_is_unique = true ;    //邮箱唯一
			}
		},
		error:function(){
			alert("发送失败");
		}
	});
}

//鼠标点击input，提示框消失
function mouseFocus(str)
{
	if(str == 'username'){
		$('#tip-username').hide() ;
	}else if(str == 'password'){
		$('#tip-password').hide() ;
		//document.getElementById('tip-password').style.display = 'none' ;
	}else if(str == 'email'){
		$('#tip-email').hide() ;
	}
}
//鼠标离开input，提示框出现
function mouseBlur(str,val)
{
	if(str == 'username' && val == ""){
		$('#tip-username').show() ;
		//$('#tip-username').css('display','block') ;
		document.getElementById('name_tip').innerText='请输入用户名';
	}else if(str == 'password'){
		if(val == ""){  //鼠标离开，密码为空
			$('#tip-password').show() ;
			document.getElementById('pass_tip').innerText='请输入密码';
		}else{  //鼠标离开，密码不为空
			is_password(val) ;
		}
	}else if(str == 'email'){
		if(val == ""){
			$('#tip-email').show() ;
			document.getElementById('email_tip').innerText='请输入邮箱地址';
		}else{
			is_email(val) ;   //邮箱不为空，验证邮箱数据是否符合要求，是否唯一 
		}
		
	}
}

//验证密码是否规定格式
function is_password(str)
{
	var reg = /([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*/;
	if(reg.test(str)){
		password_is_OK = true ;
	}else{
		password_is_OK = false ;
		$('#tip-password').show() ;
		document.getElementById('pass_tip').innerText='密码必须包含数字，英文';
	}
}
//验证邮箱是否符合规定格式,是否唯一
function is_email(str)
{
	var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[.])+[A-Za-z\d]{2,5}$/;
	if(!reg.test(str)){
		$('#tip-email').show() ;
		document.getElementById('email_tip').innerText='邮箱地址格式错误';
	}else{
		//邮箱是否唯一
		check_email(str) ;
		email_is_OK = true ;
	}
}
