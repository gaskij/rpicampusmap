import * as React from 'react';
import {
  ReactElement,
  useEffect,
  useState,
} from 'react';
import useAxios from 'axios-hooks';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';

import { Location } from 'campusmap/src/types';
import { getParams } from 'campusmap/src/utils';
import createLeafletMap from './leaflet/map';
import { createPopup } from './leaflet/mapUtils';

interface Props {
  targetId: string;
}

/**
 * A configured Leaflet map component. 
 */
const Map = ({ targetId }: Props): ReactElement => {
  const [campusMap, setCampusMap] = useState<L.Map>();
  const [params, queryString] = getParams();

  const [{ error }, fetch] = useAxios<Location>({
    url: `http://localhost:5000/api/locations/${params.get('location')}`,
  }, { manual: true, useCache: false });

  const getLocationData = React.useCallback(async () => {
    const { data } = await fetch();
    return data;
  }, []);

  useEffect(() => {
    setCampusMap(createLeafletMap(targetId));
  }, []);

  useEffect(() => {
    if (queryString) {
      getLocationData()
        .then(data => {
          console.log(data)
          campusMap && data && createPopup(campusMap, data, !!error);
        });
    }
  }, [campusMap, getLocationData, queryString]);
  
  return (
    <div id={targetId} style={{ height: '100%' }}></div>
  );
}

export default Map;
