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
	const [edit, setEdit] = useState(false);
	function HandlerEdit() {
		if (edit === false) {
			setEdit(true);
		} else {
			setEdit(false);
		}
	}
	return (
		<PostContext.Provider
			value={{
				HandlerEdit,
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
