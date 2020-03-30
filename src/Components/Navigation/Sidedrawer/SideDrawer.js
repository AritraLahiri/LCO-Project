import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../Navigation Items/Navigation Items';
import classes from './SideDrawer.module.css';
const SideDrawer = (props) => {
	let assignedClasses = [ classes.SideDrawer, classes.Close ];
	if (props.show) {
		assignedClasses = [ classes.SideDrawer, classes.Open ];
	}
	return (
		<div className={assignedClasses.join(' ')}>
			<Logo center={'center'} />
			<nav>
				<NavItems />
			</nav>
		</div>
	);
};

export default SideDrawer;
