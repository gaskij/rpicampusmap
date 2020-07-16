import * as React from 'react';
import { ReactElement } from 'react';
import {
  Button,
  Container,
  Col,
  Form,
  ProgressBar,
  Row,
} from 'react-bootstrap';
import useAxios from 'axios-hooks';

import { Location } from 'campusmap/src/types';
import { getParams } from 'campusmap/src/utils';
import PhotoCarousel from './PhotoCarousel';
import CommentElement from './Comment';

/**
 * Top level component that renders the entire Info page.
 */
const InfoPage = (): ReactElement => {
  const [params, queryString] = getParams();

  const [{ data: location, loading, error }] = useAxios<Location>({
    url: `http://localhost:5000/api/info/${params.get('loc')}`,
  }, { manual: false, useCache: false });

  return (
    <>
    {loading && <ProgressBar animated variant="danger" now={100} />}
    {!loading && (
      <Container className="my-4">
        <Row>
          <Col>
            <h2>{location.properties.name}</h2>
            <p>{location.properties.description}</p>
            <p>Nicknames: {location.properties.nick}</p>
            <Button href={`/?location=${location.id}`} variant="danger">Show on Map</Button>
          </Col>
          <Col>
            <PhotoCarousel location={location} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h4>Comments:</h4>
            <div>
              {location.comments
                ? location.comments.map(comment => (
                  <CommentElement data={comment} />
                ))
                : <p>No comments found. Be the first to leave a comment!</p>
              }
            </div>
            <h6>Post a Comment:</h6>
            <Form>
              <Form.Group controlId="commentTitle">
                <Form.Control type="text" placeholder="Title"/>
                <Form.Control as="textarea" rows={3} placeholder="Type your comment here..." className="my-1" />
                <Button type="submit" variant="danger">Post Comment</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
          <h6>Add an Image:</h6>
            <Form>
              <Form.Group controlId="imageLink">
                <Form.Control type="url" placeholder="Enter image link" />
                <Button type="submit" variant="danger">Submit Image</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    )}
    </>
  );
};

export default InfoPage;
