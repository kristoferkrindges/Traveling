import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRouter = () => {
	const authenticated = localStorage.getItem("authenticated");
	return authenticated ? <Outlet /> : <Navigate to="/auth" />;
};
