import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Feature from "../component/Feature";
import Hero from "../component/Hero";

export const Home = () => (
	<div className="text-center mt-5">
		<Hero />
		<Feature />
	</div>
);
