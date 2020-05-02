import { Popup, Map, LeafletMouseEvent } from 'leaflet';

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

export const a = '';
// /**
//  * Fetch the coordinates of a location in an array [longitude, latitude]
//  * @param id The id of the given location
//  */
// export const getCoords = (id: string, locations: Feature[]): LatLngExpression[] => {
//   for (let i = 0; i < locations.features.length; i++) {
//     if (locations.features[i].id === id) {
//       return locations.features[i].geometry.coordinates;
//     }
//   }
//   return [];
// };

// /**
//  * Binds properties to each Feature in a Feature Collection
//  * @param feature the feature object that will be operated on
//  * @param layer the layer the feature will be added to
//  */
// export const onEachFeature = function (feature, layer) {
//   // does this feature have a property named popupContent?
//   if (feature.properties && feature.properties.popupContent) {
//     layer.bindPopup(`<div id="featurePopup">${feature.properties.popupContent}</div>`);

//     const building = feature.id;
//     const point = getCoords(building);
//     console.log(feature.properties);
//     let newPopupContent = '';
//     if (feature.properties.type == 'machine') {
//       newPopupContent += `<a href="/info?loc=${feature.id}&machine=true">`;
//     } else {
//       newPopupContent += `<a href="/user/info?loc=${feature.id}">`;
//     }
//     newPopupContent += `
//             <div class="popup"> \
//               <h5>${feature.properties.name}</h5> \
//               <img src="${feature.properties.thumbnail}" alt="${feature.properties.name}"
// width="100%"/> \
//               <p>Nicknames: ${feature.properties.nick}</p> \
//             </div> \
//           </a> \
//         `;
//     layer.bindPopup(newPopupContent);
//   }
// };
