import angular from 'angular';

angular.module('routes', [])
  .config(['$routeProvider', '$locationProvider', (($routeProvider, $locationProvider) => {
    $routeProvider
      .when('/', { // home page
        template: '<map-page></map-page>',
      })
      .when('/index', { // home page
        template: '<map-page></map-page>',
      })
      .when('/search/:query', { // search results page
        template: '<search-page></search-page>',
      })
      .when('/info/:loc', { // info page
        template: '<info-page></info-page>',
      })
      .when('/not-found', {
        template: '<not-found></not-found>',
      })
      .otherwise('/not-found');

    $locationProvider.html5Mode(true);
  })]);
