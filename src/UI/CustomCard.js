//Inbuilt depenencies imports
import { Card, Button } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';

//Custom imports
import constants from '../utils/constants';

//Css import
import classes from './CustomCard.module.css';

const CustomCard = ({ name, price, itemId, img }) => {
  // const match = useRouteMatch();
  return (
    <Card className={classes.card} key={itemId} id={itemId}>
      <Card.Img className={classes.cardImage} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {constants.price}
          {price}
        </Card.Text>
        <Link to={`/electronics/${itemId}`}>
          <Button variant="primary">{constants.addToCart}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default CustomCard;
