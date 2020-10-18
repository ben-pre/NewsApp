import React, { useRef, useState } from "react";
import {
	Card,
	Form,
	Button,
	Alert,
	Container,
	Col,
	Row,
} from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push("/");
		} catch {
			setError("Failed to sign in");
		}
		setLoading(false);
	}

	return (
		<>
			<Container className="mt-5">
				<Row className="d-flex justify-content-center">
					<Col md="6">
						<Card>
							<Card.Body>
								<h2 className="text-center mb-4">Authenticate</h2>
								{error && <Alert variant="danger">{error}</Alert>}
								<Form onSubmit={handleSubmit}>
									<Form.Group id="email">
										<Form.Label className="text-secondary"></Form.Label>
										<Form.Control
											placeholder="Enter your email"
											type="email"
											ref={emailRef}
											required
										/>
									</Form.Group>
									<Form.Group id="password">
										<Form.Label></Form.Label>
										<Form.Control
											placeholder="Enter your password"
											type="password"
											ref={passwordRef}
											required
										/>
									</Form.Group>
									<Button disabled={loading} className="w-100" type="submit">
										Log In
									</Button>
								</Form>
							</Card.Body>
						</Card>
						<div className="w-100 text-center mt-2">
							Don't have an account? <Link to="/signup">Sing Up</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Login;
