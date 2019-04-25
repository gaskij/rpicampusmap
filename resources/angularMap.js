var app = angular.module('CampusMap', []);
app.controller('mapController', function($scope, $http) {
  $http.post('http://localhost:3000/index', {location: "Jonsson Engineering Center"})
  .then( function(httpResponse, err) {
    if (err) console.error(err);
    console.log(httpResponse);
  });
});