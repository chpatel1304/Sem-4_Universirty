from django.urls import path
from student import views

urlpatterns = [
    path('',views.index,name='index'),
    path('home/',views.home,name='home'),
]