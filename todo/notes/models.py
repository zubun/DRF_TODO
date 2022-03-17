from django.db import models
from usertodoapp.models import CustomUser


class Projects(models.Model):
    title = models.CharField(max_length=150)
    link = models.URLField(max_length=200)
    users = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Todo(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=400, blank=True)
    date_create = models.DateTimeField(auto_now_add=True)
    date_update = models.DateTimeField(auto_now=True)
    done = models.BooleanField(default=False, null=False)
    project = models.ForeignKey("Projects", on_delete=models.PROTECT, null=True)

    # def __str__(self):
    #     return self.title
