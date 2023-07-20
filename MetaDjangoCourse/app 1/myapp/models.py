from django.db import models
from unicodedata import name
# Create your models here.


class MenuCategory(models.Model):
    menu_category_name = models.CharField(max_length=200)


class Menu(models.Model):
    name = models.CharField(max_length=100)
    cuisine = models.CharField(max_length=100)
    price = models.IntegerField()
    category_id = models.ForeignKey(
        MenuCategory, on_delete=models.PROTECT, default=None)

    def __str__(self) -> str:
        return self.name + ":" + self.cuisine
