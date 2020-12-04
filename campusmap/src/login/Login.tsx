import * as React from 'react';
import { ReactElement, useContext } from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import useAxios from 'axios-hooks';

import { User } from 'campusmap/src/types';
import AuthContext from '../auth';

/**
 * Top level component to control login feature.
 */
const LoginPage = (): ReactElement => {
  const user = useContext(AuthContext);

  return (
    <Container>
      <code>{JSON.stringify(user)}</code>
    </Container>
  );
};

export default LoginPage;
