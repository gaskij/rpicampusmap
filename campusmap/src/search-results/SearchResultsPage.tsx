import * as React from 'react';
import { ReactElement } from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import useAxios from 'axios-hooks';

import { Location } from 'campusmap/src/types';
import { getParams } from 'campusmap/src/utils';
import SearchResult from './SearchResult';

/**
 * Top level component that renders the entire Search Results page.
 */
const SearchResultsPage = (): ReactElement => {
  const [params, query] = getParams();

  const [{ data, loading }] = useAxios<Location[]>({
    url: `/api/search${query}`,
  }, { manual: false });

  return (
    <>
      <Helmet>
        <title>{query ? `Search Results -- "${params.get('query')}"` : 'Browse All Locations'}</title>
      </Helmet>
      <Container>
        <h5 className="my-4">{query}</h5>
        {loading && <ProgressBar animated variant="danger" now={100} />}
        {data && data.map((location) => (
          <SearchResult location={location} key={location.id} />
        ))}
        {data && !data.length && <p>No results found.</p>}
      </Container>
    </>
  );
};

export default SearchResultsPage;
