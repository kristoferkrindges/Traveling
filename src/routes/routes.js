import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRouter } from "../context/privateContext";
import { UserProvider } from "../context/userContext";
import HomePage from "../pages/Home";
import ProfilePage from "../pages/Profile";
import ChatPage from "../pages/Chat";
import NotificationsPage from "../pages/Notifications";
import OnlyPost from "../pages/OnlyPost";
import AuthPage from "../pages/Auth";
export default function Routed() {
	return (
		<Router>
			<UserProvider>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/auth" element={<AuthPage />}></Route>
					<Route path="/profile" element={<PrivateRouter />}>
						<Route path="/profile" element={<ProfilePage />}></Route>
					</Route>
					<Route path="/messages" element={<PrivateRouter />}>
						<Route path="/messages" element={<ChatPage />}></Route>
					</Route>
					<Route path="/notifications" element={<PrivateRouter />}>
						<Route
							path="/notifications"
							element={<NotificationsPage />}
						></Route>
					</Route>
					<Route path="/post/:id" element={<PrivateRouter />}>
						<Route path="/post/:id" element={<OnlyPost />}></Route>
					</Route>
					<Route path="/settings" element={<PrivateRouter />}>
						<Route path="/settings" element={<ProfilePage />}></Route>
					</Route>
				</Routes>
			</UserProvider>
		</Router>
	);
}
