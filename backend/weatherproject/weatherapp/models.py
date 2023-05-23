from django.db import models

# Create your models here.

class  Weather(models.Model):
    location =models.CharField(max_length=100)
    temperature_c = models.DecimalField(max_digits=5, decimal_places=2)
    temperature_f = models.DecimalField(max_digits=5, decimal_places=2)
    description = models.CharField(max_length=200)
 
    Country = models.CharField(max_length=100)
    icon = models.CharField(max_length=100)



    def __str__(self):
        return self.location
    