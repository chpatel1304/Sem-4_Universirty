import requests, json
api_key ='cead754dbc6872bbd63edc33abd6cb8d'
city ='Ahmedabad'
request_url = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + api_key
response = requests.get(request_url)
coordinates = response.json()
print(coordinates)
lat= coordinates[0]['lat']
long = coordinates[0]['lon']