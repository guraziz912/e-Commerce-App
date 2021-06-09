import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Container, Table, Row, Button, Col } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';

import Image from '../../UI/Image';
import Counter from '../../UI/Counter';
import { cartActions } from '../../store/cartSlice';

import classes from './Cart.module.css';

const Cart = () => {
  const history = useHistory();
  const cart = useSelector((state) => state.cart.cart);
  const totalCartPrice = useSelector((state) => state.cart.totalCartPrice);
  const dispatch = useDispatch();

  //Removing an item
  const removeItemHandler = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };
  const homeHandler = () => {
    history.push('/');
  };

  const cartPrintHandler = (token, address) => {
    console.log(token, address);
  };

  //item quantity increase
  const increaseHandler = (id) => {
    dispatch(cartActions.itemIncrease(id));
  };
  //item quantity decrease
  const decreaseHandler = (id) => {
    dispatch(cartActions.itemDecrease(id));
  };

  //mapping cart item
  const cartDetails = cart.map(
    ({ name, image, id, price, quantity, totalPrice, category }) => {
      return (
        <tr className={classes.cartRow}>
          <td>
            <Image className={classes.cartImage} alt={name} src={image} />
          </td>

          <td>{name}</td>

          <td>${price}</td>
          <td>
            <Counter
              onDecrease={() => decreaseHandler(id)}
              onIncrease={() => increaseHandler(id)}
              quantity={quantity}
            />
          </td>
          <td>
            <Button onClick={() => removeItemHandler(id)}>
              <i class="fas fa-times"></i>
            </Button>
          </td>
          <td>${totalPrice}</td>
        </tr>
      );
    }
  );
  //Displaying cart data in the form of table
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Table bordered>
          <thead>
            <tr className={classes.cartRow}>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>{cartDetails}</tbody>
          <tfoot>Total Price :${totalCartPrice}</tfoot>
        </Table>
        <Row>
          <Col md={4}>
            <Button
              className={classes.button}
              variant="danger"
              onClick={homeHandler}
            >
              Continue shopping
            </Button>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <StripeCheckout
              className={classes.button}
              stripeKey="pk_test_51IyhiTSAoPHzmNjVBMWYDdC09jqqR0QKSRQXJTR5XncbGUsHd3EV8OoETxnF5VIDGW92FdIJOI2SneZ4wbQgmHYe00bhLttufU"
              token={cartPrintHandler}
            />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
export default Cart;
