import React from 'react';
import './Team.css';

function Team(props) {
	const teamMembers = props.member.map((player, index) => {
		return (
			<div className={'div' + (index + 1)} key={index}>
				<img src={player.Photo} alt="PlayerPhoto" className="TeamPhoto" />
				<div className="Name"> {player.Name}</div>
			</div>
		);
	});

	return (
		<section className="back">
			<h1 className="head"> Our team </h1>
			<main className="main">{teamMembers}</main>
		</section>
	);
}

export default Team;
