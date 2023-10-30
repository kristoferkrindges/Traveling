import React from "react";
import useModal from "../hooks/useModal";

const ModalContext = React.createContext(null);

function ModalProvider({ children }) {
	const {
		menu,
		handlerMenu,
		ellips,
		HandlerEllips,
		modalCreatePost,
		handlerModalCreatePost,
	} = useModal();
	return (
		<ModalContext.Provider
			value={{
				menu,
				handlerMenu,
				ellips,
				HandlerEllips,
				modalCreatePost,
				handlerModalCreatePost,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}

export { ModalContext, ModalProvider };
