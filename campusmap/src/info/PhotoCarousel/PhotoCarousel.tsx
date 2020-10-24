import * as React from 'react';
import { ReactElement, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Location, Photo } from 'campusmap/src/types';

interface Props {
  location: Location;
}

/**
 * Individual Info Result component rendered in a carousel.
 */
const PhotoCarousel = ({ location }: Props): ReactElement => {
  const [index, setIndex] = useState(0);

  const images: Photo[] = [
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

  const handleSelect = (selectedIndex: number, _e: object | null): void => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((image) => (
        <Carousel.Item key={image.src}>
          <img
            className="d-block w-100"
            style={{maxHeight: '300px', minHeight: 'auto'}}
            src={image.src}
            alt={image.description}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PhotoCarousel;
