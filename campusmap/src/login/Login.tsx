import * as React from 'react';
import { ReactElement, useContext } from 'react';
import { Container } from 'react-bootstrap';

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
