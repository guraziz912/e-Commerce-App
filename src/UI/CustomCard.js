//Inbuilt depenencies imports
import { Card, Button } from 'react-bootstrap';

//Custom imports
import constants from '../utils/constants';

//Css import
import classes from './CustomCard.module.css';

const CustomCard = ({ name, price, id, img }) => {
  return (
    <Card className={classes.card} key={id} id={id}>
      <Card.Img className={classes.cardImage} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {constants.price}
          {price}
        </Card.Text>
        <Button variant="primary">{constants.addToCart}</Button>
      </Card.Body>
    </Card>
  );
};
export default CustomCard;
