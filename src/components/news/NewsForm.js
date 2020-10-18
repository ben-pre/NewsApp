import React, { useState, useContext } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import app from "../../firebase";

import {
	Form,
	Card,
	Button,
	Alert,
	Container,
	Col,
	Row,
} from "react-bootstrap";

const NewsForm = () => {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const [error, setError] = useState("");
	const { currentUser, logout } = useAuth();
	const history = useHistory();

	async function handleLogut() {
		setError("");

		try {
			await logout();
			history.push("/login");
		} catch {
			setError("Failed to logout!");
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const bodyRef = app.database().ref("Text");
		const body = {
			title,
			text,
			complete: false,
		};
		bodyRef.push(body);
		setTitle("");
		setText("");
	};

	return (
		<div>
			<Container className="mt-5 ">
				<Row className="d-flex justify-content-center">
					<Col md="8">
						<Card>
							<Card.Body>
								<h2 className="text-center mb-4">Welcome</h2>
								{error && <Alert variant="danger">{error}</Alert>}
								<strong className="text-center">Email: </strong>
								{currentUser.email}
							</Card.Body>
						</Card>

						<Form onSubmit={handleSubmit}>
							<Form.Control
								className="mt-3"
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder="Title"
								as="textarea"
							/>
							<Form.Control
								className="mt-3"
								rows="10"
								type="textarea"
								value={text}
								onChange={(e) => setText(e.target.value)}
								placeholder="Body"
								as="textarea"
							/>

							<Form.Control className="mt-3" type="submit" value="Submit" />
						</Form>

						<div className="w-100 text-center mt-3">
							<Button variant="info" onClick={handleLogut}>
								Log Out
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default NewsForm;
