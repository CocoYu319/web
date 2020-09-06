# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import logout , authenticate , login
from django.contrib.auth.forms import UserCreationForm

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
# Create your views here.

@csrf_exempt
def logout_view(request):
	logout(request)
	print(request.user.is_authenticated)
	return JsonResponse({'code':request.user.is_authenticated,'message':'退出登录'})
	#return HttpResponseRedirect(reverse('learning_logs:index'))

@csrf_exempt
def Login(request):
	print("到登录")
	if request.method == 'POST':
		print(request.POST['username'],request.POST['password'])
		username = request.POST['username']
		password = request.POST['password']
		# 查询有无此人
		obj = authenticate(request, username=username, password=password)
		if obj:
			# 登录先
			login(request , obj)
			print(request.user.is_authenticated)
			return JsonResponse({'code':request.user.is_authenticated,'message':'登录成功'})
		else:
			JsonResponse({'code':'0','message':'登录失败'})
	else:
		return JsonResponse({'code':'-1','message':'请求错误'})

@csrf_exempt
def register(request):
	if request.method == 'POST':
		print("到注册")
		username = request.POST['username']
		password = request.POST['password']
		user = User.objects.create_user(username=username,password=password)
		print(user.save())	
		return JsonResponse({'code':'1','message':'注册成功'})
	else:
		return JsonResponse({'code':'0','message':'请求错误'})
	# if request.method != 'POST':
	# 	form = UserCreationForm()
	# else:
	# 	form = UserCreationForm(data = request.POST)
	# 	if form.is_valid():
	# 		new_user = form.save()
	# 		authenticated_user = authenticate(username=new_user.username , password=request.POST['password1'])
	# 		login(request , authenticated_user)
	# 		return HttpResponseRedirect(reverse('learning_logs:index'))
	# context = {'form':form}
	# return render(request , 'users/register.html' , context)
		
