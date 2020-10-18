import React from "react";
import TestRenderer from "react-test-renderer";
import Login from "./components/auth/Login";
import { AuthProvider } from "./contexts/AuthContext";

describe("Testing News", () => {
	it("should reder submit button", () => {
		const component = TestRenderer.create(
			<AuthProvider>
				<Login />
			</AuthProvider>
		);
		console.log("dev", component.toJSON());
		// const loginButton = component.getByTestId("loginBtn");

		// fireEvent(loginButton, "press");
	});
});
