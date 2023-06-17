import React, { useContext, useState } from "react";
import { MessageContext } from "../../context/messageContext";
import MessagesCard from "../../components/MessagesCard";
import Chat from "../../components/Chat";
export default function ControllerChat() {
	const { message, AlterStateMessage, TestOpen } = useContext(MessageContext);
	return (
		<>
			{message ? (
				<Chat click={AlterStateMessage} type={false} />
			) : (
				<MessagesCard chat={true} mini={false} />
			)}
		</>
	);
}
