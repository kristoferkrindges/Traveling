import React from "react";
import useModal from "../hooks/useModal";

const ModalContext = React.createContext(null);

function ModalProvider({ children }) {
	const { menu, handlerMenu } = useModal();
	return (
		<ModalContext.Provider
			value={{
				menu,
				handlerMenu,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}

export { ModalContext, ModalProvider };
