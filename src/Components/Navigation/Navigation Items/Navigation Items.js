import React from 'react';
import NavItems from './Navigation Item/NavigationItem';
import classes from './NavigationItems.module.css';

const navItems = (props) => {
	return (
		<ol className={classes.NavigationItems}>
			<NavItems link="/"> Home </NavItems>
			<NavItems link="/faq"> faq </NavItems>
			<NavItems link="/about"> about </NavItems>
			<NavItems link="/contact"> Contact </NavItems>
			<NavItems link="/team"> Teams </NavItems>
		</ol>
	);
};

export default navItems;
