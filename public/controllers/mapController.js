app.controller('mapController', function($scope, $http) {
  console.log("mapController activated!");

  const location = getParams();
  console.log(location != null);

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

      let popupContent = `\
        <a href="/info?loc=${httpResponse.data[0].id}"> \
          <div class="popup"> \
            <h5>${httpResponse.data[0].properties.name}</h5> \
            <img src="${httpResponse.data[0].properties.thumbnail}" alt="${httpResponse.data[0].properties.name}" width="100%"/> \
            <p>Nicknames: ${httpResponse.data[0].properties.nick}</p> \
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
