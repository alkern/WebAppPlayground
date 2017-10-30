from rest_framework import viewsets, permissions
from rest_framework.response import Response

from .models import Tweet, TwitterUser
from .serializers import TweetSerializer, TwitterUserSerializer

class TweetViewSet(viewsets.ModelViewSet):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def list(self, request):
        recent_tweets = Tweet.objects.all().order_by("-date")

        page = self.paginate_queryset(recent_tweets)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(recent_tweets, many=True)
        return Response(serializer.data)

class TwitterUserViewSet(viewsets.ModelViewSet):
    queryset = TwitterUser.objects.all()
    serializer_class = TwitterUserSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
