import { Fragment } from 'react';

import MensProduct from '../components/Clothing/MensProduct';

import classes from './ProductListing.module.css';

const MensClothing = () => {
  return (
    <Fragment className={classes.menSection}>
      <div className={classes.colLeft}>Filter</div>
      <div className={classes.colRight}>
        <MensProduct />
      </div>
    </Fragment>
  );
};
export default MensClothing;
