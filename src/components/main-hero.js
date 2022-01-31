import React from "react";
import photogrid from "../photo-grid.png";

export default function MainHero() {
	return (
		<section>
			<div className="container">
				<div className="row justify-content-center">
					<div className="hero col-10">
						<div className="hero-img">
							<img src={photogrid} alt="" />
						</div>
						<div className="hero-copy">
							<h1>Online Experiences</h1>
							<p>
								Join unique interactive activities led by
								<br /> one-of-a-kind hosts—all without leaving <br />
								home.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
