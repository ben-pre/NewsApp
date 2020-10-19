import React, { useState } from "react";

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
