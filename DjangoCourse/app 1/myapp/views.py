from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from myapp.forms import InputForm
from datetime import datetime


def home(request):
    return HttpResponse("Welcome to the Little Lemon restaurant!")


def say_hello(request):
    return HttpResponse("Hello World")


def display_date(request):
    date_joined = datetime.today().year
    return HttpResponse(date_joined)


def test(request):
    path = request.path
    return HttpResponse(path, "<h1>Testing h1</h1>")


def demo(request):
    path = request.path
    method = request.method
    content = ''' 
<center><h2>Testing Django Request Response Objects</h2> 
<p>Request path : " {}</p> 
<p>Request Method :{}</p></center> 
'''.format(path, method)
    return HttpResponse(content)


def menuitems(request, dish):
    items = {'pasta': 'Pasta is',
             'falafla': 'hello',
             'test': 'test2'}
    description = items[dish]
    return HttpResponse(f"<h2>{dish}</h2>" + description)


def form_view(request):
    form = InputForm()
    context = {"form": form}
    return render(request, "home.html", context)
