import api from "../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function useAuth() {
	const [authenticated, setAuthenticated] = useState(false);
	const [userInfo, setUserInfo] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		getToken();
	}, []);

	async function register(user) {
		try {
			const data = await api.post("/auth/register", user).then((response) => {
				return response.data;
			});
			await authUser(data);
			navigate("/profile");
		} catch (error) {
			console.log("Erro", error);
		}
	}

	async function login(user) {
		try {
			const data = await api
				.post("/auth/authenticate", user)
				.then((response) => {
					return response.data;
				});
			await authUser(data);
			navigate("/");
		} catch (error) {
			// console.log("Erro", error);
			console.log(error.response.data.message);
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
			navigate("/auth");
		}
	}

	return { authenticated, register, login };
}
