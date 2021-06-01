//Inbuilt depenencies import

import { useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

//constants
import constants from '../../utils/constants';

const NavBar = (props) => {
  const history = useHistory();
  // nav bar dropdown data
  const navItems = [
    { href: '/mens-clothings', title: `Men's Clothing` },
    { href: '/womens-clothings', title: `Women's Clothing` },
    { href: '/electronics', title: `Electronics` },
  ];
  // handler functions
  const navDropDownHandler = (path) => {
    history.push(path);
  };
  const directToHomePageHandler = () => {
    history.push(constants.homePath);
  };
  // navbar dropdrown mapper
  const navDropdown = navItems.map((item, index) => {
    return (
      <NavDropdown.Item
        onClick={() => navDropDownHandler(item.href)}
        key={index}
      >
        {item.title}
      </NavDropdown.Item>
    );
  });
  return (
    <Navbar>
      <Navbar.Brand onClick={directToHomePageHandler}>
        {constants.navLogo}
        <i class={constants.cartIcon}></i>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={constants.navToggle} />

      <Nav className={constants.navClassname}>
        <Nav.Link onClick={directToHomePageHandler}>{constants.home}</Nav.Link>
        <NavDropdown
          title={constants.navDropDownTitle}
          id={constants.navDropDownTitle}
        >
          {navDropdown}
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};
export default NavBar;
