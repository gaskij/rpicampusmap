import angular, { route } from 'angular';
import ngRoute from 'angular-route';

const module = angular.module('campusMap', [ngRoute]);

// module.config(($routeProvider: route.IRouteProvider) => {
//   $routeProvider
//     .when('/index', { // home page
//       template: '<campus-map></campus-map>',
//     })
//     .when('/', { // home page
//       redirectTo: '/index',
//     });
// });

export default module;
