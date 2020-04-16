import React from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import Charts from './Charts';

export default function App() {
  return (
    <div className="App">
        <Grid container spacing ={2}>
          <Grid item xs = {12}>

          </Grid>
          <Grid item xs = {12}>

            <Charts/>

          </Grid>
      </Grid>
    </div>
  );
}



