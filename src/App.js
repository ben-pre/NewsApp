import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavbarComponent from "./components/layout/Navbar";
import Signup from "./components/auth/Signup";
import Homepage from "./components/dashboard/Home";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/utility/PrivateRoute";
import NewsForm from "./components/news/NewsForm";
import "../src/styles/styles.css";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<NavbarComponent />
				<Switch>
					<PrivateRoute path="/admin" component={NewsForm} />
					<Route exact path="/" component={Homepage} />
					<Route path="/signup" component={Signup} />
					<Route path="/login" component={Login} />
				</Switch>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
