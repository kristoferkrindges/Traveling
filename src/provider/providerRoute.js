import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalProvider } from "../contexts/modalContext";
import { AssistantProvider } from "../contexts/assistantContext";
import { UserProvider } from "../contexts/userContext";
import { NotificationProvider } from "../contexts/notificationContext";
import { PostProvider } from "../contexts/postContext";
import { CommentProvider } from "../contexts/commentContext";
import { StorieProvider } from "../contexts/storieContext";
import Routes from "../routes/routes";

export default function ProviderRoute() {
	return (
		<Router>
			<ModalProvider>
				<AssistantProvider>
					<UserProvider>
						<NotificationProvider>
							<StorieProvider>
								<PostProvider>
									<CommentProvider>
										<Routes />
									</CommentProvider>
								</PostProvider>
							</StorieProvider>
						</NotificationProvider>
					</UserProvider>
				</AssistantProvider>
			</ModalProvider>
		</Router>
	);
}
