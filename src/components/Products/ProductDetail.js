import { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Tab, Tabs } from 'react-bootstrap';

import { productActions } from '../../store/productSlice';
import { cartActions } from '../../store/cartSlice';
import Image from '../../UI/Image';
import CustomRadioComponent from '../../UI/CustomRadioComponent';
import Counter from '../../UI/Counter';
import { findItem } from '../../utils/helperFunctions';

import classes from './ProductDetail.module.css';
import constants from '../../utils/constants';

const ProductDetail = () => {
  const [checked, setChecked] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products.productData);
  const sizes = useSelector((state) => state.products.masterData.sizes);

  const item = findItem(productData, params.itemId);

  //item quantity increase
  const increaseHandler = () => {
    dispatch(productActions.increaseQuantity(params.itemId));
  };
  //item quantity decrease
  const decreaseHandler = () => {
    dispatch(productActions.decreaseQuantity(params.itemId));
  };
  //item size
  const sizeHandler = (event) => {
    setChecked(event.target.value);
    dispatch(
      productActions.setProductSize({
        id: params.itemId,
        size: event.target.value,
      })
    );
  };
  const addToCartHandler = () => {
    dispatch(cartActions.addToCart(item));
    dispatch(productActions.setDefault(item.id));
    setChecked(false);
  };

  const sizeAvailable = item.category !== 'electronics' && (
    <CustomRadioComponent
      value={checked}
      onChange={sizeHandler}
      list={sizes}
      name="Sizes :"
    />
  );

  return (
    <Fragment>
      <Container>
        <Row xs={1} md={2}>
          <Col>
            <Image
              className={classes.productImage}
              alt={item.name}
              src={item.image}
            />
          </Col>
          <Col>
            <div>
              <strong className={classes.productName}>{item.name}</strong>
            </div>
            <br></br>
            <div>
              <strong className={classes.productDetails}>
                {constants.price}
                {item.price}
              </strong>
            </div>
            <div>Colour : {item.colour}</div>
            <br></br>
            <div>{sizeAvailable}</div>
            <div>
              <Counter
                onDecrease={decreaseHandler}
                onIncrease={increaseHandler}
                quantity={item.quantity}
              />
            </div>
            <br></br>
            <div>
              <Button variant="danger" onClick={addToCartHandler}>
                <i class="fas fa-shopping-cart"></i>Add to Cart
              </Button>
            </div>
          </Col>
          <Col>
            <div>
              <Tabs
                defaultActiveKey="description"
                id="uncontrolled-tab-example"
              >
                <Tab eventKey="description" title="Description">
                  {item.description}
                </Tab>
                <Tab eventKey="specification" title="Specification">
                  {item.description}
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProductDetail;
