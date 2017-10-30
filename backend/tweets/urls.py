from django.conf.urls import url, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'tweet', views.TweetViewSet)
router.register(r'user', views.TwitterUserViewSet)

urlpatterns = [
    url(r'/', include(router.urls))
]
