import React, { useState } from "react";
import { Button } from "react-bootstrap";

const SearchNews = ({ searchNews }) => {
	const [searchInput, setSearchInput] = useState("");

	return (
		<div className="search-input">
			<button onClick={() => searchNews(searchInput)}>Search</button>
			<input
				type="input"
				onChange={(e) => setSearchInput(e.target.value)}
			></input>
		</div>
	);
};

export default SearchNews;
