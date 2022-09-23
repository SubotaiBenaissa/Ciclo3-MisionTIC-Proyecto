from django.db import models

# Create your models here.

class Producto(models.Model):
    
    nombre = models.CharField(max_length=45)
    precio = models.FloatField()
    # categoria
    # usuario
    descripcion = models.TextField(max_length=500)
    ciudad = models.CharField(max_length=45)
    cantidad_unidades = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    
    class Meta: 
        
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
        
    def __str__(self): 
        
        return self.nombre
    
