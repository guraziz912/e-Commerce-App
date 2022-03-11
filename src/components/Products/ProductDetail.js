import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Tab, Tabs, Alert } from 'react-bootstrap';

import { productActions } from '../../store/productSlice';
import { cartActions } from '../../store/cartSlice';
import Image from '../UI/Image';
import CustomCard from '../UI/CustomCard';
import CustomRadioComponent from '../UI/CustomRadioComponent';
import Counter from '../UI/Counter';
import { findItem } from '../../utils/helperFunctions';

import classes from './ProductDetail.module.css';
import constants from '../../utils/constants';
import schemaConstants from '../../utils/schemaConstants';

const ProductDetail = (props) => {
  const [checked, setChecked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.products.productData);
  const category = useSelector((state) => state.products.masterData.category);
  const sizes = useSelector((state) => state.products.masterData.sizes);

  const item = findItem(productData, params.itemId);

  useEffect(() => {
    dispatch(
      productActions.setProductCategory(props.match.params.productCategory)
    );
    const alertHandler = () => {
      if (showAlert) {
        setShowAlert(false);
      }
    };
    setTimeout(alertHandler, schemaConstants.SET_ALERT_OFF);
  }, [props.match.params.productCategory, dispatch, showAlert]);

  const otherProducts = productData.filter((item) => item.id !== params.itemId);

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
    setShowAlert(true);
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

  const relatedProducts = otherProducts.map((item) => {
    if (item.category === category) {
      return (
        <CustomCard
          type={constants.productListing}
          name={item.name}
          itemId={item.id}
          price={item.price}
          img={item.image}
          category={item.category}
        />
      );
    }
  });

  const buttonDisabled =
    item.quantity > schemaConstants.MIN_QUANTITY ? false : true;

  return (
    <Fragment>
      <Alert show={showAlert} variant={constants.successAlert}>
        {constants.addedToCart}
      </Alert>
      <Container>
        <Row xs={schemaConstants.ROW_XS} md={schemaConstants.ROW_MD}>
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
              <Button
                variant={constants.varientDanger}
                onClick={addToCartHandler}
                disabled={buttonDisabled}
              >
                <i class={constants.shoppingCartIcon}></i>
                {constants.addToCart}
              </Button>
            </div>
          </Col>
          <Col>
            <div>
              <Tabs
                defaultActiveKey={constants.description}
                id={constants.tabId}
              >
                <Tab
                  eventKey={constants.description}
                  title={constants.description}
                >
                  {item.description}
                </Tab>
                <Tab
                  eventKey={constants.specification}
                  title={constants.specification}
                >
                  {item.description}
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
        <Row className={classes.footerRow}>
          <div>{constants.relatedProducts}</div>
          <Col>
            <div className={classes.otherProducts}>{relatedProducts}</div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProductDetail;
