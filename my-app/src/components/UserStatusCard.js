import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import SocialDistanceImg from '../img/social_distance.png';

const imgStyle = {
  width: '360px'
};
const buttonStyle = {
  borderRadius: "25px",
  backgroundColor: "#5857F7",
  color: "white",
  textTransform: "none"
};
class UserStatusCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      healthStatus: 'healthy',
      tips: 'To be safe you should practice social distancing and stay away at least 2m from others.'
    };
  }

  render(){
    return(
      <Card style={{ width: '25rem'}}>
        <CardContent> 
        <Typography> {this.state.healthStatus} </Typography> <br/>
        <Typography align = 'left'> What should I do? </Typography> <br/>
        <Typography align = 'left'> {this.state.tips} </Typography> <br/>
        <img src = {SocialDistanceImg} alt = "social_distance" style={imgStyle}/>
        <Link href="#" onClick='#' color="inherit" style={{float: "left"}}> More information </Link>
        <Button variant = "contained" outlined="true" style = {buttonStyle} p={10}> I tested positive </Button>
        </CardContent>
      </Card>
    );
  }


}


export default UserStatusCard;