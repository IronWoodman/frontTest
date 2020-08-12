import React from 'react';
import { TextField } from '@material-ui/core';

export const Sum = () => {
  const [value, setValue] = React.useState(40000);

  return (
    <div className="Sum">
      <TextField id="sum" value={value}/>
    </div>
  );
}

export default Sum;
