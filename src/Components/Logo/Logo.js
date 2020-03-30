import React from 'react';
import Logo from '../../assets/sports-logo-transparent.png';
import classes from './Logo.module.css';
const logo = (props) => (
	<div className={classes.container} style={{ textAlign: props.center }}>
		<img src={Logo} alt="Logo" className={classes.Logo} />
	</div>
);

export default logo;
