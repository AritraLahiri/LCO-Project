import React, { Component } from 'react';
import Layout from '../Components/Layout/layout';
import Home from '../Components/Home/home';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Tournament from '../Components/Tournament/Tournament';
import Faq from '../Components/FAQ/Faq';
import Team from '../Components/Team/Team';
import Member1 from '../assets/img1.png';
import Member2 from '../assets/img2.png';
import Member3 from '../assets/img3.png';
import classes from './App.module.css';
import { Route } from 'react-router-dom';

class App extends Component {
	state = {
		teamMembers: [
			{
				Name: 'Aritra Lahiri',
				Photo: Member1
			},
			{
				Name: 'Amit Roy',
				Photo: Member2
			},
			{
				Name: 'Julian Zukerberg',
				Photo: Member3
			},
			{
				Name: 'Nepolion Hill',
				Photo: Member1
			},
			{
				Name: 'Andrew Carnegie',
				Photo: Member3
			}
		],
		showBackDrop: false
	};

	onClickedBackdrop = () => {
		this.setState({ showBackDrop: !this.state.showBackDrop });
	};

	onDrawerToggle = () => {
		this.setState((prevState) => {
			return { showBackDrop: !this.state.showBackDrop };
		});
	};
	render() {
		return (
			<main className={classes.Main}>
				<Layout clicked={this.onClickedBackdrop} show={this.state.showBackDrop} toggle={this.onDrawerToggle}>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route path="/tournaments" component={Tournament} />
					<Route path="/faq" component={Faq} />
					<Route path="/team" component={() => <Team member={this.state.teamMembers} />} />
				</Layout>
			</main>
		);
	}
}

export default App;
