//Inbuilt dependencies imports
import { useSelector } from 'react-redux';

//custom imports
import CustomCard from '../../UI/CustomCard';

//CSS import
import classes from './ElectronicsProduct.module.css';

const ElectronicsProduct = () => {
  const electronicsData = useSelector(
    (state) => state.electronics.electronicsData
  );
  const electronicsItems = electronicsData.map((item) => {
    return (
      <CustomCard
        name={item.name}
        itemId={item.id}
        price={item.price}
        img={item.image}
      />
    );
  });
  return <div className={classes.electronicsProducts}>{electronicsItems}</div>;
};
export default ElectronicsProduct;
