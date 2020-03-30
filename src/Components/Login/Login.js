import React from 'react';
import classes from './Login.module.css';

function Login(props) {
	return (
		<div className={classes.cont}>
			<h2 className={classes.Head}>login </h2>
			<p>
				<span className={classes.label}> Email </span>
				<input placeholder="Write your email here.." />
			</p>
			<p>
				<span className={classes.label}> Password </span>
				<input placeholder="Type your password here..." type="password" />
			</p>

			<button className={classes.button}>Login</button>
			<button className={classes.buttonCancel} onClick={props.cancel}>
				Cancel
			</button>
		</div>
	);
}

export default Login;
