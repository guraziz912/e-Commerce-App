import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from '@material-ui/core';

const CustomRadioComponent = ({ name, list, value, onChange }) => {
  const datalist = list.map((item) => (
    <FormControlLabel value={item} control={<Radio />} label={item} />
  ));
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{name}</FormLabel>
      <RadioGroup
        aria-label={name}
        name={name}
        value={value}
        onChange={onChange}
        row
      >
        {datalist}
      </RadioGroup>
    </FormControl>
  );
};
export default CustomRadioComponent;
