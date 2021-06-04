import { useDispatch, useSelector } from 'react-redux';
import { Container, Table, Row, Button, Col } from 'react-bootstrap';

import Image from '../../UI/Image';
import { cartActions } from '../../store/cartSlice';

import classes from './Cart.module.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  //Removing an item
  const removeItemHandler = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  //mapping cart item
  const cartDetails = cart.map((item) => {
    return (
      <tr className={classes.cartRow}>
        <td>
          <Image
            className={classes.cartImage}
            alt={item.name}
            src={item.image}
          />
        </td>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td>{item.quantity}</td>
        <td>
          <Button onClick={() => removeItemHandler(item.id)}>
            <i class="fas fa-times"></i>
          </Button>
        </td>
        <td>${item.totalPrice}</td>
      </tr>
    );
  });
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
          <tfoot>Total Price :$</tfoot>
        </Table>
        <Row>
          <Col md={4}>
            <Button variant="danger">continue shopping</Button>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <Button variant="danger">Checkout</Button>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
export default Cart;
