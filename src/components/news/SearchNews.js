import React, { useState } from "react";
import { Button } from "react-bootstrap";

const SearchNews = ({ searchNews }) => {
	const [searchInput, setSearchInput] = useState("");

	return (
		<div>
			<Button onClick={() => searchNews(searchInput)}>Search</Button>
			<input onChange={(e) => setSearchInput(e.target.value)}></input>
		</div>
	);
};

export default SearchNews;
