import * as React from 'react';
import { ReactElement } from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import useAxios from 'axios-hooks';

import { Location } from 'campusmap/src/types';
import { getParams } from 'campusmap/src/utils';
import SearchResult from './SearchResult';

/**
 * Top level component that renders the entire Search Results page.
 */
const SearchResultsPage = (): ReactElement => {
  const [params, queryString] = getParams();

  const [{ data, loading }] = useAxios<Location[]>({
    url: `/api/search${queryString}`,
  }, { manual: false });

  return (
    <Container>
      <h5 className="my-4">
        {queryString ? `Search Results -- "${params.get('query')}"` : 'Browse All Locations'}
      </h5>
      {loading && <ProgressBar animated variant="danger" now={100} />}
      {data && data.map((location) => (
        <SearchResult location={location} key={location.id} />
      ))}
      {data && !data.length && <p>No results found.</p>}
    </Container>
  );
};

export default SearchResultsPage;
