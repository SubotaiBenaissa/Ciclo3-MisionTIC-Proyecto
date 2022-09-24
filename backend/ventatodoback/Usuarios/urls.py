from django.urls import path
from .views import UsuarioApiView, UsuarioRegistroApiView

urlpatterns = [
    path('auth/register', UsuarioRegistroApiView.as_view()),
    path('auth/me', UsuarioApiView.as_view()),    
]
