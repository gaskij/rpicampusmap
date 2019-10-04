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
    console.log($scope.buildings);
  });
});

// fix search reuslts buildings ng-repeat
