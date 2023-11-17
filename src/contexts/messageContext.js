import React, { useState } from "react";

const MessageContext = React.createContext(null);

function MessageProvider({ children }) {
	const [openMessage, setOpenMessage] = useState(false);
	const [message, setMessage] = useState(false);
	function AlterStateMessage() {
		if (message) {
			setMessage(false);
		} else {
			setMessage(true);
		}
	}

	function TestOpen() {
		if (openMessage) {
			setOpenMessage(false);
		} else {
			setOpenMessage(true);
		}
	}
	function HandlerMessage(id) {
		console.log("carregar chat com id");
	}
	return (
		<MessageContext.Provider
			value={{
				openMessage,
				HandlerMessage,
				TestOpen,
				message,
				AlterStateMessage,
			}}
		>
			{children}
		</MessageContext.Provider>
	);
}

export { MessageContext, MessageProvider };
