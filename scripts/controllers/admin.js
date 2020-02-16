app.controller('infoController', function($scope, $http) {
  console.log("infoController activated!");

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
  });

  $scope.comment = function(title, body) {
    if (!title || !body) return;

    let data = {
      comment: {
        title: title,
        body: body
      }
    };

    console.log(data);

    $http.post(`/info?loc=${location.loc}`, data)
    .then(function(httpResponse, err) {
      if (err) throw err;
      console.log(httpResponse.data);

      $scope.cmtTitle = "";
      $scope.cmtBody = "";
    });
  }
});
