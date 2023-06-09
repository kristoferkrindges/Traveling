import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRouter } from "../context/privateContext";
import { UserProvider } from "../context/userContext";
import HomePage from "../Pages/Home";
import LoginPage from "../Pages/Login";
import ProfilePage from "../Pages/Profile";
import ChatPage from "../Pages/Chat";
import NotificationsPage from "../Pages/Notifications";
import OnlyPost from "../Pages/OnlyPost";
export default function Routed() {
	return (
		<Router>
			<UserProvider>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<PrivateRouter />}>
						<Route path="/login" element={<LoginPage />}></Route>
					</Route>
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
