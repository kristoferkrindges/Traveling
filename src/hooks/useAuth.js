import api from "../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function useAuth() {
	const [authenticated, setAuthenticated] = useState(false);
	const [userInfo, setUserInfo] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		getToken();
	}, []);

	async function register(user) {
		try {
			logout();
			const data = await api.post("/auth/register", user).then((response) => {
				return response.data;
			});
			await authUser(data);
			navigate("/profile");
			return;
		} catch (error) {
			try {
				toast.error(error.response.data.message);
			} catch (error) {
				console.log("Erro", error);
			}
		}
	}

	async function login(user) {
		try {
			logout();
			const data = await api
				.post("/auth/authenticate", user)
				.then((response) => {
					return response.data;
				});
			await authUser(data);
			navigate("/");
			return;
		} catch (error) {
			// console.log("Erro", error);
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	async function authUser(data) {
		try {
			localStorage.setItem("token", JSON.stringify(data.token));
			await getToken();
			return;
		} catch (error) {
			console.log("Erro", error);
		}
	}

	async function getToken() {
		try {
			const token = localStorage.getItem("token");
			if (token) {
				api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
				setAuthenticated(true);
				await checkUser();
				return;
			} else {
				setAuthenticated(false);
				api.defaults.headers.Authorization = undefined;
				// navigate("/auth");
				return;
			}
		} catch (error) {
			console.log("Erro", error);
			console.log(error.response.data.message);
		}
	}

	async function checkUser() {
		try {
			const user = await api.get("/users/checkuser").then((response) => {
				return response.data;
			});
			setUserInfo(user);
			return;
		} catch (error) {
			console.log(error.response);
			navigate("/auth");
		}
	}
	function logout() {
		console.log("disconnect");
		setAuthenticated(false);
		localStorage.removeItem("token");
		api.defaults.headers.Authorization = undefined;
		setUserInfo(undefined);
	}

	return { authenticated, register, login, userInfo, logout };
}
