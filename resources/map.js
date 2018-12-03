// Display the map at id 'map'
var mymap = L.map('map').setView([42.73131, -73.675218], 16);

// Tile Layer is the display style (satellite, street, etc.)
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

// Create a marker that displays on page load
L.marker([42.729267, -73.677642]).addTo(mymap)
   .bindPopup("<b>Rensselaer Polytechnic Institute</b><br>Campus higlighted.").openPopup();

//// Highlight an area with a circle
//L.circle([42.729267, -73.677642], 100, {
//   color: 'red',
//   fillColor: '#f03',
//   fillOpacity: 0.5
//}).addTo(mymap).bindPopup("I am a circle.");

// Highlight an area with custom points forming a polygon
L.polygon([
   [42.728116, -73.684807],
   [42.728116, -73.684807],
   [42.732088, -73.686116],
   [42.733585, -73.685709],
   [42.732908, -73.682577],
   [42.731457, -73.68129],
   [42.732009, -73.678651],
   [42.731899, -73.677471],
   [42.730748, -73.677171],
   [42.728999, -73.672666],
   [42.736359, -73.670585],
   [42.735303, -73.66327],
   [42.733979, -73.66342],
   [42.730811, -73.667131],
   [42.732214, -73.671357],
   [42.726067, -73.673395],
   [42.728116, -73.684765]
]).addTo(mymap);

var popup = L.popup();

function onMapClick(e) {
popup
   .setLatLng(e.latlng)
   .setContent("You clicked the map at " + e.latlng.toString())
   .openOn(mymap);
}

mymap.on('click', onMapClick);





function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}


L.geoJSON(buildings, {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(mymap);