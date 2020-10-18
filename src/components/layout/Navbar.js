import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../news.svg";

const NavbarComponent = () => {
	const { currentUser } = useAuth();

	return (
		<div className="mr-10">
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">
					<img
						src={logo}
						width="40"
						height="40"
						className="d-inline-block align-top"
						alt="NewsApp logo"
					/>
				</Navbar.Brand>
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
