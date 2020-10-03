import React from "react";

const AboutMain = () => {
	return (
		<main id="main">
			{/* <!-- ======= About Section ======= --> */}
			<section id="about" className="about">
				<div className="container">
					<div className="section-title">
						<h2>About</h2>
						<p>About Us</p>
					</div>

					<div className="row">
						<div className="col-lg-6 order-1 order-lg-2">
							<img src="assets/img/about.jpg" className="img-fluid" alt="" />
						</div>
						<div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
							<h3>
								Voluptatem dignissimos provident quasi corporis voluptates sit
								assumenda.
							</h3>
							<p className="font-italic">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<ul>
								<li>
									<i className="icofont-check-circled"></i> Ullamco laboris nisi
									ut aliquip ex ea commodo consequat.
								</li>
								<li>
									<i className="icofont-check-circled"></i> Duis aute irure
									dolor in reprehenderit in voluptate velit.
								</li>
								<li>
									<i className="icofont-check-circled"></i> Ullamco laboris nisi
									ut aliquip ex ea commodo consequat. Duis aute irure dolor in
									reprehenderit in voluptate trideta storacalaperda mastiro
									dolore eu fugiat nulla pariatur.
								</li>
							</ul>
							<p>
								Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
								aute irure dolor in reprehenderit in voluptate
							</p>
							<a href="about.html" className="learn-more-btn">
								Learn More
							</a>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End About Section --> */}

			{/* <!-- ======= Why Us Section ======= --> */}
			<section id="why-us" className="why-us">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 d-flex align-items-stretch">
							<div className="content">
								<h3>Why Choose Mentor?</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Duis aute irure dolor in reprehenderit Asperiores dolores sed
									et. Tenetur quia eos. Autem tempore quibusdam vel
									necessitatibus optio ad corporis.
								</p>
								<div className="text-center">
									<a href="about.html" className="more-btn">
										Learn More <i className="bx bx-chevron-right"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-8 d-flex align-items-stretch">
							<div className="icon-boxes d-flex flex-column justify-content-center">
								<div className="row">
									<div className="col-xl-4 d-flex align-items-stretch">
										<div className="icon-box mt-4 mt-xl-0">
											<i className="bx bx-receipt"></i>
											<h4>Corporis voluptates sit</h4>
											<p>
												Consequuntur sunt aut quasi enim aliquam quae harum
												pariatur laboris nisi ut aliquip
											</p>
										</div>
									</div>
									<div className="col-xl-4 d-flex align-items-stretch">
										<div className="icon-box mt-4 mt-xl-0">
											<i className="bx bx-cube-alt"></i>
											<h4>Ullamco laboris ladore pan</h4>
											<p>
												Excepteur sint occaecat cupidatat non proident, sunt in
												culpa qui officia deserunt
											</p>
										</div>
									</div>
									<div className="col-xl-4 d-flex align-items-stretch">
										<div className="icon-box mt-4 mt-xl-0">
											<i className="bx bx-images"></i>
											<h4>Labore consequatur</h4>
											<p>
												Aut suscipit aut cum nemo deleniti aut omnis. Doloribus
												ut maiores omnis facere
											</p>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- End .content--> */}
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Why Us Section --> */}

			{/* <!-- ======= Popular Courses Section ======= --> */}
			<section id="popular-courses" className="courses">
				<div className="container">
					<div className="section-title">
						<h2>Courses</h2>
						<p>Popular Courses</p>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
							<div className="course-item">
								<img
									src="assets/img/course-1.jpg"
									className="img-fluid"
									alt="..."
								/>
								<div className="course-content">
									<div className="d-flex justify-content-between align-items-center mb-3">
										<h4>Web Development</h4>
										<p className="price">$169</p>
									</div>

									<h3>
										<a href="course-details.html">Website Design</a>
									</h3>
									<p>
										Et architecto provident deleniti facere repellat nobis iste.
										Id facere quia quae dolores dolorem tempore.
									</p>
									<div className="trainer d-flex justify-content-between align-items-center">
										<div className="trainer-profile d-flex align-items-center">
											<img
												src="assets/img/trainers/trainer-1.jpg"
												className="img-fluid"
												alt=""
											/>
											<span>Antonio</span>
										</div>
										<div className="trainer-rank d-flex align-items-center">
											<i className="bx bx-user"></i>&nbsp;50 &nbsp;&nbsp;
											<i className="bx bx-heart"></i>&nbsp;65
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- End Course Item--> */}

						<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
							<div className="course-item">
								<img
									src="assets/img/course-2.jpg"
									className="img-fluid"
									alt="..."
								/>
								<div className="course-content">
									<div className="d-flex justify-content-between align-items-center mb-3">
										<h4>Marketing</h4>
										<p className="price">$250</p>
									</div>

									<h3>
										<a href="course-details.html">Search Engine Optimization</a>
									</h3>
									<p>
										Et architecto provident deleniti facere repellat nobis iste.
										Id facere quia quae dolores dolorem tempore.
									</p>
									<div className="trainer d-flex justify-content-between align-items-center">
										<div className="trainer-profile d-flex align-items-center">
											<img
												src="assets/img/trainers/trainer-2.jpg"
												className="img-fluid"
												alt=""
											/>
											<span>Lana</span>
										</div>
										<div className="trainer-rank d-flex align-items-center">
											<i className="bx bx-user"></i>&nbsp;35 &nbsp;&nbsp;
											<i className="bx bx-heart"></i>&nbsp;42
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- End Course Item--> */}

						<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
							<div className="course-item">
								<img
									src="assets/img/course-3.jpg"
									className="img-fluid"
									alt="..."
								/>
								<div className="course-content">
									<div className="d-flex justify-content-between align-items-center mb-3">
										<h4>Content</h4>
										<p className="price">$180</p>
									</div>

									<h3>
										<a href="course-details.html">Copywriting</a>
									</h3>
									<p>
										Et architecto provident deleniti facere repellat nobis iste.
										Id facere quia quae dolores dolorem tempore.
									</p>
									<div className="trainer d-flex justify-content-between align-items-center">
										<div className="trainer-profile d-flex align-items-center">
											<img
												src="assets/img/trainers/trainer-3.jpg"
												className="img-fluid"
												alt=""
											/>
											<span>Brandon</span>
										</div>
										<div className="trainer-rank d-flex align-items-center">
											<i className="bx bx-user"></i>&nbsp;20 &nbsp;&nbsp;
											<i className="bx bx-heart"></i>&nbsp;85
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- End Course Item--> */}
					</div>
				</div>
			</section>
			{/* <!-- End Popular Courses Section --> */}
		</main>
		// <!-- End #main -->
	);
};

export default AboutMain;
