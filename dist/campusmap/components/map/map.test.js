"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jest_1 = require("jest");
var angular_mocks_1 = require("angular-mocks");
jest_1.describe('campusMap', function () {
    jest_1.beforeEach(module('campusMap'));
    jest_1.describe('mapController', function () {
        jest_1.it('should render properly', angular_mocks_1.inject(function ($componentController) {
            var ctrl = $componentController('map');
            jest_1.expect(ctrl).not.toBeNull();
        }));
    });
});
//# sourceMappingURL=map.test.js.map