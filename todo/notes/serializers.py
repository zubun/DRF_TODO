from rest_framework import serializers
from .models import Todo, Projects


# Notes serializer
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = "__all__"
