from django.urls import path
from .views import ItemsView

urlpatterns = [
    path('items-view', ItemsView.as_view()),
]
