# Leaflet API in RPI Campus Map Development

The Leaflet API is an open-source JavaScript library for mobile-friendly interactive maps. It is used to load the map seen on the website homepage, and to interact graphically with the map including elements like the dots on the map, and the map legend.

### Documentation
Click [here](https://leafletjs.com/reference-1.5.0.html) to be taken to the documentation on Leaflet's website

### Usages

#### In map.js
In all locations in map.js, "L" refers to the Leaflet API.

Each point on the map is a "Feature" type object. These Features specifically are "Points" that show on the map. There are many methods that can be used on points, described [here](https://leafletjs.com/reference-1.3.4.html#point)

**IMPORTANT NOTE:**
Coordinates for Point objects are used backwards (long, lat)
for some reason according to the API

Layer groups from the Leaflet API are used to group together different categories of campus points. Machine shop locations are placed in the machine_locations layer, and the rest of the campus points are put in the campus_locations layer. Eventually, these locations too will need to be sorted into their own groups (academic, farts, parking lots, dormitories, etc).
