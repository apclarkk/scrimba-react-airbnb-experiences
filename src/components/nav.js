import React from "react";
import logo from "../airbnb-logo.svg";
export default function Nav() {
	return (
		<nav>
			<div className="container">
				<div className="row nav-inner">
					<div className="logo">
						<img src={logo} alt="Airbnb Logo" />
					</div>
				</div>
			</div>
		</nav>
	);
}
