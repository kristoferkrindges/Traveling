import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "../context/userContext";
import ControllerRoute from "./routes";
export default function Routed() {
	return (
		<Router>
			<UserProvider>
				<ControllerRoute />
			</UserProvider>
		</Router>
	);
}
