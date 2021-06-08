import { Fragment } from 'react';

const CheckBox = (props) => {
  return (
    <Fragment>
      <input type="checkbox" {...props}></input>
      <label>{props.label}</label>
    </Fragment>
  );
};
export default CheckBox;
