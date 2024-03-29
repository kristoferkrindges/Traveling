import api from "../services/api";
import { useState } from "react";
import { toast } from "react-toastify";
import useFirebase from "./useFirebase";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export default function usePost() {
	const { uploadImage } = useFirebase();
	const { checkUser } = useAuth();
	const [allPosts, setAllPosts] = useState(undefined);

	const navigate = useNavigate();

	async function findAllPosts() {
		try {
			setAllPosts(undefined);
			const data = await api.get("/posts").then((response) => {
				return response.data;
			});
			setAllPosts(data);
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function findById(id) {
		try {
			setAllPosts(undefined);
			const data = await api.get(`/posts/${id}`).then((response) => {
				return response.data;
			});
			setAllPosts(data);
			return data;
		} catch (error) {
			console.log(error);
			navigate("/");
		}
	}

	async function findUsersFavorites(id) {
		try {
			setAllPosts(undefined);
			const response = await api.get(`/posts/favorites/${id}`);
			setAllPosts(response.data);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async function findUsersLikes(id) {
		try {
			setAllPosts(undefined);
			const response = await api.get(`/posts/likes/${id}`);
			setAllPosts(response.data);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async function insert(post, file) {
		try {
			if (file) {
				const img = await uploadImage(file);
				post.img = img;
			}
			const data = await api.post("/posts", post).then((response) => {
				return response.data;
			});
			addPostCreated(data);
			toast.success("Post created with success!");
			await checkUser();
			return;
		} catch (error) {
			try {
				toast.error(error.response.data.message);
			} catch (error) {
				console.log("Erro", error);
			}
		}
	}

	async function update(id, post, file) {
		try {
			if (file) {
				const img = await uploadImage(file);
				post.img = img;
			}
			const data = await api.put(`/posts/${id}`, post).then((response) => {
				return response.data;
			});
			toast.success("Post updated with success!");
			return data;
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	async function deletePost(id) {
		try {
			await api.delete(`/posts/${id}`).then((response) => {
				return response.data;
			});
			removePostArray(id);
			toast.success("Post deleted with success!");
			return;
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	function addPostCreated(post) {
		const updateArray = [post].concat(allPosts);
		setAllPosts(updateArray);
		return;
	}

	function removePostArray(postId) {
		const updatedPosts = allPosts.filter((post) => post.id !== postId);
		setAllPosts(updatedPosts);
		return;
	}

	return {
		findAllPosts,
		findById,
		findUsersFavorites,
		findUsersLikes,
		insert,
		update,
		deletePost,
		allPosts,
	};
}
