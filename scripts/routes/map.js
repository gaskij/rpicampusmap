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
Display the map on the page at id 'mapContainer'

setView() focuses the map around the given point.
In this case, it does so on creation of the map (pageload)
Usage: setView([latitude, longitude], zoomlevel)
*/

let mymap = L.map('mapContainer', {
  center: [42.729453, -73.6802],
  zoom: 16,
  layers: []
});


//////////////////////////////////  MAP STYLE    ////////////////////////////////
/* Tile Layer is the display style (satellite, street, etc.)
Attribution refers to the creeator of the layer (accreditation)*/
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);


//////////////////////////////////  CAMPUS HIGHLIGHT    ////////////////////////////////
// TODO?: Change this to do a query to the database for the cordinates then add them to the list
//        so that we don't have to hard code the points here
// Highlight campus on the map using points as an outline, connect-the-dots style
const westCampus = [
  [42.72817, -73.68481],
  [42.73037, -73.68417],
  [42.7306, -73.68649],
  [42.73206, -73.68617],
  [42.73309, -73.68596],
  [42.73363, -73.68565],
  [42.73342, -73.68449],
  [42.73395, -73.6823],
  [42.73298, -73.67665],
  [42.73235, -73.67178],
  [42.72603, -73.67356]
];
L.polygon(westCampus, {color: 'gray', opacity: 0.1}).addTo(mymap);

const eastCampus = [
  [42.73066, -73.67207],
  [42.72994, -73.6687],
  [42.73085, -73.66701],
  [42.73197, -73.66607],
  [42.73407, -73.66354],
  [42.73534, -73.6632],
  [42.73776, -73.66284],
  [42.73753, -73.66389],
  [42.73748, -73.66478],
  [42.7375, -73.66515],
  [42.73768, -73.66648],
  [42.73816, -73.66997],
  [42.73647, -73.6705],
  [42.73362, -73.67128],
  [42.73241, -73.67159]
];
L.polygon(eastCampus, {color: 'gray', opacity: 0.1}).addTo(mymap);

const polyTech = [
  [42.722626, -73.679767],
  [42.72216, -73.67907],
  [42.72166, -73.67969],
  [42.72206, -73.68025],
  [42.7223, -73.68022]
];
L.polygon(polyTech, {color: 'gray', opacity: 0.1}).addTo(mymap);

const robinsonField = [
  [42.73658, -73.67348],
  [42.736351, -73.672031],
  [42.734905, -73.672439],
  [42.735126, -73.673909]
];
L.polygon(robinsonField, {color: 'gray', opacity: 0.1}).addTo(mymap);



//////////////////////////////////  MAP POPUPS & ONCLICKS    ////////////////////////////////
// Default popup object that would show on the map if a nonregistered point is clicked
const popup = L.popup();

/**
 * Perform the following operations every time the map layer is clicked
 * @param e an event, in this case a click
 */
const onMapClick = function(e) {
  popup
    .setLatLng(e.latlng)
    .setContent('You clicked the map at ' + e.latlng.toString())
    .openOn(mymap);
};

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
};

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
          newPopupContent += `<a href="/user/info?loc=${feature.id}">`;
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
};

//Array of circleMarkers
let locations_arr = [];
let locations_shops_arr = [];

/**
  * Style and add the campus points to the map
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
      fillColor: '#ff7800',
      color: '#000',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
    locations_arr.push(L.circleMarker(latlng,campus_circle_settings));
    return locations_arr[locations_arr.length-1];
  },
});

/**
  * Style and add the machine site points to the map
*/
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
      fillColor: '#0000ff',
      color: '#000',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
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
  'Campus Locations': campus_locations_layer,
  'Machine Shop Locations': machine_locations_layer
  // add more layer groups here
};

// adding the layer groups in overlayMaps to the map (but it doesn't render yet)
L.control.layers(null, overlayMaps).addTo(mymap);
