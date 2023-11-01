import React, { createContext, useState } from "react";
import useStorie from "../hooks/useStorie";

const StorieContext = createContext();

function StorieProvider({ children }) {
	const { findAllStories, findById, insert, update, deleteStorie, allStories } =
		useStorie();

	return (
		<StorieContext.Provider
			value={{
				findAllStories,
				findById,
				insert,
				update,
				deleteStorie,
				allStories,
			}}
		>
			{children}
		</StorieContext.Provider>
	);
}

export { StorieContext, StorieProvider };
