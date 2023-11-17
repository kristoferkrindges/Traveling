import React from "react";
import useModal from "../hooks/useModal";

const ModalContext = React.createContext(null);

function ModalProvider({ children }) {
	const {
		menu,
		HandlerMenu,
		ellips,
		handlerEllips,
		modalCreatePost,
		handlerModalCreatePost,
	} = useModal();
	return (
		<ModalContext.Provider
			value={{
				menu,
				HandlerMenu,
				ellips,
				handlerEllips,
				modalCreatePost,
				handlerModalCreatePost,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}

export { ModalContext, ModalProvider };
