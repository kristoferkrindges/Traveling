import React, { useContext } from "react";
import { Routes as Routed, Route } from "react-router-dom";

import { PrivateRouter } from "../contexts/privateRouterContext";
import { UserContext } from "../contexts/userContext";

import HomePage from "../pages/home";
import AwaitPage from "../pages/await";
import AuthPage from "../pages/auth";

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
			<Route path="/"></Route>
		</Routed>
	);
}
