"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = __importDefault(require("angular"));
var utils_1 = require("campusmap/utils");
angular_1.default.module('rpiCampusMap')
    .controller('infoController', function ($scope, $http) {
    console.log('infoController activated!');
    var location = utils_1.getParams();
    console.log(location);
    $http.post("/info?loc=" + location.loc, { query: location.loc })
        .then(function (httpResponse, err) {
        if (err)
            throw err;
        console.log(httpResponse.data);
        $scope.id = location.loc;
        $scope.name = httpResponse.data[0].properties.name;
        $scope.nick = "Nicknames: " + httpResponse.data[0].properties.nick;
        $scope.desc = httpResponse.data[0].properties.description;
    });
    $scope.comment = function (title, body) {
        if (!title || !body)
            return;
        var data = {
            comment: {
                title: title,
                body: body,
            },
        };
        console.log(data);
        $http.post("/info?loc=" + location.loc, data)
            .then(function (httpResponse, err) {
            if (err)
                throw err;
            console.log(httpResponse.data);
            $scope.cmtTitle = '';
            $scope.cmtBody = '';
        });
    };
});
//# sourceMappingURL=infoController.js.map