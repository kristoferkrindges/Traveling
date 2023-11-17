import React, { useContext } from "react";
import { Routes as Routed, Route } from "react-router-dom";

import { PrivateRouter } from "../contexts/privateRouterContext";
import { UserContext } from "../contexts/userContext";

import HomePage from "../pages/home";
import AwaitPage from "../pages/await";
import AuthPage from "../pages/auth";
import OnlyPostTemplate from "../templates/onlyPost";
import ProfileTemplate from "../templates/profile";
import NotificationPage from "../pages/notification";

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
							<OnlyPostTemplate />
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
							<ProfileTemplate />
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
		</Routed>
	);
}
