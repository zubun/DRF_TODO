from django.shortcuts import render
from rest_framework.renderers import BrowsableAPIRenderer, JSONRenderer
from rest_framework.viewsets import ModelViewSet
from .models import CustomUser
from .serializers import UserModelSerializer
from rest_framework import mixins, viewsets


# class UserModelViewSet(ModelViewSet):
#     queryset = CustomUser.objects.all()
#     serializer_class = UserModelSerializer


class UserCustomViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet
):
    queryset = CustomUser.objects.all()
    serializer_class = UserModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
