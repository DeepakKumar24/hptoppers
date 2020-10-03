import React from "react";
import "./styles/index.scss";
import Header from "./components/common/Header";
import HeroImage from "./components/common/HeroImage";
import AboutMain from "./components/common/AboutMain";
import Footer from "./components/common/Footer";

function App() {
	return (
		<div>
			<Header />
			<HeroImage />
      <AboutMain />
      <Footer />
		</div>
	);
}

export default App;
