import React, { createContext } from "react";
import useComment from "../hooks/useComment";

const CommentContext = createContext();

function CommentProvider({ children }) {
	const {
		findCommentsPost,
		findChildsComments,
		insertComment,
		updateComment,
		deletComment,
		likeComment,
	} = useComment();
	return (
		<CommentContext.Provider
			value={{
				findCommentsPost,
				findChildsComments,
				insertComment,
				updateComment,
				deletComment,
				likeComment,
			}}
		>
			{children}
		</CommentContext.Provider>
	);
}

export { CommentContext, CommentProvider };
