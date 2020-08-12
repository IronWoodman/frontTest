import React from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Container, TextField } from '@material-ui/core';

import './App.css';
import PayType from './components/PayType';
import { NdflSwitch } from './components/NdflSwitch';
import Sum from './components/Sum';
import ResultInMonth from './components/ResultInMonth';

function App() {
  return (
    <Container>
      <PayType></PayType>      
      <NdflSwitch></NdflSwitch>
      <Sum></Sum>
      <ResultInMonth></ResultInMonth>
    </Container>
  );
}

export default App;
