from .models import Item
from .serializers import ItemSerializer
from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.


class ItemsView(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
