var app = angular.module('CampusMap', []);
app.controller('mapController', function($scope, $http) {
  console.log("Angular is working.");
});

app.controller('searchController', function($scope, $http) {
  console.log("Angular is working.");

  $scope.getParams = function() {
    let params = {};
    let url = window.location + '';
    let queryString = url.split('?');
    for (let i = 1; i < queryString.length; i++) {
      let param = queryString[i].split('=');
      params[param[0]] = param[1];
    }
    return params;
  }

  $scope.search = function(query) {
    console.log(`Angular get '${query}'`);
    return $http.post('http://localhost:3000/search', {query: query})
  }

  $scope.params = $scope.getParams();
  $scope.search($scope.params.query).then(function(httpResponse, err) {
    if (err) console.error(err);
    $scope.buildings = httpResponse.data;
    // console.log($scope.buildings);
  });
});
