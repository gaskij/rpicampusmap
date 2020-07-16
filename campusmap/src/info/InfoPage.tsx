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
  console.log(params.keys().next().value);
  const [{ data: location, loading, error }] = useAxios<Location>({
    url: `http://localhost:5000/api/info/${params.get('loc')}`,
  }, { manual: false, useCache: false });
  if (!loading) console.log(location);
  return (
    <>
    {loading && <ProgressBar animated variant="danger" now={100} />}
    {!loading && (
      <Container className="my-4">
        <Row>
          <Col>
            <h2>{location.properties.name}</h2>
            <p>{location.properties.description}</p>
            <p>{location.properties.nick}</p>
            <Button href={`/?location=${location.id}`} variant="danger">Show on map</Button>
          </Col>
          <Col>
            <PhotoCarousel location={location} />
          </Col>
        </Row>
        <Row className="my-4">
          <h3>Comments:</h3>
          <div>
            {location.comments
              ? location.comments.map(comment => (
                <CommentElement data={comment} />
              ))
              : <p>No comments found. Be the first to leave a comment!</p>
            }
          </div>
          <br>
          <h5>Post a Comment:</h5>
          <br>
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
    )}
    </>
  );
};

export default InfoPage;
