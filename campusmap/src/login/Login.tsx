import * as React from 'react';
import { ReactElement } from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import useAxios from 'axios-hooks';

import { User } from 'campusmap/src/types';

/**
 * Top level component to control login feature.
 */
const LoginPage = (): ReactElement => {
  const [{ data, loading }] = useAxios<User>({
    // Backend endpoint to confirm user login
    url: '/api/cas/user',
  }, { manual: false });

  if (!loading) {
    return (
      <Container>
        <code>{JSON.stringify(data)}</code>
      </Container>
    );
  }

  return (
    <ProgressBar animated variant="danger" now={100} />
  );
};

export default LoginPage;
