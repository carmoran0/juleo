import requests

url = "https://www.zaragoza.es/sede/servicio/urbanismo-infraestructuras/equipamiento/aparcamiento-bicicleta?fl=id%2Ctitle%2Cpoint&rf=markdown&srsname=wgs84&start=0&rows=300"

params = {
    "rf": "markdown",
    "srsname": "wgs84",
    "start": 0,
    "rows": 50
}
headers = {
    "accept": "application/xml"
}

response = requests.get(url, params=params, headers=headers)

if response.status_code == 200:
    print(response.text)
else:
    print(f"Error: {response.status_code}")
    print(response.text)