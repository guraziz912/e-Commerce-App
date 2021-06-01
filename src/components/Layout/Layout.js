//Inbuilt dependcies import

import { Fragment } from 'react';

//Custom imports
import Navbar from './Navbar';
import TopHeader from './TopHeader';

const Layout = (props) => {
  return (
    <Fragment>
      <header>
        <TopHeader />
        <Navbar />
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
};
export default Layout;
