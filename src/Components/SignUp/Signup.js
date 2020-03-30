import React from 'react';
import classes from './Signup.module.css';

function Signup(props) {
	return (
		<div className={classes.cont}>
			<h2 className={classes.Head}>Signup </h2>
			<div className={classes.div}>
				<span className={classes.label}> Name </span>
				<input placeholder="Write your name here.." />
			</div>
			<div className={classes.div}>
				<span className={classes.label}> Email </span>
				<input placeholder="Write your email here.." />
			</div>
			<div className={classes.div}>
				<span className={classes.label}> Password </span>
				<input placeholder="Type your password here..." type="password" />
			</div>

			<button className={classes.button}>Login</button>
			<button className={classes.buttonCancel} onClick={props.cancel}>
				Cancel
			</button>
		</div>
	);
}

export default Signup;
