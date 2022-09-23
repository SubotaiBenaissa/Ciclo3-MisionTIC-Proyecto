from rest_framework import serializers
from .models import Usuarios

class UsuarioSerializer(serializers.ModelSerializer):
    
    class Meta:
        
        model = Usuarios
        fields = ['nombre', 'apellido', 'fecha_nacimiento', 'telefono', 'correo', 'direccion', 'ciudad']
        