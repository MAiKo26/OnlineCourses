from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
# Create your views here.

@api_view(["POST"])
def books(request):
    return Response("list of the books", status=status.HTTP_200_OK)

class BookList(APIView):
    def get(self, request):
        author = request.GET.get("author")
        if (author):
            return Response({"message":"list of the books by " + author}, status=status.HTTP_200_OK)
        return Response({"message":"list of the books"}, status=status.HTTP_200_OK)
    def post(self, request):
        return Response({"title":request.data.get("title")}, status=status.HTTP_200_OK)
    

class Book(APIView):
    def get (self, request, pk):
        return Response({"title":"book" + str(pk)}, status=status.HTTP_200_OK)
    def put(self, request, pk):
        return Response({"title":request.data.get("title")}, status=status.HTTP_200_OK)