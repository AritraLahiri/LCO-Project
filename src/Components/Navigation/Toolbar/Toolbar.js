import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../Navigation Items/Navigation Items';
import DrawerToggle from '../Sidedrawer/Drawer Toggle/DrawerToggle';

function Toolbar(props) {
	return (
		<header className={classes.Toolbar}>
			<DrawerToggle clicked={props.clicked}/>

			<Logo />
			<nav className={classes.DesktopOnly}>
				<NavItems />
			</nav>
		</header>
	);
}

export default Toolbar;
