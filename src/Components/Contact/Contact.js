import React from 'react';
import classes from './contact.module.css';
const contact = () => (
	<section className={classes.body}>
		<form className={classes.form}>
			<h2>CONTACT US</h2>
			<p type="Name:">
				<input placeholder="Write your name here.." />
			</p>
			<p type="Email:">
				<input placeholder="Let us know how to contact you back.." />
			</p>
			<p type="Message:">
				<input placeholder="What would you like to tell us.." />
			</p>
			<button>Send Message</button>
			<div className={classes.text}>
				<span className="fa fa-phone" /> +91999999999
				<span className="fa fa-envelope-o" /> Amazing Basketball Tournament
			</div>
			<p className={classes.address}>
				<span>Address : </span>
				LCO Basketball Ground, 55 - Fictional Homes, Fictional Road Near Fictional Lake. India
			</p>
		</form>
	</section>
);
export default contact;
