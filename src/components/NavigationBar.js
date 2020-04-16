import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


class NavigationBar extends React.Component{
  //Grab components from parent
  constructor(props){
    super(props);
  }

  render(){
    return (<div> 
      <AppBar position= "sticky"> 
        <Toolbar> 
          Wasup Young
        </Toolbar>
      </AppBar>
    </div>)

  }
}

export default NavigationBar;