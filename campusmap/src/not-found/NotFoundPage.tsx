import * as React from 'react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Jumbotron } from 'react-bootstrap';

/**
 * NotFoundPage element that specifies next steps for a not found page.
 */
const NotFoundPage = (): ReactElement => (
  <Jumbotron>
    <h1>
      We couldn&apos;t find the page you were looking for
      <span role="img" aria-label="sad face">😢</span>
    </h1>
    <p>The URL may have been mistyped or the page may have moved:</p>
    <ListGroup>
      <ListGroup.Item>
        Please try navigating back to the <Link to="/">homepage</Link> to find what you are looking for.
      </ListGroup.Item>
      <ListGroup.Item>
        Alternatively you can
        <a href="https://github.com/gaskij/rpicampusmap/issues/new" target="blank" rel="noopener noreferrer">
          report a suspected issue.
        </a>
      </ListGroup.Item>
    </ListGroup>
  </Jumbotron>
);

export default NotFoundPage;
