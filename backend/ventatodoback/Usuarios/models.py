from pyexpat import model
from django.db import models

# Create your models here.

class Usuarios(models.Model):
    
    nombre = models.CharField(max_length=45)
    apellido = models.CharField(max_length=45)
    fecha_nacimiento = models.DateField()
    telefono = models.CharField(max_length=10)
    correo = models.EmailField(unique=True)
    direccion = models.CharField(max_length=40)
    ciudad = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    
    class Meta: 
        
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
        
    def __str__(self):
        
        return self.nombre