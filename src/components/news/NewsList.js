import React, { useEffect, useState } from "react";
import app from "../../firebase";
import NewsItem from "./NewsItem";
import { Button } from "react-bootstrap";
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

			console.log(newsList);
			setNewsList(newsList);
		});
	}, []);

	const searchNews = (input) => {
		const newsRef = app.database().ref("Text");
		console.log("news ref 1", newsRef);

		const searchedNews = newsRef.orderByChild("text").equalTo(input);
		console.log("news ref 2", searchedNews);

		searchedNews.on("value", (snapshot) => {
			console.log("data", snapshot.val());
			const news = snapshot.val();
			const newsList = [];

			for (let id in news) {
				newsList.push({ id, ...news[id] });
			}

			console.log("radii", newsList);
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
