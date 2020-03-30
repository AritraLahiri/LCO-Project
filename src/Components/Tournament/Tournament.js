import React from 'react';
import './tourna.css';
import Video from '../Video/Video';

const tournament = () => (
	<section className="tourna">
		<h1 className="header"> tournaments </h1>
		<span className="border"> </span>
		<h3 className="Text"> big tournament coming soon </h3>
		<div className="Video">
			<Video />
		</div>
	</section>
);
export default tournament;
