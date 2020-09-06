# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Topic,Entry,IMG

from django.http import HttpResponseRedirect , Http404
from django.urls import reverse
from .forms import TopicForm,EntryForm
from django.core import serializers
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
def check_topic_owner(topic , request):
	if topic.owner != request.user:
		raise Http404

@csrf_exempt
def index(request):
	print("这是接收到的数据")
	print(request.POST)
	return render(request , 'learning_logs/index.html')
	# return JsonResponse({'code':'1','message':'11'})

@csrf_exempt
def topics(request):
	print("这是topics接收到的数据")
	print(request.user)
	topicsF = Topic.objects.filter(owner=request.user).order_by('date_added')
	topics = getTopics(topicsF)
	return JsonResponse({'code':'1','message':topics})

@login_required
def topic(request,topic_id):
	print("这是topic接收到的数据")
	topic = Topic.objects.get(id = topic_id)
	check_topic_owner(topic , request)
	entriesF = topic.entry_set.order_by('-date_added')
	entries = getEntries(entriesF)
	return JsonResponse({'code':'1','message':entries})

@login_required
def new_topic(request):
	print("这是new_topic接收到的数据")
	print(request.POST['text'])
	if request.method != 'POST':
		return JsonResponse({'code':'0','message':'请求错误'})
	else:
		obj = Topic.objects.create(text=request.POST['text'], owner=request.user)
		print(obj.id)
		if obj:
			return JsonResponse({'code':'1','message':'保存成功'})
		else:
			return JsonResponse({'code':'-1','message':'保存失败'})

def delete_topic(request):
	print("这是delete_topic接收到的数据")
	print(request.POST['id'])
	if request.method != 'POST':
		return JsonResponse({'code':'0','message':'请求错误'})
	else:
		topic = Topic.objects.get(id=request.POST['id'])
		print(topic.id)
		if topic:
			topic.delete()
			return JsonResponse({'code':'1','message':'保存成功'})
		else:
			return JsonResponse({'code':'-1','message':'保存失败'})
			
@login_required
def new_entry(request,topic_id):
	print("这是new_entry接收到的数据")
	topic = Topic.objects.get(id = topic_id)
	check_topic_owner(topic , request)
	if request.method != 'POST':
		return JsonResponse({'code':'0','message':'请求错误'})
	else:
		content = request.POST['content']
		title = request.POST['title']
		obj = Entry.objects.create(topic=topic, text=content, titles=title)
		if obj:
			print(obj.id)
			return JsonResponse({'code':'1','message':"保存成功"})
		else:
			return JsonResponse({'code':'-1','message':'保存失败'})

def detail(request, entry_id):
	print("这是detail接收到的数据")
	if request.method == 'POST':
		entry = Entry.objects.get(id = entry_id)
		if entry:
			print(entry.titles)
			date = entry.date_added.strftime('%Y-%m-%d %H:%M:%S')
			content = {'entry':entry.text, 'title': entry.titles, 'date':date}
			return JsonResponse({'code':'1','message':content})
	else:
		return JsonResponse({'code':'0','message':'请求错误'})

@login_required
def edit_entry(request , entry_id):
	entry = Entry.objects.get(id = entry_id)
	topic = entry.topic
	check_topic_owner(topic , request)
	if request.method != 'POST':
		form = EntryForm(instance = entry)
	else:
		form = EntryForm(instance = entry , data = request.POST)
		if form.is_valid():
			form.save()
			return HttpResponseRedirect(reverse('learning_logs:topic' , 
										args=[topic.id]))
	context = {'topic':topic , 'entry':entry , 'form':form}
	return render(request , 'learning_logs/edit_entry.html' , context)
		
def getTopics(Modeltopics):
	topics = []
	length = len(Modeltopics)
	for item in Modeltopics:
		topics.append({"id":item.id, "title": item.text})
	return topics

def getEntries(Modeltopics):
	entries = []
	for item in Modeltopics:
		data = item.date_added.strftime('%Y-%m-%d %H:%M:%S')
		entries.append({"id":item.id, "text": item.text, "title": item.titles, "data":data})
	return entries

def upload(request):
	print("这只upload接收到的数据")
	print(request)
	if request.method == 'POST':
		new_img = IMG(
			img=request.FILES.get('file'),
			name = request.FILES.get('file').name
		)
		obj = IMG.objects.create(img=request.FILES.get('file'), name=request.FILES.get('file').name)
		print(obj.img)
		imgUrl = 'media/' + str(obj.img)
	return JsonResponse({'code':'-1','message':'保存失败', 'imgUrl': imgUrl})
















	
