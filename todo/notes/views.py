from django.shortcuts import render
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer, StaticHTMLRenderer, AdminRenderer
from rest_framework.viewsets import ModelViewSet
from .models import Todo, Projects
from .serializers import TodoSerializer, ProjectsSerializer


class ProjectModelViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer, StaticHTMLRenderer, AdminRenderer]
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer


class TodoModelViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer, StaticHTMLRenderer, AdminRenderer]
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
