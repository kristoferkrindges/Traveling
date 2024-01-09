import React, { createContext } from "react";
import useStorie from "../hooks/useStorie";

const StorieContext = createContext();

function StorieProvider({ children }) {
	const {
		findAllStories,
		findById,
		insert,
		update,
		deleteStorie,
		allStories,
		findAllUsersWithStories,
		findStoriesByAt,
		likeStorie,
		setLikeState,
		likeState,
		setAllStories,
	} = useStorie();

	return (
		<StorieContext.Provider
			value={{
				findAllStories,
				findById,
				insert,
				update,
				deleteStorie,
				allStories,
				findAllUsersWithStories,
				findStoriesByAt,
				likeStorie,
				setLikeState,
				likeState,
				setAllStories,
			}}
		>
			{children}
		</StorieContext.Provider>
	);
}

export { StorieContext, StorieProvider };
