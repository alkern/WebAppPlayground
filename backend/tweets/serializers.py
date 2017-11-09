from rest_framework import serializers
from rest_auth.serializers import UserDetailsSerializer
from .models import Tweet

class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = ('user', 'text', 'date')

class RichTweetSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='user.username')

    class Meta:
        model = Tweet
        fields = ('user_name', 'text', 'date')

class TwitterUserSerializer(UserDetailsSerializer):
    age = serializers.IntegerField(source='twitteruser.age')

    class Meta(UserDetailsSerializer.Meta):
        fields = UserDetailsSerializer.Meta.fields + ('age',)

    def update(self, instance, validated_data):
        twitter_user = validated_data.pop('twitteruser', {})
        age = twitter_user.get('age')

        instance = super(TwitterUserSerializer, self).update(instance, validated_data)

        user = instance.twitter_user
        if twitter_user and age:
            user.age = age
            user.save()
        return instance
