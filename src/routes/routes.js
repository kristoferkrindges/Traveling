import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRouter, PrivateLogin } from "../context/privateContext";
import HomePage from "../pages/Home";
import ProfilePage from "../pages/Profile";
import ChatPage from "../pages/Chat";
import NotificationsPage from "../pages/Notifications";
import OnlyPost from "../pages/OnlyPost";
import AuthPage from "../pages/Auth";
import LoaderPage from "../pages/Loader";
import { Context } from "../context/userContext";
export default function ControllerRoute() {
	const { userInfo } = useContext(Context);
	return (
		<Routes>
			<Route path="/auth" element={<PrivateLogin />}>
				<Route path="/auth" element={<AuthPage />}></Route>
			</Route>
			<Route path="/" element={<PrivateRouter />}>
				<Route
					path="/"
					element={userInfo ? <HomePage /> : <LoaderPage />}
				></Route>
			</Route>
			<Route path="/profile" element={<PrivateRouter />}>
				<Route
					path="/profile"
					element={userInfo ? <ProfilePage /> : <LoaderPage />}
				></Route>
			</Route>
			<Route path="/messages" element={<PrivateRouter />}>
				<Route path="/messages" element={<ChatPage />}></Route>
			</Route>
			<Route path="/notifications" element={<PrivateRouter />}>
				<Route path="/notifications" element={<NotificationsPage />}></Route>
			</Route>
			<Route path="/post/:id" element={<PrivateRouter />}>
				<Route path="/post/:id" element={<OnlyPost />}></Route>
			</Route>
			<Route path="/settings" element={<PrivateRouter />}>
				<Route path="/settings" element={<ProfilePage />}></Route>
			</Route>
		</Routes>
	);
}
