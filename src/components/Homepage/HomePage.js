import CustomCarousel from '../../UI/CustomCarousel';

import menClothing from '../../assets/menClothing.jpg';
import electronics from '../../assets/electronics.jpg';
import womenClothing from '../../assets/womenClothing.jpg';

const HomePage = () => {
  const bestsellerData = [
    {
      name: `Men's Clothing`,
      source: menClothing,
    },
    {
      name: `Women's Clothing`,
      source: womenClothing,
    },
    {
      name: `Electronics`,
      source: electronics,
    },
  ];
  return (
    <div>
      <CustomCarousel data={bestsellerData} time={5000} />
    </div>
  );
};
export default HomePage;
