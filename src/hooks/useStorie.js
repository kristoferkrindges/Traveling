import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import useFirebase from "./useFirebase";

export default function useStorie() {
	const { uploadImage } = useFirebase();

	const [allStories, setAllStories] = useState();
	const [likeState, setLikeState] = useState({});

	async function findAllStories() {
		try {
			const data = await api.get("/stories").then((response) => {
				return response.data;
			});
			setAllStories(data);
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function findAllUsersWithStories() {
		try {
			const data = await api.get("/stories/users").then((response) => {
				return response.data;
			});
			setAllStories(data);
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function findStoriesByAt(id) {
		try {
			const response = await api.get(`/stories/users/${id}`);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async function findById(id) {
		try {
			const response = await api.get(`/stories/${id}`);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async function insert(storie, file) {
		try {
			if (file) {
				const video = await uploadImage(file);
				storie.video = video;
			}
			const data = await api.post("/stories", storie).then((response) => {
				return response.data;
			});

			const isDataExist = allStories.some((story) => story.id === data.id);
			if (!isDataExist) {
				setAllStories([data, ...allStories]);
			}

			toast.success("Storie created with success!");
			return;
		} catch (error) {
			try {
				toast.error(error.response.data.message);
			} catch (error) {
				console.log("Erro", error);
			}
		}
	}

	async function update(post, id) {
		try {
			const data = await api.put(`/stories/${id}`, post).then((response) => {
				return response.data;
			});
			toast.success("Updated with success!");
			return data;
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	async function deleteStorie(id) {
		try {
			const data = await api.delete(`/stories/${id}`).then((response) => {
				return response.data;
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function likeStorie(id) {
		try {
			await api.post(`/stories/like/${id}`).then((response) => {
				return response.data;
			});
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	return {
		findAllStories,
		findById,
		insert,
		update,
		deleteStorie,
		allStories,
		setAllStories,
		findAllUsersWithStories,
		findStoriesByAt,
		likeStorie,
		setLikeState,
		likeState,
	};
}
