app.controller('machineInfoController', function($scope, $http) {
  console.log("machineInfoController activated!");

  const location = getParams();
  console.log(location);

  $http.post(`/info?loc=${location.loc}`, {query: location.loc})
  .then(function(httpResponse, err) {
    if (err) throw err;
    console.log(httpResponse.data);

    $scope.id = location.loc;
    $scope.name = httpResponse.data[0].properties.name;
    $scope.nick = 'Nicknames: ' + httpResponse.data[0].properties.nick;
    $scope.desc = httpResponse.data[0].properties.description;
    $scope.monHours = httpResponse.data[0].room.hours.mon;
  })
});
