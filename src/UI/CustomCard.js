//Inbuilt depenencies imports
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Custom imports
import constants from '../utils/constants';

//Css import
import classes from './CustomCard.module.css';

const CustomCard = ({ name, price, itemId, img, category }) => {
  return (
    <Link to={`/products/${category}/${itemId}`} class={classes.cardText}>
      <Card className={classes.card} key={itemId} id={itemId}>
        <Card.Img className={classes.cardImage} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {constants.price}
            {price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
export default CustomCard;
