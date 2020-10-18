import React from "react";
import { Jumbotron } from "react-bootstrap";

import NewsList from "../news/NewsList";

const Homepage = () => {
	return (
		<div>
			<Jumbotron fluid className="text-center jumbotron mb-0">
				<h1 className="display-3">News App</h1>
			</Jumbotron>
			<NewsList />
		</div>
	);
};

export default Homepage;
