//Inbuilt dependencies imports
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { productActions } from '../../store/productSlice';

//custom imports
import CustomCard from '../../UI/CustomCard';

//CSS import
import classes from './Products.module.css';

const Products = (props) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.products.masterData.category);
  const productData = useSelector((state) => state.products.productData);

  useEffect(() => {
    dispatch(
      productActions.setProductCategory(props.match.params.productCategory)
    );
  }, [props.match.params.productCategory, dispatch]);

  //destrusture item**
  const products = productData.map((item) => {
    if (item.category === category) {
      return (
        <CustomCard
          name={item.name}
          itemId={item.id}
          price={item.price}
          img={item.image}
          category={item.category}
        />
      );
    }
  });
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          Filter
        </Col>
        <Col xs={12} md={8}>
          <div className={classes.product}>{products}</div>
        </Col>
      </Row>
    </Container>
  );
};
export default Products;
