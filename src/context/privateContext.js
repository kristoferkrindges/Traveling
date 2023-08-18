import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Context } from "./userContext";

export const PrivateRouter = () => {
	const { authenticated, getToken } = useContext(Context);
	return authenticated ? <Outlet /> : <Navigate to="/auth" />;
};

export const PrivateLogin = () => {
	const { authenticated } = useContext(Context);
	return authenticated ? <Navigate to="/" /> : <Outlet />;
};
