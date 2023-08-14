import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Nadvar from "./Navbar";
import Jumbotrom from "./jumbotron.jsx"; //importacion del jumbotrop
import Cards from "./cards";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	
	return (
		<div class="container-fluid">
			<Nadvar />
			<Jumbotrom />


			<div class="row">
				<div class="col">
					<Cards />
				</div>
				<div class="col">
					<Cards />
				</div>
				<div class="col">
					<Cards />
				</div>
				<div class="col">
					<Cards />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;