import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { UserProvider } from "../context/userContext";
import { PostProvider } from "../context/postContext";
import { NotificationProvider } from "../context/notificationContext";
import { StorieProvider } from "../context/storieContext";
import { CommentProvider } from "../context/commentContext";

import ControllerRoute from "./routes";

export default function Routed() {
	return (
		<Router>
			<UserProvider>
				<NotificationProvider>
					<PostProvider>
						<StorieProvider>
							<CommentProvider>
								<ControllerRoute />
							</CommentProvider>
						</StorieProvider>
					</PostProvider>
				</NotificationProvider>
			</UserProvider>
		</Router>
	);
}
