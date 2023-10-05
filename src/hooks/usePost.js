import api from "../services/api";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import useFirebase from "./useFirebase";

export default function usePost() {
	const { uploadImage } = useFirebase();

	async function findAll() {
		try {
			const data = await api.get("/posts").then((response) => {
				return response.data;
			});
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

	async function insert(post, photo) {
		try {
			if (photo) {
				const img = await uploadImage(photo);
				post.img = img;
			}
			const data = await api.post("/posts", post).then((response) => {
				return response.data;
			});
			toast.success("Post created with success!");
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
			const data = await api.put(`/posts/${id}`, post).then((response) => {
				return response.data;
			});
			toast.success("Updated with success!");
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
		} catch (error) {
			console.log(error.response.data.message);
			toast.error(error.response.data.message);
		}
	}

	return {
		findAll,
		findById,
		findUsersFavorites,
		findUsersLikes,
		insert,
		update,
		deletePost,
	};
}