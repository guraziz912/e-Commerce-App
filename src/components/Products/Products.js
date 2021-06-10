//Inbuilt dependencies imports
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { productActions } from '../../store/productSlice';

//custom imports
import CustomCard from '../../UI/CustomCard';
import Filter from '../Filter/Filter';

//CSS import
import classes from './Products.module.css';
import constants from '../../utils/constants';

const Products = (props) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.products.masterData.category);
  const productData = useSelector((state) => state.products.productData);
  const filterData = useSelector((state) => state.products.masterData.filter);
  const filteredProductData = useSelector(
    (state) => state.products.filteredProductData
  );

  useEffect(() => {
    dispatch(
      productActions.setProductCategory(props.match.params.productCategory)
    );
  }, [props.match.params.productCategory, dispatch]);

  useEffect(() => {
    console.log('woking');
    dispatch(productActions.setFilteredProducts());
  }, [filterData]);

  let products = [];

  if (filteredProductData.length !== 0) {
    products = filteredProductData.map((item) => {
      if (item.category === category) {
        return (
          <CustomCard
            type={constants.productListing}
            name={item.name}
            itemId={item.id}
            price={item.price}
            img={item.image}
            category={item.category}
            itemBrand={item.brand}
          />
        );
      }
    });
  } else {
    products = productData.map((item) => {
      if (item.category === category) {
        return (
          <CustomCard
            type={constants.productListing}
            name={item.name}
            itemId={item.id}
            price={item.price}
            img={item.image}
            category={item.category}
            itemBrand={item.brand}
          />
        );
      }
    });
  }

  return (
    <Container className={classes.productContainer}>
      <Row className={classes.productRow}>
        <Col xs={5} md={2}>
          <div>
            <Filter className={classes.filter} />
          </div>
        </Col>

        <Col xs={12} md={10}>
          <div className={classes.product}>{products}</div>
        </Col>
      </Row>
    </Container>
  );
};
export default Products;
