import * as React from 'react';
import { ReactElement } from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import useAxios from 'axios-hooks';

import { User } from 'campusmap/src/types';

/**
 * Top level component that renders the entire Search Results page.
 */
const SearchResultsPage = (): ReactElement => {
  const [{ data, loading }] = useAxios<User>({
    url: '/api/cas',
  }, { manual: false });
  
  if (!loading) {
    return (
      <Container>
        <code>{data}</code>
      </Container>
    );
  }

  return (
    <ProgressBar animated variant="danger" now={100} />
  )
};

export default SearchResultsPage;
