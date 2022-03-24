from django.db import models
from usertodoapp.models import CustomUser


class Projects(models.Model):
    users = models.ManyToManyField(CustomUser)
    title = models.CharField(max_length=150)
    link = models.URLField(max_length=200)

    # def __str__(self):
    #     return self.users


class Todo(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=400, blank=True)
    date_create = models.DateTimeField(auto_now_add=True)
    date_update = models.DateTimeField(auto_now=True)
    done = models.BooleanField(default=False, null=False)
    project = models.ForeignKey(Projects, on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.user
