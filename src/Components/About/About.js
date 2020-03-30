import React from 'react';
import Photo1 from '../../assets/img1.png';
import Photo2 from '../../assets/img2.png';
import Photo3 from '../../assets/img3.png';
import Tournament from '../Tournament/Tournament';
import './about.css';

const about = () => (
	<section className="team-section">
		<h1 className="head"> about us </h1>

		<span className="border"> </span>
		<div className="ps">
			<a href="#p1">
				<img src={Photo1} alt="aboutphoto1" />
			</a>
			<a href="#p2">
				<img src={Photo2} alt="aboutphoto2" />
			</a>
			<a href="#p3">
				<img src={Photo3} alt="aboutphoto3" />
			</a>
		</div>
		<div className="section" id="p1">
			<span className="name">Janie Harizon </span>
			<span className="border"> </span>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
				into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
				release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
				software like Aldus PageMaker including versions of Lorem Ipsum.
			</p>
		</div>
		<div className="section" id="p2">
			<span className="name">Andrew Beniger</span>
			<span className="border"> </span>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
				into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
				release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
				software like Aldus PageMaker including versions of Lorem Ipsum.
			</p>
		</div>
		<div className="section" id="p3">
			<span className="name">Elliot Andersonh </span>
			<span className="border"> </span>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
				industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
				into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
				release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
				software like Aldus PageMaker including versions of Lorem Ipsum.
			</p>
		</div>
		<Tournament />
	</section>
);
export default about;
