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
var utils_1 = require("campusmap/utils");
var map_module_1 = __importDefault(require("./map.module"));
var map_1 = __importDefault(require("./leaflet/map"));
function mapController($http) {
    var _this = this;
    console.log('mapController activated!');
    var parameters = utils_1.getParams();
    console.log(parameters);
    if (parameters != null) {
        var location_1 = parameters.get('loc');
        $http.get("/api/locations/" + location_1)
            .then(function (httpResponse) {
            console.log(httpResponse.data);
            var _a = httpResponse.data.properties, name = _a.name, nick = _a.nick, description = _a.description;
            _this.name = name;
            _this.nick = "Nicknames: " + nick;
            _this.desc = description;
            var _b = httpResponse.data.geometry.coordinates, latitude = _b[0], longitude = _b[1];
            var newPopupContent = "\n          <a href=\"/info?loc=" + httpResponse.data.id + "\">\n            <div class=\"popup\">               <h5>" + httpResponse.data.properties.name + "</h5>               <img src=\"" + httpResponse.data.properties.thumbnail + "\" alt=\"" + httpResponse.data.properties.name + "\" width=\"100%\"/>               <p>Nicknames: " + httpResponse.data.properties.nick + "</p>             </div>           </a>         ";
            map_1.default.setView([parseInt(latitude, 10), parseInt(longitude, 10)], 19);
            var marker = L.marker([parseInt(latitude, 10), parseInt(longitude, 10)]);
            marker.addTo(map_1.default).bindPopup(newPopupContent).openPopup();
        }, function (err) { return console.error(err); });
    }
}
map_module_1.default.component('campusMap', {
    templateUrl: './components/map/map.html',
    controller: ['$routeParams', mapController],
});
//# sourceMappingURL=map.component.js.map