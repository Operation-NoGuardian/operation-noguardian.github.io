from django.shortcuts import render, HttpResponse

# Create your views here.

def index(request):
#     return HttpResponse("""
# <!DOCTYPE html>
# <html>
#   <head>
#     <title>It Works!!!</title>
#   </head>
#   <body>
#     <h2>
#       it works
#     </h2>
#   </body>
# </html>""")
    return render(request, "index.html", {'pages': {'Home': '/'}})