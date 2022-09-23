from rest_framework.routers import DefaultRouter
from .views import UsuarioModelViewSet, Usuarios

routerUsuario = DefaultRouter()
routerUsuario.register(prefix='usuarios', basename='usuarios', viewset=UsuarioModelViewSet)