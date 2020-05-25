import * as React from 'react';
import { ReactElement } from 'react';
import {
  Button,
  Container,
  Col,
  Form,
  Row,
} from 'react-bootstrap';
import useAxios from 'axios-hooks';

import { Location } from 'campusmap/src/types';
import { getParams } from 'campusmap/src/utils';
import PhotoCarousel from './PhotoCarousel';
import Comment from './Comment';

/**
 * Top level component that renders the entire Info page.
 */
const InfoPage = (): ReactElement => {
  const [params, queryString] = getParams();

  const [{ data: location, loading, error }, getLocations] = useAxios<Location>(
    `http://localhost:5000/api/info${queryString}`,
    { manual: false },
  );

  return (
    <Container>
      <Row>
        <Col>
          Name: {location.properties.name}
        </Col>
        <Col>
          <PhotoCarousel location={location} />
        </Col>
      </Row>
      <Row>
        <h2>Comments:</h2>
        {location.comments.map(comment => (
          <Comment data={comment} />
        ))}
        <h5>Post a Comment:</h5>
        <Form>
          <Form.Group controlId="commentTitle">
            <Form.Label>Comment Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />
            <Button as="input" type="submit" value="Post Comment" />
            {' '}
          </Form.Group>
          <Form.Group controlId="commentBody">
            <Form.Control as="textarea" rows={3} placeholder="Type your comment here..." />
          </Form.Group>
        </Form>
      </Row>
      <Row>
        <Form>
          <Form.Group controlId="imageLink">
            <Form.Label>Add an Image:</Form.Label>
            <Form.Control type="url" placeholder="Enter image link" />
            <Button as="input" type="submit" value="Submit Image" />
            {' '}
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
};

export default InfoPage;
