//Inbuilt depenencies imports
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Badge } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { productActions } from '../../store/productSlice';

//constants
import constants from '../../utils/constants';

import classes from './Navbar.module.css';

const NavBar = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const totalCartQuantity = useSelector((state) => state.cart.totalQuantity);

  // nav bar dropdown data
  const navItems = useSelector((state) => state.products.masterData.navItems);

  // handler functions
  const navDropDownHandler = (path, category) => {
    history.push(path);
    dispatch(productActions.setProductCategory(category));
  };
  const directToHomePageHandler = () => {
    history.push(constants.homePath);
  };
  const cartHandler = () => {
    history.push('/cart');
  };

  // navbar dropdrown mapper
  const navDropdown = navItems.map((item, index) => {
    return (
      <NavDropdown.Item
        onClick={() => navDropDownHandler(item.href, item.category)}
        key={index}
      >
        {item.title}
      </NavDropdown.Item>
    );
  });
  return (
    <Navbar className={classes.nav}>
      <Navbar.Brand
        onClick={directToHomePageHandler}
        className={classes.navLogo}
      >
        {constants.navLogo}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={constants.navToggle} />

      <Nav className={classes.navLinks}>
        <Nav.Link onClick={directToHomePageHandler}>{constants.home}</Nav.Link>
        <NavDropdown
          title={constants.navDropDownTitle}
          id={constants.navDropDownTitle}
        >
          {navDropdown}
        </NavDropdown>
        <Nav.Link onClick={cartHandler}>
          <Badge badgeContent={totalCartQuantity} color="error">
            <ShoppingBasketIcon />
          </Badge>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default NavBar;
