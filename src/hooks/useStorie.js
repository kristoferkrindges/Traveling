import { useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import useFirebase from "./useFirebase";

export default function useStorie() {
	const { uploadImage } = useFirebase();

	const [allStories, setAllStories] = useState();

	// useEffect(() => {
	// 	if (!allStories) {
	// 		findAllStories();
	// 	}
	// }, []);

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

	async function findById(id) {
		try {
			const response = await api.get(`/stories/${id}`);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async function insert(post) {
		try {
			const data = await api.post("/stories", post).then((response) => {
				return response.data;
			});
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
		} catch (error) {
			console.log(error);
		}
	}

	return {
		findAllStories,
		findById,
		insert,
		update,
		deleteStorie,
		allStories,
	};
}
