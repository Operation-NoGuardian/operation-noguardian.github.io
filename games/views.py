from django.shortcuts import render, redirect
from django.templatetags.static import static
from pathlib import Path
import json

pardir = Path(__file__).resolve().parent
# Create your views here.
with open(pardir / "context.json") as ctx_file:
  ctx = json.loads(ctx_file.read())
del ctx_file
# Create your views here.
def surf(request):
  return render(request, "surf.html", ctx)

def surf_frame(request, path: str):
  if path=='frame': return render(request, "surf-frame.html", ctx)
  return redirect(static(f'surf/{path}'))

def champion_island(request):
  return render(request, "champion-island.html", ctx)

def champion_island_frame(request, path: str):
  if path=='frame': return render(request, "champion-island-frame.html", ctx)
  return redirect(static(f'doodle-champion-island/{path}'))