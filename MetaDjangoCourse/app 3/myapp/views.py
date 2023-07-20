from django.shortcuts import render

# Create your views here.


def about(request):
    about_content = {'about': 'Based in chicago etc'}
    return render(request, "about.html", about_content)


def home(request):
    return render(request, 'home.html')


def menu(request):
    return render(request, 'menu.html')
