import api from "../services/api";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import useFirebase from "./useFirebase";
import useAuth from "./useAuth";

export default function usePost() {
	const { uploadImage } = useFirebase();
	const { checkUser } = useAuth();
	const [allPosts, setAllPosts] = useState();

	useEffect(() => {
		findAll();
	}, []);

	async function findAll() {
		try {
			const data = await api.get("/posts").then((response) => {
				return response.data;
			});
			setAllPosts(data);
			return data;
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	async function findById(id) {
		try {
			const response = await api.get(`/posts/${id}`);
			return response.data;
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
			throw error;
		}
	}

	async function findUsersFavorites(id) {
		try {
			const response = await api.get(`/posts/favorites/${id}`);
			return response.data;
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
			throw error;
		}
	}

	async function findUsersLikes(id) {
		try {
			const response = await api.get(`/posts/likes/${id}`);
			return response.data;
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
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
			return;
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	async function deletePost(id) {
		try {
			const data = await api.delete(`/posts/${id}`).then((response) => {
				return response.data;
			});
			removePostArray(id);
			toast.success("Post deleted with success!");
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	function addPostCreated(post) {
		const updateArray = [post].concat(allPosts);
		setAllPosts(updateArray);
	}

	function removePostArray(postId) {
		const updatedPosts = allPosts.filter((post) => post.id !== postId);
		setAllPosts(updatedPosts);
	}

	return {
		findAll,
		findById,
		findUsersFavorites,
		findUsersLikes,
		insert,
		update,
		deletePost,
		allPosts,
	};
}
