from . import views
from django.urls import path, re_path

urlpatterns = [
    path('', views.home),
    path('hello/', views.say_hello),
    path('date/', views.display_date),
    path('test/', views.test),
    path('demo/', views.demo),
    path('dishes/<str:dish>', views.menuitems
         ),
    path('home', views.form_view)]
