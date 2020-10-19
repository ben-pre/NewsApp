import React, { useState } from "react";
import app from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

import {
	Button,
	ButtonGroup,
	Card,
	Container,
	Col,
	Row,
} from "react-bootstrap";
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
			<Container className="mt-0 pt-0">
				<Col className="d-flex justify-content-center">
					<Row md="8">
						<Card
							bg="light"
							border="primary"
							variant="dark"
							className="mt-5"
							style={{ width: "50vw" }}
						>
							<Card.Body>
								<Card.Header className="text-center">
									<h4>{article.title}</h4>
								</Card.Header>
								<Card.Text className="mt-3 text-justify">
									{article.text}
								</Card.Text>
								{currentUser && (
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "center",
										}}
									>
										<ButtonGroup className="mr-3 newsItemBtn">
											<Button variant="danger" onClick={deleteNews}>
												Delete
											</Button>
										</ButtonGroup>
										<ButtonGroup className="mr-2 newsItemBtn">
											<Button variant="danger" onClick={onClickEditNews}>
												Edit
											</Button>
										</ButtonGroup>
									</div>
								)}
								{editNews && (
									<EditNewsForm onSubmitEditNews={onSubmitEditNews} />
								)}
							</Card.Body>
						</Card>
					</Row>
				</Col>
			</Container>
		</div>
	);
};

export default News;
