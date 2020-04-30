"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = __importDefault(require("angular"));
var angular_route_1 = __importDefault(require("angular-route"));
var map_1 = __importDefault(require("campusmap/components/map"));
var search_1 = __importDefault(require("campusmap/components/search"));
var app = angular_1.default.module('rpiCampusMap', [
    angular_route_1.default,
    map_1.default,
    search_1.default,
]);
app.config(['$routeProvider', '$locationProvider',
    (function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/index', {
            template: '<campus-map></campus-map>',
        })
            .when('/', {
            redirectTo: '/index',
        })
            .when('/search/:query', {
            template: '<search-results></search-results>',
        })
            .when('/info/:loc', {
            template: '<location-info></location-info>',
        })
            .when('/not-found', {
            template: '<not-found></not-found>',
        })
            .otherwise('/not-found');
        $locationProvider.html5Mode(true);
    }),
]);
exports.default = app;
//# sourceMappingURL=app.js.map