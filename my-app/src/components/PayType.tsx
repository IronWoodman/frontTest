import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

export const PayType = () => {
  const [value, setValue] = React.useState("payForMonth");

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div className="PayType">
      <FormControl component="fieldset">
        <FormLabel component="legend">Сумма</FormLabel>
        <RadioGroup aria-label="Сумма" name="sum" value={value} onChange={handleChange}>
          <FormControlLabel value="payForMonth" control={<Radio />} label="Оклад за месяц" />
          <FormControlLabel value="mrot" control={<Radio />} label="МРОТ" />
          <FormControlLabel value="payForDay" control={<Radio />} label="Оплата за день" />
          <FormControlLabel value="payForHour" control={<Radio />} label="Оплата за час" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default PayType;
