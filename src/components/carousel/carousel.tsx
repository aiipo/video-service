import React, { useCallback, useEffect, useState } from 'react';
import Button from '../button/button';
import './carousel.scss';

export interface CarouselProps {
  children: React.ReactElement[] | React.ReactElement;
}

const dx = 100;
const MAX_PER_VIEW_ELEMENTS = 4;

const Carousel = ({
  children,
}: CarouselProps): JSX.Element => {
  const [x, setX] = useState(0);
  const itemsPerView = children instanceof Array
    && (children.length > MAX_PER_VIEW_ELEMENTS ? MAX_PER_VIEW_ELEMENTS : children.length);

  const prevElement = useCallback((): void => setX(x === 0 ? x : x + dx), [x]);

  const nextElement = useCallback((): void => {
    if (children instanceof Array && itemsPerView) {
      setX(x === -dx * (children.length - itemsPerView) ? x : x - dx);
    }
  }, [x, children, itemsPerView]);

  useEffect(() => setX(0), [children]);

  return (
    <div className="carousel">
      <div className="carousel-container">
        {children instanceof Array
          ? children.map((el, i) => (
            <div key={i} className="carousel-item" style={{ transform: `translateX(${x}%)` }}>
              {el}
            </div>
          ))
          : children}
      </div>
      {children instanceof Array && (
        <>
          <Button
            className={`carousel-left button--transparent ${children.length <= MAX_PER_VIEW_ELEMENTS && 'none'}`}
            onClick={prevElement}
          >
            {'<'}
          </Button>
          <Button
            className={`carousel-right button--transparent ${children.length <= MAX_PER_VIEW_ELEMENTS && 'none'}`}
            onClick={nextElement}
          >
            {'>'}
          </Button>
        </>
      )}
    </div>
  );
};

export default Carousel;
