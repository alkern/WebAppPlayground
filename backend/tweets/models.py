import datetime
from django.db import models

class Tweet(models.Model):
    user_name = models.CharField(max_length=20)
    text = models.CharField(max_length=140)
    date = models.DateTimeField(default=datetime.date.today)

    def __str__(self):
        return self.user_name + " " + self.text
