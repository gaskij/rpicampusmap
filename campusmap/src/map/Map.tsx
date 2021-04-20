import * as React from 'react';
import {
  ReactElement,
  useEffect,
  useState,
} from 'react';
import Helmet from 'react-helmet';
import useAxios from 'axios-hooks';
import {
  Feature,
  GeoJsonProperties,
  Geometry,
} from 'geojson';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

import { Location } from 'campusmap/src/types';
import { getParams } from 'campusmap/src/utils';
import createLeafletMap from './leaflet/map';
import { createPopup, createGeoJsonLayer } from './leaflet/mapUtils';

interface Props {
  targetId: string;
}

/**
 * The top level component that renders the Leaflet map homepage.
 */
const Map = ({ targetId }: Props): ReactElement => {
  const [campusMap, setCampusMap] = useState<L.Map>();
  const [params, queryString] = getParams();

  const [{ data }] = useAxios<Feature<Geometry, GeoJsonProperties>[]>({
    url: '/api/locations',
  }, { manual: false, useCache: false });

  const [{ error: popupError }, fetchLocation] = useAxios<Location>({
    url: `/api/locations/${params.get('location')}`,
  }, { manual: true, useCache: false });

  const getLocationData = React.useCallback(async () => {
    const { data: location } = await fetchLocation();
    return location;
  }, []);

  useEffect(() => {
    setCampusMap(createLeafletMap(targetId));
  }, []);

  useEffect(() => {
    if (campusMap && data) {
      const geoJSON = {
        type: 'FeatureCollection' as 'FeatureCollection',
        features: data,
      };
      createGeoJsonLayer(campusMap, geoJSON);

      if (queryString) {
        getLocationData()
          .then((location) => {
            createPopup(campusMap, location, !!popupError);
          });
      }
    }
  }, [createGeoJsonLayer, createPopup, campusMap, data, getLocationData, popupError]);

  return (
    <>
      <Helmet>
        <title>RPI CampusMap</title>
      </Helmet>
      <div id={targetId} style={{ height: '100%' }} />
    </>
  );
};

export default Map;
