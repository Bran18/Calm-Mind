import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Feature from "../component/Feature";
import Hero from "../component/Hero";
import CardSection from "../component/CardSection";

export const Home = () => (
	<div>
		<Hero />
		<Feature />
		<CardSection />
	</div>
);
