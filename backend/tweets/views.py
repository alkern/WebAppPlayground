from rest_framework import viewsets, permissions
from rest_framework.response import Response

from .models import Tweet
from .serializers import TweetSerializer, RichTweetSerializer

class TweetViewSet(viewsets.ModelViewSet):
    '''
    Viewset for all Tweets in their model form
    Used to POST new tweets
    '''
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

class RichTweetViewSet(viewsets.ModelViewSet):
    '''
    Viewset for Tweets which are extended with user information
    Used to GET sorted tweets
    '''
    queryset = Tweet.objects.all()
    serializer_class = RichTweetSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def list(self, request):
        user = request.query_params['pk']
        recent_tweets = Tweet.objects.all().filter(user=user).order_by('-date')

        page = self.paginate_queryset(recent_tweets)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(recent_tweets, many=True)
        return Response(serializer.data)
