import React, { useState } from "react";
import app from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

import { Button, ButtonGroup, Card, Form } from "react-bootstrap";
import EditNewsForm from "./EditNewsForm";

const News = ({ article }) => {
	const { currentUser } = useAuth();
	const [editNews, setEditNews] = useState(false);

	const deleteNews = () => {
		const newsRef = app.database().ref("Text").child(article.id);
		newsRef.remove();
	};

	const onSubmitEditNews = (title, text) => {
		const newsRef = app.database().ref("Text").child(article.id);
		newsRef.update({
			text,
			title,
		});
	};

	const onClickEditNews = () => {
		setEditNews(true);
	};

	return (
		<div>
			<Card variant="dark" className="mt-5" style={{ width: "50vw" }}>
				<Card.Body>
					<Card.Title>{article.title}</Card.Title>
					<Card.Text>{article.text}</Card.Text>
					{currentUser && (
						<div style={{ display: "flex", flexDirection: "row" }}>
							<ButtonGroup className="mr-2 btn-block">
								<Button variant="secondary" onClick={deleteNews}>
									Delete
								</Button>
							</ButtonGroup>
							<ButtonGroup className="btn-block">
								<Button variant="secondary" onClick={onClickEditNews}>
									Edit
								</Button>
							</ButtonGroup>
						</div>
					)}
					{editNews && <EditNewsForm onSubmitEditNews={onSubmitEditNews} />}
				</Card.Body>
			</Card>
		</div>
	);
};

export default News;
