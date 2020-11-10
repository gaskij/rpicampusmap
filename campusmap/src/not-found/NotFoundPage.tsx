import * as React from 'react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

/**
 * NotFoundPage element that specifies next steps when a page is not found.
 */
const NotFoundPage = (): ReactElement => (
  <Container className="my-4">
    <h1>
      We couldn&apos;t find the page you were looking for&nbsp;
      <span role="img" aria-label="sad face">😢</span>
    </h1>
    <br />
    <p>The URL may have been mistyped or the page may have moved:</p>
    <ul>
      <li>
        Please try navigating back to the <Link to="/">homepage</Link> to find what you are looking for.
      </li>
      <li>
        Alternatively you can&nbsp;
        <a href="https://github.com/gaskij/rpicampusmap/issues/new" target="blank" rel="noopener noreferrer">
          report a suspected issue.
        </a>
      </li>
    </ul>
  </Container>
);

export default NotFoundPage;
