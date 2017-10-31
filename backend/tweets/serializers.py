from rest_framework import serializers
from .models import Tweet, TwitterUser

class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = ('user', 'text', 'date')

class RichTweetSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='user.username')

    class Meta:
        model = Tweet
        fields = ('user_name', 'text', 'date')

class TwitterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = TwitterUser
        fields = ('auth_user', 'age')
