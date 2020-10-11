import { Feature, FeatureCollection } from 'geojson';
import {
  circleMarker,
  geoJSON,
  LeafletMouseEvent,
  Map,
  marker,
  Popup,
} from 'leaflet';

import { Location } from 'campusmap/src/types';

/**
 * Perform the following operations every time the map layer is clicked
 * @param e an event, in this case a click
 */
export const onMapClick = (e: LeafletMouseEvent, popup: Popup, map: Map): void => {
  popup
    .setLatLng(e.latlng)
    .setContent(`You clicked the map at ${e.latlng.toString()}`)
    .openOn(map);
};

/**
 * Populate html for a location popup on the map.
 * @param location The location to display information for.
*/
const makePopupContent = (location: Location | Feature): string => {
  if (location.properties) {
    return (`
    <a href="/info?location=${location.id}">
      <div className="popup">
        <h5>${location.properties.popupContent}</h5>
        <img src="${location.properties.thumbnail}" alt="${location.properties.name}" width="100%"/>
        <p>Nicknames: ${location.properties.nick}</p>
      </div>
    </a>
  `);
  }
  return '';
};

/**
 * Create marker and set view to the given loaction on the map.
 * @param map The map to add the marker to.
 * @param location The location that will be displayed.
 * @param error Whether or not getting location data was successful.
 */
export const createPopup = (map: Map, location: Location, error: boolean): void => {
  const [longitude, latitude] = location.geometry.coordinates;
  map.setView([latitude, longitude], 18);

  const popupContent = error ? 'There was an error getting location info :/' : makePopupContent(location);

  // TODO: make marker go away when clicked away
  marker([latitude, longitude])
    .addTo(map)
    .bindPopup(popupContent)
    .openPopup();
};

/**
  * Style and add the campus points to a new GeoJSON layer of the map.
  * @param map The map object the layer will be added to.
  * @param locations A collection of GeoJSON locations to add to the map layer.
  */
export const createGeoJsonLayer = (map: Map, locations: FeatureCollection): void => {
  geoJSON(locations, {
    // For each feature added to the map, it will bind a popup with information about the
    onEachFeature: (feature, layer) => {
      if (feature.properties) {
        layer.bindPopup(makePopupContent(feature));
      }
    },
    // Adds an orange circleMarker at the point specified by the coordinates of the feature
    pointToLayer: (point, latlng) => (
      circleMarker(latlng, {
        radius: 8,
        fillColor: '#ff7800',
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
      })
    ),
  }).addTo(map);
};
