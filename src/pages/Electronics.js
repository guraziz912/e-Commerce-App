import { Fragment } from 'react';

import ElectronicsProduct from '../components/Electronics/ElectronicsProducts';

import classes from './ProductListing.module.css';

const MensClothing = () => {
  return (
    <Fragment className={classes.menSection}>
      <div className={classes.colLeft}>Filter</div>
      <div className={classes.colRight}>
        <ElectronicsProduct />
      </div>
    </Fragment>
  );
};
export default MensClothing;
