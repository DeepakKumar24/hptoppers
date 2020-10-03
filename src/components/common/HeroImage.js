import React from "react";

const HeroImage = () => {
	return (
		<section id="hero" className="d-flex justify-content-center align-items-center">
			<div
				className="container position-relative"
			>
				<h1>
					Learning Today,
					<br />
					Leading Tomorrow
				</h1>
				<h2>
					We are team of talanted developer making websites responsive.
				</h2>
				<a href="courses.html" className="btn-get-started">
					Get Started
				</a>
			</div>
		</section>
	);
};

export default HeroImage;
