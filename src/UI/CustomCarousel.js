import { Carousel } from 'react-bootstrap';

import Image from './Image';

import classes from './CustomCarousel.module.css';

const CustomCarousel = ({ data, time }) => {
  // const carouselItems =;
  return (
    <Carousel>
      {data.map((item) => {
        return (
          <Carousel.Item interval={time}>
            <Image
              alt={item.name}
              src={item.source}
              className="d-block w-100"
            />

            <Carousel.Caption>
              <h3 className={classes.carouselCaption}>{item.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default CustomCarousel;
