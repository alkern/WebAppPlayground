from .models import Tweet
from .serializers import TweetSerializer
from rest_framework import viewsets, permissions

class TweetViewSet(viewsets.ModelViewSet):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
