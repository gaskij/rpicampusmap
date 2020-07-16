import * as React from 'react';
import { ReactElement, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Location } from 'campusmap/src/types';


interface Props {
  location: Location;
}

/**
 * Individual Info Result component rendered in a carousel.
 */
const PhotoCarousel = ({ location }: Props): ReactElement => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: object | null) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://tours.pocketsights.com/media/1/11ef2a38f7884fd58ecc6a78e3e70ea7_large.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.alpha6294.com/History/ThetaXionCampus/DarrinCommunicationsCenter/Building/DarrinCommunicationsCenter.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bing.com/th?id=OIP.npiBC_gFZvex2KDN16YTZAHaFj&pid=Api&rs=1&p=0"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

/*
const PhotoCarousl = ({ location }: Props): ReactElement => (
  <>
    <Jumbotron>
      <Card className="mb-4">
        <Row className="p-4">
          <Col className="col-2">
            <Card.Img src="..." style={{ maxWidth: '100px' }} alt={location.properties.name} />
          </Col>
          <Col className="col-10">
            <Card.Body>
              <Card.Title>{location.properties.name}</Card.Title>
              <Card.Text>{location.properties.description}</Card.Text>
              {location.properties.nick && (
                <Card.Subtitle>
                  Also known as:&nbsp;
                  {location.properties.nick}
                </Card.Subtitle>
              )}
            </Card.Body>
          </Col>
          <Button variant="outline-danger" href="`/info?loc=${location._id}`">Show on Map</Button>
        </Row>
      </Card>
      <Carousel>
        <Carousel.Item>
          <img
            src="http://www.alpha6294.com/History/ThetaXionCampus/DarrinCommunicationsCenter/Building/DarrinCommunicationsCenter.jpg"
            className="d-block w-100"
            alt="..."
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.bing.com/th?id=OIP.npiBC_gFZvex2KDN16YTZAHaFj&pid=Api&rs=1&p=0"
            className="d-block w-100"
            alt="..."
          />
        </Carousel.Item>
      </Carousel>
    </Jumbotron>

  </>
);
*/

export default PhotoCarousel;
