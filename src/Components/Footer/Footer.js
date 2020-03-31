import React from 'react';
import classes from './Footer.module.css';

function Footer() {
	return (
		<footer className={classes.footer}>
			<div className={classes.ContactFooter}>
				<h2 className={classes.Header}>Contact</h2>
				<p className={classes.sections}>
					<span className={classes.title}> Phone Number :</span> +1123456789{' '}
				</p>
				<p className={classes.sections}>
					<span className={classes.title}> Address :</span> LCO Backetball Ground, Frictional Road{' '}
				</p>
			</div>
			<div className={classes.Connect}>
				<h2 className={classes.Header}>Connect</h2>
				<p className={classes.sections}>
					<span>
						<i className="icons fab fa-facebook-f" />
					</span>{' '}
				</p>
				<p className={classes.sections}>
					<span>
						<i className="icons fab fa-twitter" />
					</span>{' '}
				</p>
				<p className={classes.sections}>
					<span>
						<i className="icons fab fa-linkedin-in" />
					</span>{' '}
				</p>
				<p className={classes.sections}>
					<span>
						<i className="icons fab fa-instagram" />
					</span>{' '}
				</p>
			</div>
			<div className={classes.Copyright}>
				{' '}
				<span className={classes.copyrighttag}>&copy;</span> 2020 LOC BasketBall Tournament
			</div>
		</footer>
	);
}

export default Footer;
