import React, { Component } from 'react';
import classes from './Faq.module.css';

export class Faq extends Component {
	state = {
		Faqs: [
			{
				questions: 'How many programes do make a awesome programmer ?',
				answers: 'Well its not definite',
				open: true
			},
			{
				questions: 'How is this amazing tournamnet going to commence?',
				answers: 'Its coming too soon ',
				open: false
			},
			{
				questions: 'How many questions can a FAQ do have ? ',
				answers: 'This many',
				open: false
			}
		]
	};

	render() {
		return (
			<section className={classes.body}>
				<h1 className={classes.section}> FAQ </h1>
				{this.state.Faqs.map((questions, index) => {
					return (
						<div key={index} className={classes.faq}>
							<div className={classes.faqQuestion}> {questions.questions}</div>
							<div className={classes.faqAnswer}> {questions.answers}</div>
						</div>
					);
				})}
			</section>
		);
	}
}
export default Faq;
