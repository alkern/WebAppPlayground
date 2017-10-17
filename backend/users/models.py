from django.db import models


class User(models.Model):
    user_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    pwd = models.CharField(max_length=20)
    follows = models.ManyToManyField("self", symmetrical=False)
    created = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user_name

    def as_json(self):
        return dict(
            user_name=self.user_name,
            email=self.email,
            follows=[u.user_name for u in self.follows.all()]
        )
