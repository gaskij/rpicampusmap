"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onMapClick = function (e, popup, map) {
    console.log("huh");
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
};
exports.a = '';
//# sourceMappingURL=mapUtils.js.map