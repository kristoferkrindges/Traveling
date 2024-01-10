import api from "../services/api";
import { toast } from "react-toastify";
import useFirebase from "./useFirebase";

export default function useEvent() {
	const { uploadImage } = useFirebase();

	async function findAll() {
		try {
			const data = await api.get("/events").then((response) => {
				return response.data;
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function findMyEvents() {
		try {
			const data = await api.get("/events/my").then((response) => {
				return response.data;
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function findMyEventsAttend() {
		try {
			const data = await api.get("/events/myAttend").then((response) => {
				return response.data;
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function findEventsNowMonth() {
		try {
			const data = await api.get("/events/nowMonth").then((response) => {
				return response.data;
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function findUsersEvent(id) {
		try {
			const data = await api.get(`/events/users/${id}`).then((response) => {
				return response.data;
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function insert(event, file) {
		try {
			if (file) {
				const photo = await uploadImage(file);
				event.photo = photo;
			}
			const data = await api.post("/events", event).then((response) => {
				return response.data;
			});
			toast.success("Event created with success!");
			return data;
		} catch (error) {
			try {
				toast.error(error.response.data.message);
			} catch (error) {
				console.log("Erro", error);
			}
		}
	}

	async function update(id, event, file) {
		try {
			if (file) {
				const photo = await uploadImage(file);
				event.photo = photo;
			}
			const data = await api.put(`/events/${id}`, event).then((response) => {
				return response.data;
			});
			toast.success("Event updated with success!");
			return data;
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	async function deleteEvent(id) {
		try {
			const data = await api.delete(`/events/${id}`).then((response) => {
				return response.data;
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function toogleAttendEvent(id) {
		try {
			await api.post(`/events/toogleAttend/${id}`).then((response) => {
				return response.data;
			});
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	return {
		findAll,
		findMyEvents,
		findMyEventsAttend,
		findEventsNowMonth,
		insert,
		update,
		deleteEvent,
		toogleAttendEvent,
		findUsersEvent,
	};
}