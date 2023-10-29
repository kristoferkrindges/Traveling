import React, { createContext, useState } from "react";
import useStorie from "../hooks/useStorie";

const StorieContext = createContext();

function StorieProvider({ children }) {
	const { findAll, findById, insert, update, deleteStorie } = useStorie();
	const [edit, setEdit] = useState(false);
	function HandlerEdit() {
		if (edit === false) {
			setEdit(true);
		} else {
			setEdit(false);
		}
	}
	return (
		<StorieContext.Provider
			value={{
				HandlerEdit,
				findAll,
				findById,
				insert,
				update,
				deleteStorie,
			}}
		>
			{children}
		</StorieContext.Provider>
	);
}

export { StorieContext, StorieProvider };
