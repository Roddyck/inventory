from ast import Delete
from .models import Item
from .serializers import ItemSerializer
from rest_framework import status, generics
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.


class ItemsView(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class Items(APIView):
    serializer_class = ItemSerializer

    def get(self, request, format=None):
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.data.get('name')
            price = serializer.data.get('price')
            type = serializer.data.get('type')
            brand = serializer.data.get('brand')

            item = Item(name=name, price=price, type=type, brand=brand)
            item.save()

            return Response(ItemSerializer(item).data, status=status.HTTP_201_CREATED)

    def delete(self, request, format=None):
        item_id = request.query_params.get('id')
        if item_id is not None:
            item = Item.objects.filter(id=item_id)
            if len(item):
                item.delete()
                return Response({'msg': 'Item deleted'}, status=status.HTTP_200_OK)

            return Response({'msg': 'Item is not found'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
