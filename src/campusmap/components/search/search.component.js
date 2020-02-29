import searchModule from './search.module';
import { getParams } from '../../utils';

const SearchController = ($http, $routeParams, $scope) => {
  console.log('SearchController activated!');

  $scope.search = (query) => {
    if (query) {
      console.log(`GET: /api/search?query=${query}`);
      return $http.get('/api/search', { query });
    }
    return $http.get('/api/search');
  };

  $scope.params = getParams();
  console.log($scope.params);
  console.log($routeParams);

  this.search($scope.params.query)
    .then((httpResponse, err) => {
      if (err) console.error(err);
      $scope.buildings = httpResponse.data;
      console.log($scope.buildings);
    });
};

/**
 * Register `search` component, along with its associated controller
 * and template.
 */
searchModule.component('search', {
  // This name is what AngularJS uses to match to the `<search>` element.
  templateUrl: '/searchResults.html',
  // This is the controller used when this template is rendered
  controller: ['$routeParams', SearchController],
});
