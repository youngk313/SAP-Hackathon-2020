import React from 'react';
import '../App.css';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import {auth} from '../firebase';

import ProfilePage from './ProfilePage';

// Authentication
import SignUp from './SignUp';
import SignIn from './SignIn';

import Fileuploader from "./Fileuploader";

const App = () => {
	const {initializing, user} = useAuth();

	return (
		<userContext.Provider value={{ user }}>
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
}

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

export default App;
