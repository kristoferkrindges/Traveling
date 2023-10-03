import api from "../services/api";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ThemeContext } from "../App";
import useFirebase from "./useFirebase";
export default function useAuth() {
	const { uploadImage } = useFirebase();
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
			navigate(`/profile/${userInfo.at}`);
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

	async function update(user) {
		try {
			const data = await api.put("/users", user).then((response) => {
				return response.data;
			});
			await checkUser();
			toast.success("Updated with success!");
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	async function deleteAccount() {
		try {
			const data = await api.delete("/users").then((response) => {
				return response.data;
			});
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	async function findUserByAt(at) {
		try {
			const response = await api.get(`/users/profile/${at}`);
			console.log(response);
			return response.data;
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
			throw error;
		}
	}

	async function findUserById(id) {
		try {
			const data = await api.get(`/users/${id}`).then((response) => {
				return response.data;
			});
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	async function findPostsUser(id) {
		try {
			const data = await api.get(`/users/${id}/posts`).then((response) => {
				return response.data;
			});
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	async function findStoriesUser(id) {
		try {
			const data = await api.get(`/users/${id}/stories`).then((response) => {
				return response.data;
			});
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	async function updatePassword(passwordUp) {
		try {
			const data = await api
				.patch("/users/updatepassword", passwordUp)
				.then((response) => {
					return response.data;
				});
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	async function updatePhoto(file) {
		try {
			const img = await uploadImage(file);
			const photo = {
				imageUrl: img,
			};
			const data = await api
				.patch("/users/updatephoto", photo)
				.then((response) => {
					return response.data;
				});
			userInfo.photo = img;
			await checkUser();
			console.log(data.response.message);
			toast.success("Photo updated with success!");
		} catch (error) {
			// console.log(error.response.data.message);
			// toast.error(error.response.data.message);
		}
	}

	async function updateBanner(file) {
		try {
			const img = await uploadImage(file);
			const photo = {
				imageUrl: img,
			};
			const data = await api
				.patch("/users/updatebanner", photo)
				.then((response) => {
					return response.data;
				});
			userInfo.banner = img;
			await checkUser();
			toast.success("Banner updated with success!");
		} catch (error) {
			// console.log(error.response.data.message);
			console.log(error.response);
			// toast.error(error.response.data.message);
		}
	}

	async function follow(id) {
		try {
			const data = await api.post(`/users/${id}/follow`).then((response) => {
				return response.data;
			});
			await checkUser();
		} catch (error) {
			console.log(error.response.data.message);
		}
	}

	async function getFollowers(id) {
		try {
			const response = await api.get(`/users/${id}/followers`);
			return response.data;
		} catch (error) {
			console.log(error.response.data.message);
		}
	}

	async function getFollowings(id) {
		try {
			const response = await api.get(`/users/${id}/followings`);
			return response.data;
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	async function likePost(id) {
		try {
			const data = await api.post(`/users/like/${id}`).then((response) => {
				return response.data;
			});
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	async function favoritePost(id) {
		try {
			const data = await api.post(`/users/favorites/${id}`).then((response) => {
				return response.data;
			});
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	async function getPostsWithLiked() {
		try {
			const data = await api.get("/users/like").then((response) => {
				return response.data;
			});
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	async function getPostsWithFavorites() {
		try {
			const data = await api.get("/users/favorites").then((response) => {
				return response.data;
			});
		} catch (error) {
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
			logout();
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
				if (darkmode.darkMode) {
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
		return;
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
		localStorage.removeItem("darkmode");
		api.defaults.headers.Authorization = undefined;
		setUserInfo(undefined);
		navigate("/auth");
	}

	function formatTimeDifference(timestamp) {
		const now = new Date().getTime();
		const difference = now - timestamp;

		if (difference < 60000) {
			const secondsAgo = Math.floor(difference / 1000);
			return `${secondsAgo} ${secondsAgo === 1 ? "second" : "seconds"} ago`;
		} else if (difference < 3600000) {
			const minutesAgo = Math.floor(difference / 60000);
			return `${minutesAgo} ${minutesAgo === 1 ? "minute" : "minutes"} ago`;
		} else if (difference < 86400000) {
			const hoursAgo = Math.floor(difference / 3600000);
			return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
		} else {
			const daysAgo = Math.floor(difference / 86400000);
			return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
		}
	}

	return {
		authenticated,
		register,
		login,
		userInfo,
		logout,
		getToken,
		alterDarkMode,
		update,
		deleteAccount,
		findUserById,
		findPostsUser,
		findStoriesUser,
		updatePassword,
		follow,
		getFollowers,
		getFollowings,
		likePost,
		favoritePost,
		getPostsWithLiked,
		getPostsWithFavorites,
		updatePhoto,
		updateBanner,
		findUserByAt,
		formatTimeDifference,
	};
}
