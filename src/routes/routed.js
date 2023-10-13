import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "../context/userContext";
import ControllerRoute from "./routes";
import { PostProvider } from "../context/postContext";
import { StorieProvider } from "../context/storieContext";
export default function Routed() {
	return (
		<Router>
			<UserProvider>
				<PostProvider>
					<StorieProvider>
						<ControllerRoute />
					</StorieProvider>
				</PostProvider>
			</UserProvider>
		</Router>
	);
}
