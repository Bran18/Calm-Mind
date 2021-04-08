import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="container">
			<ul className="list-unstyled list-inline text-center py-2">
				<li className="list-inline-item">
					<h5 className="mb-1">Register for free</h5>
				</li>
				<li className="list-inline-item">
					<button className="btn btn-outline-primary btn-rounded">Sign up!</button>
				</li>
			</ul>
		</div>

		<div className="footer-copyright text-center py-3">© 2021 Copyright:</div>
	</footer>
);
