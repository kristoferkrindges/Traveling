import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "../context/userContext";
import ControllerRoute from "./routes";
import { PostProvider } from "../context/postContext";
import { StorieProvider } from "../context/storieContext";
import { CommentProvider } from "../context/commentContext";
export default function Routed() {
	return (
		<Router>
			<UserProvider>
				<PostProvider>
					<StorieProvider>
						<CommentProvider>
							<ControllerRoute />
						</CommentProvider>
					</StorieProvider>
				</PostProvider>
			</UserProvider>
		</Router>
	);
}
