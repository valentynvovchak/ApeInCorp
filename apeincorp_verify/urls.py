
from django.contrib import admin
from django.urls import path, include

from apeincorp_verify import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='homepage'),
]
