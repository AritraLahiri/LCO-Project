import React from 'react';
import Aux from '../../HOC/Auxilary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/Sidedrawer/SideDrawer';
import Backdrop from '../UI/Backdrop/Backdrop';
const layout = (props) => (
	<Aux>
		<Backdrop show={props.show} clicked={props.clicked} />
		<SideDrawer show={props.show} />
		<Toolbar show={props.show} clicked={props.toggle} />
		<main>{props.children}</main>
	</Aux>
);

export default layout;
