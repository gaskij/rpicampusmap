import * as React from 'react';
import { ReactElement, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Photo } from 'campusmap/src/types';

interface Props {
  photos: Photo[];
}

/**
 * Location photos rendered in a periodically switching carousel.
 */
const PhotoCarousel = ({ photos }: Props): ReactElement => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, _e: object | null): void => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {photos.map((photo) => (
        <Carousel.Item key={photo.src}>
          <img
            className="d-block w-100"
            style={{ maxHeight: '300px', minHeight: 'auto' }}
            src={photo.src}
            alt={photo.description}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PhotoCarousel;
