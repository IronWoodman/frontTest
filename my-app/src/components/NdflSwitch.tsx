import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Switch, Typography, Grid, withStyles } from '@material-ui/core';
import PayType from './PayType';

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export const NdflSwitch = () => {
  const [state, setState] = React.useState(true);

  const handleChange = (event: any) => {
    setState(event.target.checked);
  };

  return (
    <div className="NdflSwitch">
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Указать с НДФЛ</Grid>
          <Grid item>
            <AntSwitch checked={state} onChange={handleChange} name="checkedC" />
          </Grid>
          <Grid item>Без НДФЛ</Grid>
        </Grid>
      </Typography>
    </div>
  );
}

export default PayType;
