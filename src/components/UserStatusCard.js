import React, {Fragment} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import SocialDistanceImg from '../img/social_distance.png';
import SickImg from '../img/sick.png';
import StayHomeImg from '../img/stayhome.png';
import Grid from '@material-ui/core/Grid';
import QuarantineInformation from '../responses/tips.json';
const imgStyle = {
  width: '80%'
};
const buttonStyle = {
  borderRadius: "25px",
  backgroundColor: "#5857F7",
  color: "white",
  textTransform: "none",
};
class UserStatusCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      healthStatus: props.healthStatus
    };
  }

  returnImageToLoad(){
    if(this.state.healthStatus == "healthy"){
      return SocialDistanceImg;
    }else if(this.state.healthStatus == "sick"){
      return SickImg;
    }else{
      return StayHomeImg;
    }
  }

  returnResponseToLoad(){
    let data = QuarantineInformation
    if(this.state.healthStatus == "healthy"){
      return data.responses[0].content;
    }else if(this.state.healthStatus == "sick"){
      return data.responses[1].content;
    }else{
      return data.responses[2].content;
    }
  }

  createButtons(response){
    if(response[0].button_text2 !== ""){
      return(
        <Fragment>
      <Button variant = "contained" outlined="true" style = {buttonStyle} p={10}> {response[0].button_text} </Button>
      <Button variant = "contained" outlined="true" style = {buttonStyle} p={10}> {response[0].button_text2} </Button>
        </Fragment>);
    }else{
      return (<Button variant = "contained" outlined="true" style = {buttonStyle} p={10}> {response[0].button_text} </Button>);
    }
  }
  render(){
    let response = this.returnResponseToLoad();
    return(
        <Card style={{width:"60%", margin:"auto", textAlign:'center'}}>
          <CardContent>
          <Typography> {this.state.healthStatus} </Typography> <br/>
          <Typography align = 'left'> What should I do? </Typography> <br/>
          <Typography align = 'left'> {response[0].tip} </Typography> <br/>
          <div>
           <img src = {this.returnImageToLoad(this.state.healthStatus)} alt = "social_distance" style={imgStyle}/>
          </div>
          <Link href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses" target="_blank" onClick='#' color="inherit" style={{float: "left"}}> More information </Link> <br/> <br/> <br/> <br/>
          {this.createButtons(response)}
          <Button></Button>
          </CardContent>
        </Card>
    );
  }


}


export default UserStatusCard;