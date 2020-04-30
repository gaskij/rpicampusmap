"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var L = __importStar(require("leaflet"));
var campus_1 = __importDefault(require("./campus"));
var mapUtils_1 = require("./mapUtils");
var campusMap = L.map('mapContainer').setView([42.729453, -73.6802], 15);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, '
        + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, '
        + 'Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(campusMap);
var popup = L.popup();
campusMap.on('click', function (e) { return mapUtils_1.onMapClick(e, popup, campusMap); });
L.polygon(campus_1.default, { color: 'gray', opacity: 0.1 }).addTo(campusMap);
exports.default = campusMap;
//# sourceMappingURL=map.js.map
