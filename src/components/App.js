import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {auth} from '../firebase';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import Charts from './Charts';
import UserStatusCard from './UserStatusCard';
import Fileuploader from "./Fileuploader";
import ProfilePage from './ProfilePage';
import SideBar from './SideBar';
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


          <Grid container>
			<Grid item xs={2}>
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{
					paper: classes.drawerPaper,
					}}
					anchor="left"
				>
					<div className={classes.toolbar} />
					<Divider />
					<List>
						<ListItem button key={"Dashboard"}>
						<ListItemIcon>
				   		</ListItemIcon>
						<ListItemText primary="Dashboard" />
						</ListItem>
						<ListItem button key={"Upload Data"}>
						<ListItemIcon>
				   		</ListItemIcon>
						<ListItemText primary="Upload Data" />
						</ListItem>
						<ListItem button key={"Calendar"}>
						<ListItemIcon>
				   		</ListItemIcon>
						<ListItemText primary="Calendar" />
						</ListItem>
						<ListItem button key={"News"}>
						<ListItemIcon>
				   		</ListItemIcon>
						<ListItemText primary="News" />
						</ListItem>

					</List>
				</Drawer>
			</Grid>
            <Grid item xs={5} > <Charts/></Grid>
            <Grid item xs ={7} > <Map> </Map> </Grid>
            <Grid item xs ={5}> <UserStatusCard style ={{margin:'auto'}}healthStatus={"quarantine"}> </UserStatusCard> </Grid>
            <Grid item xs ={7}> sdfsdfsdfsdfdsfsdfdsfsdfsdf </Grid>
		</Grid>
		<div className="App">
			<Fileuploader/>
      <div class="container">

      </div>
    </div>


			<Router>
				<Route exact path='/signIn' render= {() => <SignIn/> }/>
				<Route exact path='/signUp' render= {() => <SignUp/> }/>
				<Route exact path='/' render= {() => <ProfilePage/> }/>
			</Router>
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

