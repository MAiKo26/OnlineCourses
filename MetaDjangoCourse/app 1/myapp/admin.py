from django.contrib import admin
from .models import Menu
from .models import MenuCategory
# Register your models here.


admin.site.register(MenuCategory)
admin.site.register(Menu)
