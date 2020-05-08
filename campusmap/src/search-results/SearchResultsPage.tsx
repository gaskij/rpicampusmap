import * as React from 'react';
import { Fragment, ReactElement } from 'react';
import { ProgressBar } from 'react-bootstrap';
import useAxios from 'axios-hooks';

import { Location } from 'campusmap/src/types';
import SearchForm from 'campusmap/src/shared/SearchForm';
import SearchResult from './SearchResult';

const SearchResultsPage = (): ReactElement => {
  const [{ data, loading }, getLocations] = useAxios<Location[]>({
    url: 'http://localhost:5000/api/search',
  }, { manual: false });
  
  return (
    <>
      <SearchForm />
      {loading && <ProgressBar animated variant="danger" now={100} />}
      {data && data.map((location) => (
        <Fragment key={location.id}>
          <SearchResult location={location} />
        </Fragment>
      ))}
    </>
  );
};

export default SearchResultsPage;
