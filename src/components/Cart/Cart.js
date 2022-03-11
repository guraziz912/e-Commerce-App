import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Container, Table, Row, Button, Col } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';

//custom imports
import Image from '../UI/Image';
import Counter from '../UI/Counter';
import { cartActions } from '../../store/cartSlice';
import constants from '../../utils/constants';

import classes from './Cart.module.css';
import schemaConstants from '../../utils/schemaConstants';

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
    history.push(constants.homePath);
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
              <i class={constants.removeIconClass}></i>
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
              <th>{constants.image}</th>
              <th>{constants.productName}</th>
              <th>{constants.productPrice}</th>
              <th>{constants.productQuantity}</th>
              <th>{constants.remove}</th>
              <th>{constants.totalProductPrice}</th>
            </tr>
          </thead>
          <tbody>{cartDetails}</tbody>
          <tfoot>
            {constants.totalCartPrice}
            {totalCartPrice}
          </tfoot>
        </Table>
        <Row>
          <Col md={schemaConstants.COL_MD}>
            <Button
              className={classes.button}
              variant="danger"
              onClick={homeHandler}
            >
              {constants.continueShopping}
            </Button>
          </Col>
          <Col
            md={{
              span: schemaConstants.COL_SPAN,
              offset: schemaConstants.COL_OFFSET,
            }}
          >
            <StripeCheckout
              className={classes.button}
              stripeKey={constants.stripeCheckoutKey}
              token={cartPrintHandler}
            />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
export default Cart;
