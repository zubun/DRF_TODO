from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from .models import Todo, Projects, CustomUser
from usertodoapp.serializers import UserModelSerializer


class ProjectsSerializer(ModelSerializer):
    # users = UserModelSerializer()
    # users = ModelSerializer.PrimaryKeyRelatedField(many=True, read_only=True)
    # users = ModelSerializer(many=True, read_only=True)
    class Meta:
        model = Projects
        fields = "__all__"
        exclude = ()
        # fields = ('users','title')


# Notes serializer
class TodoSerializer(ModelSerializer):
    class Meta:
        model = Todo
        fields = "__all__"
