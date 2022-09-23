from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Usuarios
from .serializers import UsuarioSerializer
# Create your views here.

class UsuarioModelViewSet(ModelViewSet):
    
    serializer_class = UsuarioSerializer
    queryset = Usuarios.objects.all()