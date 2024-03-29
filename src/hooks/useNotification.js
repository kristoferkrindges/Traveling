import api from "../services/api";
import { useState } from "react";
export default function useNotification() {
	const [count, setCount] = useState();

	async function allNotifications() {
		try {
			const data = await api.get("/notifications").then((response) => {
				return response.data;
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function unreadNotifications() {
		try {
			const data = await api.get("/notifications/unread").then((response) => {
				return response.data;
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function countUnreadNotifications() {
		try {
			const data = await api.get("/notifications/count").then((response) => {
				return response.data;
			});
			setCount(data);
			return data;
		} catch (error) {
			console.log(error.response);
		}
	}

	async function markNotificationAsRead(notifications) {
		try {
			const data = await api
				.post("/notifications", notifications)
				.then((response) => {
					return response.data;
				});
			return data;
		} catch (error) {
			console.log(error);
		}
	}
	return {
		allNotifications,
		unreadNotifications,
		countUnreadNotifications,
		markNotificationAsRead,
		count,
		setCount,
	};
}
