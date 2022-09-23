from django.contrib import admin
from .models import Usuarios
# Register your models here.

@admin.register(Usuarios)
class UsuariosAdmin(admin.ModelAdmin):
    
    list_display = ['nombre', 'apellido', 'fecha_nacimiento', 'telefono', 'correo']