from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Topic(models.Model):
	text = models.CharField(max_length = 200)
	date_added = models.DateTimeField(auto_now_add = True)
	owner = models.ForeignKey(User,on_delete=models.CASCADE)

	def __str__(self):
		return self.text

class Entry(models.Model):
	topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
	text = models.TextField()
	titles = models.CharField(max_length = 200)
	date_added = models.DateTimeField(auto_now_add = True)
	
	class Meta:
		verbose_name_plural = 'entries'
	def __str__(self):
		print('dddddd')
		return self.text[:150] + '...'

class IMG(models.Model):
	img = models.ImageField(upload_to='img')
	name = models.CharField(max_length=20)