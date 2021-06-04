import classes from './Counter.module.css';
const Counter = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div className={classes.counter}>
      <button onClick={onDecrease}>
        <i class="fas fa-trash"></i>
      </button>
      <label>{quantity}</label>
      <button onClick={onIncrease}>
        <i class="fas fa-plus"></i>
      </button>
    </div>
  );
};
export default Counter;
