import * as React from 'react';
import { ReactElement } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import pin from 'campusmap/public/images/pin-512x512.png';
import { Location } from 'campusmap/src/types';

interface Props {
  location: Location;
}

/**
 * Individual Search Result component rendered as a card.
 */
const SearchResult = ({ location }: Props): ReactElement => (
  <Link to={`/info?loc=${location.id}`}>
    <Card className="mb-4">
      <Row className="p-4">
        <Col className="col-2">
          <Card.Img src={pin} style={{ maxWidth: '100px' }} alt={location.properties.name} />
        </Col>
        <Col className="col-10">
          <Card.Body>
            <Card.Title>{location.properties.name}</Card.Title>
            <Card.Text>{location.properties.description}</Card.Text>
            {location.properties.nick
                && (
                  <Card.Subtitle>
                    Also known as:&nbsp;
                    {location.properties.nick}
                  </Card.Subtitle>
                )}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  </Link>
);

export default SearchResult;
