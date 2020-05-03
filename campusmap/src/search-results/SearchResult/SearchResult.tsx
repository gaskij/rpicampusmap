import * as React from 'react';
import { ReactElement } from 'react';

import { Location } from 'src/types';

interface Props {
  location: Location;
}

const SearchResult = ({ location }: Props): ReactElement => {
  return (
    <div>{location.properties.name}</div>
  );
};

export default SearchResult;
