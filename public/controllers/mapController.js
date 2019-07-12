app.controller('mapController', function($scope, $http) {
  console.log("mapController activated!");

  const location = getParams();
  console.log(location);

  if (location != null) {
    $http.post(`/index?loc=${location.loc}`, {loc: location.loc})
    .then(function(httpResponse, err) {
      if (err) throw err;
      console.log(httpResponse.data);

      $scope.name = httpResponse.data[0].properties.name;
      $scope.nick = `Nicknames: ${httpResponse.data[0].properties.nick}`;
      $scope.desc = httpResponse.data[0].properties.description;

      let latitude = httpResponse.data[0].geometry.coordinates[1];
      let longitude = httpResponse.data[0].geometry.coordinates[0];

      let newPopupContent = '';
      if (feature.properties.type == "machine") {
        newPopupContent += `<a href="/info?loc=${feature.id}&machine=true">`
      }
      else {
          console.log(feature.properties.type);
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

      mymap.setView([latitude, longitude], 19);
      let marker = L.marker([latitude, longitude]);
      marker.addTo(mymap).bindPopup(popupContent).openPopup();
      // mymap.on('click', marker.remove());

    });
  }

});
