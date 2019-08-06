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
    center: [42.729453, -73.6802],
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
const east_campus = [
   [42.730666, -73.672108],
   [42.730389, -73.670377],
   [42.730271, -73.669207],
   [42.729861, -73.668832],
   [42.73098, -73.667856],
   [42.730838, -73.667126],
   [42.73403, -73.663497],
   [42.735369, -73.663197],
   [42.735694, -73.66545],
   [42.735284, -73.665536],
   [42.735332, -73.665879],
   [42.73494, -73.666007],
   [42.735396, -73.668866],
   [42.73397, -73.669555],
   [42.732266, -73.670964],
   [42.732313, -73.671575],
   [42.73203, -73.671661],
   [42.731947, -73.671055],
   [42.731623, -73.671116],
   [42.731536, -73.671389],
   [42.731591, -73.671776],
   [42.731854, -73.671746],
   [42.732006, -73.672928],
   [42.731856, -73.672992],
   [42.731899, -73.673292],
   [42.731651, -73.673383],
   [42.731592, -73.67296],
   [42.731674, -73.672948],
   [42.731513, -73.671823]
];
const west_campus =[
    [42.726152, -73.673522],
    [42.729184, -73.672737],
    [42.729397, -73.67337],
    [42.729562, -73.674334],
    [42.730101, -73.675067],
    [42.730315, -73.675513],
    [42.73065, -73.675251],
    [42.730381, -73.674768],
    [42.730484, -73.674628],
    [42.731005, -73.675464],
    [42.730678, -73.675975],
    [42.730586, -73.676002],
    [42.730791, -73.677812],
    [42.731927, -73.677478],
    [42.732158, -73.67791],
    [42.732765, -73.677691],
    [42.732678, -73.677176],
    [42.732828, -73.677138],
    [42.732777, -73.676747],
    [42.732944, -73.676726],
    [42.733281, -73.679074],
    [42.733735, -73.681269],
    [42.732325, -73.681698],
    [42.732712, -73.68216],
    [42.732987, -73.682556],
    [42.732546, -73.682734],
    [42.732589, -73.683018],
    [42.732356, -73.683061],
    [42.732329, -73.68283],
    [42.732049, -73.682937],
    [42.732181, -73.683613],
    [42.731791, -73.68372],
    [42.731866, -73.685075],
    [42.731994, -73.686145],
    [42.730574, -73.686516],
    [42.730271, -73.684317],
    [42.730252, -73.684196],
    [42.728148, -73.684775],
    [42.726892, -73.678171],
    [42.727453, -73.678137],
    [42.727469, -73.677972],
    [42.727026, -73.676646],
    [42.726622, -73.676039]


];
L.polygon(east_campus, {color: 'gray', opacity: 0.1}).addTo(mymap);
L.polygon(west_campus, {color: 'gray', opacity: 0.1}).addTo(mymap);

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
        console.log(feature.properties);
        let newPopupContent = '';
        if (feature.properties.type == "machine") {
          newPopupContent += `<a href="/info?loc=${feature.id}&machine=true">`
        }
        else {
          newPopupContent += `<a href="/info?loc=${feature.id}">`;
        }
        newPopupContent += `
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

//Array of circleMarkers
let locations_arr = [];
let locations_shops_arr = [];

/**
  * Style and add the campus points to the map
*/

L.geoJSON(campus_locations, {
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
});

/**
  * Style and add the machine site points to the map
*/
L.geoJSON(machine_locations, {
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
});


/* Creating layer groups to hold arrays of locations
*  These layer groups will be added to the map, and will be represented by
*  the map keys. The maps keys filter which dots are shown on the map.
*/
let campus_locations_layer = L.layerGroup(locations_arr);
let machine_locations_layer = L.layerGroup(locations_shops_arr);

let overlayMaps = {
    "Campus Locations": campus_locations_layer,
    "Machine Shop Locations": machine_locations_layer
    // add more layer groups here
};

// adding the layer groups in overlayMaps to the map (but it doesn't render yet)
L.control.layers(null, overlayMaps).addTo(mymap);
