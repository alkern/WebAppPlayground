# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-27 16:14
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0003_tweet_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tweet',
            name='date',
            field=models.DateTimeField(default=datetime.date.today),
        ),
    ]