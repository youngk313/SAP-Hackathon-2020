import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {auth} from '../firebase';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import WalkingIcon from '../img/walking.png';
import BackupIcon from '@material-ui/icons/Backup';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Charts from './Charts';
import UserStatusCard from './UserStatusCard';
import Fileuploader from "./Fileuploader";
import ProfilePage from './ProfilePage';
import Map from './Map';

// Authentication
import SignUp from './SignUp';
import SignIn from './SignIn';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	},
	appBar: {
	  width: `calc(100% - ${drawerWidth}px)`,
	  marginLeft: drawerWidth,
	},
	drawer: {
	  width: drawerWidth,
	  flexShrink: 0,
	  backgroundColor: "#1976d2",
	},
	drawerPaper: {
	  width: drawerWidth,
	  backgroundColor: "#1976d2",
	  color:"white"
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	content: {
	  flexGrow: 1,
	  backgroundColor: theme.palette.background.default,
	  padding: theme.spacing(3),
	},
  }));

export const App = () => {
	const classes = useStyles();
	const {initializing, user} = useAuth();

	return (
		<userContext.Provider value={{ user }}>
			<nav className={classes.drawer}>
		<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
			paper: classes.drawerPaper,
			}}
			anchor="left"
		>
			<div className={classes.toolbar} />
			<Container maxWidth = "sm">
                   <img src={WalkingIcon} style={{width:"50px", display:"inline"}}/><p style={{ fontSize:"16pt", display:"inline-block", transform: "translateY(-14px)"}}>Retrace</p>

            </Container>
			<Divider />
			<List>
				<ListItem button key={"Dashboard"}>
				<ListItemIcon>
					<DashboardIcon style={{color:"white"}}/>
				</ListItemIcon>
				<ListItemText primary="Dashboard" />
				</ListItem>
				<ListItem button key={"Upload Data"}>
				<ListItemIcon>
					<BackupIcon style={{color:"white"}}/>
				</ListItemIcon>
				<ListItemText primary="Upload Data" />
				</ListItem>
				<ListItem button key={"Calendar"}>
				<ListItemIcon>
					<CalendarTodayIcon style={{color:"white"}}/>
				</ListItemIcon>
				<ListItemText primary="Calendar" />
				</ListItem>
				<ListItem button key={"News"}>
				<ListItemIcon>
					<ChatBubbleIcon style={{color:"white"}}/>
				</ListItemIcon>
				<ListItemText primary="News" />
				</ListItem>
				<Router>
					<Route exact path='/signIn' render= {() => <SignIn/> }/>
					<Route exact path='/signUp' render= {() => <SignUp/> }/>
					<Route exact path='/' render= {() => <ProfilePage/> }/>
			    </Router>
			</List>
		</Drawer>
		</nav>
		<main>
          <Grid container maxWidth="md"spacing ={1}>
			<Grid item xs={1}>

			</Grid>
			<Grid item xs ={4}> <UserStatusCard style ={{margin:'auto'}}healthStatus={"quarantine"}> </UserStatusCard> </Grid>
            <Grid item xs ={6} style = {{paddingTop:"40px"}}> <Map > </Map> </Grid>
			<Grid item xs ={2}></Grid>
			<Grid item xs = {2} style = {{paddingTop:"50px"}}> <Fileuploader/></Grid>
			<Grid item xs ={2}></Grid>
			<Grid item xs={4} style ={{paddingLeft:"40px"}} > <Charts/></Grid>



		</Grid>
		</main>
		</userContext.Provider>
	);
};

const userContext = React.createContext({
	user: null,
});

export const useSession = () => {
	const { user } = React.useContext(userContext)
	return user
};

export const useAuth = () => {
	const [state, setState] = React.useState(() => { const user = auth.currentUser; return { initializing: !user, user, } })
	function onChange(user) {
	setState({ initializing: false, user })
	}

	React.useEffect(() => {
	// listen for auth state changes
	const unsubscribe = auth.onAuthStateChanged(onChange);
	// unsubscribe to the listener when unmounting
	return () => unsubscribe()
	}, [])

	return state;
};

