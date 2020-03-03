import angular from 'angular';
import { getParams } from 'campusmap/utils';

angular.module('rpiCampusMap')
  .controller('infoController', ($scope, $http) => {
    console.log('infoController activated!');

    const location = getParams();
    console.log(location);

    $http.post(`/info?loc=${location.loc}`, { query: location.loc })
      .then((httpResponse, err) => {
        if (err) throw err;
        console.log(httpResponse.data);

        $scope.id = location.loc;
        $scope.name = httpResponse.data[0].properties.name;
        $scope.nick = `Nicknames: ${httpResponse.data[0].properties.nick}`;
        $scope.desc = httpResponse.data[0].properties.description;
      });

    $scope.comment = function (title, body) {
      if (!title || !body) return;

      const data = {
        comment: {
          title,
          body,
        },
      };

      console.log(data);

      $http.post(`/info?loc=${location.loc}`, data)
        .then((httpResponse, err) => {
          if (err) throw err;
          console.log(httpResponse.data);

          $scope.cmtTitle = '';
          $scope.cmtBody = '';
        });
    };
  });
