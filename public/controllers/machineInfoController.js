app.controller('machineInfoController', function($scope, $http) {
  console.log("machineInfoController activated!");

  const parameters = getParams();
  console.log(parameters);
  const location = parameters.loc;
  $scope.isMachine = parameters.machine;

  $http.post(`/info?loc=${location}`, {query: location, machine: $scope.isMachine})
  .then(function(httpResponse, err) {
    if (err) throw err;
    console.log(httpResponse.data);

    $scope.id = location;
    $scope.name = httpResponse.data[0].properties.name;
    $scope.nick = 'Nicknames: ' + httpResponse.data[0].properties.nick;
    $scope.desc = httpResponse.data[0].properties.description;
    if ($scope.isMachine) {
        $scope.sunHours = httpResponse.data[0].room.hours.sun;
        $scope.monHours = httpResponse.data[0].room.hours.mon;
        $scope.tuesHours = httpResponse.data[0].room.hours.tues;
        $scope.wedHours = httpResponse.data[0].room.hours.weds;
        $scope.thurHours = httpResponse.data[0].room.hours.thurs;
        $scope.friHours = httpResponse.data[0].room.hours.fri;
        $scope.satHours = httpResponse.data[0].room.hours.sat;
        $scope.info = httpResponse.data[0].room.info;
        $scope.machines = httpResponse.data[0].contents.machines;
        $scope.materials = httpResponse.data[0].contents.available_materials;
        $scope.equipment = httpResponse.data[0].contents.equipment;
    }
  })
});
