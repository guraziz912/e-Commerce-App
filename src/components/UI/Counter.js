import constants from '../../utils/constants';

import classes from './Counter.module.css';

const Counter = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className={classes.counter}>
      <button onClick={onDecrease}>
        <i class={constants.trashIcon}></i>
      </button>
      <label>{quantity}</label>
      <button onClick={onIncrease}>
        <i class={constants.plusIcon}></i>
      </button>
    </div>
  );
};
export default Counter;
