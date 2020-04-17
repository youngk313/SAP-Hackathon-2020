import React from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import Charts from './Charts';
import UserStatusCard from './UserStatusCard';
import Container from '@material-ui/core/Container';
import SideBar from './SideBar';
export default function App() {
  return (
    <div className="App">

      <div class="container">
        <SideBar></SideBar> 
          <div class = "grid-container">
            <div class="left-box"> sdfsdfsdfdfsdfsdfsdfs sdfsdfdsfdfsdfsdfsdfs sdfsdfdsfsdfdfsdfsdfsdfs sdfdfsdfsdfsdfs sdfsdfdsfsdfdfsdfsdfsdfs sdfsdfdsfsdfsdfdsfsdfdfsdfsdfsdfs sdfsdfdsfsdfsdfdfsdfsdfsdfs sdfsdfdsfsdfdfsdfsdfsdfs sdfsdfdsfsdfsdfsdfsdfs sdfsdfdsfsdf</div>
            <div class="right-box"> sdfsdfsdfsdfdsfsdfdsfsdfsdf </div>
            <div class="bottom-left-box"> <UserStatusCard healthStatus='healthy'> </UserStatusCard> </div>
            <div class="bottom-right-box"></div>

          </div>

      </div>


        {/* <Grid container spacing ={2}>
          <Grid item xs = {12}>

          </Grid>
          <Grid item xs = {12}>

            <Charts/>
          </Grid>
        </Grid> */}

      {/* <UserStatusCard healthStatus='healthy'></UserStatusCard>  */}
    </div>
  );
}



