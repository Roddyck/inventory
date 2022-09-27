from django.db import models

# Create your models here.


class Item(models.Model):
    name = models.TextField(null=True, blank=True)
    price = models.DecimalField(null=True, blank=True,
                                max_digits=19, decimal_places=2)
    type = models.TextField(null=True, blank=True)
    brand = models.TextField(null=True, blank=True)
