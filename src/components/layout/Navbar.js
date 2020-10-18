import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import app from "../../firebase";

const NavbarComponent = () => {
	const { currentUser } = useAuth();

	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">NewsApp</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					{currentUser ? (
						<Nav className="mr-auto">
							<Nav.Link href="/admin">Admin Page</Nav.Link>
						</Nav>
					) : (
						<Nav className="mr-auto">
							<Nav.Link href="/login">Login</Nav.Link>
						</Nav>
					)}
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default NavbarComponent;
