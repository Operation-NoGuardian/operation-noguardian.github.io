from django.shortcuts import render, redirect
import json
from pathlib import Path
pardir = Path(__file__).resolve().parent
# Create your views here.
ctx_file = open(pardir / "context.json")
ctx = json.loads(ctx_file.read())
ctx_file.close()
del ctx_file

def index(request):
  return render(request, "index.html", ctx)

def surf(request):
  return render(request, "surf.html", ctx)

def surf_frame(request, path):
  if path=='frame':
    return render(request, "surf_frame.html", ctx)
  return redirect(f'/static/surf/{path}')