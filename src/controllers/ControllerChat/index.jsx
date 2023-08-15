import React, { useContext, useState } from "react";
import { MessageContext } from "../../context/messageContext";
import MessagesLayout from "../../layouts/MessagesLayout";
import Chat from "../../components/Chat";
export default function ControllerChat() {
	const { message, AlterStateMessage, TestOpen } = useContext(MessageContext);
	return (
		<>
			{message ? (
				<Chat click={AlterStateMessage} type={false} />
			) : (
				<MessagesLayout chat={true} mini={false} />
			)}
		</>
	);
}
