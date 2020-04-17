import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {auth} from '../firebase';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Charts from './Charts';
import UserStatusCard from './UserStatusCard';
import Fileuploader from "./Fileuploader";
import ProfilePage from './ProfilePage';
import SideBar from './SideBar';

// Authentication
import SignUp from './SignUp';
import SignIn from './SignIn';

export const App = () => {
	const {initializing, user} = useAuth();

	return (
		<userContext.Provider value={{ user }}>
    <div className="App">
      <div class="container">
        <SideBar></SideBar>
          <Grid container spacing ={2}>
            <Grid item xs={5} > <Charts/></Grid>
            <Grid item xs ={7} > sdfsdfsdfsdfdsfsdfdsfsdfsdf </Grid>
            <Grid item xs ={5}> <UserStatusCard style ={{margin:'auto'}}healthStatus={"quarantine"}> </UserStatusCard> </Grid>
            <Grid item xs ={7}> sdfsdfsdfsdfdsfsdfdsfsdfsdf </Grid>
		</Grid>


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

