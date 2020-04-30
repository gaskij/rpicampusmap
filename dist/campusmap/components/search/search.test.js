"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jest_1 = require("jest");
var angular_mocks_1 = require("angular-mocks");
jest_1.describe('search', function () {
    jest_1.beforeEach(module('search'));
    jest_1.describe('SearchController', function () {
        jest_1.it('should create a `search` model with 3 results', angular_mocks_1.inject(function ($componentController) {
            var ctrl = $componentController('search');
            jest_1.expect(ctrl.buildings.length).toBe(3);
        }));
    });
});
//# sourceMappingURL=search.test.js.map