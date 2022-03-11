// Inbuilt dependencies imports
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { productActions } from '../../store/productSlice';
import { Slider } from '@material-ui/core';

import CheckBox from '../../UI/CheckBox';
import CustomCard from '../../UI/CustomCard';
import CustomRadioComponent from '../../UI/CustomRadioComponent';

import constants from '../../utils/constants';

const Filter = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const productCategory = params.productCategory;

  const selectedPrice = useSelector(
    (state) => state.products.masterData.filter.selectedPrice
  );

  const [brandChecked, setBrandChecked] = useState({
    Zara: false,
    Nike: false,
    Adidas: false,
    Logi: false,
    Dell: false,
    [constants.tpLink]: false,
    IKARUS: false,
  });
  const [colourChecked, setColourChecked] = useState({
    Blue: false,
    Black: false,
    White: false,
    Pink: false,
    Maroon: false,
  });
  const [sizeChecked, setSizeChecked] = useState({
    small: false,
    medium: false,
    large: false,
  });
  const sizesAvailable = useSelector(
    (state) => state.products.masterData.sizes
  );
  const clothingBrandsAvailable = useSelector(
    (state) => state.products.masterData.clothingBrands
  );
  const electronicsBrandsAvailable = useSelector(
    (state) => state.products.masterData.electronicsBrands
  );
  const coloursAvailable = useSelector(
    (state) => state.products.masterData.colours
  );

  useEffect(() => {
    dispatch(productActions.setDefaultBrandFilter());
  }, [productCategory, dispatch]);

  //setting brand filter
  const brandFilterHandler = (event) => {
    setBrandChecked({
      ...brandChecked,
      [event.target.name]: event.target.checked,
    });
    dispatch(
      productActions.setBrandFilter({
        name: event.target.name,
        checked: event.target.checked,
      })
    );
  };

  //setting colour filter
  const colourFilterHandler = (event) => {
    setColourChecked({
      ...colourChecked,
      [event.target.name]: event.target.checked,
    });

    dispatch(productActions.setColourFilter(event.target.value));
  };

  //setting sizes filter
  const sizeFilterHandler = (event) => {
    setSizeChecked({
      ...sizeChecked,
      [event.target.name]: event.target.checked,
    });

    dispatch(
      productActions.setProductSize({
        name: event.target.name,
        checked: event.target.checked,
      })
    );
  };

  // Setting Prices
  const handlePriceChange = (event, newValue) => {
    dispatch(productActions.setPriceFilter(newValue));
  };

  //mapping sizes
  const sizes = sizesAvailable.map((item) => {
    return (
      <CheckBox
        name={item}
        onChange={sizeFilterHandler}
        value={sizeChecked[item.name]}
      />
    );
  });

  //mapping brands
  const brands =
    productCategory !== constants.categoryElectronics
      ? clothingBrandsAvailable.map((item) => {
          return (
            <CheckBox
              name={item}
              checked={brandChecked[item.name]}
              onChange={brandFilterHandler}
            />
          );
        })
      : electronicsBrandsAvailable.map((item) => {
          return (
            <CheckBox
              name={item}
              checked={brandChecked[item.name]}
              onChange={brandFilterHandler}
            />
          );
        });

  const checkElectronics = productCategory !==
    constants.categoryElectronics && (
    <div>
      <div>Sizes:</div>
      <div>{sizes}</div>
    </div>
  );
  return (
    <Fragment>
      <CustomCard type={constants.filter} key={productCategory}>
        {checkElectronics}
        <div>
          <label>{constants.brandHeader}</label>
        </div>
        <div>{brands}</div>
        <div>
          <CustomRadioComponent
            name={constants.colourLabel}
            list={coloursAvailable}
            onChange={colourFilterHandler}
          />
        </div>
        <div>{constants.priceLabel}</div>
        <div>
          <Slider
            value={selectedPrice}
            onChange={handlePriceChange}
            valueLabelDisplay={constants.valueLabelDisplay}
            aria-labelledby={constants.arialabelledby}
            max={constants.maxPrice}
            step={constants.stepPriceSlider}
          />
        </div>
      </CustomCard>
    </Fragment>
  );
};
export default Filter;
