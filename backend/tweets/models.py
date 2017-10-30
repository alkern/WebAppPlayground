import datetime
from django.contrib.auth.models import User
from django.db import models

class TwitterUser(models.Model):
    age = models.PositiveIntegerField()
    auth_user = models.OneToOneField(User)

    def __str__(self):
        return self.auth_user.__str__()

class Tweet(models.Model):
    user = models.OneToOneField(TwitterUser)
    text = models.CharField(max_length=140)
    date = models.DateTimeField(default=datetime.date.today)

    def __str__(self):
        return self.user.to_fields.user_name + " " + self.text
