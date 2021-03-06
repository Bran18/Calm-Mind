import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Mind Calm</span>
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<Link to="/">
							<span className="nav-link">Home</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/">
							<span className="nav-link">Features</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/">
							<span className="nav-link">Pricing</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">login</button>
				</Link>
			</div>
		</nav>
	);
};
