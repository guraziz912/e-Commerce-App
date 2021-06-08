// Inbuilt dependencies imports
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import CheckBox from '../../UI/CheckBox';
import CustomCard from '../../UI/CustomCard';
import constants from '../../utils/constants';

const Filter = () => {
  const sizesAvailable = useSelector(
    (state) => state.products.masterData.sizes
  );
  const brandsAvailable = useSelector(
    (state) => state.products.masterData.brands
  );
  const coloursAvailable = useSelector(
    (state) => state.products.masterData.colours
  );

  //mapping sizes
  const sizes = sizesAvailable.map((item) => {
    return <CheckBox label={item} />;
  });

  //mapping brands
  const brands = brandsAvailable.map((item) => {
    return <CheckBox label={item} />;
  });

  //mapping colours
  const colours = coloursAvailable.map((item) => {
    return <CheckBox label={item} />;
  });

  return (
    <Fragment>
      <CustomCard type={constants.filter}>
        <div>Sizes:</div>
        <div>{sizes}</div>
        <div>
          <label>Brands :</label>
        </div>
        <div>{brands}</div>
        <div>
          <label>Colours:</label>
        </div>
        <div>{colours}</div>
      </CustomCard>
    </Fragment>
  );
};
export default Filter;
