import { Fragment } from 'react';

import WomensProduct from '../components/Clothing/WomensProduct';

import classes from './MensClothing.module.css';

const MensClothing = () => {
  return (
    <Fragment className={classes.menSection}>
      <div className={classes.colLeft}>Filter</div>
      <div className={classes.colRight}>
        <WomensProduct />
      </div>
    </Fragment>
  );
};
export default MensClothing;
