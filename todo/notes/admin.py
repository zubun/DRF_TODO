from django.contrib import admin

from .models import Projects
from .models import Todo


class TodoAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'project', 'description', 'date_create', 'date_update', 'done')
    list_display_links = ('id', 'title')
    search_fields = ('id', 'title')
    list_editable = ('done',)
    list_filter = ('done', 'project')


class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'title')
    list_display_links = ('title',)
    search_fields = ('title',)


admin.site.register(Todo, TodoAdmin)
admin.site.register(Projects, ProjectAdmin)
