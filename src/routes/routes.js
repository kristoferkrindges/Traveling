import React, { useContext } from "react";
import { Routes as Routed, Route } from "react-router-dom";

import { PrivateRouter } from "../contexts/privateRouterContext";
import { UserContext } from "../contexts/userContext";

import HomePage from "../pages/home";
import AwaitPage from "../pages/await";
import AuthPage from "../pages/auth";
import NotificationPage from "../pages/notification";
import MessagesPage from "../pages/messages";
import EventPage from "../pages/events";
import SettingsPage from "../pages/settings";
import OnlyPostPage from "../pages/onlyPost";
import ProfilePage from "../pages/profile";

export default function Routes() {
	const { userInfo } = useContext(UserContext);
	return (
		<Routed>
			<Route path="/auth" element={<AuthPage />}></Route>
			<Route path="/" element={<PrivateRouter />}>
				<Route
					path="/"
					element={
						userInfo &&
						typeof userInfo === "object" &&
						Object.keys(userInfo).length > 0 ? (
							<HomePage />
						) : (
							<AwaitPage />
						)
					}
				></Route>
			</Route>
			<Route path="/post/:id" element={<PrivateRouter />}>
				<Route
					path="/post/:id"
					element={
						userInfo &&
						typeof userInfo === "object" &&
						Object.keys(userInfo).length > 0 ? (
							<OnlyPostPage />
						) : (
							<AwaitPage />
						)
					}
				></Route>
			</Route>
			<Route path="/profile/:id" element={<PrivateRouter />}>
				<Route
					path="/profile/:id"
					element={
						userInfo &&
						typeof userInfo === "object" &&
						Object.keys(userInfo).length > 0 ? (
							<ProfilePage />
						) : (
							<AwaitPage />
						)
					}
				></Route>
			</Route>
			<Route path="/notifications" element={<PrivateRouter />}>
				<Route
					path="/notifications"
					element={
						userInfo &&
						typeof userInfo === "object" &&
						Object.keys(userInfo).length > 0 ? (
							<NotificationPage />
						) : (
							<AwaitPage />
						)
					}
				></Route>
			</Route>
			<Route path="/messages" element={<PrivateRouter />}>
				<Route
					path="/messages"
					element={
						userInfo &&
						typeof userInfo === "object" &&
						Object.keys(userInfo).length > 0 ? (
							<MessagesPage />
						) : (
							<AwaitPage />
						)
					}
				></Route>
			</Route>
			<Route path="/events" element={<PrivateRouter />}>
				<Route
					path="/events"
					element={
						userInfo &&
						typeof userInfo === "object" &&
						Object.keys(userInfo).length > 0 ? (
							<EventPage />
						) : (
							<AwaitPage />
						)
					}
				></Route>
			</Route>
			<Route path="/settings" element={<PrivateRouter />}>
				<Route
					path="/settings"
					element={
						userInfo &&
						typeof userInfo === "object" &&
						Object.keys(userInfo).length > 0 ? (
							<SettingsPage />
						) : (
							<AwaitPage />
						)
					}
				></Route>
			</Route>
		</Routed>
	);
}
