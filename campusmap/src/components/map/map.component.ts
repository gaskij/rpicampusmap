import * as L from 'leaflet';
import { IHttpService } from 'angular';

import { getParams } from 'campusmap/utils';
import { Location } from 'campusmap/types';

import mapModule from './map.module';
import campusMap from './leaflet/map';

interface MapCtrlInterface {
  name?: string;
  nick?: string;
  desc?: string;
}

function mapController(this: MapCtrlInterface, $http: IHttpService): void {
  console.log('mapController activated!');

  const parameters = getParams();
  console.log(parameters);

  if (parameters != null) {
    const location = parameters.get('loc');
    $http.get<Location>(`/api/locations/${location}`)
      .then((httpResponse) => {
        console.log(httpResponse.data);

        const { name, nick, description } = httpResponse.data.properties;
        this.name = name;
        this.nick = `Nicknames: ${nick}`;
        this.desc = description;

        const [latitude, longitude] = httpResponse.data.geometry.coordinates;

        const newPopupContent = `
          <a href="/info?loc=${httpResponse.data.id}">
            <div class="popup"> \
              <h5>${httpResponse.data.properties.name}</h5> \
              <img src="${httpResponse.data.properties.thumbnail}" alt="${httpResponse.data.properties.name}" width="100%"/> \
              <p>Nicknames: ${httpResponse.data.properties.nick}</p> \
            </div> \
          </a> \
        `;

        campusMap.setView([parseInt(latitude, 10), parseInt(longitude, 10)], 19);
        const marker = L.marker([parseInt(latitude, 10), parseInt(longitude, 10)]);
        marker.addTo(campusMap).bindPopup(newPopupContent).openPopup();
        // campusMap.on('click', marker.remove());
      },
      (err) => console.error(err));
  }
}

mapModule.component('campusMap', {
  templateUrl: './components/map/map.html',
  controller: ['$routeParams', mapController],
});
