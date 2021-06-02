import { Fragment } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { findItem } from '../utils/helperFunctions';

const ProductDetail = ({ match }) => {
  const params = useParams();
  // switch (params.itemId) {
  //   case value:

  //     break;

  //   default:
  //     break;
  // }

  // if (!product) {
  //   return <p>No product found!</p>;
  // }

  return <Fragment>{params.itemId}</Fragment>;
};

export default ProductDetail;
