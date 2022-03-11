import { useSelector } from 'react-redux';

import CustomCarousel from '../UI/CustomCarousel';

const HomePage = () => {
  const bestSellerData = useSelector(
    (state) => state.products.masterData.bestSellerData
  );
  return (
    <div>
      <CustomCarousel data={bestSellerData} time={5000} />
    </div>
  );
};
export default HomePage;
