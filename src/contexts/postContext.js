import React, { createContext } from "react";
import usePost from "../hooks/usePost";

const PostContext = createContext();

function PostProvider({ children }) {
	const {
		findAllPosts,
		findById,
		findUsersFavorites,
		findUsersLikes,
		insert,
		update,
		deletePost,
		allPosts,
	} = usePost();
	return (
		<PostContext.Provider
			value={{
				findAllPosts,
				findById,
				findUsersFavorites,
				findUsersLikes,
				insert,
				update,
				deletePost,
				allPosts,
			}}
		>
			{children}
		</PostContext.Provider>
	);
}

export { PostContext, PostProvider };
