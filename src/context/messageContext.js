import React, { useState } from "react";

const MessageContext = React.createContext(null);

function MessageProvider({ children }) {
	const [openMessage, setOpenMessage] = useState(false);
	function TestOpen() {
		if (openMessage) {
			setOpenMessage(false);
		} else {
			setOpenMessage(true);
		}
	}
	function HandlerMessage(id) {
		console.log("carregar chat com id");
		setOpenMessage(true);
	}
	return (
		<MessageContext.Provider
			value={{
				openMessage,
				HandlerMessage,
				TestOpen,
			}}
		>
			{children}
		</MessageContext.Provider>
	);
}

export { MessageContext, MessageProvider };
