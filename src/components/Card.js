import React from "react";

import star from "../images/star.png";

export default function Card(props) {
	console.log(props.data);
	let badgeText;
	if (props.data.openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (props.data.location === "Online") {
		badgeText = "ONLINE";
	}

	return (
		<div className="experience-card">
			{badgeText && <div className="card-badge">{badgeText}</div>}
			<div className="card-img">
				<img src={require(`../images/${props.data.coverImg}`)} alt="" />
			</div>
			<div className="card-info">
				<div className="top">
					<img src={star} alt="" />
					<p>
						<span>{props.data.stats.rating}</span>
						<span className="grey"> ({props.data.stats.reviewCount}) • </span>
						<span className="grey">{props.data.location}</span>
					</p>
				</div>
				<div className="middle">
					<p>{props.data.title}</p>
				</div>
				<div className="bottom">
					<p>
						<strong>From ${props.data.price}</strong>/ Person
					</p>
				</div>
			</div>
		</div>
	);
}
