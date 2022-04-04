from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from .models import CustomUser


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        # fields = "__all__"
        fields = ("id", "username", "first_name", "last_name", "email")
        # exclude = ["password"]
