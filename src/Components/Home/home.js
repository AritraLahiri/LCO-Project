import React, { Component } from 'react';
import classes from './home.module.css';
import Modal from '../UI/Modal/Modal';
import Login from '../Login/Login';
import Signup from '../SignUp/Signup';
class Home extends Component {
	state = {
		isClicked: false,
		isLogin: false,
		isSignup: false
	};

	onLoginButtonClickedHandler = () => {
		this.setState((prevState) => {
			return { isClicked: !this.state.isClicked, isLogin: true, isSignup: false };
		});
	};
	onSignUpButtonClickedHandler = () => {
		this.setState((prevState) => {
			return { isClicked: !this.state.isClicked, isSignup: true, isLogin: false };
		});
	};

	onCancelHandler = () => {
		this.setState((prevState) => {
			return { isClicked: false };
		});
	};

	render() {
		return (
			<section className={classes.Home}>
				{/* <Backdrop clicked={this.props.clicked} show={this.props.show} /> */}
				{this.state.isClicked ? (
					<Modal>
						{this.state.isLogin ? (
							<Login cancel={this.onCancelHandler} />
						) : (
							<Signup cancel={this.onCancelHandler} />
						)}
					</Modal>
				) : null}
				<h1>LCO BasketBall Tournament</h1>
				<h3>
					{' '}
					fight for your team <span className={classes.ChangeContent}> </span>{' '}
				</h3>
				<button className={classes.BtnOne} onClick={this.onLoginButtonClickedHandler}>
					{' '}
					Login{' '}
				</button>
				<button className={classes.BtnTwo} onClick={this.onSignUpButtonClickedHandler}>
					{' '}
					Signup{' '}
				</button>

				<p> go fight for a team </p>
			</section>
		);
	}
}

export default Home;
