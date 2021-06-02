//Inbuilt dependencies imports
import { useSelector } from 'react-redux';

//custom imports
import CustomCard from '../../UI/CustomCard';

//CSS import
import classes from './Products.module.css';

const MensProduct = () => {
  const clothingData = useSelector((state) => state.clothing.clothingData);
  const menClothingData = clothingData.menClothing;
  const menItems = menClothingData.map((item) => {
    return (
      <CustomCard
        name={item.name}
        itemId={item.id}
        price={item.price}
        img={item.image}
      />
    );
  });
  return <div className={classes.product}>{menItems}</div>;
};
export default MensProduct;
