import api from "../services/api";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ThemeContext } from "../App";
export default function useAuth() {
	const [authenticated, setAuthenticated] = useState(false);
	const [userInfo, setUserInfo] = useState({});
	const { setTheme, theme } = useContext(ThemeContext);
	const navigate = useNavigate();

	useEffect(() => {
		getToken();
	}, []);

	useEffect(() => {
		const darkmode = localStorage.getItem("darkmode");
		if (darkmode) {
			setTheme(darkmode);
		} else {
			checkConfigUser();
		}
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
				await checkConfigUser();
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
	async function checkConfigUser() {
		const darkmode = localStorage.getItem("darkmode");
		if (!darkmode) {
			try {
				const darkmode = await api
					.get("/users/configuration")
					.then((response) => {
						return response.data;
					});
				if (darkmode) {
					localStorage.setItem("darkmode", "dark");
					setTheme("dark");
				} else {
					localStorage.setItem("darkmode", "light");
					setTheme("light");
				}
			} catch (error) {
				console.log("Erro", error);
			}
		}
	}
	async function alterDarkMode() {
		try {
			await api.post("/users/darkmode").then((response) => {
				return response;
			});
			if (theme == "light") {
				setTheme("dark");
				localStorage.setItem("darkmode", "dark");
			} else {
				setTheme("light");
				localStorage.setItem("darkmode", "light");
			}
			return;
		} catch (error) {
			console.log("Error", error);
		}
	}
	function logout() {
		console.log("disconnect");
		setAuthenticated(false);
		localStorage.removeItem("token");
		api.defaults.headers.Authorization = undefined;
		setUserInfo(undefined);
	}

	return {
		authenticated,
		register,
		login,
		userInfo,
		logout,
		getToken,
		alterDarkMode,
	};
}
