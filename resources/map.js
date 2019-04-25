/*
* This is the main file responsible for handling the map.
* 
* In all locations below, "L" refers to the Leaflet API.
*/

/*
Display the map on the page at id 'map'

setView() focuses the map around the given point.
In this case, it does so on creation of the map (pageload)
Usage: setView([latitude, longitude], zoomlevel)
*/
var mymap = L.map('mapContainer').setView([42.73131, -73.675218], 16);

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
var campus = [
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

// Popup object that would show on the map
var popup = L.popup();

function onMapClick(e) {
  popup
   .setLatLng(e.latlng) // e refers to an event, in this case a click
   .setContent("You clicked the map at " + e.latlng.toString())
   .openOn(mymap);
}

mymap.on('click', onMapClick);


// Binds properties to each Feature in a Feature Collection
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
      
        var building = feature.properties.name;
        var point = getCoords(building);
        var popupContent = '';
        
        /*
        // Pull the Points from the 'geolocations.js' JSON file
        $.ajax({
           url: "resources/infoPreview.php",
           type: "get",
           datatype: "json",
           data: {
              "location": building
           },
           success: function(response){
              // Create popup based on which point is chosen
              var info = JSON.parse(response);
              var popupContent = '<form method="post" action="info.php"><div class="popup" onclick="javascript:this.parentNode.submit();"><h2>';
              popupContent += info['location'] + '</h2>';
              popupContent += '<p>Nicknames: ' + info['nicks'] + '</p>';
              popupContent += '<img src="' + info['image'] + '" alt="' + info['location'] + '" width="100%"/><input type="text" name="location" value="';
              popupContent += info['location'];
              popupContent += '" style="display:none"><input type="text" name="type" value="none" style="display:none"></div></form>';
              layer.bindPopup(popupContent);
           },
           error: function(xhr){
              alert("error");
           }
        });
        */
    }
}

// Style and add the points to the map
L.geoJSON(locations, {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, { // circleMarker shows at the Point's location
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(mymap);


// Fetch the coordinates of a given location (name)
function getCoords(name) {
    for (var i=0; i < locations['features'].length; i++) {
        if (locations['features'][i]['properties']['name'] == name) {
            point = locations['features'][i]['geometry']['coordinates'];
            return point;
        }
    }   
    return 0;
}

//this function is called to pull up popup info for each page
function showOnMap(building, latitude, longitude) {
    $.ajax({
       url: "resources/infoPreview.php",
       type: "get",
       datatype: "json",
       data: {
          "location": building
       },
       success: function(response){
          var info = JSON.parse(response);
          //load the data into html to go into the popup based on the mysql query in infopreview.php
          var popupContent = '<form method="post" action="info.php"><div class="popup" onclick="javascript:this.parentNode.submit();"><h2>';
          popupContent += info['location'] + '</h2>';
          popupContent += '<p>Nicknames: ' + info['nicks'] + '</p>';
          popupContent += '<img src="' + info['image'] + '" alt="' + info['location'] + '" width="100%"/><input type="text" name="location" value="';
          popupContent += info['location'];
          popupContent += '" style="display:none"><input type="text" name="type" value="none" style="display:none"></div></form>';
          
          mymap.setView([latitude, longitude], 19);
          L.marker([latitude, longitude]).addTo(mymap)
              .bindPopup(popupContent).openPopup();
       },
       error: function(xhr){
          alert(xhr);
       }
    });
}

//function called when a location popup is clicked
function toInfoPage(locationName) {
  $.ajax({
    url: "info.php",
    type: "post",
    data: {
      "location": locationName,
    },
    success: function(response){

    },
    error: function(xhr){
      alert(xhr);
    }
  });
}