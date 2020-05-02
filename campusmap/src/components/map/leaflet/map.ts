import * as L from 'leaflet';
import campusArea from './campus';
import {
  onMapClick,
} from './mapUtils';

/** Declare the map object as campusMap */
const campusMap = L.map('mapContainer').setView([42.729453, -73.6802], 15);

/** Set the tile layer to be used for the map */
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, '
        + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, '
        + 'Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets',
  tileSize: 512,
  zoomOffset: -1,
}).addTo(campusMap);

const popup = L.popup();
campusMap.on('click', (e: L.LeafletMouseEvent) => onMapClick(e, popup, campusMap));

L.polygon(campusArea, { color: 'gray', opacity: 0.1 }).addTo(campusMap);

export default campusMap;
