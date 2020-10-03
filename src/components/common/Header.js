import React from "react";

const Header = () => {
	return (
		<header id="header" className="fixed-top">
			<div className="container d-flex align-items-center">
				<h1 className="logo mr-auto">
					<a href="index.html">HP Toppers</a>
				</h1>
				<a href="index.html" className="logo mr-auto">
					<img src="assets/img/logo.png" alt="" className="img-fluid" />
				</a>

				<nav className="nav-menu d-none d-lg-block">
					<ul>
						<li className="active">
							<a href="">Home</a>
						</li>
						<li className="drop-down">
							<a href="">Study</a>
							<ul>
								<li>
									<a href="#">History</a>
								</li>
								<li>
									<a href="#">Politics</a>
								</li>
								<li>
									<a href="#">Current Affairs</a>
								</li>
								<li>
									<a href="#">Science</a>
								</li>
							</ul>
						</li>
						<li className="drop-down">
							<a href="">Recruitment</a>
							<ul>
								<li>
									<a href="#">Post</a>
								</li>
								<li>
									<a href="#">Syllabus</a>
								</li>
								<li className="drop-down">
									<a href="#">Recommendation</a>
									<ul>
										<li>
											<a href="#">Books</a>
										</li>
										<li>
											<a href="#">Videos</a>
										</li>
										<li>
											<a href="#">Documents</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a href="">Test Series</a>
						</li>
						<li>
							<a href="">About us</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
