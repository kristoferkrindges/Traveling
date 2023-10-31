import React, { createContext, useState } from "react";
import useStorie from "../hooks/useStorie";

const StorieContext = createContext();

function StorieProvider({ children }) {
	const { findAll, findById, insert, update, deleteStorie, allStories } =
		useStorie();

	return (
		<StorieContext.Provider
			value={{
				findAll,
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
