from django.http import HttpResponse
from django.views.decorators.csrf import ensure_csrf_cookie

from .models import User

import json

def index(request):
    functions = dict(
        GET=get,
        POST=post,
    )
    return functions[request.method](request)

def get(request):
    users = []
    for user in User.objects.all():
        users.append(user.as_json())
    return HttpResponse(json.dumps(users))

@ensure_csrf_cookie
def post(request):
    return "post"

def by_id(request, id):
    return HttpResponse(json.dumps(User.objects.get(pk=id).as_json()))
