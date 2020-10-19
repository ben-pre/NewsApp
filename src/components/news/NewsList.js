import React, { useEffect, useState } from "react";
import app from "../../firebase";
import NewsItem from "./NewsItem";
import SearchNews from "./SearchNews";

const NewsList = () => {
	const [newsList, setNewsList] = useState();
	useEffect(() => {
		const newsRef = app.database().ref("Text");
		newsRef.on("value", (snapshot) => {
			const news = snapshot.val();
			const newsList = [];

			for (let id in news) {
				newsList.push({ id, ...news[id] });
			}

			setNewsList(newsList);
		});
	}, []);

	/* 	Firestore has only 3 functions for searching queries (startAt, endAt and equalTo), so it doesn't support full text search, like SQL. 
		It requires third-party search service.  
		Since I'm not experienced in dbs, this was the only way to "search".
		 It allows user only to search for the first word in text, which is horrible UX. 
	 	Apart from not using reducers from the beggining of the project this was the biggest mistake imho.
	*/

	const searchNews = (input) => {
		const newsRef = app.database().ref("Text");

		const searchedNews = newsRef
			.orderByChild("text")
			.startAt(input)
			.endAt(input + "\uf8ff");

		searchedNews.on("value", (snapshot) => {
			const news = snapshot.val();
			const newsList = [];

			for (let id in news) {
				newsList.push({ id, ...news[id] });
			}

			setNewsList(newsList);
		});
	};

	return (
		<div>
			<SearchNews searchNews={searchNews} />
			<ul>
				{newsList
					? newsList.map((data, index) => (
							<li style={{ listStyleType: "none" }} key={index}>
								<NewsItem article={data} />
							</li>
					  ))
					: ""}
			</ul>
		</div>
	);
};

export default NewsList;
