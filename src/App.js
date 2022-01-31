import React from "react";
import Nav from "./components/nav";
import MainHero from "./components/main-hero";
import Card from "./components/Card";
import Data from "./data";

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
	const cardData = Data.map((data) => {
		return <Card key={data.id} data={data} />;
	});
	return (
		<main className="container">
			<div className="row justify-content-center">
				<div className="card col-6 p-0">
					<Nav />
					<MainHero />
					<div className="container">
						<div className="card-row row">{cardData}</div>
					</div>
				</div>
			</div>
		</main>
	);
}
