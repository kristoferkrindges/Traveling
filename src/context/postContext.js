import React, { createContext, useState } from "react";

const PostContext = createContext();

function PostProvider({ children }) {
	const [edit, setEdit] = useState(false);
	function HandlerEdit() {
		if (edit == false) {
			setEdit(true);
		} else {
			setEdit(false);
		}
	}
	return (
		<PostContext.Provider
			value={{
				edit,
				HandlerEdit,
			}}
		>
			{children}
		</PostContext.Provider>
	);
}

export { PostContext, PostProvider };
