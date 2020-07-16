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
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.alpha6294.com/History/ThetaXionCampus/DarrinCommunicationsCenter/Building/DarrinCommunicationsCenter.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bing.com/th?id=OIP.npiBC_gFZvex2KDN16YTZAHaFj&pid=Api&rs=1&p=0"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default PhotoCarousel;
