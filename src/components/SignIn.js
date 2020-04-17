import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPasswordHandler, signInWithGoogleHandler } from '../helpers/authHelpers'

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const history = useHistory();

	const onChangeHandler = (event) => {
		const {name, value } = event.currentTarget;

		if (name === 'userEmail') {
			setEmail(value);
		} else if (name === 'userPassword') {
			setPassword(value);
		}
	};

	return (
		<div>
			<h1>Sign In</h1>
			<div>
				{error !== null && <div>{error}</div>}
				<form className="">
					<label htmlFor="userEmail" className="block">Email:</label>
					<input
						type="email"
					name="userEmail"
					value = {email}
					placeholder="E.g: yogi123@gmail.com"
					id="userEmail"
					onChange = {(event) => onChangeHandler(event)}
					/>
					<label htmlFor="userPassword" className="block">
						Password:
					</label>
					<input
						type="password"
						name="userPassword"
						value = {password}
						placeholder="Your Password"
						id="userPassword"
						onChange = {(event) => onChangeHandler(event)}
					/>
				<button onClick = {(event) => {signInWithEmailAndPasswordHandler(event, auth, email, password, history)}}>
					Sign in
				</button>
				</form>
				<p>or</p>
				<button
				onClick={(event) => signInWithGoogleHandler(event, auth, history)}
				>
				Sign in with Google
				</button>
				<p className="text-center my-3">
				Don't have an account?{" "}
				<Link to="signUp">
					Sign up here
				</Link>{" "}
				<br />{" "}
				<Link to = "passwordReset">
					Forgot Password?
				</Link>
				</p>
			</div>
		</div>
		);
}

export default SignIn;