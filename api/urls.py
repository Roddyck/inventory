from django.urls import path
from .views import ItemsView, Items

urlpatterns = [
    path('items-view', ItemsView.as_view()),
    path('items', Items.as_view()),
]
