import React from 'react';
import { Typography, Grid, Container } from '@material-ui/core';

export const ResultInMonth = () => {
  let withoutTax = 40000;
  let tax = 5400;
  let inMonth = 45400;
    
  return (
    <Typography component="div" style={{ backgroundColor: '#fbf4db'}}>
      <div>      
        <Typography component="span">{withoutTax}</Typography>
        <Typography component="span"> сотрудник будет получать на руки</Typography>
      </div>
      <div>      
        <Typography component="span">{tax}</Typography>
        <Typography component="span"> НДФЛ 13% от оклада</Typography>
      </div>
      <div>      
        <Typography component="span">{inMonth}</Typography>
        <Typography component="span"> за сотрудника в месяц</Typography>
      </div>
    </Typography>      
  );
}

export default ResultInMonth;
