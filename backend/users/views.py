from django.http import HttpResponse

from .models import User

import json

def index(request):
    users = []
    for user in User.objects.all():
        users.append(user.as_json())
    return HttpResponse(json.dumps(users))
