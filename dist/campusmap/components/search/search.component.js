"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("campusmap/utils");
var search_module_1 = __importDefault(require("./search.module"));
var SearchController = function ($http, $routeParams, $scope) {
    console.log('SearchController activated!');
    $scope.search = function (query) {
        if (query) {
            console.log("GET: /api/search?query=" + query);
            return $http.get('/api/search', { query: query });
        }
        return $http.get('/api/search');
    };
    $scope.params = utils_1.getParams();
    console.log($scope.params);
    console.log($routeParams);
    _this.search($scope.params.query)
        .then(function (httpResponse, err) {
        if (err)
            console.error(err);
        $scope.buildings = httpResponse.data;
        console.log($scope.buildings);
    });
};
search_module_1.default.component('searchResults', {
    templateUrl: './components/search/searchResults.html',
    controller: ['$routeParams', SearchController],
});
//# sourceMappingURL=search.component.js.map