import menClothing from '../../assets/menClothing.jpg';
import electronics from '../../assets/electronics.jpg';
import CustomCarousel from '../../UI/CustomCarousel';

const HomePage = () => {
  const bestsellerData = [
    {
      name: `Men's Clothing`,
      source: menClothing,
    },
    {
      name: `Women's Clothing`,
      source:
        'http://themes.pixelstrap.com/multikart/assets/images/home-banner/2.jpg',
    },
    {
      name: `Electronics`,
      source: electronics,
    },
  ];
  return (
    <div>
      <CustomCarousel data={bestsellerData} time={1000} />
    </div>
  );
};
export default HomePage;
