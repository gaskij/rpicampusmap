import angular, { route, ILocationProvider } from 'angular';
import ngRoute from 'angular-route';

import campusMap from 'campusmap/components/map';
import search from 'campusmap/components/search';

const app = angular.module('rpiCampusMap', [
  ngRoute,
  campusMap,
  search,
]);

app.config(['$routeProvider', '$locationProvider',
  (($routeProvider: route.IRouteProvider, $locationProvider: ILocationProvider): void => {
    $routeProvider
      .when('/index', { // home page
        template: '<campus-map></campus-map>',
      })
      .when('/', { // home page
        redirectTo: '/index',
      })
      .when('/search/:query', { // search results page
        template: '<search-results></search-results>',
      })
      .when('/info/:loc', { // info page
        template: '<location-info></location-info>',
      })
      .when('/not-found', {
        template: '<not-found></not-found>',
      })
      .otherwise('/not-found');
    $locationProvider.html5Mode(true);
  }),
]);

export default app;
