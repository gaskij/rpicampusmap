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
/*L.marker([42.729267, -73.677642]).addTo(mymap)
   .bindPopup("<b>Rensselaer Polytechnic Institute</b><br>Campus higlighted.").openPopup();
*/
//// Highlight an area with a circle
//L.circle([42.729267, -73.677642], 100, {
//   color: 'red',
//   fillColor: '#f03',
//   fillOpacity: 0.5
//}).addTo(mymap).bindPopup("I am a circle.");

// Highlight an area with custom points forming a polygon
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
        //layer.bindPopup(feature.properties.popupContent);
        var building = feature.properties.name;
        var point = getCoords(building);
        var popupContent = '';
        $.ajax({
           url: "resources/infoPreview.php",
           type: "get",
           datatype: "json",
           data: {
              "location": building
           },
           success: function(response){
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
    }
}


L.geoJSON(locations, {
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


function getCoords(name) {
    for (var i=0; i < locations['features'].length; i++) {
        if (locations['features'][i]['properties']['name'] == name) {
            point = locations['features'][i]['geometry']['coordinates'];
            return point;
        }
    }   
    return 0;
}

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