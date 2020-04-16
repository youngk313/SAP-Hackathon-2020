import React from 'react';
import '../App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import Charts from './Charts';
import ProfilePage from './ProfilePage';

// Authentication
import SignUp from './SignUp';
import SignIn from './SignIn';
import UserProvider from '../providers/UserProvider';


const App = () => {
	return (
		<UserProvider>
		<div className="App">
				<Grid container spacing ={2}>
					<Grid item xs = {12}>

					</Grid>
					<Grid item xs = {12}>

						<Charts/>

					</Grid>
			</Grid>
			<Router>
				<SignUp exact path='/signUp'/>
				<SignIn path='/'/>
			</Router>
		</div>
		</UserProvider>
	);
}

export default App;



