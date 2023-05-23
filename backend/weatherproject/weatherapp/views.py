import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from.serializers import WeatherSerializer

@api_view(['GET'])

def get_weather(request):
    location = request.GET.get('location')
    api_key = 'ad4004fe490942679b280955232205'
    url = f'http://api.weatherapi.com/v1/current.json?key={api_key}&q={location}'
    response= requests.get(url)
    data = response.json()

    weather_data= {
        'location' : data['location']['name'],
     
        'Country': data['location']['country'],
        'temperature_c': data['current']['temp_c'],
        'temperature_f': data['current']['temp_f'],
        'description': data['current']['condition']['text'],
        'icon': data['current']['condition']['icon']
    }

    serializer = WeatherSerializer(data=weather_data)
    serializer.is_valid(raise_exception= True)
    serializer.save()

    return Response(serializer.data)
# Create your views here.
