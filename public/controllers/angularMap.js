var app = angular.module('CampusMap', []);
app.controller('mapController', function($scope, $http) {
  console.log("mapController activated!");
});

var getParams = function() {
  let params = {};
  let url = window.location + '';
  let queryString = url.split('?');
  for (let i = 1; i < queryString.length; i++) {
    let param = queryString[i].split('=');
    params[param[0]] = param[1];
  }
  return params;
}

app.controller('searchController', function($scope, $http) {
  console.log("searchController activated!");

  $scope.search = function(q) {
    if (q == undefined) // Browse All Results
      q='';
    console.log(`Angular get '${q}'`);
    return $http.post('http://localhost:3000/search', {query: q});
  }

  $scope.params = getParams();
  console.log($scope.params);

  $scope.search($scope.params.query).then(function(httpResponse, err) {
    if (err) console.error(err);
    $scope.buildings = httpResponse.data;
    // console.log($scope.buildings);
  });
});

app.controller('infoPageController', function($scope, $http) {
  console.log("infoPageController activated!");

  let location = getParams();
  console.log(location);

  $http.post(`/info?loc=${location.loc}`, {query: location.loc})
  .then(function(httpResponse, err) {
    if (err) throw err;
    console.log(httpResponse.data);

    $scope.name = httpResponse.data[0].properties.name;
    $scope.nick = 'Nicknames: ' + httpResponse.data[0].properties.nick;
    $scope.desc = httpResponse.data[0].properties.description;
  })
});
