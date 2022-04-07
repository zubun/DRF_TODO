from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer, StaticHTMLRenderer, AdminRenderer
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import Todo, Projects
from .serializers import TodoSerializer, ProjectsSerializer
from rest_framework.pagination import LimitOffsetPagination
from .filters import ProjectFilter, TodoFilter
from django_filters import rest_framework as filters
from rest_framework.permissions import IsAuthenticated, AllowAny


# class ProjectLimitOffsetPagination(LimitOffsetPagination):
#     default_limit = 2


class ProjectViewSet(viewsets.ModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer, StaticHTMLRenderer, AdminRenderer]
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer
    # pagination_class = ProjectLimitOffsetPagination
    # filter_backends = (filters.DjangoFilterBackend,)
    # filterset_fields = ['title']
    filter_class = ProjectFilter


# class ProjectModelViewSet(ModelViewSet):
#     renderer_classes = [JSONRenderer, BrowsableAPIRenderer, StaticHTMLRenderer, AdminRenderer]
#     queryset = Projects.objects.all()
#     serializer_class = ProjectsSerializer


# class TodoLimitOffsetPagination(LimitOffsetPagination):
#     default_limit = 20


class TodoViewSet(viewsets.ModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer, StaticHTMLRenderer, AdminRenderer]
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    # pagination_class = TodoLimitOffsetPagination
    # filter_backends = (filters.DjangoFilterBackend,)
    # filterset_fields = ['title', 'project', 'user', 'done']
    filter_class = TodoFilter
    permission_classes = [AllowAny]

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.done = True
        instance.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
