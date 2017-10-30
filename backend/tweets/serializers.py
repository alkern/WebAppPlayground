from rest_framework import serializers
from .models import Tweet, TwitterUser

class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = ('user', 'text', 'date')

class TwitterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TwitterUser
        fields = ('auth_user', 'age')
