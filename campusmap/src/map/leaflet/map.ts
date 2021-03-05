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

  console.log(process.env.MAPBOX_API_KEY);
  
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
    accessToken: process.env.MAPBOX_API_KEY || '',
  }).addTo(campusMap);

  /** Show a popup when the map is clicked that alerts the coordinates of the clicked spot. */
  const popup = L.popup();
  console.log(process.env.NODE_ENV)

  if (process.env.NODE_ENV === 'production') {
    campusMap.on('click', (e: L.LeafletMouseEvent) => onMapClick(e, popup, campusMap));
  }


  /** Outline the area of the campus on the map with a gray translucency. */
  L.polygon(campusArea, { color: 'gray', opacity: 0.1 }).addTo(campusMap);

  /** Return the created and configured map object. */
  return campusMap;
};

export default createLeafletMap;
