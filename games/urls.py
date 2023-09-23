from django.urls import path

from . import views

urlpatterns = [
  path("surf/", views.surf),
  path("surf/<path:path>", views.surf_frame),
  path("champion-island/", views.champion_island),
  path("champion-island/<path:path>", views.champion_island_frame),
]