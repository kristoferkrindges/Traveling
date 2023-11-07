import api from "../services/api";
import { toast } from "react-toastify";

export default function useComment() {
	async function findCommentsPost(id) {
		try {
			const data = await api
				.get(`/comments/postComments/${id}`)
				.then((response) => {
					return response.data;
				});
			return data;
		} catch (error) {
			console.log(error.response.data.message);
		}
	}

	async function findChildsComments(id) {
		try {
			const data = await api
				.get(`/comments/childComment/${id}`)
				.then((response) => {
					return response.data;
				});
			return data;
		} catch (error) {
			console.log(error.response.data.message);
		}
	}

	async function insertComment(comment) {
		try {
			const data = await api.post("/comments", comment).then((response) => {
				return response.data;
			});
			toast.success("Comment created with success!");
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function updateComment(id, comment) {
		try {
			const data = await api
				.put(`/comments/${id}`, comment)
				.then((response) => {
					return response.data;
				});
			toast.success("Comment updated with success!");
			return data;
		} catch (error) {
			console.log(error.response);
			toast.error(error.response.data.message);
		}
	}

	async function deletComment(id) {
		try {
			const data = await api.delete(`/comments/${id}`).then((response) => {
				return response.data;
			});
			toast.success("Comment deleted with success!");
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function likeComment(id) {
		try {
			await api.post(`/comments/like/${id}`).then((response) => {
				return response.data;
			});
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}
	return {
		findCommentsPost,
		findChildsComments,
		insertComment,
		updateComment,
		deletComment,
		likeComment,
	};
}
