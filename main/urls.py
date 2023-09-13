from django.urls import path

from . import views

urlpatterns = [
    path("", views.index),
    path("surf/", views.surf),
    path("surf/<path:path>", views.surf_frame),
]