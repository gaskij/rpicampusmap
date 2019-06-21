/*
* This is the main file responsible for handling the map.
*
* In all locations below, "L" refers to the Leaflet API.

Each point on the map is a "Feature" type object. These Features
specifically are "Points" that show on the map.
There are many methods that can be used on points, described here:
https://leafletjs.com/reference-1.3.4.html#point

**IMPORTANT**
**Coordinates for Point objects are used backwards (long, lat)
for some reason according to the API**
*/


/*
Display the map on the page at id 'map'

setView() focuses the map around the given point.
In this case, it does so on creation of the map (pageload)
Usage: setView([latitude, longitude], zoomlevel)
*/

let mymap = L.map('mapContainer', {
    center: [42.73131, -73.675218],
    zoom: 16,
    layers: []
})

/*
Tile Layer is the display style (satellite, street, etc.)
Attribution refers to the creeator of the layer (accreditation)
*/
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);


// Highlight campus on the map using points as an outline, connect-the-dots style
const campus = [
   [42.728116, -73.684807],
   [42.73027, -73.684294],
   [42.730538, -73.686504],
   [42.733585, -73.685709],
   [42.733408, -73.684616],
   [42.73396, -73.682277],
   [42.732967, -73.676569],
   [42.738941, -73.674831],
   [42.737521, -73.665197],
   [42.737805, -73.662837],
   [42.733979, -73.66342],
   [42.730811, -73.667131],
   [42.732214, -73.671357],
   [42.726067, -73.673395],
   [42.728116, -73.684765]
];
L.polygon(campus, {color: 'gray', opacity: 0.1}).addTo(mymap);

// Default popup object that would show on the map if a nonregistered point is clicked
const popup = L.popup();

/**
 * Perform the following operations every time the map layer is clicked
 * @param e an event, in this case a click
 */
const onMapClick = function(e) {
  popup
   .setLatLng(e.latlng)
   .setContent("You clicked the map at " + e.latlng.toString())
   .openOn(mymap);
}

mymap.on('click', onMapClick);

/**
 * Fetch the coordinates of a location in an array [longitude, latitude]
 * @param id The id of the given location
 */
const getCoords = function(id) {
    for (let i=0; i < locations['features'].length; i++) {
        if (locations['features'][i]['id'] == id) {
            point = locations['features'][i]['geometry']['coordinates'];
            return point;
        }
    }
    return 0;
}

/**
 * Binds properties to each Feature in a Feature Collection
 * @param feature the feature object that will be operated on
 * @param layer the layer the feature will be added to
 */
const onEachFeature = function(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(`<div id="featurePopup">${feature.properties.popupContent}</div>`);

        const building = feature.id;
        const point = getCoords(building);

        const newPopupContent = `\
          <a href="/info?loc=${feature.id}"> \
            <div class="popup"> \
              <h5>${feature.properties.name}</h5> \
              <img src="${feature.properties.thumbnail}" alt="${feature.properties.name}" width="100%"/> \
              <p>Nicknames: ${feature.properties.nick}</p> \
            </div> \
          </a> \
        `;
        layer.bindPopup(newPopupContent);
    }
}

//Array of circleMakers
let locations_arr = [];
let locations_shops_arr = [];

/**
  * Style and add the points to the map
*/

L.geoJSON(locations, {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    // For each feature added to the map, it will perform the onEachFeature() function
    onEachFeature: onEachFeature,

    // Adds a circleMarker at the point specified by the coords of the feature
    pointToLayer: function (feature, latlng) {
        const campus_circle_settings = { 
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        }
        locations_arr.push(L.circleMarker(latlng,campus_circle_settings));
        return locations_arr[locations_arr.length-1];
    },
}).addTo(mymap);


L.geoJSON(locations_shops, {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    // For each feature added to the map, it will perform the onEachFeature() function
    onEachFeature: onEachFeature,

    // Adds a circleMarker at the point specified by the coords of the feature
    pointToLayer: function (feature, latlng) {
        const machine_circle_settings = { 
            // circleMarker shows at the Point's location
            radius: 8,
            fillColor: "#0000ff",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        }
        locations_shops_arr.push(L.circleMarker(latlng,machine_circle_settings));
        return locations_shops_arr[locations_shops_arr.length-1];
    },
}).addTo(mymap);


let campus_locations_layer = L.layerGroup(locations_arr);
let machine_locations_layer = L.layerGroup(locations_shops_arr);

let overlayMaps = {
    "Campus Locations": campus_locations_layer,
    "Machine Shop Locations": machine_locations_layer
};

L.control.layers(null, overlayMaps).addTo(mymap);

