import React, { useContext } from "react";
import Chat from "../../components/Chat";
import { MessageContext } from "../../context/messageContext";

// Gerenciar contexto
export default function ControllerBoxChat({ label }) {
	const { openMessage, TestOpen, AlterStateMessage } =
		useContext(MessageContext);
	return (
		<>
			{openMessage ? (
				<Chat click={AlterStateMessage} type={true} TestOpen={TestOpen} />
			) : (
				<></>
			)}
		</>
	);
}
