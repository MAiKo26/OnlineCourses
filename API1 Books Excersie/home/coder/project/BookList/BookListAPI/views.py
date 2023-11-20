from django.shortcuts import render
from django.db import IntegrityError
from django.http import JsonResponse
from .models import Book
from django.forms import model_to_dict
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers


@csrf_exempt
def books(request):
    if request.method == "GET":
        books = list(Book.objects.all().values())
        # books2 = serializers.serialize("json", books)
        # print(books)
        # print(books2)
        return JsonResponse(books,safe=False)
    elif request.method == "POST":
        title = request.POST.get("title")
        author = request.POST.get("author")
        price = request.POST.get("price")
        book = Book(author,title,price)
        try:
            book.save()
        except:
            return JsonResponse({'error':'true','message':'required field missing'},status=400)
        return JsonResponse(model_to_dict(books),status=201)

# Create your views here.
