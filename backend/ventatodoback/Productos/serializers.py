from rest_framework import serializers
from .models import Producto

class ProductoSerializer(serializers.ModelSerializer):
    
    class Meta: 
        
        model = Producto
        fields = ['nombre', 'precio', 'descripcion', 'ciudad', 'cantidad_unidades']