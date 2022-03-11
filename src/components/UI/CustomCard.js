//Inbuilt depenencies imports
import { LocalConvenienceStoreOutlined } from '@material-ui/icons';
import { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Custom imports
import constants from '../../utils/constants';

//Css import
import classes from './CustomCard.module.css';

const CustomCard = (props) => {
  const { name, price, itemId, img, category, type, itemBrand } = props;

  let item = 0;
  switch (type) {
    case constants.productListing:
      item = (
        <Link to={`/products/${category}/${itemId}`} class={classes.cardText}>
          <Card className={classes.card} key={itemId} id={itemId}>
            <Card.Img className={classes.cardImage} variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {constants.price}
                {price}
              </Card.Text>
              <Card.Text>
                {constants.brandHeader}
                {itemBrand}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      );
      break;
    case constants.filter:
      item = (
        <Card className={classes.card} key={itemId} id={itemId}>
          {props.children}
        </Card>
      );
      break;

    default:
      break;
  }

  return (
    <Fragment>
      <div>{item}</div>
    </Fragment>
  );
};
export default CustomCard;
