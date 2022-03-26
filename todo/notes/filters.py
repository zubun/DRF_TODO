from django_filters import rest_framework as filters
from .models import Projects, Todo


class ProjectFilter(filters.FilterSet):
    title = filters.CharFilter(lookup_expr="contains")

    class Meta:
        model = Projects
        fields = ["title"]


class TodoFilter(filters.FilterSet):
    data_create = filters.DateFilter(field_name="date_create", lookup_expr="gte", input_formats=["%Y-%m-%d"])
    data_create1 = filters.DateFilter(field_name="date_create", lookup_expr="lte", input_formats=["%Y-%m-%d"])
    title = filters.CharFilter(lookup_expr="contains")
    project = filters.CharFilter(lookup_expr="contains")
    user = filters.NumberFilter
    done = filters.BooleanFilter

    class Meta:
        model = Todo
        fields = ["title", "project", "user", "done"]
