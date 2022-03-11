import { FormControlLabel, Checkbox } from '@material-ui/core';

const CheckBox = ({ checked, onChange, name }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          name={name}
          color="primary"
        />
      }
      label={name}
    />
  );
};
export default CheckBox;
