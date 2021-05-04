import * as L from 'leaflet';
import campusArea from './campus';
import { onMapClick } from './mapUtils';

/**
 * Create a Leaflet map that can be displayed on the UI given a target root element.
 * @param targetId The html #id that will house the map.
 * @returns A Leaflet map object.
 */
const createLeafletMap = (targetId: string): L.Map => {
  /** Declare the map object as campusMap */
  const campusMap = L.map(targetId, {
    center: [42.732482, -73.67481],
    zoom: 16,
    zoomDelta: 0.5,
  });

  /**
   * Set the tile layer to be used for the map.
   * This uses and accredits OpenStreetMap and Mapbox for the tile layers.
   */
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, '
          + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, '
          + 'Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
  }).addTo(campusMap);

  /** Show a popup when the map is clicked that alerts the coordinates of the clicked spot. */
  const popup = L.popup();
  if (process.env.NODE_ENV === 'development') {
    campusMap.on('click', (e: L.LeafletMouseEvent) => onMapClick(e, popup, campusMap));
  }


  /** Outline the area of the campus on the map with a gray translucency. */
  L.polygon(campusArea, { color: 'gray', opacity: 0.1 }).addTo(campusMap);

  // Code modified from: https://gis.stackexchange.com/questions/182068/getting-current-user-location-automatically-every-x-seconds-to-put-on-leaflet
  // placeholders for the L.marker and L.circle representing user's current position and accuracy    
  var current_position: L.Layer, current_accuracy: L.Layer;

  function onLocationFound(e: { accuracy: number; latlng: L.LatLngExpression; }) {
    // if position defined, then remove the existing position marker and accuracy circle from the map
    if (current_position) {
        campusMap.removeLayer(current_position);
        campusMap.removeLayer(current_accuracy);
    }

    var radius = e.accuracy / 2;

    current_position = L.marker(e.latlng).addTo(campusMap)
      .bindPopup("You are here").openPopup();
      current_accuracy = L.circle(e.latlng, radius).addTo(campusMap);
    }

    function onLocationError(e: { message: any; }) {
      alert(e.message);
    }

    campusMap.on('locationfound', onLocationFound);
    campusMap.on('locationerror', onLocationError);

    // wrap map.locate in a function    
    function locate() {
      campusMap.locate({setView: true, maxZoom: 16});
    }

    // call locate every 3 seconds... forever
    setInterval(locate, 3000);

  /** Return the created and configured map object. */
  return campusMap;
};

export default createLeafletMap;
