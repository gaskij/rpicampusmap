/*
Each point on the map is a "Feature" type object. These Features
specifically are "Points" that show on the map.
There are many methods that can be used on points, described here:
https://leafletjs.com/reference-1.3.4.html#point

**IMPORTANT**
**Coordinates for Point objects are used backwards (long, lat)
for some reason according to the API**
*/

var locations = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "id": "jec",
            "properties": {
                "name": "Jonsson Engineering Center",
                "nick": "JEC",
                "description": "Engineering Department",
                "popupContent": "Jonsson Engineering Center"
            },
            "geometry": {
               "type": "Point",
               "coordinates": [-73.6804, 42.72957]
            }
        },
        {
            "type": "Feature",
            "id": "dcc",
            "properties": {
                "name": "Darrin Communications Center",
                "nick": "DCC",
                "thumbnail": "http://tours.pocketsights.com/media/1/11ef2a38f7884fd58ecc6a78e3e70ea7_large.jpg",
                "description": "Large lecture hall where most lectures are held.",
                "popupContent": "Darrin Communications Center"
            },
            "geometry": {
               "type": "Point",
               "coordinates": [-73.679059, 42.729226]
            }
        },
        {
            "type": "Feature",
            "id": "ae",
            "properties": {
                "name": "Amos Eaton Hall",
                "nick": "JEC",
                "description": "Math/CS Department",
                "popupContent": "Amos Eaton"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.682596, 42.730189]
            }
        },
        {
            "type": "Feature",
            "id": "lib",
            "properties": {
                "name": "Folsom Library",
                "nick": "Lib-Lob",
                "thumbnail": "https://upload.wikimedia.org/wikipedia/commons/2/26/Folsom_Library-_RPI.JPG",
                "description": "Engineering Department",
                "popupContent": "Folsom Library"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.682654, 42.729408]
            }
        },
        {
            "type": "Feature",
            "id": "lally",
            "properties": {
                "name": "Lally Hall",
                "nick": "lally",
                "description": "IT Department",
                "popupContent": "Lally Hall"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.681929, 42.73007]
            }
        },
        {
            "type": "Feature",
            "id": "empac",
            "properties": {
                "name": "Experimental Media and Performing Arts Center at Rensselaer",
                "nick": "EMPAC",
                "description": "Performing Arts",
                "popupContent": "Experimental Media & Performing Arts Center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.683828, 42.728883]
            }
        },
        {
            "type": "Feature",
            "id": "blitman",
            "properties": {
                "name": "Blitman Commons",
                "nick": "blitman",
                "description": "Residence Hall",
                "popupContent": "Blitman Commons"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.685893, 42.731215]
            }
        },
        {
            "type": "Feature",
            "id": "jrowl",
            "properties": {
                "name": "Jonsson Rowland Science Center",
                "nick": "jrowl",
                "description": "Science Building",
                "popupContent": "Jonsson-Rowland Science Center"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.680432, 42.728776]
            }
        },
        {
            "type": "Feature",
            "id": "pubsafe",
            "properties": {
                "name": "Public Safety",
                "nick": "pubsafe",
                "description": "pubsafe Building",
                "popupContent": "Public Safety"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.677031, 42.729261]
            }
        },
        {
            "type": "Feature",
            "id": "alumni",
            "properties": {
                "name": "Heffner Alumni House",
                "nick": "Heffner Alumni House",
                "description": "alumni events",
                "popupContent": "Alumni House (Heffner)"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.678216, 42.732883]
            }
        },
        {
            "type": "Feature",
            "id": "houston",
            "properties": {
                "name": "Houston Field House",
                "nick": "field house",
                "description": "hockey events",
                "popupContent": "Houston Field House"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.669483, 42.732059]
            }
        },
        {
            "type": "Feature",
            "id": "rugby",
            "properties": {
                "name": "Rugby Field",
                "nick": "rugby",
                "description": "rugby practice",
                "popupContent": "Rugby Field"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.666956, 42.734426]
            }
        },
        {
            "type": "Feature",
            "id": "sigep",
            "properties": {
                "name": "Sigma Phi Epsilon",
                "nick": "SigEp",
                "description": "10/10 would recommend",
                "popupContent": "Sigma Phi Epsilon"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-73.677091, 42.732331]
            }
        }
    ]
};

/*
Locations:
    Amos Eaton
    DCC
    JEC
    Library
    Empac
    Blitman
    JROWL
    PUb Safe
    Alumni House
    Houston Field House
    Rugby Field
    H-Building
*/
