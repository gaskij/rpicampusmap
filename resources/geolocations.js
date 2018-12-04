// Coordinates for feature objects are listed backwards (long, lat) for some reason?
var buildings = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "id": "JEC",
            "properties": {
               "name": "Jonsson Engineering Center",
               "amenity": "Engineering Department",
               "popupContent": "Jonsson Engineering Center"
            },
            "geometry": {
               "type": "Point",
               "coordinates": [-73.6804, 42.72957]
            }
        },
        {
            "type": "Feature",
            "id": "DCC",
            "properties": {
               "name": "Darrin Communication Center",
               "amenity": "CCPD",
               "popupContent": "Darrin Communication Center"
            },
            "geometry": {
               "type": "Point",
               "coordinates": [-73.679059, 42.729226]
            }
        }
    ]
};