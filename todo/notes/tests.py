import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import TodoViewSet
from .models import Projects, Todo


class TestProjectsViewSet(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get("/api/Project/")
        view = TodoViewSet.as_view({"get": "list"})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
