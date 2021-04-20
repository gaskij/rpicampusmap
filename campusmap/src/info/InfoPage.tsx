import * as React from 'react';
import { ReactElement } from 'react';
import Helmet from 'react-helmet';
import {
  Button,
  Container,
  Col,
  Form,
  ProgressBar,
  Row,
} from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import useAxios from 'axios-hooks';

import { Comment, Location, Photo } from 'campusmap/src/types';
import PhotoCarousel from './PhotoCarousel';
import CommentElement from './Comment';

/** @todo Replace with API call once backend is hooked up */
const comments: Comment[] = [
  {
    _id: '1',
    author: 'Justin Gaskins',
    text: 'This is a comment',
    timestamp: new Date(),
  },
  {
    _id: '2',
    author: 'Priya Sapra',
    text: 'This is a second comment',
    timestamp: new Date(),
  },
];

/** @todo Replace with API call once backend is hooked up */
const photos: Photo[] = [
  {
    author: 'author 1',
    description: 'alt text 1',
    src: 'http://tours.pocketsights.com/media/1/11ef2a38f7884fd58ecc6a78e3e70ea7_large.jpg',
    date: new Date(),
  },
  {
    author: 'author 2',
    description: 'alt text 2',
    src: 'http://www.alpha6294.com/History/ThetaXionCampus/DarrinCommunicationsCenter/Building/DarrinCommunicationsCenter.jpg',
    date: new Date(),
  },
  {
    author: 'author 3',
    description: 'alt text 3',
    src: 'https://www.usnews.com/img/college-photo_3861.jpg',
    date: new Date(),
  },
];

/**
 * Top level component that renders the entire Info page.
 */
const InfoPage = (): ReactElement => {
  const { id }: { id: string } = useParams();

  const [{ data: location, loading, error }] = useAxios<Location>({
    url: `/api/info/${id}`,
  }, { manual: false, useCache: false });

  return (
    <>
      <Helmet>
        <title>Info Page</title>
      </Helmet>
      {loading && <ProgressBar animated variant="danger" now={100} />}
      {error && (
        <Container className="my-4">
          <Row>
            <Col>
              <p>We&apos;re having some trouble  loading information about this location :/</p>
            </Col>
          </Row>
        </Container>
      )}
      {!loading && !error && (
        <>
          <Helmet>
            <title>{location.properties.name}</title>
          </Helmet>
          <div className="py-4" style={{ backgroundColor: 'beige' }}>
            <Container>
              <Row id="infoSection">
                <Col sm={6}>
                  <h2>{location.properties.name}</h2>
                  <p>{location.properties.description}</p>
                  <p>Also known as: {location.properties.nick}</p>
                  <Link to={`/?location=${location.id}`}><Button className="shadow" variant="danger">Show on Map</Button></Link>
                </Col>
                <Col sm={6}>
                  <PhotoCarousel photos={photos} />
                </Col>
              </Row>
            </Container>
          </div>
          <Container className="py-4">
            <Row>
              <Col>
                <h4>Comments:</h4>
                <div className="pb-4">
                  {comments
                    ? comments.map((comment) => (
                      /* eslint-disable-next-line no-underscore-dangle */
                      <CommentElement data={comment} key={comment._id} />
                    ))
                    : <p>No comments found. Be the first to leave a comment!</p>}
                </div>
                <h6>Post a Comment:</h6>
                <Form>
                  <Form.Group controlId="commentTitle">
                    <Form.Control type="text" placeholder="Title" />
                    <Form.Control as="textarea" rows={3} placeholder="Type your comment here..." className="my-1" />
                    <Button className="shadow" type="submit" variant="danger">Post Comment</Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default InfoPage;
