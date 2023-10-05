import React, { createContext, useState } from "react";
import usePost from "../hooks/usePost";

const PostContext = createContext();

function PostProvider({ children }) {
	const {
		findAll,
		findById,
		findUsersFavorites,
		findUsersLikes,
		insert,
		update,
		deletePost,
	} = usePost();
	return (
		<PostContext.Provider
			value={{
				findAll,
				findById,
				findUsersFavorites,
				findUsersLikes,
				insert,
				update,
				deletePost,
			}}
		>
			{children}
		</PostContext.Provider>
	);
}

export { PostContext, PostProvider };
