from django.http import HttpResponse


def handler404(request, exception):
    return HttpResponse("404: Page not found")


def home(request):
    return HttpResponseNotFound("Little lemon")
