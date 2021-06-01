import { Carousel } from 'react-bootstrap';

import Image from './Image';

const CustomCarousel = ({ data, time }) => {
  const carouselItems = data.map((item) => {
    return (
      <Carousel.Item interval={time} className="d-block w-100">
        <Image alt={item.name} src={item.source} />

        <Carousel.Caption>
          <h3>{item.name}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return (
    <Carousel variant="dark" fade>
      {carouselItems}
    </Carousel>
  );
};
export default CustomCarousel;
