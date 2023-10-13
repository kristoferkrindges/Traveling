import api from "../services/api";
import { toast } from "react-toastify";
import useFirebase from "./useFirebase";

export default function useStorie() {
	const { uploadImage } = useFirebase();

	async function findAll() {
		try {
			const response = await api.get("/stories");
			return response.data;
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
			throw error;
		}
	}

	async function findById(id) {
		try {
			const response = await api.get(`/stories/${id}`);
			return response.data;
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
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
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	return {
		findAll,
		findById,
		insert,
		update,
		deleteStorie,
	};
}
