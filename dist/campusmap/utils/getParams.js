"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParams = function () {
    var params = new Map();
    var url = window.location.toString();
    if (url.split('?').length === 1)
        return null;
    var queryString = url.split('?')[1];
    var queries = queryString.split('&');
    queries.forEach(function (query) {
        var _a = query.split('='), key = _a[0], value = _a[1];
        params.set(key, value);
    });
    return params;
};
exports.default = exports.getParams;
//# sourceMappingURL=getParams.js.map