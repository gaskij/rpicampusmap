app.controller('mapController', function($scope, $http) {
  //this function is called to pull up popup info for each page
  // $scope.showOnMap = function(building, latitude, longitude) {
  //     $.ajax({
  //        url: "public/infoPreview.php",
  //        type: "get",
  //        datatype: "json",
  //        data: {
  //           "location": building
  //        },
  //        success: function(response){
  //           var info = JSON.parse(response);
  //           //load the data into html to go into the popup based on the mysql query in infopreview.php
  //           var popupContent = '<form method="post" action="info.php"><div class="popup" onclick="javascript:this.parentNode.submit();"><h2>';
  //           popupContent += info['location'] + '</h2>';
  //           popupContent += '<p>Nicknames: ' + info['nicks'] + '</p>';
  //           popupContent += '<img src="' + info['image'] + '" alt="' + info['location'] + '" width="100%"/><input type="text" name="location" value="';
  //           popupContent += info['location'];
  //           popupContent += '" style="display:none"><input type="text" name="type" value="none" style="display:none"></div></form>';
  //
  //           mymap.setView([latitude, longitude], 19);
  //           L.marker([latitude, longitude]).addTo(mymap)
  //               .bindPopup(popupContent).openPopup();
  //        },
  //        error: function(xhr){
  //           alert(xhr);
  //        }
  //     });
  // }



  console.log("mapController activated!");

  const location = getParams();
  console.log(location != null);

  if (location != null) {
    $http.post(`/info?loc=${location.loc}`, {query: location.loc})
    .then(function(httpResponse, err) {
      if (err) throw err;
      console.log(httpResponse.data);

      $scope.name = httpResponse.data[0].properties.name;
      $scope.nick = 'Nicknames: ' + httpResponse.data[0].properties.nick;
      $scope.desc = httpResponse.data[0].properties.description;
    });
  }

});
