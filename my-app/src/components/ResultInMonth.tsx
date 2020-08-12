import React from 'react';
import { Box, TextField, Typography, Grid } from '@material-ui/core';

export const ResultInMonth = () => {
  let withoutTax = 40000;
  let tax = 5400;
  let inMonth = 45400;
    
  return (
    <div className="resultInMonth">
      <Box borderColor="red">
        <div>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>{withoutTax}</Typography>  
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>сотрудник будет получать на руки</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>{tax}</Typography>  
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>НДФЛ 13% от оклада</Typography>     
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>{inMonth}</Typography> 
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>за сотрудника в месяц</Typography>  
            </Grid>
          </Grid>        
        </div>  
      </Box>
    </div>
  );
}

export default ResultInMonth;
