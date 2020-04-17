// Authentication
import SignUp from './SignUp';
import SignIn from './SignIn';
import Fileuploader from "./Fileuploader";
import ProfilePage from './ProfilePage';
import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {auth} from '../firebase';
import Grid from '@material-ui/core/Grid';
import Charts from './Charts';
import UserStatusCard from './UserStatusCard';
import Container from '@material-ui/core/Container';
import SideBar from './SideBar';
export default function App() {


const App = () => {
	const {initializing, user} = useAuth();
  
	return (
		<userContext.Provider value={{ user }}>
    <div className="App">
      <div class="container">
        <SideBar></SideBar> 
          <div class = "grid-container">
            <div class="left-box"> sdfsdfsdfdfsdfsdfsdfs sdfsdfdsfdfsdfsdfsdfs sdfsdfdsfsdfdfsdfsdfsdfs sdfdfsdfsdfsdfs sdfsdfdsfsdfdfsdfsdfsdfs sdfsdfdsfsdfsdfdsfsdfdfsdfsdfsdfs sdfsdfdsfsdfsdfdfsdfsdfsdfs sdfsdfdsfsdfdfsdfsdfsdfs sdfsdfdsfsdfsdfsdfsdfs sdfsdfdsfsdf</div>
            <div class="right-box"> sdfsdfsdfsdfdsfsdfdsfsdfsdf </div>
            <div class = "bottom-left-box"> <UserStatusCard class = "bottom-left-box" healthStatus={"quarantine"}> </UserStatusCard> </div>
            <div class="bottom-right-box"></div>

          </div>

      </div>


        {/* <Grid container spacing ={2}>
          <Grid item xs = {12}>
            <Charts/>
          </Grid>
        </Grid> */}

      {/* <UserStatusCard healthStatus='healthy'></UserStatusCard>  */}
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
